/**
 * case-progress-item controller
 */

import { factories } from '@strapi/strapi'
import { createEntityController } from '../../../utils/entity-utils'

const entityController = createEntityController('api::case-progress-item.case-progress-item')

export default factories.createCoreController('api::case-progress-item.case-progress-item', () => ({
  nextPrev: entityController.nextPrev,

  incrementViews: entityController.incrementViews,
}))
