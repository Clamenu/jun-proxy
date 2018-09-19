const router = require('express').Router();
const controller = require('./controller.js');

router.get('/:nameOrId/restaurants', controller.restaurants.get);

module.exports = router;