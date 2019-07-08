import CONFIG from './config'; /* Should be at top */
import { GraphQLServer } from 'graphql-yoga';
import routes from './services';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import { prisma } from './graphql/generated/prisma-client';
import { schema, permissions } from './graphql';
import { logger, applyMiddleware, applyRoutes } from './utils';

const { PORT = 3000 } = CONFIG.ENV_VARS;

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

// graphql setup
export const options = {
  port: PORT,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
};

export const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  context: request => ({
    prisma,
    ...request
  })
});

applyMiddleware(middleware, server.express);
applyRoutes(routes, server.express);

server.start(options, () => {
  logger.info(`🚀  Server is running http://localhost:${PORT}.`);
  logger.debug(CONFIG);
  logger.error("x")
  logger.warn("x")
});

applyMiddleware(errorHandlers, server.express);
export default server;
