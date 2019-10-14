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
  introspection: true, // NOTE: Disable it!!  
  playground: apolloConfig.playground === '' 
  ? false 
  : {
    title: "Minze Graphql",
  },
  debug: apolloConfig.debug
});

apolloServer.applyMiddleware({app: server, path: apolloConfig.endpoint});

applyMiddleware(expressMiddlewares, server);
applyRoutes(routes, server);

// Handles any requests that don't match the ones above
const baseDir = __dirname.replace('/server', "/");

server.use(express.static(path.join(baseDir, 'public')));

server.get('/', function (req, res) {
  res.sendFile(path.join(baseDir, 'public', 'index.html'));
});

server.get('/resources', express.static(path.join(baseDir, 'public/resources')));
server.get('/static', express.static(path.join(baseDir, 'public/static')));

server.all('*', function(req, res) {
  res.sendFile(path.join(baseDir, 'public', 'index.html'));
});

applyMiddleware(errorHandlers, server);

export default server;
