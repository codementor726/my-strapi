// ./src/api/restaurant/routes/restaurant.js

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/restaurants',
        handler: 'restaurant.find',
        config: {
          policies: [],
        },
      },
      {
        method: 'GET',
        path: '/restaurants/:slug',
        handler: 'restaurant.findOne',
        config: {
          policies: [],
        },
      },
    ],
  };
  