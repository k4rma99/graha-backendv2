'use strict';

/**
 * loader-background service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loader-background.loader-background');
