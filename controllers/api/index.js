
//RESTful API will be tested through this connection for project requirement

const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes)

module.exports = router;