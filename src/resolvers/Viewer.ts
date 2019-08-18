import {ViewerResolvers} from '../generated/resolvers';
import {TypeMap} from './types/TypeMap';
import {getUserId} from '../utils';

export interface ViewerParent {}

export const Viewer: any = {
  me: (_parent, _args, ctx) => {
    const id = getUserId(ctx);

    return ctx.db.user({id});
  },
  orders: async (_parent, _args, ctx) => {
    const id = getUserId(ctx);
    const orders = (await ctx.db.orders({where: {bookee: {id}}})) || [];

    return orders.map(booking => {
      return {
        ...booking,
        bookee: null,
        place: null,
        payment: null
      };
    });
  }
};
