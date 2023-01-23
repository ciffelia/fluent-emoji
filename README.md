# fluent-emoji

[![CI](https://github.com/ciffelia/fluent-emoji/actions/workflows/ci.yml/badge.svg)](https://github.com/ciffelia/fluent-emoji/actions/workflows/ci.yml)

[Fluent Emoji](https://github.com/microsoft/fluentui-emoji) as a Service

Note: Fluent Emoji is licensed under [MIT Licence](https://github.com/microsoft/fluentui-emoji/blob/bbd3a271eaabccd429c696bd937c4a52b8b5136b/LICENSE) by Microsoft.
This repository contains scripts to distribute the resources in an easy-to-use format.
This project is not affiliated with Microsoft.

## Usage

### Calculate codepoints

```js
console.log([...'🫠'].map((cp) => cp.codePointAt(0).toString(16)).join('-')); // => 1fae0
```

### 3D (WebP)

```
https://fluent-emoji.ciffelia.com/1fae0_3d.webp
```

[![melting face emoji (3D, WebP)](https://fluent-emoji.ciffelia.com/1fae0_3d.webp)](https://fluent-emoji.ciffelia.com/1fae0_3d.webp)

### 3D (SVG)

```
https://fluent-emoji.ciffelia.com/1fae0_color.svg
```

[![melting face emoji (3D, SVG)](https://fluent-emoji.ciffelia.com/1fae0_color.svg)](https://fluent-emoji.ciffelia.com/1fae0_color.svg)

### Flat (SVG)

```
https://fluent-emoji.ciffelia.com/1fae0_flat.svg
```

[![melting face emoji (flat, SVG)](https://fluent-emoji.ciffelia.com/1fae0_flat.svg)](https://fluent-emoji.ciffelia.com/1fae0_flat.svg)

### High Contrast (SVG)

```
https://fluent-emoji.ciffelia.com/1fae0_high-contrast.svg
```

[![melting face emoji (high contrast, SVG)](https://fluent-emoji.ciffelia.com/1fae0_high-contrast.svg)](https://fluent-emoji.ciffelia.com/1fae0_high-contrast.svg)

## ZWJ Sequences

```js
console.log([...'🙋🏻‍♀️'].map((cp) => cp.codePointAt(0).toString(16)).join('-')); // => 1f64b-1f3fb-200d-2640-fe0f
```

```
https://fluent-emoji.ciffelia.com/1f64b-1f3fb-200d-2640-fe0f_3d.webp
```

[![woman raising hand: light skin tone emoji (3D, WebP)](https://fluent-emoji.ciffelia.com/1f64b-1f3fb-200d-2640-fe0f_3d.webp)](https://fluent-emoji.ciffelia.com/1f64b-1f3fb-200d-2640-fe0f_3d.webp)
