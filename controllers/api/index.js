
//RESTful API will be tested through this connection for project requirement

const router = require('express').Router();
const userRoutes = require('./user-routes');
const itemRoutes = require('./item-routes');

router.use('/users', userRoutes)
router.use('/items', itemRoutes)
module.exports = router;