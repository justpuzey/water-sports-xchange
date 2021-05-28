const sequelize = require('../config/connection');
const { Item } = require('../models')

const router = require('express').Router();


router.get('/', (req, res) => {
  Item.findAll({

  }).then(itemInfo => {
    console.log('returned all items')
    const itemDetails = itemInfo.map(item => item.get({ plain: true }))
    res.render('product-detail', { itemDetails })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

router.get('/:id', (req, res) => {
  Item.findOne(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(itemData => {
    if (!itemData) {
      res.status(404).json({ message: 'No item found with this id' });
      return;
    }
    console.log('found item')
    // const itemDetails = itemData.map(item => item.get({ plain: true }))
    res.json(itemData)
    // console.log(itemDetails)
    // res.render('product-detail', { itemDetails })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

module.exports = router;