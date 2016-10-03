const { Router } = require('express');
const getStreets = require('./queries/getStreets');

const router = Router();

router.get('/getStreets', getStreets);

module.exports = router;
