import {DebitCardInformationResolvers} from '../schema/generated/resolvers';
import {TypeMap} from './types/TypeMap';
import {PaymentAccountParent} from './PaymentAccount';

export interface DebitCardInformationParent {
  cardNumber: string;
  country: string;
  createdAt: string;
  expiresOnMonth: number;
  expiresOnYear: number;
  firstName: string;
  id: string;
  lastName: string;
  paymentAccount?: PaymentAccountParent;
  postalCode: string;
  securityCode: string;
}

export const DebitCardInformation: DebitCardInformationResolvers.Type<TypeMap> = {
  cardNumber: parent => parent.cardNumber,
  country: parent => parent.country,
  createdAt: parent => parent.createdAt,
  expiresOnMonth: parent => parent.expiresOnMonth,
  expiresOnYear: parent => parent.expiresOnYear,
  firstName: parent => parent.firstName,
  id: parent => parent.id,
  lastName: parent => parent.lastName,
  postalCode: parent => parent.postalCode,
  securityCode: parent => parent.securityCode
};
