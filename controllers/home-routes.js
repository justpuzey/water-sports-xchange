const { Post } = require('../models');

const router = require('express').Router();
// const sequelize = require('../../config/connection');
// const { Post } = require('../../models');

router.get('/', (req, res) => {
  res.send('Welcome')
});

module.exports = router;