import * as jwt from 'jsonwebtoken';
import { MutationResolvers } from '../generated/resolvers';
import { getUserId } from '../utils';
import { TypeMap } from './types/TypeMap';
import { admin } from '../services/firebase';
import config from '../config';

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  signup: async (_parent, { idToken }, ctx) => {
    const { uid } = await admin.auth().verifyIdToken(idToken);
    const { displayName, phoneNumber } = await admin.auth().getUser(uid);
    if (!phoneNumber || uid) throw Error('Err');
    const user = await ctx.db.createUser({
      uid,
      displayName: displayName || uid,
      phoneNumber
    });
    if (!user) {
      throw new Error('Invalid Credentials');
    }
    const token = jwt.sign({ userId: user.id }, config.ENV_VARS.APP_SECRET as jwt.Secret);
    return {
      id: user.id,
      token
    };
  },
  login: async (_parent, { idToken }, ctx) => {
    const { uid } = await admin.auth().verifyIdToken(idToken);
    const user = await ctx.db.user({ uid });

    if (!user) {
      throw new Error('Invalid Credentials');
    }

    const token = jwt.sign({ userId: user.id }, config.ENV_VARS.APP_SECRET as jwt.Secret);

    return {
      id: user.id,
      token
    };
  },
  addPaymentMethod: () => {
    throw new Error('Resolver not implemented');
  },
  book: async (_parent, args, ctx) => {
    // function daysBetween(date1: Date, date2: Date): number {
    //   // The number of milliseconds in one day
    //   const ONE_DAY = 1000 * 60 * 60 * 24
    //
    //   // Convert both dates to milliseconds
    //   const date1Ms = date1.getTime()
    //   const date2Ms = date2.getTime()
    //
    //   // Calculate the difference in milliseconds
    //   const difference_ms = Math.abs(date1Ms - date2Ms)
    //
    //   return Math.round(difference_ms / ONE_DAY)
    // }

    const userId = getUserId(ctx);

    // TODO: IMPLEMENT
    // const paymentAccount = await getPaymentAccount(userId, ctx)
    // if (!paymentAccount) {
    //   throw new Error(`You don't have a payment method yet`)
    // }

    const alreadyOrdered = await ctx.db.orders({
      where: {
        startDate_gte: args.checkIn,
        startDate_lte: args.checkOut,
        restaurant: { id: args.restaurantId }
      }
    });

    if (alreadyOrdered && alreadyOrdered.length > 0) {
      throw new Error(`The requested time is not free.`);
    }

    // const restaurantPrice = days * pricing.perNight
    // const totalPrice = restaurantPrice * 1.2
    // const serviceFee = restaurantPrice * 0.2

    // TODO implement real stripe
    // await payWithStripe()

    await ctx.db.createOrder({
      startDate: args.checkIn,
      endDate: args.checkOut,
      bookee: { connect: { id: userId } },
      restaurant: { connect: { id: args.restaurantId } }
    });

    return { success: true };
  }
};
