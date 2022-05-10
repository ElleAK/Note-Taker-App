const router = require('express').Router();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// router.use(require('./zookeeperRoutes'));
router.use(apiRoutes);

module.exports = router;