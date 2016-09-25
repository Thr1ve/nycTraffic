// metadata for api: http://a841-dotweb01.nyc.gov/datafeeds/TrafficSpeed/metadata_trafficspeeds.pdf

const http = require('http');

const ENDPOINT = 'http://207.251.86.229/nyc-links-cams/LinkSpeedQuery.txt';

const processLine = line => line
  // split by tab
  .split('\t')
  // remove the extraneous quotes around each item
  .map(v => v.replace(/"/g, ''));

// items need to have the full 13 data points to be valid
const isValidData = line => line.length === 13;

module.exports = function getTrafficData() {
  return getTxt().then(txt => {
    const [columnNames, ...dataAsArray] = txt
      .split('\r\n')
      .map(line => processLine(line))
      .filter(line => isValidData(line))

    return Promise.resolve(
      // use columnNames to turn each item into an object with correct keys
      dataAsArray.map(arr =>
        arr.reduce((prev, cur, i) => {
          prev[columnNames[i]] = cur;
          return prev;
        }, {})
      )
    );
  });
}

// return a Promise that resolves with the text as a string
function getTxt(cb) {
  return new Promise(function(resolve, reject) {
    http.get(ENDPOINT, (res) => {
      var bodyChunks = [];
      res.on('data', function(chunk) {
        bodyChunks.push(chunk);
      }).on('end', function() {
        var body = Buffer.concat(bodyChunks);
        resolve(body.toString());
      })
      res.resume();
    }).on('error', (e) => {
      console.log(`Error: ${e.message}`);
      reject(e.message)
    });
  });
}
