/* DO NOT EDIT! */
import {GraphQLResolveInfo} from 'graphql';

export interface ITypeMap {
  Context: any;
  PAYMENT_PROVIDER: any;
  NOTIFICATION_TYPE: any;
  MutationType: any;

  QueryParent: any;
  MutationParent: any;
  SubscriptionParent: any;
  ExperienceParent: any;
  RestaurantParent: any;
  ReservationParent: any;
  NeighbourhoodParent: any;
  ExperiencesByCityParent: any;
  ViewerParent: any;
  LocationParent: any;
  UserParent: any;
  OrderParent: any;
  CityParent: any;
  PictureParent: any;
  ExperienceCategoryParent: any;
  ReviewParent: any;
  NotificationParent: any;
  PaymentAccountParent: any;
  MessageParent: any;
  PaymentParent: any;
  PaypalInformationParent: any;
  PaytmInformationParent: any;
  DebitCardInformationParent: any;
  CreditCardInformationParent: any;
  PoliciesParent: any;
  MenuItemParent: any;
  PricingParent: any;
  AuthPayloadParent: any;
  MutationResultParent: any;
  CitySubscriptionPayloadParent: any;
  CityPreviousValuesParent: any;
}

export namespace QueryResolvers {
  export type TestResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TopExperiencesResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>;

  export type TopRestaurantsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RestaurantParent'][] | Promise<T['RestaurantParent'][]>;

  export interface ArgsRestaurantsInPriceRange<T extends ITypeMap> {
    min: number;
    max: number;
  }

  export type RestaurantsInPriceRangeResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsRestaurantsInPriceRange<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RestaurantParent'][] | Promise<T['RestaurantParent'][]>;

  export type TopReservationsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ReservationParent'][] | Promise<T['ReservationParent'][]>;

  export type FeaturedDestinationsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['NeighbourhoodParent'][] | Promise<T['NeighbourhoodParent'][]>;

  export interface ArgsExperiencesByCity<T extends ITypeMap> {
    cities: string[];
  }

  export type ExperiencesByCityResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsExperiencesByCity<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ExperiencesByCityParent'][] | Promise<T['ExperiencesByCityParent'][]>;

  export type ViewerResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ViewerParent'] | null | Promise<T['ViewerParent'] | null>;

  export type MyLocationResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>;

  export interface Type<T extends ITypeMap> {
    test: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    topExperiences: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>;
    topRestaurants: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RestaurantParent'][] | Promise<T['RestaurantParent'][]>;
    restaurantsInPriceRange: (
      parent: T['QueryParent'],
      args: ArgsRestaurantsInPriceRange<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RestaurantParent'][] | Promise<T['RestaurantParent'][]>;
    topReservations: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ReservationParent'][] | Promise<T['ReservationParent'][]>;
    featuredDestinations: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['NeighbourhoodParent'][] | Promise<T['NeighbourhoodParent'][]>;
    experiencesByCity: (
      parent: T['QueryParent'],
      args: ArgsExperiencesByCity<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ExperiencesByCityParent'][] | Promise<T['ExperiencesByCityParent'][]>;
    viewer: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ViewerParent'] | null | Promise<T['ViewerParent'] | null>;
    myLocation: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>;
  }
}

export namespace MutationResolvers {
  export interface ArgsLogin<T extends ITypeMap> {
    idToken: string;
  }

  export type LoginResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsLogin<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>;

  export interface ArgsAddPaymentMethod<T extends ITypeMap> {
    cardNumber: string;
    expiresOnMonth: number;
    expiresOnYear: number;
    securityCode: string;
    firstName: string;
    lastName: string;
    postalCode: string;
    country: string;
  }

  export type AddPaymentMethodResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsAddPaymentMethod<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>;

  export interface ArgsBook<T extends ITypeMap> {
    restaurantId: string;
    checkIn: string;
    checkOut: string;
    paymentId: string;
    numGuests: number;
  }

  export type BookResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsBook<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>;

  export interface Type<T extends ITypeMap> {
    login: (
      parent: T['MutationParent'],
      args: ArgsLogin<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>;
    addPaymentMethod: (
      parent: T['MutationParent'],
      args: ArgsAddPaymentMethod<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>;
    book: (
      parent: T['MutationParent'],
      args: ArgsBook<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>;
  }
}

export namespace SubscriptionResolvers {
  export type CityResolver<T extends ITypeMap> = (
    parent: T['SubscriptionParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) =>
    | T['CitySubscriptionPayloadParent']
    | null
    | Promise<T['CitySubscriptionPayloadParent'] | null>;

  export interface Type<T extends ITypeMap> {
    city: (
      parent: T['SubscriptionParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) =>
      | T['CitySubscriptionPayloadParent']
      | null
      | Promise<T['CitySubscriptionPayloadParent'] | null>;
  }
}

export namespace ExperienceResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CategoryResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ExperienceCategoryParent'] | null | Promise<T['ExperienceCategoryParent'] | null>;

  export type TitleResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LocationParent'] | Promise<T['LocationParent']>;

  export type PricePerPersonResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type ReviewsResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>;

  export type PreviewResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PictureParent'] | Promise<T['PictureParent']>;

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    category: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ExperienceCategoryParent'] | null | Promise<T['ExperienceCategoryParent'] | null>;
    title: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    location: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LocationParent'] | Promise<T['LocationParent']>;
    pricePerPerson: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    reviews: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>;
    preview: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PictureParent'] | Promise<T['PictureParent']>;
    popularity: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace RestaurantResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ShortDescriptionResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DescriptionResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SlugResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MaxGuestsResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type NumRatingsResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type AvgPricePerPersonResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type AvgRatingResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type ReviewsResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>;

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>;

  export type PoliciesResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PoliciesParent'] | null | Promise<T['PoliciesParent'] | null>;

  export type MenuResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['MenuItemParent'][] | Promise<T['MenuItemParent'][]>;

  export type OrdersResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['OrderParent'][] | Promise<T['OrderParent'][]>;

  export type PicturesResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PictureParent'][] | Promise<T['PictureParent'][]>;

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['RestaurantParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    name: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    shortDescription: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    description: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    slug: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    maxGuests: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    numRatings: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    avgPricePerPerson: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    avgRating: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    reviews: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>;
    location: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>;
    policies: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PoliciesParent'] | null | Promise<T['PoliciesParent'] | null>;
    menu: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['MenuItemParent'][] | Promise<T['MenuItemParent'][]>;
    orders: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['OrderParent'][] | Promise<T['OrderParent'][]>;
    pictures: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PictureParent'][] | Promise<T['PictureParent'][]>;
    popularity: (
      parent: T['RestaurantParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace ReservationResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TitleResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type AvgPricePerPersonResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type PicturesResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PictureParent'][] | Promise<T['PictureParent'][]>;

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LocationParent'] | Promise<T['LocationParent']>;

  export type IsCuratedResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type SlugResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    title: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    avgPricePerPerson: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    pictures: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PictureParent'][] | Promise<T['PictureParent'][]>;
    location: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LocationParent'] | Promise<T['LocationParent']>;
    isCurated: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    slug: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    popularity: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace NeighbourhoodResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SlugResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type HomePreviewResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>;

  export type CityResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['CityParent'] | Promise<T['CityParent']>;

  export type FeaturedResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type PopularityResolver<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    name: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    slug: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    homePreview: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>;
    city: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['CityParent'] | Promise<T['CityParent']>;
    featured: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    popularity: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace ExperiencesByCityResolvers {
  export type ExperiencesResolver<T extends ITypeMap> = (
    parent: T['ExperiencesByCityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>;

  export type CityResolver<T extends ITypeMap> = (
    parent: T['ExperiencesByCityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['CityParent'] | Promise<T['CityParent']>;

  export interface Type<T extends ITypeMap> {
    experiences: (
      parent: T['ExperiencesByCityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>;
    city: (
      parent: T['ExperiencesByCityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['CityParent'] | Promise<T['CityParent']>;
  }
}

export namespace ViewerResolvers {
  export type MeResolver<T extends ITypeMap> = (
    parent: T['ViewerParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | Promise<T['UserParent']>;

  export type OrdersResolver<T extends ITypeMap> = (
    parent: T['ViewerParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['OrderParent'][] | Promise<T['OrderParent'][]>;

  export interface Type<T extends ITypeMap> {
    me: (
      parent: T['ViewerParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | Promise<T['UserParent']>;
    orders: (
      parent: T['ViewerParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['OrderParent'][] | Promise<T['OrderParent'][]>;
  }
}

export namespace LocationResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LatResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type LngResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type AddressResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DirectionsResolver<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    lat: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    lng: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    address: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    directions: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace UserResolvers {
  export type OrdersResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['OrderParent'][] | Promise<T['OrderParent'][]>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ExperiencesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>;

  export type IdResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>;

  export type NotificationsResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['NotificationParent'][] | Promise<T['NotificationParent'][]>;

  export type OwnedRestaurantsResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RestaurantParent'][] | Promise<T['RestaurantParent'][]>;

  export type PaymentAccountResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PaymentAccountParent'][] | null | Promise<T['PaymentAccountParent'][] | null>;

  export type PhoneNumberResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ProfilePictureResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>;

  export type ReceivedMessagesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['MessageParent'][] | Promise<T['MessageParent'][]>;

  export type ResponseRateResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type ResponseTimeResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type SentMessagesResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['MessageParent'][] | Promise<T['MessageParent'][]>;

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UidResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    orders: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['OrderParent'][] | Promise<T['OrderParent'][]>;
    createdAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    displayName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    experiences: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>;
    id: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    location: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>;
    notifications: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['NotificationParent'][] | Promise<T['NotificationParent'][]>;
    ownedRestaurants: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RestaurantParent'][] | Promise<T['RestaurantParent'][]>;
    paymentAccount: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PaymentAccountParent'][] | null | Promise<T['PaymentAccountParent'][] | null>;
    phoneNumber: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    profilePicture: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>;
    receivedMessages: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['MessageParent'][] | Promise<T['MessageParent'][]>;
    responseRate: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    responseTime: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    sentMessages: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['MessageParent'][] | Promise<T['MessageParent'][]>;
    updatedAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    uid: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace OrderResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['OrderParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['OrderParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type BookeeResolver<T extends ITypeMap> = (
    parent: T['OrderParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | Promise<T['UserParent']>;

  export type RestaurantResolver<T extends ITypeMap> = (
    parent: T['OrderParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RestaurantParent'] | Promise<T['RestaurantParent']>;

  export type StartDateResolver<T extends ITypeMap> = (
    parent: T['OrderParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EndDateResolver<T extends ITypeMap> = (
    parent: T['OrderParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PaymentResolver<T extends ITypeMap> = (
    parent: T['OrderParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PaymentParent'] | Promise<T['PaymentParent']>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['OrderParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T['OrderParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    bookee: (
      parent: T['OrderParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | Promise<T['UserParent']>;
    restaurant: (
      parent: T['OrderParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RestaurantParent'] | Promise<T['RestaurantParent']>;
    startDate: (
      parent: T['OrderParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    endDate: (
      parent: T['OrderParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    payment: (
      parent: T['OrderParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PaymentParent'] | Promise<T['PaymentParent']>;
  }
}

export namespace CityResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['CityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver<T extends ITypeMap> = (
    parent: T['CityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['CityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    name: (
      parent: T['CityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace PictureResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PictureParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UrlResolver<T extends ITypeMap> = (
    parent: T['PictureParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PictureParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    url: (
      parent: T['PictureParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ExperienceCategoryResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MainColorResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    mainColor: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    name: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ReviewResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type AccuracyResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type CheckInResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type CleanlinessResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type CommunicationResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LocationResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type StarsResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type TextResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ValueResolver<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    accuracy: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    checkIn: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    cleanliness: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    communication: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    createdAt: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    location: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    stars: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    text: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    value: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace NotificationResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type IdResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LinkResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ReadDateResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TypeResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['NOTIFICATION_TYPE'] | null | Promise<T['NOTIFICATION_TYPE'] | null>;

  export type UserResolver<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | Promise<T['UserParent']>;

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    id: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    link: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    readDate: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    type: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['NOTIFICATION_TYPE'] | null | Promise<T['NOTIFICATION_TYPE'] | null>;
    user: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | Promise<T['UserParent']>;
  }
}

export namespace PaymentAccountResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TypeResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PAYMENT_PROVIDER'] | null | Promise<T['PAYMENT_PROVIDER'] | null>;

  export type UserResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | Promise<T['UserParent']>;

  export type PaymentsResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PaymentParent'][] | Promise<T['PaymentParent'][]>;

  export type PaypalResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PaypalInformationParent'] | null | Promise<T['PaypalInformationParent'] | null>;

  export type PaytmResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PaytmInformationParent'] | null | Promise<T['PaytmInformationParent'] | null>;

  export type DebitcardResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['DebitCardInformationParent'] | null | Promise<T['DebitCardInformationParent'] | null>;

  export type CreditcardResolver<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['CreditCardInformationParent'] | null | Promise<T['CreditCardInformationParent'] | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    type: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PAYMENT_PROVIDER'] | null | Promise<T['PAYMENT_PROVIDER'] | null>;
    user: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | Promise<T['UserParent']>;
    payments: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PaymentParent'][] | Promise<T['PaymentParent'][]>;
    paypal: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PaypalInformationParent'] | null | Promise<T['PaypalInformationParent'] | null>;
    paytm: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PaytmInformationParent'] | null | Promise<T['PaytmInformationParent'] | null>;
    debitcard: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['DebitCardInformationParent'] | null | Promise<T['DebitCardInformationParent'] | null>;
    creditcard: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['CreditCardInformationParent'] | null | Promise<T['CreditCardInformationParent'] | null>;
  }
}

export namespace MessageResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DeliveredAtResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type IdResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ReadAtResolver<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    deliveredAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    id: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    readAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace PaymentResolvers {
  export type OrderResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['OrderParent'] | Promise<T['OrderParent']>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PaymentMethodResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>;

  export type ServiceFeeResolver<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    order: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['OrderParent'] | Promise<T['OrderParent']>;
    createdAt: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    id: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    paymentMethod: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>;
    serviceFee: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace PaypalInformationResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    email: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    id: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace PaytmInformationResolvers {
  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PaytmInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MobileResolver<T extends ITypeMap> = (
    parent: T['PaytmInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type IdResolver<T extends ITypeMap> = (
    parent: T['PaytmInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['PaytmInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    mobile: (
      parent: T['PaytmInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    id: (
      parent: T['PaytmInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace DebitCardInformationResolvers {
  export type CardNumberResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CountryResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ExpiresOnMonthResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type ExpiresOnYearResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type IdResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PostalCodeResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SecurityCodeResolver<T extends ITypeMap> = (
    parent: T['DebitCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    cardNumber: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    country: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    expiresOnMonth: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    expiresOnYear: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    firstName: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    id: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    lastName: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    postalCode: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    securityCode: (
      parent: T['DebitCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace CreditCardInformationResolvers {
  export type CardNumberResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CountryResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ExpiresOnMonthResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type ExpiresOnYearResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type IdResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PostalCodeResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SecurityCodeResolver<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    cardNumber: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    country: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    expiresOnMonth: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    expiresOnYear: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    firstName: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    id: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    lastName: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    postalCode: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    securityCode: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace PoliciesResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type OpeningTimeResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type ClosingTimeResolver<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    openingTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    closingTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace MenuItemResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['MenuItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ShortDescriptionResolver<T extends ITypeMap> = (
    parent: T['MenuItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TitleResolver<T extends ITypeMap> = (
    parent: T['MenuItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DescriptionResolver<T extends ITypeMap> = (
    parent: T['MenuItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PricingResolver<T extends ITypeMap> = (
    parent: T['MenuItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PricingParent'] | Promise<T['PricingParent']>;

  export type PicturesResolver<T extends ITypeMap> = (
    parent: T['MenuItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['PictureParent'][] | Promise<T['PictureParent'][]>;

  export type ReviewsResolver<T extends ITypeMap> = (
    parent: T['MenuItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['MenuItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['MenuItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['MenuItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    shortDescription: (
      parent: T['MenuItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    title: (
      parent: T['MenuItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    description: (
      parent: T['MenuItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    pricing: (
      parent: T['MenuItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PricingParent'] | Promise<T['PricingParent']>;
    pictures: (
      parent: T['MenuItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['PictureParent'][] | Promise<T['PictureParent'][]>;
    reviews: (
      parent: T['MenuItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>;
    createdAt: (
      parent: T['MenuItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T['MenuItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace PricingResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MonthlyDiscountResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type WeeklyDiscountResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type PriceResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type SmartPricingResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type BasePriceResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type AverageWeeklyResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type AverageMonthlyResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type WeekendPricingResolver<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    monthlyDiscount: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    weeklyDiscount: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    price: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    smartPricing: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    basePrice: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    averageWeekly: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    averageMonthly: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    weekendPricing: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
  }
}

export namespace AuthPayloadResolvers {
  export type TokenResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | Promise<T['UserParent']>;

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | Promise<T['UserParent']>;
  }
}

export namespace MutationResultResolvers {
  export type SuccessResolver<T extends ITypeMap> = (
    parent: T['MutationResultParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export interface Type<T extends ITypeMap> {
    success: (
      parent: T['MutationResultParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
  }
}

export namespace CitySubscriptionPayloadResolvers {
  export type MutationResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['MutationType'] | Promise<T['MutationType']>;

  export type NodeResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['CityParent'] | null | Promise<T['CityParent'] | null>;

  export type UpdatedFieldsResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string[] | Promise<string[]>;

  export type PreviousValuesResolver<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['CityPreviousValuesParent'] | null | Promise<T['CityPreviousValuesParent'] | null>;

  export interface Type<T extends ITypeMap> {
    mutation: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['MutationType'] | Promise<T['MutationType']>;
    node: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['CityParent'] | null | Promise<T['CityParent'] | null>;
    updatedFields: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string[] | Promise<string[]>;
    previousValues: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['CityPreviousValuesParent'] | null | Promise<T['CityPreviousValuesParent'] | null>;
  }
}

export namespace CityPreviousValuesResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['CityPreviousValuesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver<T extends ITypeMap> = (
    parent: T['CityPreviousValuesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['CityPreviousValuesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    name: (
      parent: T['CityPreviousValuesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  Subscription: SubscriptionResolvers.Type<T>;
  Experience: ExperienceResolvers.Type<T>;
  Restaurant: RestaurantResolvers.Type<T>;
  Reservation: ReservationResolvers.Type<T>;
  Neighbourhood: NeighbourhoodResolvers.Type<T>;
  ExperiencesByCity: ExperiencesByCityResolvers.Type<T>;
  Viewer: ViewerResolvers.Type<T>;
  Location: LocationResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Order: OrderResolvers.Type<T>;
  City: CityResolvers.Type<T>;
  Picture: PictureResolvers.Type<T>;
  ExperienceCategory: ExperienceCategoryResolvers.Type<T>;
  Review: ReviewResolvers.Type<T>;
  Notification: NotificationResolvers.Type<T>;
  PaymentAccount: PaymentAccountResolvers.Type<T>;
  Message: MessageResolvers.Type<T>;
  Payment: PaymentResolvers.Type<T>;
  PaypalInformation: PaypalInformationResolvers.Type<T>;
  PaytmInformation: PaytmInformationResolvers.Type<T>;
  DebitCardInformation: DebitCardInformationResolvers.Type<T>;
  CreditCardInformation: CreditCardInformationResolvers.Type<T>;
  Policies: PoliciesResolvers.Type<T>;
  MenuItem: MenuItemResolvers.Type<T>;
  Pricing: PricingResolvers.Type<T>;
  AuthPayload: AuthPayloadResolvers.Type<T>;
  MutationResult: MutationResultResolvers.Type<T>;
  CitySubscriptionPayload: CitySubscriptionPayloadResolvers.Type<T>;
  CityPreviousValues: CityPreviousValuesResolvers.Type<T>;
}
