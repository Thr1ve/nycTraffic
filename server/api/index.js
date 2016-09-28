const { Router } = require('express');
const getCurrent = require('./queries/getCurrent');
const asCoordinates = require('./queries/asCoordinates');

const router = Router();

router.get('/getCurrent', getCurrent);
router.get('/asCoordinates', asCoordinates);

module.exports = router;
