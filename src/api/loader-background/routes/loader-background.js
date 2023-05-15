'use strict';

/**
 * loader-background router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::loader-background.loader-background');
