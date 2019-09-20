import { IResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

import { Query } from './Query';
import { Mutation } from './Mutation';
import { Subscription } from './Subscription';
import { Viewer } from './Viewer';
import { AuthPayload } from './AuthPayload';
import { MutationResult } from './MutationResult';
import { ExperiencesByCity } from './ExperiencesByCity';
import { Reservation } from './Reservation';
import { Experience } from './Experience';
import { Review } from './Review';
import { Neighbourhood } from './Neighbourhood';
import { Location } from './Location';
import { Picture } from './Picture';
import { City } from './City';
import { ExperienceCategory } from './ExperienceCategory';
import { User } from './User';
import { PaymentAccount } from './PaymentAccount';
import { Restaurant } from './Restaurant';
import { Order } from './Order';
import { Notification } from './Notification';
import { Payment } from './Payment';
import { PaypalInformation } from './PaypalInformation';
import { PaytmInformation } from './PaytmInformation';
import { CreditCardInformation } from './CreditCardInformation';
import { DebitCardInformation } from './DebitCardInformation';
import { Message } from './Message';
import { Pricing } from './Pricing';
import { Policies } from './Policies';
import { MenuItem } from './MenuItem';
import { CitySubscriptionPayload } from './CitySubscriptionPayload';
import { CityPreviousValues } from './CityPreviousValues';

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  Subscription,
  Viewer,
  AuthPayload,
  MutationResult,
  ExperiencesByCity,
  Reservation,
  Experience,
  Review,
  Neighbourhood,
  Location,
  Picture,
  City,
  ExperienceCategory,
  User,
  PaymentAccount,
  Restaurant,
  Order,
  Notification,
  Payment,
  PaypalInformation,
  PaytmInformation,
  CreditCardInformation,
  DebitCardInformation,
  Message,
  Pricing,
  Policies,
  MenuItem,
  CitySubscriptionPayload,
  CityPreviousValues
};
