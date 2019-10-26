import {IResolvers} from './generated/resolvers';
import {TypeMap} from './types/TypeMap';

import {Query} from './Query/Query';
import {Mutation} from './Mutation/Mutation';
import {Subscription} from './Subscription/Subscription';
import {Viewer} from './Query/Viewer/Viewer';
import {AuthPayload} from './AuthPayload/AuthPayload';
import {MutationResult} from './Mutation/MutationResult';
import {ExperiencesByCity} from './Experience/ExperiencesByCity';
import {Reservation} from './Restaurant/Reservation';
import {Experience} from './Experience/Experience';
import {Review} from './Restaurant/Review';
import {Neighbourhood} from './Location/Neighbourhood/Neighbourhood';
import {Location} from './Location/Location';
import {Picture} from './User/Picture/Picture';
import {City} from './Location/City/City';
import {ExperienceCategory} from './Experience/ExperienceCategory';
import {User} from './User/User';
import {PaymentAccount} from './Payment/PaymentAccount';
import {Restaurant} from './Restaurant/Restaurant';
import {Order} from './Restaurant/Order';
import {Notification} from './User/Notification';
import {Payment} from './Payment/Payment';
import {PaypalInformation} from './Payment/PaypalInformation';
import {PaytmInformation} from './Payment/PaytmInformation';
import {CreditCardInformation} from './Payment/CreditCardInformation';
import {DebitCardInformation} from './Payment/DebitCardInformation';
import {Message} from './User/Message';
import {Pricing} from './Restaurant/Pricing';
import {Policies} from './Restaurant/Policies';
import {MenuItem} from './Restaurant/MenuItem';
import {CitySubscriptionPayload} from './Location/CitySubscriptionPayload/CitySubscriptionPayload';
import {CityPreviousValues} from './Location/CityPreviousValues/CityPreviousValues';

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
