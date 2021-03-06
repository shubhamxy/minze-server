import {ITypeMap} from '../../resolvers/generated/resolvers';

import {QueryParent} from '../Query/Query';
import {MutationParent} from '../Mutation/Mutation';
import {SubscriptionParent} from '../Subscription/Subscription';
import {ExperienceParent} from '../Experience/Experience';
import {RestaurantParent} from '../Restaurant/Restaurant';
import {ReservationParent} from '../Restaurant/Reservation';
import {NeighbourhoodParent} from '../Location/Neighbourhood/Neighbourhood';
import {ExperiencesByCityParent} from '../Experience/ExperiencesByCity';
import {ViewerParent} from '../Query/Viewer/Viewer';
import {LocationParent} from '../Location/Location';
import {UserParent} from '../User/User';
import {OrderParent} from '../Restaurant/Order';
import {CityParent} from '../Location/City/City';
import {PictureParent} from '../User/Picture/Picture';
import {ExperienceCategoryParent} from '../Experience/ExperienceCategory';
import {ReviewParent} from '../Restaurant/Review';
import {NotificationParent} from '../User/Notification';
import {PaymentAccountParent} from '../Payment/PaymentAccount';
import {MessageParent} from '../User/Message';
import {PaymentParent} from '../Payment/Payment';
import {PaypalInformationParent} from '../Payment/PaypalInformation';
import {PaytmInformationParent} from '../Payment/PaytmInformation';
import {DebitCardInformationParent} from '../Payment/DebitCardInformation';
import {CreditCardInformationParent} from '../Payment/CreditCardInformation';
import {PoliciesParent} from '../Restaurant/Policies';
import {MenuItemParent} from '../Restaurant/MenuItem';
import {PricingParent} from '../Restaurant/Pricing';
import {AuthPayloadParent} from '../AuthPayload/AuthPayload';
import {MutationResultParent} from '../Mutation/MutationResult';
import {CitySubscriptionPayloadParent} from '../Location/CitySubscriptionPayload/CitySubscriptionPayload';
import {CityPreviousValuesParent} from '../Location/CityPreviousValues/CityPreviousValues';

import {Context} from './Context';

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  SubscriptionParent: SubscriptionParent;
  ExperienceParent: ExperienceParent;
  RestaurantParent: RestaurantParent;
  ReservationParent: ReservationParent;
  NeighbourhoodParent: NeighbourhoodParent;
  ExperiencesByCityParent: ExperiencesByCityParent;
  ViewerParent: ViewerParent;
  LocationParent: LocationParent;
  UserParent: UserParent;
  OrderParent: OrderParent;
  CityParent: CityParent;
  PictureParent: PictureParent;
  ExperienceCategoryParent: ExperienceCategoryParent;
  ReviewParent: ReviewParent;
  NotificationParent: NotificationParent;
  PaymentAccountParent: PaymentAccountParent;
  MessageParent: MessageParent;
  PaymentParent: PaymentParent;
  PaypalInformationParent: PaypalInformationParent;
  PaytmInformationParent: PaytmInformationParent;
  DebitCardInformationParent: DebitCardInformationParent;
  CreditCardInformationParent: CreditCardInformationParent;
  PoliciesParent: PoliciesParent;
  MenuItemParent: MenuItemParent;
  PricingParent: PricingParent;
  AuthPayloadParent: AuthPayloadParent;
  MutationResultParent: MutationResultParent;
  CitySubscriptionPayloadParent: CitySubscriptionPayloadParent;
  CityPreviousValuesParent: CityPreviousValuesParent;
}
