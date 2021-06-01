const sequelize = require('../config/connection');
const { Item } = require('../models')

const router = require('express').Router();

router.get('/', (req, res) => {
  Item.findAll({

  }).then(itemInfo => {

    const availItems = itemInfo.map(item => item.get({ plain: true }))
    //console.log(availItems)
    res.render('product-list', { availItems })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})


//filter added items for yacht  
router.get('/yachts', (req, res) => {

  Item.findAll({
    where: 
    {
     category: 'yacht'
    }
  }).then(itemInfo => {

    const availItems = itemInfo.map(item => item.get({ plain: true }))
    console.log(availItems)
    res.render('product-list', { availItems })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

//filter homepage for ski boats 
router.get('/skiboats', (req, res) => {

  Item.findAll({
    where: 
    {
     category: 'ski boat'
    }
  }).then(itemInfo => {

    const availItems = itemInfo.map(item => item.get({ plain: true }))
    console.log(availItems)
    res.render('product-list', { availItems })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

//filter homepage for fishing boats 
router.get('/fishingboats', (req, res) => {

  Item.findAll({
    where: 
    {
     category: 'fishing boat'
    }
  }).then(itemInfo => {

    const availItems = itemInfo.map(item => item.get({ plain: true }))
    console.log(availItems)
    res.render('product-list', { availItems })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

//filter homepage for personal watercraft
router.get('/watercraft', (req, res) => {

  Item.findAll({
    where: 
    {
     category: 'personal watercraft'
    }
  }).then(itemInfo => {

    const availItems = itemInfo.map(item => item.get({ plain: true }))
    console.log(availItems)
    res.render('product-list', { availItems })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

module.exports = router;