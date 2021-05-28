const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const prodListRoutes = require('./product-list-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/product-list', prodListRoutes);

router.use((req, res) => {
  res.status(404).end();
})

module.exports = router;
