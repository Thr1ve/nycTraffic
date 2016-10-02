const defaults = { h: 0, w: 0, m: 1, hSkew: 0, vSkew: 0 };

const translateX = (str, { h, w, m, hSkew, vSkew } = defaults) =>
  Math.abs(str - -73.69 + w) * m - hSkew;

const translateY = (str, { h, w, m, hSkew, vSkew } = defults) =>
  Math.abs(str - 40.49 - h ) * m - vSkew;

export const toSVGCoords = ([lat, long], options) =>
  ({ x: translateX(long, options), y: translateY(lat, options) });