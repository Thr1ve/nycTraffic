const { Router } = require('express');
const current = require('./queries/current');

const router = Router();

router.get('/current', current);

module.exports = router;
