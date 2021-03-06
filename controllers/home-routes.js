const sequelize = require('../config/connection');
const { Users, Item, ItemCategory } = require('../models')

const router = require('express').Router();
router.get('/profile', async (req, res) => {
  // console.log(req.session);
  // If user is logged out redirect to home page
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  //Get All Users Items
  const response = await Item.findAll({
    where: {
      users_id: req.session.users_id

    },
    include: [
      {
        model: ItemCategory
      }
    ]
  })

  try {
    // console.log(req.session);
    //Get All Users Items
    const response = await Item.findAll({
      where: {
        users_id: req.session.users_id
      },
      include: [
        {
          model: ItemCategory
        }
      ]
    })
    const userItems = response.map(item => item.get({ plain: true }))
    // console.log(userItems)
    res.render('profile', {
      User: req.session,
      userItems
    })

  } catch (error) {
    res.status(500).json(error);
  }


})

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
router.get('/', (req, res) => {
  //set up express session for user 
  // console.log('Hello');
  // console.log(req.session)
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
    const rentItems = userInfo.map(item => item.get({ plain: true }))
    // console.log(rentItems);
    res.render('homepage', { rentItems })

  })
    .catch(error => {
      res.status(500).json(error);
    })
})


// Was the login page moved to the modal?

//LOGIN page renders here
router.get('/login', (req, res) => {
  //for express sessions again, user sees home page with this command 
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login')
})





module.exports = router;
