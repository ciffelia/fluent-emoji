import sharp from 'sharp';

export const convertToWebp = async (
  inputImagePath: string,
  outputImagePath: string,
): Promise<void> => {
  await sharp(inputImagePath).webp({ lossless: true }).toFile(outputImagePath);
};
