import { RestaurantResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ReviewParent } from "./Review";
import { LocationParent } from "./Location";
import { PoliciesParent } from "./Policies";
import { MenuItemParent } from "./MenuItem";
import { OrderParent } from "./Order";
import { PictureParent } from "./Picture";

export interface RestaurantParent {
  id: string;
  name?: string;
  shortDescription: string;
  description: string;
  slug: string;
  maxGuests: number;
  numRatings: number;
  avgPricePerPerson: number;
  avgRating?: number;
  reviews: ReviewParent[];
  location?: LocationParent;
  policies?: PoliciesParent;
  menu: MenuItemParent[];
  orders: OrderParent[];
  pictures: PictureParent[];
  popularity: number;
}

export const Restaurant: RestaurantResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  name: parent => parent.name || "",
  shortDescription: parent => parent.shortDescription,
  description: parent => parent.description,
  slug: parent => parent.slug,
  maxGuests: parent => parent.maxGuests,
  reviews: (parent, _args, ctx) => {
    return ctx.db.restaurant({ id: parent.id }).reviews();
  },
  numRatings: (parent, _args, ctx) =>
    ctx.db
      .reviewsConnection({ where: { id: parent.id } })
      .aggregate()
      .count(),
  avgPricePerPerson: parent => parent.avgPricePerPerson,
  avgRating: async (parent, _args, ctx) => {
    const reviews = await ctx.db.reviews({
      where: { id: parent.id }
    });
    if (reviews.length > 0) {
      return reviews.reduce((acc, { stars }) => acc + stars, 0) / reviews.length;
    }
    return null;
  },
  location: (parent, _args, ctx) => {
    return ctx.db.restaurant({ id: parent.id }).location();
  },
  policies: (parent, _args, ctx) => {
    return ctx.db.restaurant({ id: parent.id }).policies();
  },
  menu: (parent, _args, ctx) => {
    return ctx.db.restaurant({ id: parent.id }).menu();
  },
  orders: (parent, _args, ctx) => {
    return ctx.db.restaurant({ id: parent.id }).orders();
  },
  pictures: (parent, _args, ctx) => {
    return ctx.db.restaurant({ id: parent.id }).pictures();
  },
  popularity: parent => parent.popularity
};
