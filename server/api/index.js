const { Router } = require('express');
const getCurrent = require('./queries/getCurrent');
const getStreets = require('./queries/getStreets');
const asCoordinates = require('./queries/asCoordinates');

const router = Router();

router.get('/getCurrent', getCurrent);
router.get('/getStreets', getStreets);
router.get('/asCoordinates', asCoordinates);

module.exports = router;
