import {PaytmInformationResolvers} from '../generated/resolvers';
import {TypeMap} from '../types/TypeMap';
import {PaymentAccountParent} from './PaymentAccount';

export interface PaytmInformationParent {
  createdAt: string;
  mobile: string;
  id: string;
  paymentAccount: PaymentAccountParent;
}

export const PaytmInformation: PaytmInformationResolvers.Type<TypeMap> = {
  createdAt: parent => parent.createdAt,
  mobile: parent => parent.mobile,
  id: parent => parent.id
};
