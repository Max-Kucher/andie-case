import type { CoreApi } from '@strapi/types'
import { factories } from '@strapi/strapi'

import coreRouter from './news-item'

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
    path: '/mass-media/:id/next-prev',
    handler: 'api::news-item.news-item.nextPrev',
    config: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/mass-media/:id/increment-views',
    handler: 'api::news-item.news-item.incrementViews',
    config: {
      auth: false,
    },
  },
];

export default customRouter(coreRouter, myExtraRoutes)
