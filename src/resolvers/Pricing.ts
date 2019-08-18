import {PricingResolvers} from '../generated/resolvers';
import {TypeMap} from './types/TypeMap';

export interface PricingParent {
  id: string;
  monthlyDiscount?: number;
  weeklyDiscount?: number;
  price: number;
  smartPricing: boolean;
  basePrice: number;
  averageWeekly: number;
  averageMonthly: number;
  weekendPricing?: number;
}

export const Pricing: PricingResolvers.Type<TypeMap> = {
  price: parent => parent.price,
  averageMonthly: parent => parent.averageMonthly,
  averageWeekly: parent => parent.averageWeekly,
  basePrice: parent => parent.basePrice,
  id: parent => parent.id,
  monthlyDiscount: parent => parent.monthlyDiscount || null,
  smartPricing: parent => parent.smartPricing,
  weekendPricing: parent => parent.weekendPricing || null,
  weeklyDiscount: parent => parent.weeklyDiscount || null
};
