const { ItemCategory } = require('../models');

const Itemdata = [
  {
    name: 'Boat',

  },
  {
    name: 'Jetski',
  }
];

const seedItem = () => ItemCategory.bulkCreate(Itemdata);

module.exports = seedItem;