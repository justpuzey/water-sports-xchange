const { Post } = require('../models');

const router = require('express').Router();
// const sequelize = require('../../config/connection');
// const { Post } = require('../../models');

router.get('/', (req, res) => {
  Post.findAll({

  }).then(dbPostData => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    console.log(posts)
    res.render('homepage', { posts });
  })

});

module.exports = router;