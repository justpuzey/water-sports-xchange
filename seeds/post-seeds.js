const { Post } = require('../models');

const postdata = [
  {
    title: 'Fake Title #1',
    post_content: 'This is the content for Fake Post #1',
  },
  {
    title: 'Fake Title #2',
    post_content: 'This is the content for Fake Post #2',
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;