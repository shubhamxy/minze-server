import { GraphQLModule } from '@graphql-modules/core';
import { gql } from 'apollo-server-express';
import { Resolvers } from '../../types/graphql';

const typeDefs = gql`
  scalar DateTime
  scalar URL

  type Query {
    _dummy: Boolean
  }

  type Mutation {
    _dummy: Boolean
  }

  type Subscription {
    _dummy: Boolean
  }
`;

const resolvers: Resolvers = {

};

export default new GraphQLModule({
  name: 'common',
  typeDefs,
  resolvers,
});
