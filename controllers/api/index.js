//making this to gather all of the routes creating in the api folder

const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes)

module.exports = router;