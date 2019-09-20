import { UserResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface UserParent {
  createdAt: string
  displayName: string
  id: string
  uid: string
  isSuperHost: boolean
  lastName: string
  phoneNumber: string
  responseRate?: number
  responseTime?: number
  updatedAt: string
}

export const User: UserResolvers.Type<TypeMap> = {
  orders: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).orders(),
  createdAt: parent => parent.createdAt,
  displayName: parent => parent.displayName,
  hostingExperiences: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).hostingExperiences(),
  id: parent => parent.id,
  uid: parent => parent.uid,
  isSuperHost: parent => parent.isSuperHost,
  location: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).location(),
  notifications: (root, _args, ctx) =>
    ctx.db.user({ id: root.id }).notifications(),
  ownedPlaces: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).ownedPlaces(),
  paymentAccount: (root, _args, ctx) =>
  ctx.db.user({ id: root.id }).paymentAccount(),
  phoneNumber: parent => parent.phoneNumber,
  profilePicture: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).profilePicture(),
  receivedMessages: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).receivedMessages(),
  responseRate: (parent, _args, ctx) =>
  ctx.db.user({ id: parent.id }).responseRate(),
  responseTime: (parent, _args, ctx) =>
  ctx.db.user({ id: parent.id }).responseTime(),
  sentMessages: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).sentMessages(),
  updatedAt: parent => parent.updatedAt,
}
