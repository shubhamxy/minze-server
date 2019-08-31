import {UserResolvers} from '../generated/resolvers';
import {TypeMap} from '../types/TypeMap';
import {OrderParent} from '../Restaurant/Order';
import {ExperienceParent} from '../Experience/Experience';
import {LocationParent} from '../Location/Location';
import {NotificationParent} from './Notification';
import {RestaurantParent} from '../Restaurant/Restaurant';
import {PaymentAccountParent} from '../Payment/PaymentAccount';
import {PictureParent} from './Picture/Picture';
import {MessageParent} from './Message';

export interface UserParent {
  orders: OrderParent[];
  createdAt: string;
  displayName: string;
  experiences: ExperienceParent[];
  id: string;
  location?: LocationParent;
  notifications: NotificationParent[];
  ownedRestaurants: RestaurantParent[];
  paymentAccount?: PaymentAccountParent[];
  phoneNumber: string;
  profilePicture?: PictureParent;
  receivedMessages: MessageParent[];
  responseRate?: number;
  responseTime?: number;
  sentMessages: MessageParent[];
  updatedAt: string;
  uid: string;
}

export const User: UserResolvers.Type<TypeMap> = {
  orders: (parent, _args, ctx) => ctx.db.user({id: parent.id}).orders(),
  createdAt: parent => parent.createdAt,
  displayName: parent => parent.displayName,
  experiences: (parent, _args, ctx) => ctx.db.user({id: parent.id}).experiences(),
  id: parent => parent.id,
  uid: parent => parent.uid,
  location: (parent, _args, ctx) => ctx.db.user({id: parent.id}).location(),
  notifications: (root, _args, ctx) => ctx.db.user({id: root.id}).notifications(),
  ownedRestaurants: (parent, _args, ctx) => ctx.db.user({id: parent.id}).ownedRestaurant(),
  paymentAccount: (root, _args, ctx) => ctx.db.user({id: root.id}).paymentAccount(),
  phoneNumber: parent => parent.phoneNumber,
  profilePicture: (parent, _args, ctx) => ctx.db.user({id: parent.id}).profilePicture(),
  receivedMessages: (parent, _args, ctx) => ctx.db.user({id: parent.id}).receivedMessages(),
  responseRate: (parent, _args, ctx) => ctx.db.user({id: parent.id}).responseRate(),
  responseTime: (parent, _args, ctx) => ctx.db.user({id: parent.id}).responseTime(),
  sentMessages: (parent, _args, ctx) => ctx.db.user({id: parent.id}).sentMessages(),
  updatedAt: parent => parent.updatedAt
};
