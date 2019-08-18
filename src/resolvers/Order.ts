import {OrderResolvers} from '../generated/resolvers';
import {TypeMap} from './types/TypeMap';

export interface OrderParent {
  id: string;
  createdAt: string;
  startDate: string;
  endDate: string;
}

export const Order: OrderResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  bookee: (parent, _args, ctx) => ctx.db.order({id: parent.id}).bookee(),
  restaurant: (parent, _args, ctx) => ctx.db.order({id: parent.id}).restaurant(),
  startDate: parent => parent.startDate,
  endDate: parent => parent.endDate,
  payment: (parent, _args, ctx) => ctx.db.order({id: parent.id}).payment()
};
