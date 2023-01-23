import fs from 'node:fs/promises';
import { optimize } from 'svgo';

export const optimizeSvg = async (
  inputSvgPath: string,
  outputSvgPath: string,
): Promise<void> => {
  const svg = await fs.readFile(inputSvgPath, 'utf-8');
  const result = optimize(svg);
  await fs.writeFile(outputSvgPath, result.data);
};
