const { Item } = require('../models');

const Itemdata = [
  {
    name: 'Cruisers Yachts 38 GLS',
    pointval: 300,
    users_id: 1,
    description: 'The 38 GLS’s innovative design features everything you love about the Cantius series but with triple Mercury Verados. Expand your swimming area by lowering the beach door to convert it into a swim platform. The lower cabin features an aft stateroom and U-shaped dinette that converts into a berth. A full galley and standing head with shower complete this extraordinary yacht',
    img_url: 'https://images.boats.com/resize/wp/2/files/2021/03/Bowrider.jpg',
    category_id: 1,
  },
  {
    name: 'Cruisers Yachts 39 GLS',
    pointval: 500,
    users_id: 2,
    description: 'The 38 GLS’s innovative design features everything you love about the Cantius series but with triple Mercury Verados. Expand your swimming area by lowering the beach door to convert it into a swim platform. The lower cabin features an aft stateroom and U-shaped dinette that converts into a berth. A full galley and standing head with shower complete this extraordinary yacht',
    img_url: 'https://images.boats.com/resize/1/29/49/7212949_20191213083018427_1_XLARGE.jpg?t=1603209411000&w=1200&h=1200',
    category_id: 1,
  },
  {
    name: 'Jetski1',
    pointval: 300,
    users_id: 1,
    description: 'The 38 GLS’s innovative design features everything you love about the Cantius series but with triple Mercury Verados. Expand your swimming area by lowering the beach door to convert it into a swim platform. The lower cabin features an aft stateroom and U-shaped dinette that converts into a berth. A full galley and standing head with shower complete this extraordinary yacht',
    img_url: 'https://psmfirestorm.blob.core.windows.net/crs-images/302861/21069/original.jpg',
    category_id: 2,
  },
  {
    name: 'Jetski2',
    pointval: 500,
    users_id: 2,
    description: 'The 38 GLS’s innovative design features everything you love about the Cantius series but with triple Mercury Verados. Expand your swimming area by lowering the beach door to convert it into a swim platform. The lower cabin features an aft stateroom and U-shaped dinette that converts into a berth. A full galley and standing head with shower complete this extraordinary yacht',
    img_url: 'https://cdn.cnn.com/cnnnext/dam/assets/200601132653-jet-ski-graduation-2-super-tease.jpg',
    category_id: 2,
  }
];

const seedItem = () => Item.bulkCreate(Itemdata);

module.exports = seedItem;