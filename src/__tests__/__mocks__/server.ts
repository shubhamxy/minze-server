import '../../config';
import { GraphQLServer } from 'graphql-yoga';
import routes from '../../services';
import middleware from '../../middleware';
import errorHandlers from '../../middleware/errorHandlers';
import { prisma } from '../../graphql/generated/prisma-client';
import { schema, permissions } from '../../graphql';
import { applyMiddleware, applyRoutes } from '../../utils';

const { PORT = 3000 } = process.env;

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

export const httpPromise = Promise.resolve(
  server.start(options, () => {
    console.log(` 🚀 Server is running http://localhost:${PORT}.`);
  })
);

applyMiddleware(errorHandlers, server.express);
export default server;
