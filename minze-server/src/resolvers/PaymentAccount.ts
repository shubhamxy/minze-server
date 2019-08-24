import {PaymentAccountResolvers} from '../schema/generated/resolvers';
import {TypeMap} from './types/TypeMap';

export type PAYMENT_PROVIDER = 'PAYPAL' | 'PAYTM' | 'CREDIT_CARD' | 'DEBIT_CARD';

export interface PaymentAccountParent {
  id: string;
  createdAt: string;
  type?: PAYMENT_PROVIDER;
}

export const PaymentAccount: PaymentAccountResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  type: parent => parent.type,
  user: (parent, args, ctx) => ctx.db.paymentAccount({id: parent.id}).user(),
  payments: (parent, args, ctx) => ctx.db.paymentAccount({id: parent.id}).payments(),
  paypal: (parent, args, ctx) => ctx.db.paymentAccount({id: parent.id}).paypal(),
  paytm: (parent, args, ctx) => ctx.db.paymentAccount({id: parent.id}).paypal(),
  debitcard: (parent, args, ctx) => ctx.db.paymentAccount({id: parent.id}).creditcard(),
  creditcard: (parent, args, ctx) => ctx.db.paymentAccount({id: parent.id}).creditcard()
};
