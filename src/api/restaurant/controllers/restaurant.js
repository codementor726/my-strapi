'use strict';

/**
 * restaurant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant');

module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    // Find the entity by slug
    const entity = await strapi.db.query('api::restaurant.restaurant').findOne({
      where: { slug },
    });

    if (!entity) {
      return ctx.notFound();
    }

    return this.transformResponse(entity);
  },
  
  async find(ctx) {
    return super.find(ctx);
  },
}));
