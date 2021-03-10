const { JSDOM } = require('jsdom');
const svgToPath = require('svg-path-converter');

function pathize(svg, options) {
  const window = (new JSDOM('')).window;
  window.document.body.innerHTML = svg;
  const element = window.document.body.querySelector('svg');
  if (!element) {
    throw new Error('Invalid SVG input');
  }

  window.document.body.innerHTML = svgToPath(element, options);
  const path = window.document.body.querySelector('path');
  if (!path) {
    throw new Error('SVG path failed to be generated');
  }

  const data = path.getAttribute('d');
  if (!data) {
    throw new Error('SVG path data unexpectedly empty');
  }

  return data;
}

module.exports = pathize;
