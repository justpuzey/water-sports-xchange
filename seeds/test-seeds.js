const { Test } = require('../models');

const testdata = [
  {
    title: 'Fake Title #1',
    content: 'This is the content #1',
  },
  {
    title: 'Fake Title #2',
    content: 'This is the content #2',
  }
];

const seedTests = () => Test.bulkCreate(testdata);

module.exports = seedTests;