const router = require('express').Router()
const finalRoutes = require('./api/index');

router.use('/', finalRoutes);

module.exports = router;
