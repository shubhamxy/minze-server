import {PoliciesResolvers} from '../generated/resolvers';
import {TypeMap} from '../types/TypeMap';

export interface PoliciesParent {
  id: string;
  createdAt: string;
  updatedAt: string;
  openingTime: number;
  closingTime: number;
}

export const Policies: PoliciesResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  openingTime: parent => parent.openingTime,
  closingTime: parent => parent.closingTime
};
