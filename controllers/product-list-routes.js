const sequelize = require('../config/connection');
const { Item } = require('../models')

const router = require('express').Router();

router.get('/', (req, res) => {
  Item.findAll({

  }).then(itemInfo => {
    // ItemCategory.findAll({

    // }).then(categoryData => {
    // //this renders what the item model will currently have
    // const availCategories = categoryData.map(item => item.get({ plain: true }))
    // console.log(availCategories)
    // const availItems = itemInfo.map(item => item.get({ plain: true }))
    // console.log(availItems)
    // res.render('product', { availItems, availcategories })

    // })
    //this renders what the item model will currently have
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
    // ItemCategory.findAll({

    // }).then(categoryData => {
    // //this renders what the item model will currently have
    // const availCategories = categoryData.map(item => item.get({ plain: true }))
    // console.log(availCategories)
    // const availItems = itemInfo.map(item => item.get({ plain: true }))
    // console.log(availItems)
    // res.render('product', { availItems, availcategories })

    // })
    //this renders what the item model will currently have
    const availItems = itemInfo.map(item => item.get({ plain: true }))
    // console.log(availItems)
    res.render('product-list', { availItems })
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

module.exports = router;