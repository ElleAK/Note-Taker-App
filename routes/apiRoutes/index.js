const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');
// const htmlRoutes = require('../htmlRoutes/index');

// router.use(require('./apiRoutes'));
router.use(noteRoutes);

module.exports = router;