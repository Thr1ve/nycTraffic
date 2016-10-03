//                  Y           X
// Top:         40.92
// Bottom:      40.49
// Left:                   -74.26
// Right:                  -73.69

// Height:      0.43
// Length:                  0.57

const settings = {
  h: 0.43,
  w: 0.57,
  m: 350,
  hOffset: 50,
  vOffset: 20,
};

const defaults = { h: 0, w: 0, m: 1, hOffset: 0, vOffset: 0 };

const translateX = (str, { h, w, m, hOffset, vOffset } = defaults) =>
  Math.abs(str - -73.69 + w) * m - hOffset;

const translateY = (str, { h, w, m, hOffset, vOffset } = defaults) =>
  Math.abs(str - 40.49 - h ) * m - vOffset;

export const toSVGCoords = ([lat, long], options) =>
  ({ x: translateX(long, options), y: translateY(lat, options) });

export const toSVGPath = coords => coords
  .map(c => toSVGCoords(c, settings))
  .map(c => `${c.x},${c.y}`)
  .join(' ');
