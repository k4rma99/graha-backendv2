module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-sec': ['self', "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'connect-src': ['self', 'https:', 'http:'],
          'img-src': "*",
          'media-src': "*",
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];

module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
