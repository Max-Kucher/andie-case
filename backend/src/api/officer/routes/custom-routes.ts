import type { CoreApi } from '@strapi/types'
import { factories } from '@strapi/strapi'

const defaultRouter = factories.createCoreRouter('api::officer.officer')

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
    path: '/law-enforcement-officers/:id/next-prev',
    handler: 'api::officer.officer.nextPrev',
    config: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/law-enforcement-officers/:id/increment-views',
    handler: 'api::officer.officer.incrementViews',
    config: {
      auth: false,
    },
  },
];

export default customRouter(defaultRouter, myExtraRoutes)
