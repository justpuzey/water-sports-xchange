const { Test } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  // res.send('Welcome')

  // Access our model
  Test.findAll()
    .then(testData => {
      const tests = testData.map(test => test.get({ plain: true }));

      res.render('homepage', { tests });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

module.exports = router;