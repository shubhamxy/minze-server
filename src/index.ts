import CONFIG from './config'; /* Should be at top */
import routes from './services';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import { logger, applyMiddleware, applyRoutes } from './utils';
import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
const { PORT = 3000 } = CONFIG.ENV_VARS;

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});


const db = new Prisma({
  endpoint: "http://localhost:4466",
  secret: "mysecret123",
  debug: true,
})

export const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers as any,
  context: req => ({ ...req, db }),
})

// graphql setup
export const options = {
  port: PORT,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  debug: false
};

applyMiddleware(middleware, server.express);
applyRoutes(routes, server.express);

server.start(options, () => {
  logger.info(`🚀  Server is running  ${JSON.stringify(server.options, null, 4)}`);
});

applyMiddleware(errorHandlers, server.express);
export default server;
