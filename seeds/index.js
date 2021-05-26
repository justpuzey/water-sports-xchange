const seedTests = require('./test-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedTests();
  console.log('--------------');


  process.exit(0);
};

seedAll();