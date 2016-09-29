const moment = require('moment');
const connect = require('./connect');
const getTrafficData = require('./getTrafficData');
const writeToLog = require('./writeToLog');
const insertItem = require('./insertItem');

const log = str => {
  console.log(str);
  writeToLog(str);
};

module.exports = function updateDb() {
  getTrafficData().then(data => {
    connect()
      .then(conn => Promise.all(data.map(item => insertItem(item, conn)))
        .then(items =>{
          log(`${moment(Date.now())}  --  ${items.filter(item => !item[0].errors).length} streets added`)
          log(`${moment(Date.now())}  --  ${items.filter(item => !item[1].errors).length} updates added`)
          conn.close();
        })
      )
      .catch(err => console.log(err));
  });
}
