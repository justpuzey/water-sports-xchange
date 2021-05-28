const seedTests = require('./test-seeds');
const seedUsers = require('./user-seeds');
const seedItems = require('./item-seeds');
const seedItemCategory = require('./item-category');

const sequelize = require('../config/connection');

const seedAll = async () => {

  try {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedTests();
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
    //order is important load categories first(dependency)
    await seedItemCategory();
    console.log('--------------');
    await seedItems();
    console.log('--------------');

    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

seedAll();