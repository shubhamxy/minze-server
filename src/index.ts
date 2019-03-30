import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import routes from './services';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import { prisma } from './generated/prisma-client';
import { schema, permissions } from './services/graphql';
import { applyMiddleware, applyRoutes } from './utils';

dotenv.config();
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
const options = {
  port: PORT,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
  // applyMiddleware: [middleware, routes , errorHandlers]
};

const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

applyMiddleware(middleware, server.express);
applyRoutes(routes, server.express);

server.start(options, () => {
  console.log(` 🚀 Server is running http://localhost:${PORT}.`);
});
applyMiddleware(errorHandlers, server.express);
// server.express.use(middleware);
