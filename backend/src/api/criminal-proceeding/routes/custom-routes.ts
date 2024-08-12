const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::store.store');

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = extraRoutes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: 'GET',
    path: '/criminal-proceedings/:id/next-prev',
    handler: 'api::criminal-proceeding.criminal-proceeding.nextPrev',
    config: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/criminal-proceedings/:id/increment-views',
    handler: 'api::criminal-proceeding.criminal-proceeding.incrementViews',
    config: {
      auth: false,
    },
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
