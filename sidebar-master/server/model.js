const { Restaurant, Reservation } = require('../database');

const model = {
  restaurants: {
    get: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        return Restaurant.findAll({ where: { name }})
      } else {
        const id = nameOrId;
        return Restaurant.findAll({ where: { id }})
      }
    }
  }
};

module.exports = model;