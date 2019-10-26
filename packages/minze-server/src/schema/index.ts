import {makeExecutableSchema} from 'graphql-tools';
import {importSchema} from 'graphql-import';
import path from 'path'

import {resolvers} from '../resolvers';

const typeDefs = importSchema(path.join(__dirname + '/Schema.graphql'));
const schema = makeExecutableSchema({typeDefs, resolvers: resolvers as any});

export default schema;
