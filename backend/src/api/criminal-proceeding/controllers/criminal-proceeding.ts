/**
 * criminal-proceeding controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::criminal-proceeding.criminal-proceeding',({ strapi }) => ({
  async nextPrev(ctx) {
    const { id } = ctx.params;

    const currentCase = await strapi.entityService.count('api::criminal-proceeding.criminal-proceeding', {
      filters: {
        id: {
          $eq: id,
        },
      },
    });

    if (!currentCase) {
      return ctx.notFound('Criminal proceeding not found');
    }

    // Логика поиска предыдущего и следующего дела
    const previousCase = await strapi.entityService.findMany('api::criminal-proceeding.criminal-proceeding', {
      filters: {
        id: { $lt: id },
        publishedAt: { $notNull: true },
      },
      sort: [{ id: 'desc' }],
      limit: 1,
    });

    const nextCase = await strapi.entityService.findMany('api::criminal-proceeding.criminal-proceeding', {
      filters: {
        id: { $gt: id },
        publishedAt: { $notNull: true },
      },
      sort: [{ id: 'asc' }],
      limit: 1,
    });

    ctx.send({
      prev: previousCase.length ? previousCase[0].id : null,
      next: nextCase.length ? nextCase[0].id : null,
    });
  },

  /**
   * Increment on application level (maybe good idea is to move logic on DB side)
   * @param ctx
   */
  async incrementViews(ctx) {
    const { id } = ctx.params;

    // Проверка существования сущности
    const currentCase = await strapi.entityService.findOne('api::criminal-proceeding.criminal-proceeding', id);

    if (!currentCase) {
      return ctx.notFound('Criminal proceeding not found');
    }

    // Увеличиваем значение поля viewsCount на 1
    const updatedCase = await strapi.entityService.update('api::criminal-proceeding.criminal-proceeding', id, {
      data: {
        viewsCount: (currentCase.viewsCount || 0) + 1,
      },
    });

    return {
      result: true,
    };
  }
}));
