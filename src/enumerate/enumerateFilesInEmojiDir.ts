import path from 'node:path';
import fs from 'node:fs/promises';
import pMap from 'p-map';
import { EmojiFile, Metadata } from '../types.js';
import { codePointsToGlyph } from '../utils/unicode.js';
import { concurrency } from '../utils/concurrency.js';
import { enumerateFilesInGlyphDir } from './enumerateFilesInGlyphDir.js';

export const enumerateFilesInEmojiDir = async (
  emojiDirPath: string,
): Promise<EmojiFile[]> => {
  const metadata = await loadMetadata(emojiDirPath);

  if (metadata.unicodeSkintones === undefined) {
    return enumerateFilesInGlyphDir(
      emojiDirPath,
      codePointsToGlyph(metadata.unicode.replaceAll(' ', '-')),
    );
  } else {
    return (
      await pMap(
        metadata.unicodeSkintones,
        async (codePoints, i) => {
          const skintoneName = skintoneNames[i];
          if (skintoneName === undefined) {
            throw new Error(
              `Unknown skintone found: ${metadata.unicodeSkintones}`,
            );
          }
          return await enumerateFilesInGlyphDir(
            path.join(emojiDirPath, skintoneName),
            codePointsToGlyph(codePoints.replaceAll(' ', '-')),
          );
        },
        { concurrency },
      )
    ).flat();
  }
};

const skintoneNames = [
  'Default',
  'Light',
  'Medium-Light',
  'Medium',
  'Medium-Dark',
  'Dark',
] as const;

const loadMetadata = async (emojiDirPath: string): Promise<Metadata> => {
  const metadataPath = path.join(emojiDirPath, './metadata.json');
  const metadata: unknown = JSON.parse(
    await fs.readFile(metadataPath, 'utf-8'),
  );

  return Metadata.parse(metadata);
};
