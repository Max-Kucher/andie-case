/**
 * officer controller
 */

import { factories } from '@strapi/strapi'
import { createEntityController } from '../../../utils/entity-utils'

const entityController = createEntityController('api::officer.officer')
export default factories.createCoreController('api::officer.officer',() => ({
  nextPrev: entityController.nextPrev,

  incrementViews: entityController.incrementViews,
}));
