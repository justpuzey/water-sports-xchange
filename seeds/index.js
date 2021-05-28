const seedTests = require('./test-seeds');
const seedUsers = require('./user-seeds');
const seedItems = require('./item-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedTests();
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedItems();
  console.log('--------------');

  process.exit(0);
};

seedAll();