export const codePointsToGlyph = (codePoints: string): string =>
  String.fromCodePoint(...codePoints.split('-').map((c) => parseInt(c, 16)));

export const glyphToCodePoints = (glyph: string): string =>
  [...glyph].map((cp) => cp.codePointAt(0)!.toString(16)).join('-');
