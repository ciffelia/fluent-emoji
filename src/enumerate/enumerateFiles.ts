import fs from 'node:fs/promises';
import path from 'node:path';
import pMap from 'p-map';
import type { EmojiFile } from '../types.js';
import { concurrency } from '../utils/concurrency.js';
import { enumerateFilesInEmojiDir } from './enumerateFilesInEmojiDir.js';

export const enumerateFiles = async (
  assetsDirPath: string,
): Promise<EmojiFile[]> => {
  const emojiDirNames = await fs.readdir(assetsDirPath);

  return (
    await pMap(
      emojiDirNames,
      (name) => enumerateFilesInEmojiDir(path.join(assetsDirPath, name)),
      { concurrency },
    )
  ).flat();
};
