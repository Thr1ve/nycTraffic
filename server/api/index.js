const { Router } = require('express');
const getCurrent = require('./queries/getCurrent');

const router = Router();

router.get('/getCurrent', getCurrent);

module.exports = router;
