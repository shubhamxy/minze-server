import CONFIG from '.';

export const apolloConfig = {
  port: CONFIG.ENV_VARS.PORT || 3000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  debug: CONFIG.DEBUG
};
