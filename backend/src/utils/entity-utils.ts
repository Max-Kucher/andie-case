import { Context } from 'koa';
import type { Common } from '@strapi/types/dist/types'

export const createEntityController = (uid: Common.UID.ContentType): Common.Controller => ({
  async nextPrev(ctx: Context) {
    const { id } = ctx.params;

    const currentItem = await strapi.entityService.count(uid, {
      filters: {
        id: {
          $eq: id,
        },
      },
    });

    if (!currentItem) {
      return ctx.notFound(`${uid} not found`);
    }

    const previousItem = await strapi.entityService.findMany(uid, {
      filters: {
        id: { $lt: id },
        publishedAt: { $notNull: true },
      },
      sort: [{ id: 'desc' }],
      limit: 1,
    });

    const nextItem = await strapi.entityService.findMany(uid, {
      filters: {
        id: { $gt: id },
        publishedAt: { $notNull: true },
      },
      sort: [{ id: 'asc' }],
      limit: 1,
    });


    ctx.send({
      // @ts-ignore
      prev: previousItem?.length ? previousItem[0].id : null,
      // @ts-ignore
      next: nextItem?.length ? nextItem[0].id : null,
    });
  },

  /**
   * Increment on application level (maybe good idea is to move logic on DB side)
   * @param {Context} ctx
   */
  async incrementViews(ctx: Context) {
    const { id } = ctx.params;

    const currentItem = await strapi.entityService.findOne(uid, id);

    if (!currentItem) {
      return ctx.notFound(`${uid} not found`);
    }

    const updatedItem = await strapi.entityService.update(uid, id, {
      data: {
        // @ts-ignore: viewsCount will be available
        viewsCount: (currentItem?.viewsCount || 0) + 1,
      },
    });

    return {
      result: true,
    };
  }
});
