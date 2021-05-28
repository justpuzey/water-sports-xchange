const { Users } = require('../models');

const userData = [
  {
    first_name: 'Sally',
    last_name: 'User',
    email: 'fakeemail@fake.com',
    password: 'user1',

  },
  {
    first_name: 'Bill',
    last_name: 'User',
    email: 'testemail@test.com',
    password: 'user1',
  }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;