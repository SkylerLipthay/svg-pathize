# svg-pathize

A Node.js module for converting SVG documents into SVG path data. This collapses all shapes and paths down into a single path.

Depends heavily on [Luxbyte's `svg-path-converter`](https://www.npmjs.com/package/svg-path-converter) and [JSDOM](https://www.npmjs.com/package/jsdom). JSDOM is used because `svg-path-converter` expects `SVGElement`s and not raw SVG data, and I'm too lazy to adapt `svg-path-converter`. As such, `svg-pathize` performs poorly and should definitely not be included in browser packages.

## License

This project is licensed under the [MIT License](LICENSE).
