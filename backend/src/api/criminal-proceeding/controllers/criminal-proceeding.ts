/**
 * criminal-proceeding controller
 */

import { factories } from '@strapi/strapi'
import { createEntityController } from '../../../utils/entity-utils'

const entityController = createEntityController('api::criminal-proceeding.criminal-proceeding')

export default factories.createCoreController('api::criminal-proceeding.criminal-proceeding',() => ({
  nextPrev: entityController.nextPrev,

  incrementViews: entityController.incrementViews,
}))
