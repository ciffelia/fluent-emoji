import fs from 'node:fs/promises';
import path from 'node:path';
import pMap from 'p-map';
import type { EmojiFile } from '../types.js';
import { concurrency } from '../utils/concurrency.js';

export const enumerateFilesInGlyphDir = async (
  glyphDirPath: string,
  glyph: string,
): Promise<EmojiFile[]> => {
  const types = (await fs.readdir(glyphDirPath, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  return await pMap(
    types,
    async (type) => {
      const typeDirPath = path.join(glyphDirPath, type);
      const files = await fs.readdir(typeDirPath);
      if (files[0] === undefined) {
        throw new Error(`No file found in ${typeDirPath}`);
      }
      if (files.length > 1) {
        console.warn(`Warn: Multiple files found in "${typeDirPath}".`);
      }

      return {
        glyph,
        type: type.toLowerCase().replaceAll(' ', '-'),
        path: path.join(typeDirPath, files[0]),
      };
    },
    { concurrency },
  );
};
