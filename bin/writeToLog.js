const fs = require('fs');

module.exports = function writeToLog(str) {
  return new Promise(function(resolve, reject) {
    fs.appendFile('./log.txt', str + '\n', (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    })
  });
}
