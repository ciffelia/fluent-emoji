import { z } from 'zod';

export const Metadata = z.object({
  unicode: z.string(),
  unicodeSkintones: z.string().array().optional(),
});

export type Metadata = z.infer<typeof Metadata>;

export type EmojiFile = {
  glyph: string;
  type: string;
  path: string;
};
