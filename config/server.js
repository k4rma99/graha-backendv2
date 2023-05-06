module.exports = ({ env }) => ({
  host: env('54.87.119.155'),
  port: env.int('1337'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
