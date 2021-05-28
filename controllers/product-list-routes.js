const sequelize = require('../config/connection');
const { Item } = require('../models')

const router = require('express').Router();

router.get('/', (req, res) => {
  Item.findAll({

  }).then(itemInfo => {

    const availItems = itemInfo.map(item => item.get({ plain: true }))
    // console.log(availItems)
    res.render('product-list', { availItems })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

router.get('/:id', (req, res) => {
  Item.findAll({
    where: {
      category_id: req.params.id
    }

  }).then(itemInfo => {

    const availItems = itemInfo.map(item => item.get({ plain: true }))
    // console.log(availItems)
    res.render('product-list', { availItems })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

module.exports = router;