/**
 * news-item controller
 */

import { factories } from '@strapi/strapi'
import { createEntityController } from '../../../utils/entity-utils'

const entityController = createEntityController('api::news-item.news-item')

export default factories.createCoreController('api::news-item.news-item',() => ({
  nextPrev: entityController.nextPrev,

  incrementViews: entityController.incrementViews,
}));
