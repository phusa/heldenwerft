'use strict';

/**
 * reference controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::reference.reference');
