import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import {db} from '../database';

import {applyMiddleware as applyGraphqlMiddleware} from 'graphql-middleware';
import {expressMiddlewares, apolloMiddlewares} from '../middleware';
import errorHandlers from '../middleware/errorHandlers';
import routes from '../services';
import path from 'path'

import {applyMiddleware, applyRoutes} from '../utils';
import {apolloConfig} from '../config/apolloConfig';

import schema from '../schema';

const schemaWithMiddleware = applyGraphqlMiddleware(schema, ...apolloMiddlewares);

const server = express();

const apolloServer = new ApolloServer({
  schema: schemaWithMiddleware,
  context: ({req}) => ({
    request: req,
    db
  }),
  playground: true,
  debug: apolloConfig.debug
});

apolloServer.applyMiddleware({app: server, path: apolloConfig.endpoint});

applyMiddleware(expressMiddlewares, server);
applyRoutes(routes, server);

// Handles any requests that don't match the ones above
server.use(express.static(path.join(__dirname.replace('/server', "/"), 'public')));

applyMiddleware(errorHandlers, server);

export default server;
