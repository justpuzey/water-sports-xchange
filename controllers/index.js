const homeRoutes = require('./home-routes.js');
const router = require('express').Router();

router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;