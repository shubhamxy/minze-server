import {PaymentResolvers} from '../generated/resolvers';
import {TypeMap} from './types/TypeMap';
import {OrderParent} from './Order';
import {PaymentAccountParent} from './PaymentAccount';

export interface PaymentParent {
  order: OrderParent;
  createdAt: string;
  id: string;
  paymentMethod: PaymentAccountParent;
  serviceFee: number;
}

export const Payment: PaymentResolvers.Type<TypeMap> = {
  order: parent => parent.order,

  createdAt: parent => parent.createdAt,
  id: parent => parent.id,
  paymentMethod: parent => parent.paymentMethod,
  serviceFee: parent => parent.serviceFee
};
