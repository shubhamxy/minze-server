import { GraphQLModule } from '@graphql-modules/core';
import usersModule from './users';

export const rootModule = new GraphQLModule({
  name: 'root',
  imports: [usersModule],
});
