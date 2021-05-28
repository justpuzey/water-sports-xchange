const sequelize = require('../config/connection');
const { Item } = require('../models')

const router = require('express').Router();

router.get('/product-list', (req, res) => {
  Item.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'img_url',
      'pointval'
    ],
    // include:
    //   [{
    //     model: Users,
    //     attributes: ['email']
    //   }]
  }).then(itemInfo => {
    //this renders what the item model will currently have
    const availItems = itemInfo.map(item => item.get({ plain: true }))
    res.render('product-list', { availItems })
    res.render('product-list')
  })
    .catch(error => {
      res.status(500).json(error);
    })
})

module.exports = router;