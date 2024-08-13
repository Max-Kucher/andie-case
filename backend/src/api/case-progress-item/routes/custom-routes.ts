import type { CoreApi } from '@strapi/types'
import { factories } from '@strapi/strapi'

const defaultRouter = factories.createCoreRouter('api::case-progress-item.case-progress-item')

const customRouter = (innerRouter: CoreApi.Router.Router, extraRoutes = []) => {
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
    path: '/case-progress/:id/next-prev',
    handler: 'api::case-progress-item.case-progress-item.nextPrev',
    config: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/case-progress/:id/increment-views',
    handler: 'api::case-progress-item.case-progress-item.incrementViews',
    config: {
      auth: false,
    },
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
