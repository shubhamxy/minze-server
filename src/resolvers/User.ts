import { UserResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';
import { OrderParent } from './Order';
import { ExperienceParent } from './Experience';
import { LocationParent } from './Location';
import { NotificationParent } from './Notification';
import { RestaurantParent } from './Restaurant';
import { PaymentAccountParent } from './PaymentAccount';
import { PictureParent } from './Picture';
import { MessageParent } from './Message';

export interface UserParent {
  orders: OrderParent[];
  createdAt: string;
  displayName: string;
  hostingExperiences: ExperienceParent[];
  id: string;
  isSuperHost: boolean;
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
  orders: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).orders(),
  createdAt: parent => parent.createdAt,
  displayName: parent => parent.displayName,
  hostingExperiences: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).hostingExperiences(),
  id: parent => parent.id,
  uid: parent => parent.uid,
  isSuperHost: parent => parent.isSuperHost,
  location: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).location(),
  notifications: (root, _args, ctx) => ctx.db.user({ id: root.id }).notifications(),
  ownedRestaurants: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).ownedRestaurant(),
  paymentAccount: (root, _args, ctx) => ctx.db.user({ id: root.id }).paymentAccount(),
  phoneNumber: parent => parent.phoneNumber,
  profilePicture: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).profilePicture(),
  receivedMessages: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).receivedMessages(),
  responseRate: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).responseRate(),
  responseTime: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).responseTime(),
  sentMessages: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).sentMessages(),
  updatedAt: parent => parent.updatedAt
};
