const correctedStreets = require('../../data/correctedStreets');

const MIN_LAT = 40.49;
const MAX_LAT = 40.92;
const MIN_LON = -74.28;
const MAX_LON = -73.69;

const sanitizeItem = item =>
  Object.assign({}, item, {
    linkName: item.linkName.toUpperCase(),
    linkPoints: formatLinkPoints(item),
    DataAsOf: new Date(item.DataAsOf),
    Speed: Number(item.Speed),
    TravelTime: Number(item.TravelTime)
  });

module.exports = sanitizeItem;

//## Problems we've seen:
//  - the last link pair is sometimes one of these invalid cases:
//    - second item is incomplete:
//        - ["40.63086", "-"]
//        - ["40.7607405", "-7"]
//        - ["40.69944", "-73."]
//    - only one item: ["40.6178"]
//  - random pairs sometimes have a '\r' at the end
//    - ["40.76335", "-73.999271\r"]
//  - there were too many spaces and it screwed up our nested arrays
//    - [
//        ["40.76335", "-73.999271"]
//        [""]
//        ["40.76335", "-73.999271"]
//        [""]
//      ]
//  - a space was missing and two items got stuck together
//    - ["-73.99927140.76335"]
//  - a latitude that doesn't fit:
//    - [
//        ["40.70055", "-73.985581"],
//        ["40.70029", "-73.985211"],
//     -> ["40.76", "-73.984951"],
//        ["40.69975", "-73.984681"],
//      ]

function formatLinkPoints(item) {
  const name = item.linkName.toUpperCase();
  if (correctedStreets[name]) {
    return correctedStreets[name];
  }
  return item.linkPoints
    .trim()
    .split(' ')
    .map(pair => pair.split(','))
    .filter(c => {
      const isValid = (
        isValidAndWithin(c[0], MIN_LAT, MAX_LAT) &&
        isValidAndWithin(c[1], MIN_LON, MAX_LON)
      );
      if (!isValid) {
        console.log(` Invalid coordinates: ${item.linkPoints}
          Street: ${name}`);
      }
      return isValid;
    })
};

function isValidAndWithin(str, min = -Infinity, max = Infinity) {
  const n = Number(str);
  return n && (n <= max && n >= min);
};
