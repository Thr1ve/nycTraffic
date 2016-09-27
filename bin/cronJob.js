const cron = require('node-cron');
const updateDb = require('./updateDb');

cron.schedule('0,30 * * * * *', function(){
  updateDb();
});
