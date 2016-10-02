const cron = require('node-cron');
const updateDb = require('../server/lib/updateDb');

cron.schedule('5,35 * * * * *', function(){
  updateDb();
});
