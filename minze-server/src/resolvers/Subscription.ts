import {SubscriptionResolvers} from '../schema/generated/resolvers';
import {TypeMap} from './types/TypeMap';

export interface SubscriptionParent {}

export const Subscription: SubscriptionResolvers.Type<TypeMap> = {
  city: parent => null
};
