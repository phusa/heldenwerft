'use strict';

/**
 * reference service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reference.reference');
