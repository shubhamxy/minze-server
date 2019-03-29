import dotenv from 'dotenv';
import express from 'express';
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

const router = express();

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

server.start(options, () => {
  console.log(` 🚀 Server is running http://localhost:${PORT}.`);
});

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

server.express.use('/', router);
