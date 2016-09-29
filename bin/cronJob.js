const cron = require('node-cron');
const updateDb = require('./updateDb');

cron.schedule('5,35 * * * * *', function(){
  updateDb();
});
