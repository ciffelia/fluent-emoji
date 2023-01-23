import fs from 'node:fs/promises';
import { enumerateFiles } from './enumerate/enumerateFiles.js';
import { processFiles } from './process/processFiles.js';

const assetsDirPath = './fluentui-emoji/assets';
const distDirPath = './dist';

const main = async (): Promise<void> => {
  await fs.rm(distDirPath, { recursive: true, force: true });
  await fs.mkdir(distDirPath);

  console.log('Enumerating emoji files...');
  const files = await enumerateFiles(assetsDirPath);
  console.log(`Found ${files.length} files.`);

  console.log(`Optimizing files...`);
  await processFiles(files, distDirPath);
  console.log(`Done.`);
};

main();
