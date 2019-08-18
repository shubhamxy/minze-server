import { MenuItemResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { PricingParent } from "./Pricing";
import { PictureParent } from "./Picture";
import { ReviewParent } from "./Review";

export interface MenuItemParent {
  id: string;
  shortDescription: string;
  title: string;
  description: string;
  pricing: PricingParent;
  pictures: PictureParent[];
  reviews: ReviewParent[];
  createdAt: string;
  updatedAt: string;
}

export const MenuItem: MenuItemResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  shortDescription: parent => parent.shortDescription,
  title: parent => parent.title,
  description: parent => parent.description,
  pricing: parent => parent.pricing,
  pictures: parent => parent.pictures,
  reviews: parent => parent.reviews,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
