const sequelize = require('../config/connection');
const { Users, Item } = require('../models')

const router = require('express').Router();

/*
const { Test } = require('../models');

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
    });  */

    //taking out the test model above to test Sequelize ORM
    router.get('/', (req,res) =>{
      Item.findAll({
        attributes: [
          'id',
          'name',
          'pointval'
        ],
        include: 
        [{
          model: Users,
          attributes: ['email']
        }]
      }).then(userInfo => {
        //this here renders what the item model will currently have
        const rentItems = userInfo.map(item=> item.get({ plain: true }))
        res.render('homepage',  { rentItems })
      })
      .catch(error => {
        res.status(500).json(error);
      })
    })



module.exports = router;
