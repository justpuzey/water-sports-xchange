const { ItemCategory } = require('../models');

const Itemdata = [
  {
    name: 'Yacht',
  },
  {
    name: 'Ski Boat',
  },
  {
    name: 'Fishing Boat',
  },
  {
    name: 'Personal Watercraft',
  }
];

const seedItem = () => ItemCategory.bulkCreate(Itemdata);

module.exports = seedItem;