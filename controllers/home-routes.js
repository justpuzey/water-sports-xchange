const { Test } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  // res.send('Welcome')

  // Access our model
  Test.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

module.exports = router;