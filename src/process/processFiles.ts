import path from 'node:path';
import pMap from 'p-map';
import type { EmojiFile } from '../types.js';
import { concurrency } from '../utils/concurrency.js';
import { glyphToCodePoints } from '../utils/unicode.js';
import { optimizeSvg } from './optimizeSvg.js';
import { convertToWebp } from './convertToWebp.js';

export const processFiles = async (
  files: EmojiFile[],
  distDirPath: string,
): Promise<void> => {
  await pMap(files, (file) => processFile(file, distDirPath), {
    concurrency,
  });
};

export const processFile = async (
  file: EmojiFile,
  distDirPath: string,
): Promise<void> => {
  const isSvg = file.path.endsWith('.svg');

  const outputFileExtension = isSvg ? 'svg' : 'webp';
  const outputFilePath = path.join(
    distDirPath,
    `${glyphToCodePoints(file.glyph)}_${file.type}.${outputFileExtension}`,
  );

  if (isSvg) {
    await optimizeSvg(file.path, outputFilePath);
  } else {
    await convertToWebp(file.path, outputFilePath);
  }
};
