import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  /** 
 * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
 **/
  Long: any,
};

export enum Account_Type {
  Seller = 'SELLER',
  Admin = 'ADMIN'
}

export type AggregateCity = {
  __typename?: 'AggregateCity',
  count: Scalars['Int'],
};

export type AggregateCreditCardInformation = {
  __typename?: 'AggregateCreditCardInformation',
  count: Scalars['Int'],
};

export type AggregateDebitCardInformation = {
  __typename?: 'AggregateDebitCardInformation',
  count: Scalars['Int'],
};

export type AggregateExperience = {
  __typename?: 'AggregateExperience',
  count: Scalars['Int'],
};

export type AggregateExperienceCategory = {
  __typename?: 'AggregateExperienceCategory',
  count: Scalars['Int'],
};

export type AggregateLocation = {
  __typename?: 'AggregateLocation',
  count: Scalars['Int'],
};

export type AggregateMenuItem = {
  __typename?: 'AggregateMenuItem',
  count: Scalars['Int'],
};

export type AggregateMessage = {
  __typename?: 'AggregateMessage',
  count: Scalars['Int'],
};

export type AggregateNeighbourhood = {
  __typename?: 'AggregateNeighbourhood',
  count: Scalars['Int'],
};

export type AggregateNotification = {
  __typename?: 'AggregateNotification',
  count: Scalars['Int'],
};

export type AggregateOrder = {
  __typename?: 'AggregateOrder',
  count: Scalars['Int'],
};

export type AggregatePayment = {
  __typename?: 'AggregatePayment',
  count: Scalars['Int'],
};

export type AggregatePaymentAccount = {
  __typename?: 'AggregatePaymentAccount',
  count: Scalars['Int'],
};

export type AggregatePaypalInformation = {
  __typename?: 'AggregatePaypalInformation',
  count: Scalars['Int'],
};

export type AggregatePaytmInformation = {
  __typename?: 'AggregatePaytmInformation',
  count: Scalars['Int'],
};

export type AggregatePicture = {
  __typename?: 'AggregatePicture',
  count: Scalars['Int'],
};

export type AggregatePolicies = {
  __typename?: 'AggregatePolicies',
  count: Scalars['Int'],
};

export type AggregatePricing = {
  __typename?: 'AggregatePricing',
  count: Scalars['Int'],
};

export type AggregateRestaurant = {
  __typename?: 'AggregateRestaurant',
  count: Scalars['Int'],
};

export type AggregateReview = {
  __typename?: 'AggregateReview',
  count: Scalars['Int'],
};

export type AggregateUser = {
  __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type AuthPayload = {
  __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};

export type BatchPayload = {
  __typename?: 'BatchPayload',
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'],
};

export type City = Node & {
  __typename?: 'City',
  id: Scalars['ID'],
  name: Scalars['String'],
  neighbourhoods?: Maybe<Array<Neighbourhood>>,
};


export type CityNeighbourhoodsArgs = {
  where?: Maybe<NeighbourhoodWhereInput>,
  orderBy?: Maybe<NeighbourhoodOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type CityConnection = {
  __typename?: 'CityConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CityEdge>>,
  aggregate: AggregateCity,
};

export type CityCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  neighbourhoods?: Maybe<NeighbourhoodCreateManyWithoutCityInput>,
};

export type CityCreateOneWithoutNeighbourhoodsInput = {
  create?: Maybe<CityCreateWithoutNeighbourhoodsInput>,
  connect?: Maybe<CityWhereUniqueInput>,
};

export type CityCreateWithoutNeighbourhoodsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

/** An edge in a connection. */
export type CityEdge = {
  __typename?: 'CityEdge',
  /** The item at the end of the edge. */
  node: City,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CityOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type CityPreviousValues = {
  __typename?: 'CityPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type CitySubscriptionPayload = {
  __typename?: 'CitySubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<City>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CityPreviousValues>,
};

export type CitySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CitySubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CitySubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CitySubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CityWhereInput>,
};

export type CityUpdateInput = {
  name?: Maybe<Scalars['String']>,
  neighbourhoods?: Maybe<NeighbourhoodUpdateManyWithoutCityInput>,
};

export type CityUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type CityUpdateOneRequiredWithoutNeighbourhoodsInput = {
  create?: Maybe<CityCreateWithoutNeighbourhoodsInput>,
  connect?: Maybe<CityWhereUniqueInput>,
  update?: Maybe<CityUpdateWithoutNeighbourhoodsDataInput>,
  upsert?: Maybe<CityUpsertWithoutNeighbourhoodsInput>,
};

export type CityUpdateWithoutNeighbourhoodsDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type CityUpsertWithoutNeighbourhoodsInput = {
  update: CityUpdateWithoutNeighbourhoodsDataInput,
  create: CityCreateWithoutNeighbourhoodsInput,
};

export type CityWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CityWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CityWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CityWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  neighbourhoods_every?: Maybe<NeighbourhoodWhereInput>,
  neighbourhoods_some?: Maybe<NeighbourhoodWhereInput>,
  neighbourhoods_none?: Maybe<NeighbourhoodWhereInput>,
};

export type CityWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type CreditCardInformation = Node & {
  __typename?: 'CreditCardInformation',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  cardNumber: Scalars['String'],
  expiresOnMonth: Scalars['Int'],
  expiresOnYear: Scalars['Int'],
  securityCode: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  postalCode: Scalars['String'],
  country: Scalars['String'],
};

/** A connection to a list of items. */
export type CreditCardInformationConnection = {
  __typename?: 'CreditCardInformationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CreditCardInformationEdge>>,
  aggregate: AggregateCreditCardInformation,
};

export type CreditCardInformationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  cardNumber: Scalars['String'],
  expiresOnMonth: Scalars['Int'],
  expiresOnYear: Scalars['Int'],
  securityCode: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  postalCode: Scalars['String'],
  country: Scalars['String'],
};

export type CreditCardInformationCreateOneInput = {
  create?: Maybe<CreditCardInformationCreateInput>,
  connect?: Maybe<CreditCardInformationWhereUniqueInput>,
};

/** An edge in a connection. */
export type CreditCardInformationEdge = {
  __typename?: 'CreditCardInformationEdge',
  /** The item at the end of the edge. */
  node: CreditCardInformation,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CreditCardInformationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CardNumberAsc = 'cardNumber_ASC',
  CardNumberDesc = 'cardNumber_DESC',
  ExpiresOnMonthAsc = 'expiresOnMonth_ASC',
  ExpiresOnMonthDesc = 'expiresOnMonth_DESC',
  ExpiresOnYearAsc = 'expiresOnYear_ASC',
  ExpiresOnYearDesc = 'expiresOnYear_DESC',
  SecurityCodeAsc = 'securityCode_ASC',
  SecurityCodeDesc = 'securityCode_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC'
}

export type CreditCardInformationPreviousValues = {
  __typename?: 'CreditCardInformationPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  cardNumber: Scalars['String'],
  expiresOnMonth: Scalars['Int'],
  expiresOnYear: Scalars['Int'],
  securityCode: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  postalCode: Scalars['String'],
  country: Scalars['String'],
};

export type CreditCardInformationSubscriptionPayload = {
  __typename?: 'CreditCardInformationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<CreditCardInformation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CreditCardInformationPreviousValues>,
};

export type CreditCardInformationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CreditCardInformationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CreditCardInformationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CreditCardInformationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CreditCardInformationWhereInput>,
};

export type CreditCardInformationUpdateDataInput = {
  cardNumber?: Maybe<Scalars['String']>,
  expiresOnMonth?: Maybe<Scalars['Int']>,
  expiresOnYear?: Maybe<Scalars['Int']>,
  securityCode?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
};

export type CreditCardInformationUpdateInput = {
  cardNumber?: Maybe<Scalars['String']>,
  expiresOnMonth?: Maybe<Scalars['Int']>,
  expiresOnYear?: Maybe<Scalars['Int']>,
  securityCode?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
};

export type CreditCardInformationUpdateManyMutationInput = {
  cardNumber?: Maybe<Scalars['String']>,
  expiresOnMonth?: Maybe<Scalars['Int']>,
  expiresOnYear?: Maybe<Scalars['Int']>,
  securityCode?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
};

export type CreditCardInformationUpdateOneInput = {
  create?: Maybe<CreditCardInformationCreateInput>,
  connect?: Maybe<CreditCardInformationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CreditCardInformationUpdateDataInput>,
  upsert?: Maybe<CreditCardInformationUpsertNestedInput>,
};

export type CreditCardInformationUpsertNestedInput = {
  update: CreditCardInformationUpdateDataInput,
  create: CreditCardInformationCreateInput,
};

export type CreditCardInformationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CreditCardInformationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CreditCardInformationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CreditCardInformationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  cardNumber?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  cardNumber_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  cardNumber_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  cardNumber_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  cardNumber_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  cardNumber_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  cardNumber_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  cardNumber_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  cardNumber_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  cardNumber_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  cardNumber_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  cardNumber_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  cardNumber_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  cardNumber_not_ends_with?: Maybe<Scalars['String']>,
  expiresOnMonth?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  expiresOnMonth_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  expiresOnMonth_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  expiresOnMonth_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  expiresOnMonth_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  expiresOnMonth_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  expiresOnMonth_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  expiresOnMonth_gte?: Maybe<Scalars['Int']>,
  expiresOnYear?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  expiresOnYear_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  expiresOnYear_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  expiresOnYear_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  expiresOnYear_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  expiresOnYear_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  expiresOnYear_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  expiresOnYear_gte?: Maybe<Scalars['Int']>,
  securityCode?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  securityCode_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  securityCode_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  securityCode_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  securityCode_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  securityCode_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  securityCode_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  securityCode_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  securityCode_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  securityCode_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  securityCode_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  securityCode_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  securityCode_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  securityCode_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  firstName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  firstName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  lastName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  lastName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  postalCode_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  postalCode_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  postalCode_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  postalCode_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  postalCode_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  postalCode_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  postalCode_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  postalCode_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  postalCode_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  postalCode_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  postalCode_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  postalCode_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  postalCode_not_ends_with?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  country_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  country_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  country_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  country_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  country_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  country_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  country_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  country_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  country_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  country_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  country_not_ends_with?: Maybe<Scalars['String']>,
};

export type CreditCardInformationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type DebitCardInformation = Node & {
  __typename?: 'DebitCardInformation',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  cardNumber: Scalars['String'],
  expiresOnMonth: Scalars['Int'],
  expiresOnYear: Scalars['Int'],
  securityCode: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  postalCode: Scalars['String'],
  country: Scalars['String'],
};

/** A connection to a list of items. */
export type DebitCardInformationConnection = {
  __typename?: 'DebitCardInformationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<DebitCardInformationEdge>>,
  aggregate: AggregateDebitCardInformation,
};

export type DebitCardInformationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  cardNumber: Scalars['String'],
  expiresOnMonth: Scalars['Int'],
  expiresOnYear: Scalars['Int'],
  securityCode: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  postalCode: Scalars['String'],
  country: Scalars['String'],
};

export type DebitCardInformationCreateOneInput = {
  create?: Maybe<DebitCardInformationCreateInput>,
  connect?: Maybe<DebitCardInformationWhereUniqueInput>,
};

/** An edge in a connection. */
export type DebitCardInformationEdge = {
  __typename?: 'DebitCardInformationEdge',
  /** The item at the end of the edge. */
  node: DebitCardInformation,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum DebitCardInformationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CardNumberAsc = 'cardNumber_ASC',
  CardNumberDesc = 'cardNumber_DESC',
  ExpiresOnMonthAsc = 'expiresOnMonth_ASC',
  ExpiresOnMonthDesc = 'expiresOnMonth_DESC',
  ExpiresOnYearAsc = 'expiresOnYear_ASC',
  ExpiresOnYearDesc = 'expiresOnYear_DESC',
  SecurityCodeAsc = 'securityCode_ASC',
  SecurityCodeDesc = 'securityCode_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC'
}

export type DebitCardInformationPreviousValues = {
  __typename?: 'DebitCardInformationPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  cardNumber: Scalars['String'],
  expiresOnMonth: Scalars['Int'],
  expiresOnYear: Scalars['Int'],
  securityCode: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  postalCode: Scalars['String'],
  country: Scalars['String'],
};

export type DebitCardInformationSubscriptionPayload = {
  __typename?: 'DebitCardInformationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<DebitCardInformation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<DebitCardInformationPreviousValues>,
};

export type DebitCardInformationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DebitCardInformationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DebitCardInformationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DebitCardInformationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<DebitCardInformationWhereInput>,
};

export type DebitCardInformationUpdateDataInput = {
  cardNumber?: Maybe<Scalars['String']>,
  expiresOnMonth?: Maybe<Scalars['Int']>,
  expiresOnYear?: Maybe<Scalars['Int']>,
  securityCode?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
};

export type DebitCardInformationUpdateInput = {
  cardNumber?: Maybe<Scalars['String']>,
  expiresOnMonth?: Maybe<Scalars['Int']>,
  expiresOnYear?: Maybe<Scalars['Int']>,
  securityCode?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
};

export type DebitCardInformationUpdateManyMutationInput = {
  cardNumber?: Maybe<Scalars['String']>,
  expiresOnMonth?: Maybe<Scalars['Int']>,
  expiresOnYear?: Maybe<Scalars['Int']>,
  securityCode?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
};

export type DebitCardInformationUpdateOneInput = {
  create?: Maybe<DebitCardInformationCreateInput>,
  connect?: Maybe<DebitCardInformationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<DebitCardInformationUpdateDataInput>,
  upsert?: Maybe<DebitCardInformationUpsertNestedInput>,
};

export type DebitCardInformationUpsertNestedInput = {
  update: DebitCardInformationUpdateDataInput,
  create: DebitCardInformationCreateInput,
};

export type DebitCardInformationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DebitCardInformationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DebitCardInformationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DebitCardInformationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  cardNumber?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  cardNumber_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  cardNumber_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  cardNumber_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  cardNumber_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  cardNumber_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  cardNumber_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  cardNumber_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  cardNumber_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  cardNumber_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  cardNumber_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  cardNumber_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  cardNumber_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  cardNumber_not_ends_with?: Maybe<Scalars['String']>,
  expiresOnMonth?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  expiresOnMonth_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  expiresOnMonth_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  expiresOnMonth_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  expiresOnMonth_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  expiresOnMonth_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  expiresOnMonth_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  expiresOnMonth_gte?: Maybe<Scalars['Int']>,
  expiresOnYear?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  expiresOnYear_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  expiresOnYear_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  expiresOnYear_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  expiresOnYear_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  expiresOnYear_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  expiresOnYear_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  expiresOnYear_gte?: Maybe<Scalars['Int']>,
  securityCode?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  securityCode_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  securityCode_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  securityCode_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  securityCode_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  securityCode_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  securityCode_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  securityCode_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  securityCode_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  securityCode_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  securityCode_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  securityCode_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  securityCode_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  securityCode_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  firstName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  firstName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  lastName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  lastName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  postalCode_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  postalCode_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  postalCode_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  postalCode_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  postalCode_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  postalCode_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  postalCode_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  postalCode_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  postalCode_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  postalCode_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  postalCode_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  postalCode_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  postalCode_not_ends_with?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  country_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  country_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  country_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  country_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  country_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  country_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  country_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  country_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  country_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  country_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  country_not_ends_with?: Maybe<Scalars['String']>,
};

export type DebitCardInformationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Experience = Node & {
  __typename?: 'Experience',
  id: Scalars['ID'],
  category?: Maybe<ExperienceCategory>,
  title: Scalars['String'],
  host: User,
  location: Location,
  pricePerPerson: Scalars['Int'],
  reviews: Array<Review>,
  preview: Picture,
  popularity: Scalars['Int'],
};


export type ExperienceReviewsArgs = {
  where?: Maybe<ReviewWhereInput>,
  orderBy?: Maybe<ReviewOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ExperienceCategory = Node & {
  __typename?: 'ExperienceCategory',
  id: Scalars['ID'],
  mainColor: Scalars['String'],
  name: Scalars['String'],
};

/** A connection to a list of items. */
export type ExperienceCategoryConnection = {
  __typename?: 'ExperienceCategoryConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ExperienceCategoryEdge>>,
  aggregate: AggregateExperienceCategory,
};

export type ExperienceCategoryCreateInput = {
  id?: Maybe<Scalars['ID']>,
  mainColor?: Maybe<Scalars['String']>,
  name: Scalars['String'],
};

export type ExperienceCategoryCreateOneInput = {
  create?: Maybe<ExperienceCategoryCreateInput>,
  connect?: Maybe<ExperienceCategoryWhereUniqueInput>,
};

/** An edge in a connection. */
export type ExperienceCategoryEdge = {
  __typename?: 'ExperienceCategoryEdge',
  /** The item at the end of the edge. */
  node: ExperienceCategory,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum ExperienceCategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MainColorAsc = 'mainColor_ASC',
  MainColorDesc = 'mainColor_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ExperienceCategoryPreviousValues = {
  __typename?: 'ExperienceCategoryPreviousValues',
  id: Scalars['ID'],
  mainColor: Scalars['String'],
  name: Scalars['String'],
};

export type ExperienceCategorySubscriptionPayload = {
  __typename?: 'ExperienceCategorySubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<ExperienceCategory>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ExperienceCategoryPreviousValues>,
};

export type ExperienceCategorySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExperienceCategorySubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ExperienceCategorySubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ExperienceCategorySubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ExperienceCategoryWhereInput>,
};

export type ExperienceCategoryUpdateDataInput = {
  mainColor?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ExperienceCategoryUpdateInput = {
  mainColor?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ExperienceCategoryUpdateManyMutationInput = {
  mainColor?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ExperienceCategoryUpdateOneInput = {
  create?: Maybe<ExperienceCategoryCreateInput>,
  connect?: Maybe<ExperienceCategoryWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ExperienceCategoryUpdateDataInput>,
  upsert?: Maybe<ExperienceCategoryUpsertNestedInput>,
};

export type ExperienceCategoryUpsertNestedInput = {
  update: ExperienceCategoryUpdateDataInput,
  create: ExperienceCategoryCreateInput,
};

export type ExperienceCategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExperienceCategoryWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ExperienceCategoryWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ExperienceCategoryWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  mainColor?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  mainColor_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  mainColor_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  mainColor_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  mainColor_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  mainColor_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  mainColor_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  mainColor_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  mainColor_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  mainColor_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  mainColor_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  mainColor_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  mainColor_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  mainColor_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
};

export type ExperienceCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** A connection to a list of items. */
export type ExperienceConnection = {
  __typename?: 'ExperienceConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ExperienceEdge>>,
  aggregate: AggregateExperience,
};

export type ExperienceCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  pricePerPerson: Scalars['Int'],
  popularity: Scalars['Int'],
  category?: Maybe<ExperienceCategoryCreateOneInput>,
  host: UserCreateOneWithoutExperiencesInput,
  location: LocationCreateOneInput,
  reviews?: Maybe<ReviewCreateManyWithoutExperienceInput>,
  preview: PictureCreateOneInput,
};

export type ExperienceCreateManyWithoutHostInput = {
  create?: Maybe<Array<ExperienceCreateWithoutHostInput>>,
  connect?: Maybe<Array<ExperienceWhereUniqueInput>>,
};

export type ExperienceCreateOneWithoutReviewsInput = {
  create?: Maybe<ExperienceCreateWithoutReviewsInput>,
  connect?: Maybe<ExperienceWhereUniqueInput>,
};

export type ExperienceCreateWithoutHostInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  pricePerPerson: Scalars['Int'],
  popularity: Scalars['Int'],
  category?: Maybe<ExperienceCategoryCreateOneInput>,
  location: LocationCreateOneInput,
  reviews?: Maybe<ReviewCreateManyWithoutExperienceInput>,
  preview: PictureCreateOneInput,
};

export type ExperienceCreateWithoutReviewsInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  pricePerPerson: Scalars['Int'],
  popularity: Scalars['Int'],
  category?: Maybe<ExperienceCategoryCreateOneInput>,
  host: UserCreateOneWithoutExperiencesInput,
  location: LocationCreateOneInput,
  preview: PictureCreateOneInput,
};

/** An edge in a connection. */
export type ExperienceEdge = {
  __typename?: 'ExperienceEdge',
  /** The item at the end of the edge. */
  node: Experience,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum ExperienceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  PricePerPersonAsc = 'pricePerPerson_ASC',
  PricePerPersonDesc = 'pricePerPerson_DESC',
  PopularityAsc = 'popularity_ASC',
  PopularityDesc = 'popularity_DESC'
}

export type ExperiencePreviousValues = {
  __typename?: 'ExperiencePreviousValues',
  id: Scalars['ID'],
  title: Scalars['String'],
  pricePerPerson: Scalars['Int'],
  popularity: Scalars['Int'],
};

export type ExperiencesByCity = {
  __typename?: 'ExperiencesByCity',
  experiences: Array<Experience>,
  city: City,
};

export type ExperienceScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExperienceScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ExperienceScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ExperienceScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  pricePerPerson?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  pricePerPerson_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  pricePerPerson_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  pricePerPerson_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  pricePerPerson_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  pricePerPerson_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  pricePerPerson_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  pricePerPerson_gte?: Maybe<Scalars['Int']>,
  popularity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  popularity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  popularity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  popularity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  popularity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  popularity_gte?: Maybe<Scalars['Int']>,
};

export type ExperienceSubscriptionPayload = {
  __typename?: 'ExperienceSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Experience>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ExperiencePreviousValues>,
};

export type ExperienceSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExperienceSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ExperienceSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ExperienceSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ExperienceWhereInput>,
};

export type ExperienceUpdateInput = {
  title?: Maybe<Scalars['String']>,
  pricePerPerson?: Maybe<Scalars['Int']>,
  popularity?: Maybe<Scalars['Int']>,
  category?: Maybe<ExperienceCategoryUpdateOneInput>,
  host?: Maybe<UserUpdateOneRequiredWithoutExperiencesInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  reviews?: Maybe<ReviewUpdateManyWithoutExperienceInput>,
  preview?: Maybe<PictureUpdateOneRequiredInput>,
};

export type ExperienceUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>,
  pricePerPerson?: Maybe<Scalars['Int']>,
  popularity?: Maybe<Scalars['Int']>,
};

export type ExperienceUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>,
  pricePerPerson?: Maybe<Scalars['Int']>,
  popularity?: Maybe<Scalars['Int']>,
};

export type ExperienceUpdateManyWithoutHostInput = {
  create?: Maybe<Array<ExperienceCreateWithoutHostInput>>,
  connect?: Maybe<Array<ExperienceWhereUniqueInput>>,
  set?: Maybe<Array<ExperienceWhereUniqueInput>>,
  disconnect?: Maybe<Array<ExperienceWhereUniqueInput>>,
  delete?: Maybe<Array<ExperienceWhereUniqueInput>>,
  update?: Maybe<Array<ExperienceUpdateWithWhereUniqueWithoutHostInput>>,
  updateMany?: Maybe<Array<ExperienceUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ExperienceScalarWhereInput>>,
  upsert?: Maybe<Array<ExperienceUpsertWithWhereUniqueWithoutHostInput>>,
};

export type ExperienceUpdateManyWithWhereNestedInput = {
  where: ExperienceScalarWhereInput,
  data: ExperienceUpdateManyDataInput,
};

export type ExperienceUpdateOneWithoutReviewsInput = {
  create?: Maybe<ExperienceCreateWithoutReviewsInput>,
  connect?: Maybe<ExperienceWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ExperienceUpdateWithoutReviewsDataInput>,
  upsert?: Maybe<ExperienceUpsertWithoutReviewsInput>,
};

export type ExperienceUpdateWithoutHostDataInput = {
  title?: Maybe<Scalars['String']>,
  pricePerPerson?: Maybe<Scalars['Int']>,
  popularity?: Maybe<Scalars['Int']>,
  category?: Maybe<ExperienceCategoryUpdateOneInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  reviews?: Maybe<ReviewUpdateManyWithoutExperienceInput>,
  preview?: Maybe<PictureUpdateOneRequiredInput>,
};

export type ExperienceUpdateWithoutReviewsDataInput = {
  title?: Maybe<Scalars['String']>,
  pricePerPerson?: Maybe<Scalars['Int']>,
  popularity?: Maybe<Scalars['Int']>,
  category?: Maybe<ExperienceCategoryUpdateOneInput>,
  host?: Maybe<UserUpdateOneRequiredWithoutExperiencesInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  preview?: Maybe<PictureUpdateOneRequiredInput>,
};

export type ExperienceUpdateWithWhereUniqueWithoutHostInput = {
  where: ExperienceWhereUniqueInput,
  data: ExperienceUpdateWithoutHostDataInput,
};

export type ExperienceUpsertWithoutReviewsInput = {
  update: ExperienceUpdateWithoutReviewsDataInput,
  create: ExperienceCreateWithoutReviewsInput,
};

export type ExperienceUpsertWithWhereUniqueWithoutHostInput = {
  where: ExperienceWhereUniqueInput,
  update: ExperienceUpdateWithoutHostDataInput,
  create: ExperienceCreateWithoutHostInput,
};

export type ExperienceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExperienceWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ExperienceWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ExperienceWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  pricePerPerson?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  pricePerPerson_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  pricePerPerson_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  pricePerPerson_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  pricePerPerson_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  pricePerPerson_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  pricePerPerson_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  pricePerPerson_gte?: Maybe<Scalars['Int']>,
  popularity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  popularity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  popularity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  popularity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  popularity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  popularity_gte?: Maybe<Scalars['Int']>,
  category?: Maybe<ExperienceCategoryWhereInput>,
  host?: Maybe<UserWhereInput>,
  location?: Maybe<LocationWhereInput>,
  reviews_every?: Maybe<ReviewWhereInput>,
  reviews_some?: Maybe<ReviewWhereInput>,
  reviews_none?: Maybe<ReviewWhereInput>,
  preview?: Maybe<PictureWhereInput>,
};

export type ExperienceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Location = Node & {
  __typename?: 'Location',
  title?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  lat: Scalars['Float'],
  lng: Scalars['Float'],
  neighbourHood?: Maybe<Neighbourhood>,
  address: Scalars['String'],
  directions: Scalars['String'],
};

/** A connection to a list of items. */
export type LocationConnection = {
  __typename?: 'LocationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<LocationEdge>>,
  aggregate: AggregateLocation,
};

export type LocationCreateInput = {
  title?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  lat: Scalars['Float'],
  lng: Scalars['Float'],
  address: Scalars['String'],
  directions: Scalars['String'],
  neighbourHood?: Maybe<NeighbourhoodCreateOneWithoutLocationsInput>,
};

export type LocationCreateManyInput = {
  create?: Maybe<Array<LocationCreateInput>>,
  connect?: Maybe<Array<LocationWhereUniqueInput>>,
};

export type LocationCreateManyWithoutNeighbourHoodInput = {
  create?: Maybe<Array<LocationCreateWithoutNeighbourHoodInput>>,
  connect?: Maybe<Array<LocationWhereUniqueInput>>,
};

export type LocationCreateOneInput = {
  create?: Maybe<LocationCreateInput>,
  connect?: Maybe<LocationWhereUniqueInput>,
};

export type LocationCreateWithoutNeighbourHoodInput = {
  title?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  lat: Scalars['Float'],
  lng: Scalars['Float'],
  address: Scalars['String'],
  directions: Scalars['String'],
};

/** An edge in a connection. */
export type LocationEdge = {
  __typename?: 'LocationEdge',
  /** The item at the end of the edge. */
  node: Location,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum LocationOrderByInput {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LatAsc = 'lat_ASC',
  LatDesc = 'lat_DESC',
  LngAsc = 'lng_ASC',
  LngDesc = 'lng_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  DirectionsAsc = 'directions_ASC',
  DirectionsDesc = 'directions_DESC'
}

export type LocationPreviousValues = {
  __typename?: 'LocationPreviousValues',
  title?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  lat: Scalars['Float'],
  lng: Scalars['Float'],
  address: Scalars['String'],
  directions: Scalars['String'],
};

export type LocationScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LocationScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LocationScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LocationScalarWhereInput>>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  lat?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  lat_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  lat_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  lat_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  lat_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  lat_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  lat_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  lat_gte?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  lng_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  lng_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  lng_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  lng_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  lng_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  lng_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  lng_gte?: Maybe<Scalars['Float']>,
  address?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>,
  directions?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  directions_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  directions_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  directions_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  directions_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  directions_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  directions_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  directions_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  directions_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  directions_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  directions_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  directions_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  directions_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  directions_not_ends_with?: Maybe<Scalars['String']>,
};

export type LocationSubscriptionPayload = {
  __typename?: 'LocationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Location>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<LocationPreviousValues>,
};

export type LocationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LocationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LocationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LocationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<LocationWhereInput>,
};

export type LocationUpdateDataInput = {
  title?: Maybe<Scalars['String']>,
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  address?: Maybe<Scalars['String']>,
  directions?: Maybe<Scalars['String']>,
  neighbourHood?: Maybe<NeighbourhoodUpdateOneWithoutLocationsInput>,
};

export type LocationUpdateInput = {
  title?: Maybe<Scalars['String']>,
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  address?: Maybe<Scalars['String']>,
  directions?: Maybe<Scalars['String']>,
  neighbourHood?: Maybe<NeighbourhoodUpdateOneWithoutLocationsInput>,
};

export type LocationUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>,
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  address?: Maybe<Scalars['String']>,
  directions?: Maybe<Scalars['String']>,
};

export type LocationUpdateManyInput = {
  create?: Maybe<Array<LocationCreateInput>>,
  connect?: Maybe<Array<LocationWhereUniqueInput>>,
  set?: Maybe<Array<LocationWhereUniqueInput>>,
  disconnect?: Maybe<Array<LocationWhereUniqueInput>>,
  delete?: Maybe<Array<LocationWhereUniqueInput>>,
  update?: Maybe<Array<LocationUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<LocationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<LocationScalarWhereInput>>,
  upsert?: Maybe<Array<LocationUpsertWithWhereUniqueNestedInput>>,
};

export type LocationUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>,
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  address?: Maybe<Scalars['String']>,
  directions?: Maybe<Scalars['String']>,
};

export type LocationUpdateManyWithoutNeighbourHoodInput = {
  create?: Maybe<Array<LocationCreateWithoutNeighbourHoodInput>>,
  connect?: Maybe<Array<LocationWhereUniqueInput>>,
  set?: Maybe<Array<LocationWhereUniqueInput>>,
  disconnect?: Maybe<Array<LocationWhereUniqueInput>>,
  delete?: Maybe<Array<LocationWhereUniqueInput>>,
  update?: Maybe<Array<LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput>>,
  updateMany?: Maybe<Array<LocationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<LocationScalarWhereInput>>,
  upsert?: Maybe<Array<LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput>>,
};

export type LocationUpdateManyWithWhereNestedInput = {
  where: LocationScalarWhereInput,
  data: LocationUpdateManyDataInput,
};

export type LocationUpdateOneInput = {
  create?: Maybe<LocationCreateInput>,
  connect?: Maybe<LocationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<LocationUpdateDataInput>,
  upsert?: Maybe<LocationUpsertNestedInput>,
};

export type LocationUpdateOneRequiredInput = {
  create?: Maybe<LocationCreateInput>,
  connect?: Maybe<LocationWhereUniqueInput>,
  update?: Maybe<LocationUpdateDataInput>,
  upsert?: Maybe<LocationUpsertNestedInput>,
};

export type LocationUpdateWithoutNeighbourHoodDataInput = {
  title?: Maybe<Scalars['String']>,
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  address?: Maybe<Scalars['String']>,
  directions?: Maybe<Scalars['String']>,
};

export type LocationUpdateWithWhereUniqueNestedInput = {
  where: LocationWhereUniqueInput,
  data: LocationUpdateDataInput,
};

export type LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput = {
  where: LocationWhereUniqueInput,
  data: LocationUpdateWithoutNeighbourHoodDataInput,
};

export type LocationUpsertNestedInput = {
  update: LocationUpdateDataInput,
  create: LocationCreateInput,
};

export type LocationUpsertWithWhereUniqueNestedInput = {
  where: LocationWhereUniqueInput,
  update: LocationUpdateDataInput,
  create: LocationCreateInput,
};

export type LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput = {
  where: LocationWhereUniqueInput,
  update: LocationUpdateWithoutNeighbourHoodDataInput,
  create: LocationCreateWithoutNeighbourHoodInput,
};

export type LocationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LocationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LocationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LocationWhereInput>>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  lat?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  lat_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  lat_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  lat_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  lat_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  lat_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  lat_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  lat_gte?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  lng_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  lng_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  lng_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  lng_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  lng_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  lng_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  lng_gte?: Maybe<Scalars['Float']>,
  address?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>,
  directions?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  directions_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  directions_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  directions_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  directions_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  directions_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  directions_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  directions_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  directions_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  directions_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  directions_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  directions_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  directions_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  directions_not_ends_with?: Maybe<Scalars['String']>,
  neighbourHood?: Maybe<NeighbourhoodWhereInput>,
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type MenuItem = Node & {
  __typename?: 'MenuItem',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  shortDescription: Scalars['String'],
  title: Scalars['String'],
  description: Scalars['String'],
  pricing: Pricing,
  pictures: Array<Picture>,
  reviews: Array<Review>,
};


export type MenuItemPicturesArgs = {
  where?: Maybe<PictureWhereInput>,
  orderBy?: Maybe<PictureOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type MenuItemReviewsArgs = {
  where?: Maybe<ReviewWhereInput>,
  orderBy?: Maybe<ReviewOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type MenuItemConnection = {
  __typename?: 'MenuItemConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<MenuItemEdge>>,
  aggregate: AggregateMenuItem,
};

export type MenuItemCreateInput = {
  id?: Maybe<Scalars['ID']>,
  shortDescription: Scalars['String'],
  title: Scalars['String'],
  description: Scalars['String'],
  pricing: PricingCreateOneInput,
  pictures?: Maybe<PictureCreateManyInput>,
  reviews?: Maybe<ReviewCreateManyInput>,
};

export type MenuItemCreateManyInput = {
  create?: Maybe<Array<MenuItemCreateInput>>,
  connect?: Maybe<Array<MenuItemWhereUniqueInput>>,
};

/** An edge in a connection. */
export type MenuItemEdge = {
  __typename?: 'MenuItemEdge',
  /** The item at the end of the edge. */
  node: MenuItem,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum MenuItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

export type MenuItemPreviousValues = {
  __typename?: 'MenuItemPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  shortDescription: Scalars['String'],
  title: Scalars['String'],
  description: Scalars['String'],
};

export type MenuItemScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MenuItemScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MenuItemScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MenuItemScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  shortDescription?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  shortDescription_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  shortDescription_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  shortDescription_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  shortDescription_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  shortDescription_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  shortDescription_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  shortDescription_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  shortDescription_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  shortDescription_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  shortDescription_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  shortDescription_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  shortDescription_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  shortDescription_not_ends_with?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
};

export type MenuItemSubscriptionPayload = {
  __typename?: 'MenuItemSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<MenuItem>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MenuItemPreviousValues>,
};

export type MenuItemSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MenuItemSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MenuItemSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MenuItemSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MenuItemWhereInput>,
};

export type MenuItemUpdateDataInput = {
  shortDescription?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  pricing?: Maybe<PricingUpdateOneRequiredInput>,
  pictures?: Maybe<PictureUpdateManyInput>,
  reviews?: Maybe<ReviewUpdateManyInput>,
};

export type MenuItemUpdateInput = {
  shortDescription?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  pricing?: Maybe<PricingUpdateOneRequiredInput>,
  pictures?: Maybe<PictureUpdateManyInput>,
  reviews?: Maybe<ReviewUpdateManyInput>,
};

export type MenuItemUpdateManyDataInput = {
  shortDescription?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type MenuItemUpdateManyInput = {
  create?: Maybe<Array<MenuItemCreateInput>>,
  connect?: Maybe<Array<MenuItemWhereUniqueInput>>,
  set?: Maybe<Array<MenuItemWhereUniqueInput>>,
  disconnect?: Maybe<Array<MenuItemWhereUniqueInput>>,
  delete?: Maybe<Array<MenuItemWhereUniqueInput>>,
  update?: Maybe<Array<MenuItemUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<MenuItemUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MenuItemScalarWhereInput>>,
  upsert?: Maybe<Array<MenuItemUpsertWithWhereUniqueNestedInput>>,
};

export type MenuItemUpdateManyMutationInput = {
  shortDescription?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type MenuItemUpdateManyWithWhereNestedInput = {
  where: MenuItemScalarWhereInput,
  data: MenuItemUpdateManyDataInput,
};

export type MenuItemUpdateWithWhereUniqueNestedInput = {
  where: MenuItemWhereUniqueInput,
  data: MenuItemUpdateDataInput,
};

export type MenuItemUpsertWithWhereUniqueNestedInput = {
  where: MenuItemWhereUniqueInput,
  update: MenuItemUpdateDataInput,
  create: MenuItemCreateInput,
};

export type MenuItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MenuItemWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MenuItemWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MenuItemWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  shortDescription?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  shortDescription_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  shortDescription_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  shortDescription_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  shortDescription_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  shortDescription_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  shortDescription_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  shortDescription_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  shortDescription_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  shortDescription_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  shortDescription_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  shortDescription_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  shortDescription_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  shortDescription_not_ends_with?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  pricing?: Maybe<PricingWhereInput>,
  pictures_every?: Maybe<PictureWhereInput>,
  pictures_some?: Maybe<PictureWhereInput>,
  pictures_none?: Maybe<PictureWhereInput>,
  reviews_every?: Maybe<ReviewWhereInput>,
  reviews_some?: Maybe<ReviewWhereInput>,
  reviews_none?: Maybe<ReviewWhereInput>,
};

export type MenuItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Message = Node & {
  __typename?: 'Message',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  from: User,
  to: User,
  deliveredAt: Scalars['DateTime'],
  readAt: Scalars['DateTime'],
};

/** A connection to a list of items. */
export type MessageConnection = {
  __typename?: 'MessageConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<MessageEdge>>,
  aggregate: AggregateMessage,
};

export type MessageCreateInput = {
  id?: Maybe<Scalars['ID']>,
  deliveredAt: Scalars['DateTime'],
  readAt: Scalars['DateTime'],
  from: UserCreateOneWithoutSentMessagesInput,
  to: UserCreateOneWithoutReceivedMessagesInput,
};

export type MessageCreateManyWithoutFromInput = {
  create?: Maybe<Array<MessageCreateWithoutFromInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
};

export type MessageCreateManyWithoutToInput = {
  create?: Maybe<Array<MessageCreateWithoutToInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
};

export type MessageCreateWithoutFromInput = {
  id?: Maybe<Scalars['ID']>,
  deliveredAt: Scalars['DateTime'],
  readAt: Scalars['DateTime'],
  to: UserCreateOneWithoutReceivedMessagesInput,
};

export type MessageCreateWithoutToInput = {
  id?: Maybe<Scalars['ID']>,
  deliveredAt: Scalars['DateTime'],
  readAt: Scalars['DateTime'],
  from: UserCreateOneWithoutSentMessagesInput,
};

/** An edge in a connection. */
export type MessageEdge = {
  __typename?: 'MessageEdge',
  /** The item at the end of the edge. */
  node: Message,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum MessageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeliveredAtAsc = 'deliveredAt_ASC',
  DeliveredAtDesc = 'deliveredAt_DESC',
  ReadAtAsc = 'readAt_ASC',
  ReadAtDesc = 'readAt_DESC'
}

export type MessagePreviousValues = {
  __typename?: 'MessagePreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  deliveredAt: Scalars['DateTime'],
  readAt: Scalars['DateTime'],
};

export type MessageScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MessageScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MessageScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MessageScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  deliveredAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  deliveredAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  deliveredAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  deliveredAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  deliveredAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  deliveredAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  deliveredAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  deliveredAt_gte?: Maybe<Scalars['DateTime']>,
  readAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  readAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  readAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  readAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  readAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  readAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  readAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  readAt_gte?: Maybe<Scalars['DateTime']>,
};

export type MessageSubscriptionPayload = {
  __typename?: 'MessageSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Message>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MessagePreviousValues>,
};

export type MessageSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MessageSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MessageSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MessageSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MessageWhereInput>,
};

export type MessageUpdateInput = {
  deliveredAt?: Maybe<Scalars['DateTime']>,
  readAt?: Maybe<Scalars['DateTime']>,
  from?: Maybe<UserUpdateOneRequiredWithoutSentMessagesInput>,
  to?: Maybe<UserUpdateOneRequiredWithoutReceivedMessagesInput>,
};

export type MessageUpdateManyDataInput = {
  deliveredAt?: Maybe<Scalars['DateTime']>,
  readAt?: Maybe<Scalars['DateTime']>,
};

export type MessageUpdateManyMutationInput = {
  deliveredAt?: Maybe<Scalars['DateTime']>,
  readAt?: Maybe<Scalars['DateTime']>,
};

export type MessageUpdateManyWithoutFromInput = {
  create?: Maybe<Array<MessageCreateWithoutFromInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
  set?: Maybe<Array<MessageWhereUniqueInput>>,
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>,
  delete?: Maybe<Array<MessageWhereUniqueInput>>,
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutFromInput>>,
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>,
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutFromInput>>,
};

export type MessageUpdateManyWithoutToInput = {
  create?: Maybe<Array<MessageCreateWithoutToInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
  set?: Maybe<Array<MessageWhereUniqueInput>>,
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>,
  delete?: Maybe<Array<MessageWhereUniqueInput>>,
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutToInput>>,
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>,
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutToInput>>,
};

export type MessageUpdateManyWithWhereNestedInput = {
  where: MessageScalarWhereInput,
  data: MessageUpdateManyDataInput,
};

export type MessageUpdateWithoutFromDataInput = {
  deliveredAt?: Maybe<Scalars['DateTime']>,
  readAt?: Maybe<Scalars['DateTime']>,
  to?: Maybe<UserUpdateOneRequiredWithoutReceivedMessagesInput>,
};

export type MessageUpdateWithoutToDataInput = {
  deliveredAt?: Maybe<Scalars['DateTime']>,
  readAt?: Maybe<Scalars['DateTime']>,
  from?: Maybe<UserUpdateOneRequiredWithoutSentMessagesInput>,
};

export type MessageUpdateWithWhereUniqueWithoutFromInput = {
  where: MessageWhereUniqueInput,
  data: MessageUpdateWithoutFromDataInput,
};

export type MessageUpdateWithWhereUniqueWithoutToInput = {
  where: MessageWhereUniqueInput,
  data: MessageUpdateWithoutToDataInput,
};

export type MessageUpsertWithWhereUniqueWithoutFromInput = {
  where: MessageWhereUniqueInput,
  update: MessageUpdateWithoutFromDataInput,
  create: MessageCreateWithoutFromInput,
};

export type MessageUpsertWithWhereUniqueWithoutToInput = {
  where: MessageWhereUniqueInput,
  update: MessageUpdateWithoutToDataInput,
  create: MessageCreateWithoutToInput,
};

export type MessageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MessageWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MessageWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MessageWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  deliveredAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  deliveredAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  deliveredAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  deliveredAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  deliveredAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  deliveredAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  deliveredAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  deliveredAt_gte?: Maybe<Scalars['DateTime']>,
  readAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  readAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  readAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  readAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  readAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  readAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  readAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  readAt_gte?: Maybe<Scalars['DateTime']>,
  from?: Maybe<UserWhereInput>,
  to?: Maybe<UserWhereInput>,
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  createUser: User,
  createNeighbourhood: Neighbourhood,
  createCity: City,
  createExperience: Experience,
  createPayment: Payment,
  createPaymentAccount: PaymentAccount,
  createMessage: Message,
  createNotification: Notification,
  createRestaurant: Restaurant,
  createMenuItem: MenuItem,
  createPaypalInformation: PaypalInformation,
  createPolicies: Policies,
  createCreditCardInformation: CreditCardInformation,
  createLocation: Location,
  createReview: Review,
  createOrder: Order,
  createExperienceCategory: ExperienceCategory,
  createPaytmInformation: PaytmInformation,
  createDebitCardInformation: DebitCardInformation,
  createPricing: Pricing,
  createPicture: Picture,
  updateUser?: Maybe<User>,
  updateNeighbourhood?: Maybe<Neighbourhood>,
  updateCity?: Maybe<City>,
  updateExperience?: Maybe<Experience>,
  updatePayment?: Maybe<Payment>,
  updatePaymentAccount?: Maybe<PaymentAccount>,
  updateMessage?: Maybe<Message>,
  updateNotification?: Maybe<Notification>,
  updateRestaurant?: Maybe<Restaurant>,
  updateMenuItem?: Maybe<MenuItem>,
  updatePaypalInformation?: Maybe<PaypalInformation>,
  updatePolicies?: Maybe<Policies>,
  updateCreditCardInformation?: Maybe<CreditCardInformation>,
  updateLocation?: Maybe<Location>,
  updateReview?: Maybe<Review>,
  updateOrder?: Maybe<Order>,
  updateExperienceCategory?: Maybe<ExperienceCategory>,
  updatePaytmInformation?: Maybe<PaytmInformation>,
  updateDebitCardInformation?: Maybe<DebitCardInformation>,
  updatePricing?: Maybe<Pricing>,
  updatePicture?: Maybe<Picture>,
  deleteUser?: Maybe<User>,
  deleteNeighbourhood?: Maybe<Neighbourhood>,
  deleteCity?: Maybe<City>,
  deleteExperience?: Maybe<Experience>,
  deletePayment?: Maybe<Payment>,
  deletePaymentAccount?: Maybe<PaymentAccount>,
  deleteMessage?: Maybe<Message>,
  deleteNotification?: Maybe<Notification>,
  deleteRestaurant?: Maybe<Restaurant>,
  deleteMenuItem?: Maybe<MenuItem>,
  deletePaypalInformation?: Maybe<PaypalInformation>,
  deletePolicies?: Maybe<Policies>,
  deleteCreditCardInformation?: Maybe<CreditCardInformation>,
  deleteLocation?: Maybe<Location>,
  deleteReview?: Maybe<Review>,
  deleteOrder?: Maybe<Order>,
  deleteExperienceCategory?: Maybe<ExperienceCategory>,
  deletePaytmInformation?: Maybe<PaytmInformation>,
  deleteDebitCardInformation?: Maybe<DebitCardInformation>,
  deletePricing?: Maybe<Pricing>,
  deletePicture?: Maybe<Picture>,
  upsertUser: User,
  upsertNeighbourhood: Neighbourhood,
  upsertCity: City,
  upsertExperience: Experience,
  upsertPayment: Payment,
  upsertPaymentAccount: PaymentAccount,
  upsertMessage: Message,
  upsertNotification: Notification,
  upsertRestaurant: Restaurant,
  upsertMenuItem: MenuItem,
  upsertPaypalInformation: PaypalInformation,
  upsertPolicies: Policies,
  upsertCreditCardInformation: CreditCardInformation,
  upsertLocation: Location,
  upsertReview: Review,
  upsertOrder: Order,
  upsertExperienceCategory: ExperienceCategory,
  upsertPaytmInformation: PaytmInformation,
  upsertDebitCardInformation: DebitCardInformation,
  upsertPricing: Pricing,
  upsertPicture: Picture,
  updateManyUsers: BatchPayload,
  updateManyNeighbourhoods: BatchPayload,
  updateManyCities: BatchPayload,
  updateManyExperiences: BatchPayload,
  updateManyPayments: BatchPayload,
  updateManyPaymentAccounts: BatchPayload,
  updateManyMessages: BatchPayload,
  updateManyNotifications: BatchPayload,
  updateManyRestaurants: BatchPayload,
  updateManyMenuItems: BatchPayload,
  updateManyPaypalInformations: BatchPayload,
  updateManyPolicieses: BatchPayload,
  updateManyCreditCardInformations: BatchPayload,
  updateManyLocations: BatchPayload,
  updateManyReviews: BatchPayload,
  updateManyOrders: BatchPayload,
  updateManyExperienceCategories: BatchPayload,
  updateManyPaytmInformations: BatchPayload,
  updateManyDebitCardInformations: BatchPayload,
  updateManyPricings: BatchPayload,
  updateManyPictures: BatchPayload,
  deleteManyUsers: BatchPayload,
  deleteManyNeighbourhoods: BatchPayload,
  deleteManyCities: BatchPayload,
  deleteManyExperiences: BatchPayload,
  deleteManyPayments: BatchPayload,
  deleteManyPaymentAccounts: BatchPayload,
  deleteManyMessages: BatchPayload,
  deleteManyNotifications: BatchPayload,
  deleteManyRestaurants: BatchPayload,
  deleteManyMenuItems: BatchPayload,
  deleteManyPaypalInformations: BatchPayload,
  deleteManyPolicieses: BatchPayload,
  deleteManyCreditCardInformations: BatchPayload,
  deleteManyLocations: BatchPayload,
  deleteManyReviews: BatchPayload,
  deleteManyOrders: BatchPayload,
  deleteManyExperienceCategories: BatchPayload,
  deleteManyPaytmInformations: BatchPayload,
  deleteManyDebitCardInformations: BatchPayload,
  deleteManyPricings: BatchPayload,
  deleteManyPictures: BatchPayload,
  login: AuthPayload,
  addPaymentMethod: MutationResult,
  book: MutationResult,
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationCreateNeighbourhoodArgs = {
  data: NeighbourhoodCreateInput
};


export type MutationCreateCityArgs = {
  data: CityCreateInput
};


export type MutationCreateExperienceArgs = {
  data: ExperienceCreateInput
};


export type MutationCreatePaymentArgs = {
  data: PaymentCreateInput
};


export type MutationCreatePaymentAccountArgs = {
  data: PaymentAccountCreateInput
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput
};


export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput
};


export type MutationCreateRestaurantArgs = {
  data: RestaurantCreateInput
};


export type MutationCreateMenuItemArgs = {
  data: MenuItemCreateInput
};


export type MutationCreatePaypalInformationArgs = {
  data: PaypalInformationCreateInput
};


export type MutationCreatePoliciesArgs = {
  data: PoliciesCreateInput
};


export type MutationCreateCreditCardInformationArgs = {
  data: CreditCardInformationCreateInput
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput
};


export type MutationCreateExperienceCategoryArgs = {
  data: ExperienceCategoryCreateInput
};


export type MutationCreatePaytmInformationArgs = {
  data: PaytmInformationCreateInput
};


export type MutationCreateDebitCardInformationArgs = {
  data: DebitCardInformationCreateInput
};


export type MutationCreatePricingArgs = {
  data: PricingCreateInput
};


export type MutationCreatePictureArgs = {
  data: PictureCreateInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateNeighbourhoodArgs = {
  data: NeighbourhoodUpdateInput,
  where: NeighbourhoodWhereUniqueInput
};


export type MutationUpdateCityArgs = {
  data: CityUpdateInput,
  where: CityWhereUniqueInput
};


export type MutationUpdateExperienceArgs = {
  data: ExperienceUpdateInput,
  where: ExperienceWhereUniqueInput
};


export type MutationUpdatePaymentArgs = {
  data: PaymentUpdateInput,
  where: PaymentWhereUniqueInput
};


export type MutationUpdatePaymentAccountArgs = {
  data: PaymentAccountUpdateInput,
  where: PaymentAccountWhereUniqueInput
};


export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput,
  where: MessageWhereUniqueInput
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput,
  where: NotificationWhereUniqueInput
};


export type MutationUpdateRestaurantArgs = {
  data: RestaurantUpdateInput,
  where: RestaurantWhereUniqueInput
};


export type MutationUpdateMenuItemArgs = {
  data: MenuItemUpdateInput,
  where: MenuItemWhereUniqueInput
};


export type MutationUpdatePaypalInformationArgs = {
  data: PaypalInformationUpdateInput,
  where: PaypalInformationWhereUniqueInput
};


export type MutationUpdatePoliciesArgs = {
  data: PoliciesUpdateInput,
  where: PoliciesWhereUniqueInput
};


export type MutationUpdateCreditCardInformationArgs = {
  data: CreditCardInformationUpdateInput,
  where: CreditCardInformationWhereUniqueInput
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput,
  where: LocationWhereUniqueInput
};


export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput,
  where: ReviewWhereUniqueInput
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput,
  where: OrderWhereUniqueInput
};


export type MutationUpdateExperienceCategoryArgs = {
  data: ExperienceCategoryUpdateInput,
  where: ExperienceCategoryWhereUniqueInput
};


export type MutationUpdatePaytmInformationArgs = {
  data: PaytmInformationUpdateInput,
  where: PaytmInformationWhereUniqueInput
};


export type MutationUpdateDebitCardInformationArgs = {
  data: DebitCardInformationUpdateInput,
  where: DebitCardInformationWhereUniqueInput
};


export type MutationUpdatePricingArgs = {
  data: PricingUpdateInput,
  where: PricingWhereUniqueInput
};


export type MutationUpdatePictureArgs = {
  data: PictureUpdateInput,
  where: PictureWhereUniqueInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteNeighbourhoodArgs = {
  where: NeighbourhoodWhereUniqueInput
};


export type MutationDeleteCityArgs = {
  where: CityWhereUniqueInput
};


export type MutationDeleteExperienceArgs = {
  where: ExperienceWhereUniqueInput
};


export type MutationDeletePaymentArgs = {
  where: PaymentWhereUniqueInput
};


export type MutationDeletePaymentAccountArgs = {
  where: PaymentAccountWhereUniqueInput
};


export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput
};


export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput
};


export type MutationDeleteRestaurantArgs = {
  where: RestaurantWhereUniqueInput
};


export type MutationDeleteMenuItemArgs = {
  where: MenuItemWhereUniqueInput
};


export type MutationDeletePaypalInformationArgs = {
  where: PaypalInformationWhereUniqueInput
};


export type MutationDeletePoliciesArgs = {
  where: PoliciesWhereUniqueInput
};


export type MutationDeleteCreditCardInformationArgs = {
  where: CreditCardInformationWhereUniqueInput
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput
};


export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput
};


export type MutationDeleteExperienceCategoryArgs = {
  where: ExperienceCategoryWhereUniqueInput
};


export type MutationDeletePaytmInformationArgs = {
  where: PaytmInformationWhereUniqueInput
};


export type MutationDeleteDebitCardInformationArgs = {
  where: DebitCardInformationWhereUniqueInput
};


export type MutationDeletePricingArgs = {
  where: PricingWhereUniqueInput
};


export type MutationDeletePictureArgs = {
  where: PictureWhereUniqueInput
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationUpsertNeighbourhoodArgs = {
  where: NeighbourhoodWhereUniqueInput,
  create: NeighbourhoodCreateInput,
  update: NeighbourhoodUpdateInput
};


export type MutationUpsertCityArgs = {
  where: CityWhereUniqueInput,
  create: CityCreateInput,
  update: CityUpdateInput
};


export type MutationUpsertExperienceArgs = {
  where: ExperienceWhereUniqueInput,
  create: ExperienceCreateInput,
  update: ExperienceUpdateInput
};


export type MutationUpsertPaymentArgs = {
  where: PaymentWhereUniqueInput,
  create: PaymentCreateInput,
  update: PaymentUpdateInput
};


export type MutationUpsertPaymentAccountArgs = {
  where: PaymentAccountWhereUniqueInput,
  create: PaymentAccountCreateInput,
  update: PaymentAccountUpdateInput
};


export type MutationUpsertMessageArgs = {
  where: MessageWhereUniqueInput,
  create: MessageCreateInput,
  update: MessageUpdateInput
};


export type MutationUpsertNotificationArgs = {
  where: NotificationWhereUniqueInput,
  create: NotificationCreateInput,
  update: NotificationUpdateInput
};


export type MutationUpsertRestaurantArgs = {
  where: RestaurantWhereUniqueInput,
  create: RestaurantCreateInput,
  update: RestaurantUpdateInput
};


export type MutationUpsertMenuItemArgs = {
  where: MenuItemWhereUniqueInput,
  create: MenuItemCreateInput,
  update: MenuItemUpdateInput
};


export type MutationUpsertPaypalInformationArgs = {
  where: PaypalInformationWhereUniqueInput,
  create: PaypalInformationCreateInput,
  update: PaypalInformationUpdateInput
};


export type MutationUpsertPoliciesArgs = {
  where: PoliciesWhereUniqueInput,
  create: PoliciesCreateInput,
  update: PoliciesUpdateInput
};


export type MutationUpsertCreditCardInformationArgs = {
  where: CreditCardInformationWhereUniqueInput,
  create: CreditCardInformationCreateInput,
  update: CreditCardInformationUpdateInput
};


export type MutationUpsertLocationArgs = {
  where: LocationWhereUniqueInput,
  create: LocationCreateInput,
  update: LocationUpdateInput
};


export type MutationUpsertReviewArgs = {
  where: ReviewWhereUniqueInput,
  create: ReviewCreateInput,
  update: ReviewUpdateInput
};


export type MutationUpsertOrderArgs = {
  where: OrderWhereUniqueInput,
  create: OrderCreateInput,
  update: OrderUpdateInput
};


export type MutationUpsertExperienceCategoryArgs = {
  where: ExperienceCategoryWhereUniqueInput,
  create: ExperienceCategoryCreateInput,
  update: ExperienceCategoryUpdateInput
};


export type MutationUpsertPaytmInformationArgs = {
  where: PaytmInformationWhereUniqueInput,
  create: PaytmInformationCreateInput,
  update: PaytmInformationUpdateInput
};


export type MutationUpsertDebitCardInformationArgs = {
  where: DebitCardInformationWhereUniqueInput,
  create: DebitCardInformationCreateInput,
  update: DebitCardInformationUpdateInput
};


export type MutationUpsertPricingArgs = {
  where: PricingWhereUniqueInput,
  create: PricingCreateInput,
  update: PricingUpdateInput
};


export type MutationUpsertPictureArgs = {
  where: PictureWhereUniqueInput,
  create: PictureCreateInput,
  update: PictureUpdateInput
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpdateManyNeighbourhoodsArgs = {
  data: NeighbourhoodUpdateManyMutationInput,
  where?: Maybe<NeighbourhoodWhereInput>
};


export type MutationUpdateManyCitiesArgs = {
  data: CityUpdateManyMutationInput,
  where?: Maybe<CityWhereInput>
};


export type MutationUpdateManyExperiencesArgs = {
  data: ExperienceUpdateManyMutationInput,
  where?: Maybe<ExperienceWhereInput>
};


export type MutationUpdateManyPaymentsArgs = {
  data: PaymentUpdateManyMutationInput,
  where?: Maybe<PaymentWhereInput>
};


export type MutationUpdateManyPaymentAccountsArgs = {
  data: PaymentAccountUpdateManyMutationInput,
  where?: Maybe<PaymentAccountWhereInput>
};


export type MutationUpdateManyMessagesArgs = {
  data: MessageUpdateManyMutationInput,
  where?: Maybe<MessageWhereInput>
};


export type MutationUpdateManyNotificationsArgs = {
  data: NotificationUpdateManyMutationInput,
  where?: Maybe<NotificationWhereInput>
};


export type MutationUpdateManyRestaurantsArgs = {
  data: RestaurantUpdateManyMutationInput,
  where?: Maybe<RestaurantWhereInput>
};


export type MutationUpdateManyMenuItemsArgs = {
  data: MenuItemUpdateManyMutationInput,
  where?: Maybe<MenuItemWhereInput>
};


export type MutationUpdateManyPaypalInformationsArgs = {
  data: PaypalInformationUpdateManyMutationInput,
  where?: Maybe<PaypalInformationWhereInput>
};


export type MutationUpdateManyPoliciesesArgs = {
  data: PoliciesUpdateManyMutationInput,
  where?: Maybe<PoliciesWhereInput>
};


export type MutationUpdateManyCreditCardInformationsArgs = {
  data: CreditCardInformationUpdateManyMutationInput,
  where?: Maybe<CreditCardInformationWhereInput>
};


export type MutationUpdateManyLocationsArgs = {
  data: LocationUpdateManyMutationInput,
  where?: Maybe<LocationWhereInput>
};


export type MutationUpdateManyReviewsArgs = {
  data: ReviewUpdateManyMutationInput,
  where?: Maybe<ReviewWhereInput>
};


export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyMutationInput,
  where?: Maybe<OrderWhereInput>
};


export type MutationUpdateManyExperienceCategoriesArgs = {
  data: ExperienceCategoryUpdateManyMutationInput,
  where?: Maybe<ExperienceCategoryWhereInput>
};


export type MutationUpdateManyPaytmInformationsArgs = {
  data: PaytmInformationUpdateManyMutationInput,
  where?: Maybe<PaytmInformationWhereInput>
};


export type MutationUpdateManyDebitCardInformationsArgs = {
  data: DebitCardInformationUpdateManyMutationInput,
  where?: Maybe<DebitCardInformationWhereInput>
};


export type MutationUpdateManyPricingsArgs = {
  data: PricingUpdateManyMutationInput,
  where?: Maybe<PricingWhereInput>
};


export type MutationUpdateManyPicturesArgs = {
  data: PictureUpdateManyMutationInput,
  where?: Maybe<PictureWhereInput>
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationDeleteManyNeighbourhoodsArgs = {
  where?: Maybe<NeighbourhoodWhereInput>
};


export type MutationDeleteManyCitiesArgs = {
  where?: Maybe<CityWhereInput>
};


export type MutationDeleteManyExperiencesArgs = {
  where?: Maybe<ExperienceWhereInput>
};


export type MutationDeleteManyPaymentsArgs = {
  where?: Maybe<PaymentWhereInput>
};


export type MutationDeleteManyPaymentAccountsArgs = {
  where?: Maybe<PaymentAccountWhereInput>
};


export type MutationDeleteManyMessagesArgs = {
  where?: Maybe<MessageWhereInput>
};


export type MutationDeleteManyNotificationsArgs = {
  where?: Maybe<NotificationWhereInput>
};


export type MutationDeleteManyRestaurantsArgs = {
  where?: Maybe<RestaurantWhereInput>
};


export type MutationDeleteManyMenuItemsArgs = {
  where?: Maybe<MenuItemWhereInput>
};


export type MutationDeleteManyPaypalInformationsArgs = {
  where?: Maybe<PaypalInformationWhereInput>
};


export type MutationDeleteManyPoliciesesArgs = {
  where?: Maybe<PoliciesWhereInput>
};


export type MutationDeleteManyCreditCardInformationsArgs = {
  where?: Maybe<CreditCardInformationWhereInput>
};


export type MutationDeleteManyLocationsArgs = {
  where?: Maybe<LocationWhereInput>
};


export type MutationDeleteManyReviewsArgs = {
  where?: Maybe<ReviewWhereInput>
};


export type MutationDeleteManyOrdersArgs = {
  where?: Maybe<OrderWhereInput>
};


export type MutationDeleteManyExperienceCategoriesArgs = {
  where?: Maybe<ExperienceCategoryWhereInput>
};


export type MutationDeleteManyPaytmInformationsArgs = {
  where?: Maybe<PaytmInformationWhereInput>
};


export type MutationDeleteManyDebitCardInformationsArgs = {
  where?: Maybe<DebitCardInformationWhereInput>
};


export type MutationDeleteManyPricingsArgs = {
  where?: Maybe<PricingWhereInput>
};


export type MutationDeleteManyPicturesArgs = {
  where?: Maybe<PictureWhereInput>
};


export type MutationLoginArgs = {
  idToken: Scalars['String']
};


export type MutationAddPaymentMethodArgs = {
  cardNumber: Scalars['String'],
  expiresOnMonth: Scalars['Int'],
  expiresOnYear: Scalars['Int'],
  securityCode: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  postalCode: Scalars['String'],
  country: Scalars['String']
};


export type MutationBookArgs = {
  restaurantId: Scalars['ID'],
  checkIn: Scalars['String'],
  checkOut: Scalars['String'],
  paymentId: Scalars['String'],
  numGuests: Scalars['Int']
};

export type MutationResult = {
  __typename?: 'MutationResult',
  success: Scalars['Boolean'],
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Neighbourhood = Node & {
  __typename?: 'Neighbourhood',
  id: Scalars['ID'],
  locations?: Maybe<Array<Location>>,
  name: Scalars['String'],
  slug: Scalars['String'],
  homePreview?: Maybe<Picture>,
  city: City,
  featured: Scalars['Boolean'],
  popularity: Scalars['Int'],
};


export type NeighbourhoodLocationsArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type NeighbourhoodConnection = {
  __typename?: 'NeighbourhoodConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<NeighbourhoodEdge>>,
  aggregate: AggregateNeighbourhood,
};

export type NeighbourhoodCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  slug: Scalars['String'],
  featured: Scalars['Boolean'],
  popularity: Scalars['Int'],
  locations?: Maybe<LocationCreateManyWithoutNeighbourHoodInput>,
  homePreview?: Maybe<PictureCreateOneInput>,
  city: CityCreateOneWithoutNeighbourhoodsInput,
};

export type NeighbourhoodCreateManyWithoutCityInput = {
  create?: Maybe<Array<NeighbourhoodCreateWithoutCityInput>>,
  connect?: Maybe<Array<NeighbourhoodWhereUniqueInput>>,
};

export type NeighbourhoodCreateOneWithoutLocationsInput = {
  create?: Maybe<NeighbourhoodCreateWithoutLocationsInput>,
  connect?: Maybe<NeighbourhoodWhereUniqueInput>,
};

export type NeighbourhoodCreateWithoutCityInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  slug: Scalars['String'],
  featured: Scalars['Boolean'],
  popularity: Scalars['Int'],
  locations?: Maybe<LocationCreateManyWithoutNeighbourHoodInput>,
  homePreview?: Maybe<PictureCreateOneInput>,
};

export type NeighbourhoodCreateWithoutLocationsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  slug: Scalars['String'],
  featured: Scalars['Boolean'],
  popularity: Scalars['Int'],
  homePreview?: Maybe<PictureCreateOneInput>,
  city: CityCreateOneWithoutNeighbourhoodsInput,
};

/** An edge in a connection. */
export type NeighbourhoodEdge = {
  __typename?: 'NeighbourhoodEdge',
  /** The item at the end of the edge. */
  node: Neighbourhood,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum NeighbourhoodOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  PopularityAsc = 'popularity_ASC',
  PopularityDesc = 'popularity_DESC'
}

export type NeighbourhoodPreviousValues = {
  __typename?: 'NeighbourhoodPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  slug: Scalars['String'],
  featured: Scalars['Boolean'],
  popularity: Scalars['Int'],
};

export type NeighbourhoodScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NeighbourhoodScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NeighbourhoodScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NeighbourhoodScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  slug_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  slug_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  slug_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  slug_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  slug_not_ends_with?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  featured_not?: Maybe<Scalars['Boolean']>,
  popularity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  popularity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  popularity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  popularity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  popularity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  popularity_gte?: Maybe<Scalars['Int']>,
};

export type NeighbourhoodSubscriptionPayload = {
  __typename?: 'NeighbourhoodSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Neighbourhood>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<NeighbourhoodPreviousValues>,
};

export type NeighbourhoodSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NeighbourhoodSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NeighbourhoodSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NeighbourhoodSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<NeighbourhoodWhereInput>,
};

export type NeighbourhoodUpdateInput = {
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  popularity?: Maybe<Scalars['Int']>,
  locations?: Maybe<LocationUpdateManyWithoutNeighbourHoodInput>,
  homePreview?: Maybe<PictureUpdateOneInput>,
  city?: Maybe<CityUpdateOneRequiredWithoutNeighbourhoodsInput>,
};

export type NeighbourhoodUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  popularity?: Maybe<Scalars['Int']>,
};

export type NeighbourhoodUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  popularity?: Maybe<Scalars['Int']>,
};

export type NeighbourhoodUpdateManyWithoutCityInput = {
  create?: Maybe<Array<NeighbourhoodCreateWithoutCityInput>>,
  connect?: Maybe<Array<NeighbourhoodWhereUniqueInput>>,
  set?: Maybe<Array<NeighbourhoodWhereUniqueInput>>,
  disconnect?: Maybe<Array<NeighbourhoodWhereUniqueInput>>,
  delete?: Maybe<Array<NeighbourhoodWhereUniqueInput>>,
  update?: Maybe<Array<NeighbourhoodUpdateWithWhereUniqueWithoutCityInput>>,
  updateMany?: Maybe<Array<NeighbourhoodUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<NeighbourhoodScalarWhereInput>>,
  upsert?: Maybe<Array<NeighbourhoodUpsertWithWhereUniqueWithoutCityInput>>,
};

export type NeighbourhoodUpdateManyWithWhereNestedInput = {
  where: NeighbourhoodScalarWhereInput,
  data: NeighbourhoodUpdateManyDataInput,
};

export type NeighbourhoodUpdateOneWithoutLocationsInput = {
  create?: Maybe<NeighbourhoodCreateWithoutLocationsInput>,
  connect?: Maybe<NeighbourhoodWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<NeighbourhoodUpdateWithoutLocationsDataInput>,
  upsert?: Maybe<NeighbourhoodUpsertWithoutLocationsInput>,
};

export type NeighbourhoodUpdateWithoutCityDataInput = {
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  popularity?: Maybe<Scalars['Int']>,
  locations?: Maybe<LocationUpdateManyWithoutNeighbourHoodInput>,
  homePreview?: Maybe<PictureUpdateOneInput>,
};

export type NeighbourhoodUpdateWithoutLocationsDataInput = {
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  popularity?: Maybe<Scalars['Int']>,
  homePreview?: Maybe<PictureUpdateOneInput>,
  city?: Maybe<CityUpdateOneRequiredWithoutNeighbourhoodsInput>,
};

export type NeighbourhoodUpdateWithWhereUniqueWithoutCityInput = {
  where: NeighbourhoodWhereUniqueInput,
  data: NeighbourhoodUpdateWithoutCityDataInput,
};

export type NeighbourhoodUpsertWithoutLocationsInput = {
  update: NeighbourhoodUpdateWithoutLocationsDataInput,
  create: NeighbourhoodCreateWithoutLocationsInput,
};

export type NeighbourhoodUpsertWithWhereUniqueWithoutCityInput = {
  where: NeighbourhoodWhereUniqueInput,
  update: NeighbourhoodUpdateWithoutCityDataInput,
  create: NeighbourhoodCreateWithoutCityInput,
};

export type NeighbourhoodWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NeighbourhoodWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NeighbourhoodWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NeighbourhoodWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  slug_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  slug_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  slug_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  slug_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  slug_not_ends_with?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  featured_not?: Maybe<Scalars['Boolean']>,
  popularity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  popularity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  popularity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  popularity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  popularity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  popularity_gte?: Maybe<Scalars['Int']>,
  locations_every?: Maybe<LocationWhereInput>,
  locations_some?: Maybe<LocationWhereInput>,
  locations_none?: Maybe<LocationWhereInput>,
  homePreview?: Maybe<PictureWhereInput>,
  city?: Maybe<CityWhereInput>,
};

export type NeighbourhoodWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

export type Notification = Node & {
  __typename?: 'Notification',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  type?: Maybe<Notification_Type>,
  user: User,
  link: Scalars['String'],
  readDate: Scalars['DateTime'],
};

export enum Notification_Type {
  Offer = 'OFFER',
  InstantBook = 'INSTANT_BOOK',
  Responsiveness = 'RESPONSIVENESS',
  NewAmenities = 'NEW_AMENITIES',
  HouseRules = 'HOUSE_RULES'
}

/** A connection to a list of items. */
export type NotificationConnection = {
  __typename?: 'NotificationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<NotificationEdge>>,
  aggregate: AggregateNotification,
};

export type NotificationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  type?: Maybe<Notification_Type>,
  link: Scalars['String'],
  readDate: Scalars['DateTime'],
  user: UserCreateOneWithoutNotificationsInput,
};

export type NotificationCreateManyWithoutUserInput = {
  create?: Maybe<Array<NotificationCreateWithoutUserInput>>,
  connect?: Maybe<Array<NotificationWhereUniqueInput>>,
};

export type NotificationCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  type?: Maybe<Notification_Type>,
  link: Scalars['String'],
  readDate: Scalars['DateTime'],
};

/** An edge in a connection. */
export type NotificationEdge = {
  __typename?: 'NotificationEdge',
  /** The item at the end of the edge. */
  node: Notification,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum NotificationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  ReadDateAsc = 'readDate_ASC',
  ReadDateDesc = 'readDate_DESC'
}

export type NotificationPreviousValues = {
  __typename?: 'NotificationPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  type?: Maybe<Notification_Type>,
  link: Scalars['String'],
  readDate: Scalars['DateTime'],
};

export type NotificationScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NotificationScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NotificationScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NotificationScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  type?: Maybe<Notification_Type>,
  /** All values that are not equal to given value. */
  type_not?: Maybe<Notification_Type>,
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Notification_Type>>,
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Notification_Type>>,
  link?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  link_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  link_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  link_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  link_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  link_not_ends_with?: Maybe<Scalars['String']>,
  readDate?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  readDate_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  readDate_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  readDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  readDate_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  readDate_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  readDate_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  readDate_gte?: Maybe<Scalars['DateTime']>,
};

export type NotificationSubscriptionPayload = {
  __typename?: 'NotificationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Notification>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<NotificationPreviousValues>,
};

export type NotificationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NotificationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NotificationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NotificationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<NotificationWhereInput>,
};

export type NotificationUpdateInput = {
  type?: Maybe<Notification_Type>,
  link?: Maybe<Scalars['String']>,
  readDate?: Maybe<Scalars['DateTime']>,
  user?: Maybe<UserUpdateOneRequiredWithoutNotificationsInput>,
};

export type NotificationUpdateManyDataInput = {
  type?: Maybe<Notification_Type>,
  link?: Maybe<Scalars['String']>,
  readDate?: Maybe<Scalars['DateTime']>,
};

export type NotificationUpdateManyMutationInput = {
  type?: Maybe<Notification_Type>,
  link?: Maybe<Scalars['String']>,
  readDate?: Maybe<Scalars['DateTime']>,
};

export type NotificationUpdateManyWithoutUserInput = {
  create?: Maybe<Array<NotificationCreateWithoutUserInput>>,
  connect?: Maybe<Array<NotificationWhereUniqueInput>>,
  set?: Maybe<Array<NotificationWhereUniqueInput>>,
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>,
  delete?: Maybe<Array<NotificationWhereUniqueInput>>,
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>,
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>,
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>,
};

export type NotificationUpdateManyWithWhereNestedInput = {
  where: NotificationScalarWhereInput,
  data: NotificationUpdateManyDataInput,
};

export type NotificationUpdateWithoutUserDataInput = {
  type?: Maybe<Notification_Type>,
  link?: Maybe<Scalars['String']>,
  readDate?: Maybe<Scalars['DateTime']>,
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  where: NotificationWhereUniqueInput,
  data: NotificationUpdateWithoutUserDataInput,
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  where: NotificationWhereUniqueInput,
  update: NotificationUpdateWithoutUserDataInput,
  create: NotificationCreateWithoutUserInput,
};

export type NotificationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NotificationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NotificationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NotificationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  type?: Maybe<Notification_Type>,
  /** All values that are not equal to given value. */
  type_not?: Maybe<Notification_Type>,
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Notification_Type>>,
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Notification_Type>>,
  link?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  link_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  link_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  link_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  link_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  link_not_ends_with?: Maybe<Scalars['String']>,
  readDate?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  readDate_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  readDate_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  readDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  readDate_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  readDate_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  readDate_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  readDate_gte?: Maybe<Scalars['DateTime']>,
  user?: Maybe<UserWhereInput>,
};

export type NotificationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Order = Node & {
  __typename?: 'Order',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  bookee: User,
  restaurant: Restaurant,
  startDate: Scalars['DateTime'],
  endDate: Scalars['DateTime'],
  payment: Payment,
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<OrderEdge>>,
  aggregate: AggregateOrder,
};

export type OrderCreateInput = {
  id?: Maybe<Scalars['ID']>,
  startDate: Scalars['DateTime'],
  endDate: Scalars['DateTime'],
  bookee: UserCreateOneWithoutOrdersInput,
  restaurant: RestaurantCreateOneWithoutOrdersInput,
  payment: PaymentCreateOneWithoutOrderInput,
};

export type OrderCreateManyWithoutBookeeInput = {
  create?: Maybe<Array<OrderCreateWithoutBookeeInput>>,
  connect?: Maybe<Array<OrderWhereUniqueInput>>,
};

export type OrderCreateManyWithoutRestaurantInput = {
  create?: Maybe<Array<OrderCreateWithoutRestaurantInput>>,
  connect?: Maybe<Array<OrderWhereUniqueInput>>,
};

export type OrderCreateOneInput = {
  create?: Maybe<OrderCreateInput>,
  connect?: Maybe<OrderWhereUniqueInput>,
};

export type OrderCreateOneWithoutPaymentInput = {
  create?: Maybe<OrderCreateWithoutPaymentInput>,
  connect?: Maybe<OrderWhereUniqueInput>,
};

export type OrderCreateWithoutBookeeInput = {
  id?: Maybe<Scalars['ID']>,
  startDate: Scalars['DateTime'],
  endDate: Scalars['DateTime'],
  restaurant: RestaurantCreateOneWithoutOrdersInput,
  payment: PaymentCreateOneWithoutOrderInput,
};

export type OrderCreateWithoutPaymentInput = {
  id?: Maybe<Scalars['ID']>,
  startDate: Scalars['DateTime'],
  endDate: Scalars['DateTime'],
  bookee: UserCreateOneWithoutOrdersInput,
  restaurant: RestaurantCreateOneWithoutOrdersInput,
};

export type OrderCreateWithoutRestaurantInput = {
  id?: Maybe<Scalars['ID']>,
  startDate: Scalars['DateTime'],
  endDate: Scalars['DateTime'],
  bookee: UserCreateOneWithoutOrdersInput,
  payment: PaymentCreateOneWithoutOrderInput,
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge',
  /** The item at the end of the edge. */
  node: Order,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum OrderOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC'
}

export type OrderPreviousValues = {
  __typename?: 'OrderPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  startDate: Scalars['DateTime'],
  endDate: Scalars['DateTime'],
};

export type OrderScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OrderScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OrderScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  startDate?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['DateTime']>,
};

export type OrderSubscriptionPayload = {
  __typename?: 'OrderSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Order>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<OrderPreviousValues>,
};

export type OrderSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OrderSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OrderSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<OrderWhereInput>,
};

export type OrderUpdateDataInput = {
  startDate?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
  bookee?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>,
  restaurant?: Maybe<RestaurantUpdateOneRequiredWithoutOrdersInput>,
  payment?: Maybe<PaymentUpdateOneRequiredWithoutOrderInput>,
};

export type OrderUpdateInput = {
  startDate?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
  bookee?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>,
  restaurant?: Maybe<RestaurantUpdateOneRequiredWithoutOrdersInput>,
  payment?: Maybe<PaymentUpdateOneRequiredWithoutOrderInput>,
};

export type OrderUpdateManyDataInput = {
  startDate?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
};

export type OrderUpdateManyMutationInput = {
  startDate?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
};

export type OrderUpdateManyWithoutBookeeInput = {
  create?: Maybe<Array<OrderCreateWithoutBookeeInput>>,
  connect?: Maybe<Array<OrderWhereUniqueInput>>,
  set?: Maybe<Array<OrderWhereUniqueInput>>,
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>,
  delete?: Maybe<Array<OrderWhereUniqueInput>>,
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutBookeeInput>>,
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>,
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutBookeeInput>>,
};

export type OrderUpdateManyWithoutRestaurantInput = {
  create?: Maybe<Array<OrderCreateWithoutRestaurantInput>>,
  connect?: Maybe<Array<OrderWhereUniqueInput>>,
  set?: Maybe<Array<OrderWhereUniqueInput>>,
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>,
  delete?: Maybe<Array<OrderWhereUniqueInput>>,
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutRestaurantInput>>,
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>,
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutRestaurantInput>>,
};

export type OrderUpdateManyWithWhereNestedInput = {
  where: OrderScalarWhereInput,
  data: OrderUpdateManyDataInput,
};

export type OrderUpdateOneRequiredInput = {
  create?: Maybe<OrderCreateInput>,
  connect?: Maybe<OrderWhereUniqueInput>,
  update?: Maybe<OrderUpdateDataInput>,
  upsert?: Maybe<OrderUpsertNestedInput>,
};

export type OrderUpdateOneRequiredWithoutPaymentInput = {
  create?: Maybe<OrderCreateWithoutPaymentInput>,
  connect?: Maybe<OrderWhereUniqueInput>,
  update?: Maybe<OrderUpdateWithoutPaymentDataInput>,
  upsert?: Maybe<OrderUpsertWithoutPaymentInput>,
};

export type OrderUpdateWithoutBookeeDataInput = {
  startDate?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
  restaurant?: Maybe<RestaurantUpdateOneRequiredWithoutOrdersInput>,
  payment?: Maybe<PaymentUpdateOneRequiredWithoutOrderInput>,
};

export type OrderUpdateWithoutPaymentDataInput = {
  startDate?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
  bookee?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>,
  restaurant?: Maybe<RestaurantUpdateOneRequiredWithoutOrdersInput>,
};

export type OrderUpdateWithoutRestaurantDataInput = {
  startDate?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
  bookee?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>,
  payment?: Maybe<PaymentUpdateOneRequiredWithoutOrderInput>,
};

export type OrderUpdateWithWhereUniqueWithoutBookeeInput = {
  where: OrderWhereUniqueInput,
  data: OrderUpdateWithoutBookeeDataInput,
};

export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
  where: OrderWhereUniqueInput,
  data: OrderUpdateWithoutRestaurantDataInput,
};

export type OrderUpsertNestedInput = {
  update: OrderUpdateDataInput,
  create: OrderCreateInput,
};

export type OrderUpsertWithoutPaymentInput = {
  update: OrderUpdateWithoutPaymentDataInput,
  create: OrderCreateWithoutPaymentInput,
};

export type OrderUpsertWithWhereUniqueWithoutBookeeInput = {
  where: OrderWhereUniqueInput,
  update: OrderUpdateWithoutBookeeDataInput,
  create: OrderCreateWithoutBookeeInput,
};

export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
  where: OrderWhereUniqueInput,
  update: OrderUpdateWithoutRestaurantDataInput,
  create: OrderCreateWithoutRestaurantInput,
};

export type OrderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<OrderWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<OrderWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  startDate?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['DateTime']>,
  bookee?: Maybe<UserWhereInput>,
  restaurant?: Maybe<RestaurantWhereInput>,
  payment?: Maybe<PaymentWhereInput>,
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
};

export type Payment = Node & {
  __typename?: 'Payment',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  serviceFee: Scalars['Float'],
  restaurantPrice: Scalars['Float'],
  totalPrice: Scalars['Float'],
  order: Order,
  paymentMethod: PaymentAccount,
};

export enum Payment_Provider {
  Paypal = 'PAYPAL',
  Paytm = 'PAYTM',
  CreditCard = 'CREDIT_CARD',
  DebitCard = 'DEBIT_CARD'
}

export type PaymentAccount = Node & {
  __typename?: 'PaymentAccount',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  type?: Maybe<Payment_Provider>,
  user: User,
  payments: Array<Payment>,
  paypal?: Maybe<PaypalInformation>,
  paytm?: Maybe<PaytmInformation>,
  creditcard?: Maybe<CreditCardInformation>,
  debitcard?: Maybe<DebitCardInformation>,
};


export type PaymentAccountPaymentsArgs = {
  where?: Maybe<PaymentWhereInput>,
  orderBy?: Maybe<PaymentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type PaymentAccountConnection = {
  __typename?: 'PaymentAccountConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PaymentAccountEdge>>,
  aggregate: AggregatePaymentAccount,
};

export type PaymentAccountCreateInput = {
  id?: Maybe<Scalars['ID']>,
  type?: Maybe<Payment_Provider>,
  user: UserCreateOneWithoutPaymentAccountInput,
  payments?: Maybe<PaymentCreateManyWithoutPaymentMethodInput>,
  paypal?: Maybe<PaypalInformationCreateOneInput>,
  paytm?: Maybe<PaytmInformationCreateOneInput>,
  creditcard?: Maybe<CreditCardInformationCreateOneInput>,
  debitcard?: Maybe<DebitCardInformationCreateOneInput>,
};

export type PaymentAccountCreateManyWithoutUserInput = {
  create?: Maybe<Array<PaymentAccountCreateWithoutUserInput>>,
  connect?: Maybe<Array<PaymentAccountWhereUniqueInput>>,
};

export type PaymentAccountCreateOneWithoutPaymentsInput = {
  create?: Maybe<PaymentAccountCreateWithoutPaymentsInput>,
  connect?: Maybe<PaymentAccountWhereUniqueInput>,
};

export type PaymentAccountCreateWithoutPaymentsInput = {
  id?: Maybe<Scalars['ID']>,
  type?: Maybe<Payment_Provider>,
  user: UserCreateOneWithoutPaymentAccountInput,
  paypal?: Maybe<PaypalInformationCreateOneInput>,
  paytm?: Maybe<PaytmInformationCreateOneInput>,
  creditcard?: Maybe<CreditCardInformationCreateOneInput>,
  debitcard?: Maybe<DebitCardInformationCreateOneInput>,
};

export type PaymentAccountCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  type?: Maybe<Payment_Provider>,
  payments?: Maybe<PaymentCreateManyWithoutPaymentMethodInput>,
  paypal?: Maybe<PaypalInformationCreateOneInput>,
  paytm?: Maybe<PaytmInformationCreateOneInput>,
  creditcard?: Maybe<CreditCardInformationCreateOneInput>,
  debitcard?: Maybe<DebitCardInformationCreateOneInput>,
};

/** An edge in a connection. */
export type PaymentAccountEdge = {
  __typename?: 'PaymentAccountEdge',
  /** The item at the end of the edge. */
  node: PaymentAccount,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum PaymentAccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type PaymentAccountPreviousValues = {
  __typename?: 'PaymentAccountPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  type?: Maybe<Payment_Provider>,
};

export type PaymentAccountScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaymentAccountScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaymentAccountScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaymentAccountScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  type?: Maybe<Payment_Provider>,
  /** All values that are not equal to given value. */
  type_not?: Maybe<Payment_Provider>,
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Payment_Provider>>,
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Payment_Provider>>,
};

export type PaymentAccountSubscriptionPayload = {
  __typename?: 'PaymentAccountSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PaymentAccount>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PaymentAccountPreviousValues>,
};

export type PaymentAccountSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaymentAccountSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaymentAccountSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaymentAccountSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PaymentAccountWhereInput>,
};

export type PaymentAccountUpdateInput = {
  type?: Maybe<Payment_Provider>,
  user?: Maybe<UserUpdateOneRequiredWithoutPaymentAccountInput>,
  payments?: Maybe<PaymentUpdateManyWithoutPaymentMethodInput>,
  paypal?: Maybe<PaypalInformationUpdateOneInput>,
  paytm?: Maybe<PaytmInformationUpdateOneInput>,
  creditcard?: Maybe<CreditCardInformationUpdateOneInput>,
  debitcard?: Maybe<DebitCardInformationUpdateOneInput>,
};

export type PaymentAccountUpdateManyDataInput = {
  type?: Maybe<Payment_Provider>,
};

export type PaymentAccountUpdateManyMutationInput = {
  type?: Maybe<Payment_Provider>,
};

export type PaymentAccountUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PaymentAccountCreateWithoutUserInput>>,
  connect?: Maybe<Array<PaymentAccountWhereUniqueInput>>,
  set?: Maybe<Array<PaymentAccountWhereUniqueInput>>,
  disconnect?: Maybe<Array<PaymentAccountWhereUniqueInput>>,
  delete?: Maybe<Array<PaymentAccountWhereUniqueInput>>,
  update?: Maybe<Array<PaymentAccountUpdateWithWhereUniqueWithoutUserInput>>,
  updateMany?: Maybe<Array<PaymentAccountUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PaymentAccountScalarWhereInput>>,
  upsert?: Maybe<Array<PaymentAccountUpsertWithWhereUniqueWithoutUserInput>>,
};

export type PaymentAccountUpdateManyWithWhereNestedInput = {
  where: PaymentAccountScalarWhereInput,
  data: PaymentAccountUpdateManyDataInput,
};

export type PaymentAccountUpdateOneRequiredWithoutPaymentsInput = {
  create?: Maybe<PaymentAccountCreateWithoutPaymentsInput>,
  connect?: Maybe<PaymentAccountWhereUniqueInput>,
  update?: Maybe<PaymentAccountUpdateWithoutPaymentsDataInput>,
  upsert?: Maybe<PaymentAccountUpsertWithoutPaymentsInput>,
};

export type PaymentAccountUpdateWithoutPaymentsDataInput = {
  type?: Maybe<Payment_Provider>,
  user?: Maybe<UserUpdateOneRequiredWithoutPaymentAccountInput>,
  paypal?: Maybe<PaypalInformationUpdateOneInput>,
  paytm?: Maybe<PaytmInformationUpdateOneInput>,
  creditcard?: Maybe<CreditCardInformationUpdateOneInput>,
  debitcard?: Maybe<DebitCardInformationUpdateOneInput>,
};

export type PaymentAccountUpdateWithoutUserDataInput = {
  type?: Maybe<Payment_Provider>,
  payments?: Maybe<PaymentUpdateManyWithoutPaymentMethodInput>,
  paypal?: Maybe<PaypalInformationUpdateOneInput>,
  paytm?: Maybe<PaytmInformationUpdateOneInput>,
  creditcard?: Maybe<CreditCardInformationUpdateOneInput>,
  debitcard?: Maybe<DebitCardInformationUpdateOneInput>,
};

export type PaymentAccountUpdateWithWhereUniqueWithoutUserInput = {
  where: PaymentAccountWhereUniqueInput,
  data: PaymentAccountUpdateWithoutUserDataInput,
};

export type PaymentAccountUpsertWithoutPaymentsInput = {
  update: PaymentAccountUpdateWithoutPaymentsDataInput,
  create: PaymentAccountCreateWithoutPaymentsInput,
};

export type PaymentAccountUpsertWithWhereUniqueWithoutUserInput = {
  where: PaymentAccountWhereUniqueInput,
  update: PaymentAccountUpdateWithoutUserDataInput,
  create: PaymentAccountCreateWithoutUserInput,
};

export type PaymentAccountWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaymentAccountWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaymentAccountWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaymentAccountWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  type?: Maybe<Payment_Provider>,
  /** All values that are not equal to given value. */
  type_not?: Maybe<Payment_Provider>,
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Payment_Provider>>,
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Payment_Provider>>,
  user?: Maybe<UserWhereInput>,
  payments_every?: Maybe<PaymentWhereInput>,
  payments_some?: Maybe<PaymentWhereInput>,
  payments_none?: Maybe<PaymentWhereInput>,
  paypal?: Maybe<PaypalInformationWhereInput>,
  paytm?: Maybe<PaytmInformationWhereInput>,
  creditcard?: Maybe<CreditCardInformationWhereInput>,
  debitcard?: Maybe<DebitCardInformationWhereInput>,
};

export type PaymentAccountWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** A connection to a list of items. */
export type PaymentConnection = {
  __typename?: 'PaymentConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PaymentEdge>>,
  aggregate: AggregatePayment,
};

export type PaymentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  serviceFee: Scalars['Float'],
  restaurantPrice: Scalars['Float'],
  totalPrice: Scalars['Float'],
  order: OrderCreateOneWithoutPaymentInput,
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput,
};

export type PaymentCreateManyWithoutPaymentMethodInput = {
  create?: Maybe<Array<PaymentCreateWithoutPaymentMethodInput>>,
  connect?: Maybe<Array<PaymentWhereUniqueInput>>,
};

export type PaymentCreateOneWithoutOrderInput = {
  create?: Maybe<PaymentCreateWithoutOrderInput>,
  connect?: Maybe<PaymentWhereUniqueInput>,
};

export type PaymentCreateWithoutOrderInput = {
  id?: Maybe<Scalars['ID']>,
  serviceFee: Scalars['Float'],
  restaurantPrice: Scalars['Float'],
  totalPrice: Scalars['Float'],
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput,
};

export type PaymentCreateWithoutPaymentMethodInput = {
  id?: Maybe<Scalars['ID']>,
  serviceFee: Scalars['Float'],
  restaurantPrice: Scalars['Float'],
  totalPrice: Scalars['Float'],
  order: OrderCreateOneWithoutPaymentInput,
};

/** An edge in a connection. */
export type PaymentEdge = {
  __typename?: 'PaymentEdge',
  /** The item at the end of the edge. */
  node: Payment,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum PaymentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  ServiceFeeAsc = 'serviceFee_ASC',
  ServiceFeeDesc = 'serviceFee_DESC',
  RestaurantPriceAsc = 'restaurantPrice_ASC',
  RestaurantPriceDesc = 'restaurantPrice_DESC',
  TotalPriceAsc = 'totalPrice_ASC',
  TotalPriceDesc = 'totalPrice_DESC'
}

export type PaymentPreviousValues = {
  __typename?: 'PaymentPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  serviceFee: Scalars['Float'],
  restaurantPrice: Scalars['Float'],
  totalPrice: Scalars['Float'],
};

export type PaymentScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaymentScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaymentScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaymentScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  serviceFee?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  serviceFee_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  serviceFee_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  serviceFee_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  serviceFee_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  serviceFee_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  serviceFee_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  serviceFee_gte?: Maybe<Scalars['Float']>,
  restaurantPrice?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  restaurantPrice_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  restaurantPrice_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  restaurantPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  restaurantPrice_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  restaurantPrice_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  restaurantPrice_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  restaurantPrice_gte?: Maybe<Scalars['Float']>,
  totalPrice?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  totalPrice_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  totalPrice_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  totalPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  totalPrice_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  totalPrice_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  totalPrice_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  totalPrice_gte?: Maybe<Scalars['Float']>,
};

export type PaymentSubscriptionPayload = {
  __typename?: 'PaymentSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Payment>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PaymentPreviousValues>,
};

export type PaymentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaymentSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaymentSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaymentSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PaymentWhereInput>,
};

export type PaymentUpdateInput = {
  serviceFee?: Maybe<Scalars['Float']>,
  restaurantPrice?: Maybe<Scalars['Float']>,
  totalPrice?: Maybe<Scalars['Float']>,
  order?: Maybe<OrderUpdateOneRequiredWithoutPaymentInput>,
  paymentMethod?: Maybe<PaymentAccountUpdateOneRequiredWithoutPaymentsInput>,
};

export type PaymentUpdateManyDataInput = {
  serviceFee?: Maybe<Scalars['Float']>,
  restaurantPrice?: Maybe<Scalars['Float']>,
  totalPrice?: Maybe<Scalars['Float']>,
};

export type PaymentUpdateManyMutationInput = {
  serviceFee?: Maybe<Scalars['Float']>,
  restaurantPrice?: Maybe<Scalars['Float']>,
  totalPrice?: Maybe<Scalars['Float']>,
};

export type PaymentUpdateManyWithoutPaymentMethodInput = {
  create?: Maybe<Array<PaymentCreateWithoutPaymentMethodInput>>,
  connect?: Maybe<Array<PaymentWhereUniqueInput>>,
  set?: Maybe<Array<PaymentWhereUniqueInput>>,
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>,
  delete?: Maybe<Array<PaymentWhereUniqueInput>>,
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput>>,
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>,
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput>>,
};

export type PaymentUpdateManyWithWhereNestedInput = {
  where: PaymentScalarWhereInput,
  data: PaymentUpdateManyDataInput,
};

export type PaymentUpdateOneRequiredWithoutOrderInput = {
  create?: Maybe<PaymentCreateWithoutOrderInput>,
  connect?: Maybe<PaymentWhereUniqueInput>,
  update?: Maybe<PaymentUpdateWithoutOrderDataInput>,
  upsert?: Maybe<PaymentUpsertWithoutOrderInput>,
};

export type PaymentUpdateWithoutOrderDataInput = {
  serviceFee?: Maybe<Scalars['Float']>,
  restaurantPrice?: Maybe<Scalars['Float']>,
  totalPrice?: Maybe<Scalars['Float']>,
  paymentMethod?: Maybe<PaymentAccountUpdateOneRequiredWithoutPaymentsInput>,
};

export type PaymentUpdateWithoutPaymentMethodDataInput = {
  serviceFee?: Maybe<Scalars['Float']>,
  restaurantPrice?: Maybe<Scalars['Float']>,
  totalPrice?: Maybe<Scalars['Float']>,
  order?: Maybe<OrderUpdateOneRequiredWithoutPaymentInput>,
};

export type PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput = {
  where: PaymentWhereUniqueInput,
  data: PaymentUpdateWithoutPaymentMethodDataInput,
};

export type PaymentUpsertWithoutOrderInput = {
  update: PaymentUpdateWithoutOrderDataInput,
  create: PaymentCreateWithoutOrderInput,
};

export type PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput = {
  where: PaymentWhereUniqueInput,
  update: PaymentUpdateWithoutPaymentMethodDataInput,
  create: PaymentCreateWithoutPaymentMethodInput,
};

export type PaymentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaymentWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaymentWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaymentWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  serviceFee?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  serviceFee_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  serviceFee_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  serviceFee_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  serviceFee_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  serviceFee_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  serviceFee_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  serviceFee_gte?: Maybe<Scalars['Float']>,
  restaurantPrice?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  restaurantPrice_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  restaurantPrice_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  restaurantPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  restaurantPrice_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  restaurantPrice_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  restaurantPrice_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  restaurantPrice_gte?: Maybe<Scalars['Float']>,
  totalPrice?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  totalPrice_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  totalPrice_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  totalPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  totalPrice_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  totalPrice_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  totalPrice_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  totalPrice_gte?: Maybe<Scalars['Float']>,
  order?: Maybe<OrderWhereInput>,
  paymentMethod?: Maybe<PaymentAccountWhereInput>,
};

export type PaymentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PaypalInformation = Node & {
  __typename?: 'PaypalInformation',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  email: Scalars['String'],
};

/** A connection to a list of items. */
export type PaypalInformationConnection = {
  __typename?: 'PaypalInformationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PaypalInformationEdge>>,
  aggregate: AggregatePaypalInformation,
};

export type PaypalInformationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
};

export type PaypalInformationCreateOneInput = {
  create?: Maybe<PaypalInformationCreateInput>,
  connect?: Maybe<PaypalInformationWhereUniqueInput>,
};

/** An edge in a connection. */
export type PaypalInformationEdge = {
  __typename?: 'PaypalInformationEdge',
  /** The item at the end of the edge. */
  node: PaypalInformation,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum PaypalInformationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC'
}

export type PaypalInformationPreviousValues = {
  __typename?: 'PaypalInformationPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  email: Scalars['String'],
};

export type PaypalInformationSubscriptionPayload = {
  __typename?: 'PaypalInformationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PaypalInformation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PaypalInformationPreviousValues>,
};

export type PaypalInformationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaypalInformationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaypalInformationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaypalInformationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PaypalInformationWhereInput>,
};

export type PaypalInformationUpdateDataInput = {
  email?: Maybe<Scalars['String']>,
};

export type PaypalInformationUpdateInput = {
  email?: Maybe<Scalars['String']>,
};

export type PaypalInformationUpdateManyMutationInput = {
  email?: Maybe<Scalars['String']>,
};

export type PaypalInformationUpdateOneInput = {
  create?: Maybe<PaypalInformationCreateInput>,
  connect?: Maybe<PaypalInformationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PaypalInformationUpdateDataInput>,
  upsert?: Maybe<PaypalInformationUpsertNestedInput>,
};

export type PaypalInformationUpsertNestedInput = {
  update: PaypalInformationUpdateDataInput,
  create: PaypalInformationCreateInput,
};

export type PaypalInformationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaypalInformationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaypalInformationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaypalInformationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>,
};

export type PaypalInformationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PaytmInformation = Node & {
  __typename?: 'PaytmInformation',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  phone: Scalars['String'],
  mobile: Scalars['String'],
};

/** A connection to a list of items. */
export type PaytmInformationConnection = {
  __typename?: 'PaytmInformationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PaytmInformationEdge>>,
  aggregate: AggregatePaytmInformation,
};

export type PaytmInformationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  phone: Scalars['String'],
};

export type PaytmInformationCreateOneInput = {
  create?: Maybe<PaytmInformationCreateInput>,
  connect?: Maybe<PaytmInformationWhereUniqueInput>,
};

/** An edge in a connection. */
export type PaytmInformationEdge = {
  __typename?: 'PaytmInformationEdge',
  /** The item at the end of the edge. */
  node: PaytmInformation,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum PaytmInformationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC'
}

export type PaytmInformationPreviousValues = {
  __typename?: 'PaytmInformationPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  phone: Scalars['String'],
};

export type PaytmInformationSubscriptionPayload = {
  __typename?: 'PaytmInformationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PaytmInformation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PaytmInformationPreviousValues>,
};

export type PaytmInformationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaytmInformationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaytmInformationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaytmInformationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PaytmInformationWhereInput>,
};

export type PaytmInformationUpdateDataInput = {
  phone?: Maybe<Scalars['String']>,
};

export type PaytmInformationUpdateInput = {
  phone?: Maybe<Scalars['String']>,
};

export type PaytmInformationUpdateManyMutationInput = {
  phone?: Maybe<Scalars['String']>,
};

export type PaytmInformationUpdateOneInput = {
  create?: Maybe<PaytmInformationCreateInput>,
  connect?: Maybe<PaytmInformationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PaytmInformationUpdateDataInput>,
  upsert?: Maybe<PaytmInformationUpsertNestedInput>,
};

export type PaytmInformationUpsertNestedInput = {
  update: PaytmInformationUpdateDataInput,
  create: PaytmInformationCreateInput,
};

export type PaytmInformationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PaytmInformationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PaytmInformationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PaytmInformationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  phone?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  phone_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  phone_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<Scalars['String']>,
};

export type PaytmInformationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Picture = Node & {
  __typename?: 'Picture',
  id: Scalars['ID'],
  altText?: Maybe<Scalars['String']>,
  url: Scalars['String'],
};

/** A connection to a list of items. */
export type PictureConnection = {
  __typename?: 'PictureConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PictureEdge>>,
  aggregate: AggregatePicture,
};

export type PictureCreateInput = {
  id?: Maybe<Scalars['ID']>,
  altText?: Maybe<Scalars['String']>,
  url: Scalars['String'],
};

export type PictureCreateManyInput = {
  create?: Maybe<Array<PictureCreateInput>>,
  connect?: Maybe<Array<PictureWhereUniqueInput>>,
};

export type PictureCreateOneInput = {
  create?: Maybe<PictureCreateInput>,
  connect?: Maybe<PictureWhereUniqueInput>,
};

/** An edge in a connection. */
export type PictureEdge = {
  __typename?: 'PictureEdge',
  /** The item at the end of the edge. */
  node: Picture,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum PictureOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type PicturePreviousValues = {
  __typename?: 'PicturePreviousValues',
  id: Scalars['ID'],
  altText?: Maybe<Scalars['String']>,
  url: Scalars['String'],
};

export type PictureScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PictureScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PictureScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PictureScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  altText?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  altText_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  altText_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  altText_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  altText_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  altText_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  altText_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  altText_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  altText_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  altText_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  altText_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  altText_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  altText_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  altText_not_ends_with?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export type PictureSubscriptionPayload = {
  __typename?: 'PictureSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Picture>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PicturePreviousValues>,
};

export type PictureSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PictureSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PictureSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PictureSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PictureWhereInput>,
};

export type PictureUpdateDataInput = {
  altText?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type PictureUpdateInput = {
  altText?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type PictureUpdateManyDataInput = {
  altText?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type PictureUpdateManyInput = {
  create?: Maybe<Array<PictureCreateInput>>,
  connect?: Maybe<Array<PictureWhereUniqueInput>>,
  set?: Maybe<Array<PictureWhereUniqueInput>>,
  disconnect?: Maybe<Array<PictureWhereUniqueInput>>,
  delete?: Maybe<Array<PictureWhereUniqueInput>>,
  update?: Maybe<Array<PictureUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<PictureUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PictureScalarWhereInput>>,
  upsert?: Maybe<Array<PictureUpsertWithWhereUniqueNestedInput>>,
};

export type PictureUpdateManyMutationInput = {
  altText?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type PictureUpdateManyWithWhereNestedInput = {
  where: PictureScalarWhereInput,
  data: PictureUpdateManyDataInput,
};

export type PictureUpdateOneInput = {
  create?: Maybe<PictureCreateInput>,
  connect?: Maybe<PictureWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PictureUpdateDataInput>,
  upsert?: Maybe<PictureUpsertNestedInput>,
};

export type PictureUpdateOneRequiredInput = {
  create?: Maybe<PictureCreateInput>,
  connect?: Maybe<PictureWhereUniqueInput>,
  update?: Maybe<PictureUpdateDataInput>,
  upsert?: Maybe<PictureUpsertNestedInput>,
};

export type PictureUpdateWithWhereUniqueNestedInput = {
  where: PictureWhereUniqueInput,
  data: PictureUpdateDataInput,
};

export type PictureUpsertNestedInput = {
  update: PictureUpdateDataInput,
  create: PictureCreateInput,
};

export type PictureUpsertWithWhereUniqueNestedInput = {
  where: PictureWhereUniqueInput,
  update: PictureUpdateDataInput,
  create: PictureCreateInput,
};

export type PictureWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PictureWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PictureWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PictureWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  altText?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  altText_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  altText_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  altText_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  altText_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  altText_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  altText_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  altText_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  altText_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  altText_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  altText_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  altText_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  altText_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  altText_not_ends_with?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export type PictureWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Policies = Node & {
  __typename?: 'Policies',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  openingTime: Scalars['Float'],
  closingTime: Scalars['Float'],
};

/** A connection to a list of items. */
export type PoliciesConnection = {
  __typename?: 'PoliciesConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PoliciesEdge>>,
  aggregate: AggregatePolicies,
};

export type PoliciesCreateInput = {
  id?: Maybe<Scalars['ID']>,
  openingTime: Scalars['Float'],
  closingTime: Scalars['Float'],
};

export type PoliciesCreateOneInput = {
  create?: Maybe<PoliciesCreateInput>,
  connect?: Maybe<PoliciesWhereUniqueInput>,
};

/** An edge in a connection. */
export type PoliciesEdge = {
  __typename?: 'PoliciesEdge',
  /** The item at the end of the edge. */
  node: Policies,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum PoliciesOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  OpeningTimeAsc = 'openingTime_ASC',
  OpeningTimeDesc = 'openingTime_DESC',
  ClosingTimeAsc = 'closingTime_ASC',
  ClosingTimeDesc = 'closingTime_DESC'
}

export type PoliciesPreviousValues = {
  __typename?: 'PoliciesPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  openingTime: Scalars['Float'],
  closingTime: Scalars['Float'],
};

export type PoliciesSubscriptionPayload = {
  __typename?: 'PoliciesSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Policies>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PoliciesPreviousValues>,
};

export type PoliciesSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PoliciesSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PoliciesSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PoliciesSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PoliciesWhereInput>,
};

export type PoliciesUpdateDataInput = {
  openingTime?: Maybe<Scalars['Float']>,
  closingTime?: Maybe<Scalars['Float']>,
};

export type PoliciesUpdateInput = {
  openingTime?: Maybe<Scalars['Float']>,
  closingTime?: Maybe<Scalars['Float']>,
};

export type PoliciesUpdateManyMutationInput = {
  openingTime?: Maybe<Scalars['Float']>,
  closingTime?: Maybe<Scalars['Float']>,
};

export type PoliciesUpdateOneInput = {
  create?: Maybe<PoliciesCreateInput>,
  connect?: Maybe<PoliciesWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PoliciesUpdateDataInput>,
  upsert?: Maybe<PoliciesUpsertNestedInput>,
};

export type PoliciesUpsertNestedInput = {
  update: PoliciesUpdateDataInput,
  create: PoliciesCreateInput,
};

export type PoliciesWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PoliciesWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PoliciesWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PoliciesWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  openingTime?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  openingTime_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  openingTime_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  openingTime_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  openingTime_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  openingTime_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  openingTime_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  openingTime_gte?: Maybe<Scalars['Float']>,
  closingTime?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  closingTime_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  closingTime_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  closingTime_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  closingTime_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  closingTime_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  closingTime_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  closingTime_gte?: Maybe<Scalars['Float']>,
};

export type PoliciesWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Pricing = Node & {
  __typename?: 'Pricing',
  id: Scalars['ID'],
  monthlyDiscount?: Maybe<Scalars['Int']>,
  weeklyDiscount?: Maybe<Scalars['Int']>,
  price: Scalars['Int'],
  smartPricing: Scalars['Boolean'],
  basePrice: Scalars['Int'],
  averageWeekly: Scalars['Int'],
  averageMonthly: Scalars['Int'],
  weekendPricing?: Maybe<Scalars['Int']>,
};

/** A connection to a list of items. */
export type PricingConnection = {
  __typename?: 'PricingConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PricingEdge>>,
  aggregate: AggregatePricing,
};

export type PricingCreateInput = {
  id?: Maybe<Scalars['ID']>,
  monthlyDiscount?: Maybe<Scalars['Int']>,
  weeklyDiscount?: Maybe<Scalars['Int']>,
  price: Scalars['Int'],
  smartPricing?: Maybe<Scalars['Boolean']>,
  basePrice: Scalars['Int'],
  averageWeekly: Scalars['Int'],
  averageMonthly: Scalars['Int'],
  weekendPricing?: Maybe<Scalars['Int']>,
};

export type PricingCreateOneInput = {
  create?: Maybe<PricingCreateInput>,
  connect?: Maybe<PricingWhereUniqueInput>,
};

/** An edge in a connection. */
export type PricingEdge = {
  __typename?: 'PricingEdge',
  /** The item at the end of the edge. */
  node: Pricing,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum PricingOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MonthlyDiscountAsc = 'monthlyDiscount_ASC',
  MonthlyDiscountDesc = 'monthlyDiscount_DESC',
  WeeklyDiscountAsc = 'weeklyDiscount_ASC',
  WeeklyDiscountDesc = 'weeklyDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SmartPricingAsc = 'smartPricing_ASC',
  SmartPricingDesc = 'smartPricing_DESC',
  BasePriceAsc = 'basePrice_ASC',
  BasePriceDesc = 'basePrice_DESC',
  AverageWeeklyAsc = 'averageWeekly_ASC',
  AverageWeeklyDesc = 'averageWeekly_DESC',
  AverageMonthlyAsc = 'averageMonthly_ASC',
  AverageMonthlyDesc = 'averageMonthly_DESC',
  WeekendPricingAsc = 'weekendPricing_ASC',
  WeekendPricingDesc = 'weekendPricing_DESC'
}

export type PricingPreviousValues = {
  __typename?: 'PricingPreviousValues',
  id: Scalars['ID'],
  monthlyDiscount?: Maybe<Scalars['Int']>,
  weeklyDiscount?: Maybe<Scalars['Int']>,
  price: Scalars['Int'],
  smartPricing: Scalars['Boolean'],
  basePrice: Scalars['Int'],
  averageWeekly: Scalars['Int'],
  averageMonthly: Scalars['Int'],
  weekendPricing?: Maybe<Scalars['Int']>,
};

export type PricingSubscriptionPayload = {
  __typename?: 'PricingSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Pricing>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PricingPreviousValues>,
};

export type PricingSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PricingSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PricingSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PricingSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PricingWhereInput>,
};

export type PricingUpdateDataInput = {
  monthlyDiscount?: Maybe<Scalars['Int']>,
  weeklyDiscount?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  smartPricing?: Maybe<Scalars['Boolean']>,
  basePrice?: Maybe<Scalars['Int']>,
  averageWeekly?: Maybe<Scalars['Int']>,
  averageMonthly?: Maybe<Scalars['Int']>,
  weekendPricing?: Maybe<Scalars['Int']>,
};

export type PricingUpdateInput = {
  monthlyDiscount?: Maybe<Scalars['Int']>,
  weeklyDiscount?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  smartPricing?: Maybe<Scalars['Boolean']>,
  basePrice?: Maybe<Scalars['Int']>,
  averageWeekly?: Maybe<Scalars['Int']>,
  averageMonthly?: Maybe<Scalars['Int']>,
  weekendPricing?: Maybe<Scalars['Int']>,
};

export type PricingUpdateManyMutationInput = {
  monthlyDiscount?: Maybe<Scalars['Int']>,
  weeklyDiscount?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  smartPricing?: Maybe<Scalars['Boolean']>,
  basePrice?: Maybe<Scalars['Int']>,
  averageWeekly?: Maybe<Scalars['Int']>,
  averageMonthly?: Maybe<Scalars['Int']>,
  weekendPricing?: Maybe<Scalars['Int']>,
};

export type PricingUpdateOneRequiredInput = {
  create?: Maybe<PricingCreateInput>,
  connect?: Maybe<PricingWhereUniqueInput>,
  update?: Maybe<PricingUpdateDataInput>,
  upsert?: Maybe<PricingUpsertNestedInput>,
};

export type PricingUpsertNestedInput = {
  update: PricingUpdateDataInput,
  create: PricingCreateInput,
};

export type PricingWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PricingWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PricingWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PricingWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  monthlyDiscount?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  monthlyDiscount_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  monthlyDiscount_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  monthlyDiscount_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  monthlyDiscount_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  monthlyDiscount_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  monthlyDiscount_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  monthlyDiscount_gte?: Maybe<Scalars['Int']>,
  weeklyDiscount?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  weeklyDiscount_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  weeklyDiscount_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  weeklyDiscount_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  weeklyDiscount_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  weeklyDiscount_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  weeklyDiscount_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  weeklyDiscount_gte?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Int']>,
  smartPricing?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  smartPricing_not?: Maybe<Scalars['Boolean']>,
  basePrice?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  basePrice_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  basePrice_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  basePrice_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  basePrice_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  basePrice_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  basePrice_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  basePrice_gte?: Maybe<Scalars['Int']>,
  averageWeekly?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  averageWeekly_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  averageWeekly_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  averageWeekly_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  averageWeekly_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  averageWeekly_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  averageWeekly_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  averageWeekly_gte?: Maybe<Scalars['Int']>,
  averageMonthly?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  averageMonthly_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  averageMonthly_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  averageMonthly_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  averageMonthly_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  averageMonthly_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  averageMonthly_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  averageMonthly_gte?: Maybe<Scalars['Int']>,
  weekendPricing?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  weekendPricing_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  weekendPricing_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  weekendPricing_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  weekendPricing_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  weekendPricing_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  weekendPricing_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  weekendPricing_gte?: Maybe<Scalars['Int']>,
};

export type PricingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
  __typename?: 'Query',
  users: Array<Maybe<User>>,
  neighbourhoods: Array<Maybe<Neighbourhood>>,
  cities: Array<Maybe<City>>,
  experiences: Array<Maybe<Experience>>,
  payments: Array<Maybe<Payment>>,
  paymentAccounts: Array<Maybe<PaymentAccount>>,
  messages: Array<Maybe<Message>>,
  notifications: Array<Maybe<Notification>>,
  restaurants: Array<Maybe<Restaurant>>,
  menuItems: Array<Maybe<MenuItem>>,
  paypalInformations: Array<Maybe<PaypalInformation>>,
  policieses: Array<Maybe<Policies>>,
  creditCardInformations: Array<Maybe<CreditCardInformation>>,
  locations: Array<Maybe<Location>>,
  reviews: Array<Maybe<Review>>,
  orders: Array<Maybe<Order>>,
  experienceCategories: Array<Maybe<ExperienceCategory>>,
  paytmInformations: Array<Maybe<PaytmInformation>>,
  debitCardInformations: Array<Maybe<DebitCardInformation>>,
  pricings: Array<Maybe<Pricing>>,
  pictures: Array<Maybe<Picture>>,
  user?: Maybe<User>,
  neighbourhood?: Maybe<Neighbourhood>,
  city?: Maybe<City>,
  experience?: Maybe<Experience>,
  payment?: Maybe<Payment>,
  paymentAccount?: Maybe<PaymentAccount>,
  message?: Maybe<Message>,
  notification?: Maybe<Notification>,
  restaurant?: Maybe<Restaurant>,
  menuItem?: Maybe<MenuItem>,
  paypalInformation?: Maybe<PaypalInformation>,
  policies?: Maybe<Policies>,
  creditCardInformation?: Maybe<CreditCardInformation>,
  location?: Maybe<Location>,
  review?: Maybe<Review>,
  order?: Maybe<Order>,
  experienceCategory?: Maybe<ExperienceCategory>,
  paytmInformation?: Maybe<PaytmInformation>,
  debitCardInformation?: Maybe<DebitCardInformation>,
  pricing?: Maybe<Pricing>,
  picture?: Maybe<Picture>,
  usersConnection: UserConnection,
  neighbourhoodsConnection: NeighbourhoodConnection,
  citiesConnection: CityConnection,
  experiencesConnection: ExperienceConnection,
  paymentsConnection: PaymentConnection,
  paymentAccountsConnection: PaymentAccountConnection,
  messagesConnection: MessageConnection,
  notificationsConnection: NotificationConnection,
  restaurantsConnection: RestaurantConnection,
  menuItemsConnection: MenuItemConnection,
  paypalInformationsConnection: PaypalInformationConnection,
  policiesesConnection: PoliciesConnection,
  creditCardInformationsConnection: CreditCardInformationConnection,
  locationsConnection: LocationConnection,
  reviewsConnection: ReviewConnection,
  ordersConnection: OrderConnection,
  experienceCategoriesConnection: ExperienceCategoryConnection,
  paytmInformationsConnection: PaytmInformationConnection,
  debitCardInformationsConnection: DebitCardInformationConnection,
  pricingsConnection: PricingConnection,
  picturesConnection: PictureConnection,
  /** Fetches an object given its ID */
  node?: Maybe<Node>,
  topExperiences: Array<Experience>,
  topRestaurants: Array<Restaurant>,
  restaurantsInPriceRange: Array<Restaurant>,
  topReservations: Array<Reservation>,
  featuredDestinations: Array<Neighbourhood>,
  experiencesByCity: Array<ExperiencesByCity>,
  viewer?: Maybe<Viewer>,
  myLocation?: Maybe<Location>,
  test: Scalars['String'],
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNeighbourhoodsArgs = {
  where?: Maybe<NeighbourhoodWhereInput>,
  orderBy?: Maybe<NeighbourhoodOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCitiesArgs = {
  where?: Maybe<CityWhereInput>,
  orderBy?: Maybe<CityOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryExperiencesArgs = {
  where?: Maybe<ExperienceWhereInput>,
  orderBy?: Maybe<ExperienceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaymentsArgs = {
  where?: Maybe<PaymentWhereInput>,
  orderBy?: Maybe<PaymentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaymentAccountsArgs = {
  where?: Maybe<PaymentAccountWhereInput>,
  orderBy?: Maybe<PaymentAccountOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMessagesArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNotificationsArgs = {
  where?: Maybe<NotificationWhereInput>,
  orderBy?: Maybe<NotificationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRestaurantsArgs = {
  where?: Maybe<RestaurantWhereInput>,
  orderBy?: Maybe<RestaurantOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMenuItemsArgs = {
  where?: Maybe<MenuItemWhereInput>,
  orderBy?: Maybe<MenuItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaypalInformationsArgs = {
  where?: Maybe<PaypalInformationWhereInput>,
  orderBy?: Maybe<PaypalInformationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPoliciesesArgs = {
  where?: Maybe<PoliciesWhereInput>,
  orderBy?: Maybe<PoliciesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCreditCardInformationsArgs = {
  where?: Maybe<CreditCardInformationWhereInput>,
  orderBy?: Maybe<CreditCardInformationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLocationsArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryReviewsArgs = {
  where?: Maybe<ReviewWhereInput>,
  orderBy?: Maybe<ReviewOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryOrdersArgs = {
  where?: Maybe<OrderWhereInput>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryExperienceCategoriesArgs = {
  where?: Maybe<ExperienceCategoryWhereInput>,
  orderBy?: Maybe<ExperienceCategoryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaytmInformationsArgs = {
  where?: Maybe<PaytmInformationWhereInput>,
  orderBy?: Maybe<PaytmInformationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryDebitCardInformationsArgs = {
  where?: Maybe<DebitCardInformationWhereInput>,
  orderBy?: Maybe<DebitCardInformationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPricingsArgs = {
  where?: Maybe<PricingWhereInput>,
  orderBy?: Maybe<PricingOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPicturesArgs = {
  where?: Maybe<PictureWhereInput>,
  orderBy?: Maybe<PictureOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryNeighbourhoodArgs = {
  where: NeighbourhoodWhereUniqueInput
};


export type QueryCityArgs = {
  where: CityWhereUniqueInput
};


export type QueryExperienceArgs = {
  where: ExperienceWhereUniqueInput
};


export type QueryPaymentArgs = {
  where: PaymentWhereUniqueInput
};


export type QueryPaymentAccountArgs = {
  where: PaymentAccountWhereUniqueInput
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput
};


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput
};


export type QueryRestaurantArgs = {
  where: RestaurantWhereUniqueInput
};


export type QueryMenuItemArgs = {
  where: MenuItemWhereUniqueInput
};


export type QueryPaypalInformationArgs = {
  where: PaypalInformationWhereUniqueInput
};


export type QueryPoliciesArgs = {
  where: PoliciesWhereUniqueInput
};


export type QueryCreditCardInformationArgs = {
  where: CreditCardInformationWhereUniqueInput
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput
};


export type QueryExperienceCategoryArgs = {
  where: ExperienceCategoryWhereUniqueInput
};


export type QueryPaytmInformationArgs = {
  where: PaytmInformationWhereUniqueInput
};


export type QueryDebitCardInformationArgs = {
  where: DebitCardInformationWhereUniqueInput
};


export type QueryPricingArgs = {
  where: PricingWhereUniqueInput
};


export type QueryPictureArgs = {
  where: PictureWhereUniqueInput
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNeighbourhoodsConnectionArgs = {
  where?: Maybe<NeighbourhoodWhereInput>,
  orderBy?: Maybe<NeighbourhoodOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCitiesConnectionArgs = {
  where?: Maybe<CityWhereInput>,
  orderBy?: Maybe<CityOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryExperiencesConnectionArgs = {
  where?: Maybe<ExperienceWhereInput>,
  orderBy?: Maybe<ExperienceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaymentsConnectionArgs = {
  where?: Maybe<PaymentWhereInput>,
  orderBy?: Maybe<PaymentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaymentAccountsConnectionArgs = {
  where?: Maybe<PaymentAccountWhereInput>,
  orderBy?: Maybe<PaymentAccountOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMessagesConnectionArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNotificationsConnectionArgs = {
  where?: Maybe<NotificationWhereInput>,
  orderBy?: Maybe<NotificationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRestaurantsConnectionArgs = {
  where?: Maybe<RestaurantWhereInput>,
  orderBy?: Maybe<RestaurantOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMenuItemsConnectionArgs = {
  where?: Maybe<MenuItemWhereInput>,
  orderBy?: Maybe<MenuItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaypalInformationsConnectionArgs = {
  where?: Maybe<PaypalInformationWhereInput>,
  orderBy?: Maybe<PaypalInformationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPoliciesesConnectionArgs = {
  where?: Maybe<PoliciesWhereInput>,
  orderBy?: Maybe<PoliciesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCreditCardInformationsConnectionArgs = {
  where?: Maybe<CreditCardInformationWhereInput>,
  orderBy?: Maybe<CreditCardInformationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLocationsConnectionArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryReviewsConnectionArgs = {
  where?: Maybe<ReviewWhereInput>,
  orderBy?: Maybe<ReviewOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryOrdersConnectionArgs = {
  where?: Maybe<OrderWhereInput>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryExperienceCategoriesConnectionArgs = {
  where?: Maybe<ExperienceCategoryWhereInput>,
  orderBy?: Maybe<ExperienceCategoryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaytmInformationsConnectionArgs = {
  where?: Maybe<PaytmInformationWhereInput>,
  orderBy?: Maybe<PaytmInformationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryDebitCardInformationsConnectionArgs = {
  where?: Maybe<DebitCardInformationWhereInput>,
  orderBy?: Maybe<DebitCardInformationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPricingsConnectionArgs = {
  where?: Maybe<PricingWhereInput>,
  orderBy?: Maybe<PricingOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPicturesConnectionArgs = {
  where?: Maybe<PictureWhereInput>,
  orderBy?: Maybe<PictureOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};


export type QueryRestaurantsInPriceRangeArgs = {
  min: Scalars['Int'],
  max: Scalars['Int']
};


export type QueryExperiencesByCityArgs = {
  cities: Array<Scalars['String']>
};

export type Reservation = {
  __typename?: 'Reservation',
  id: Scalars['ID'],
  title: Scalars['String'],
  avgPricePerPerson: Scalars['Int'],
  pictures: Array<Picture>,
  location: Location,
  isCurated: Scalars['Boolean'],
  slug: Scalars['String'],
  popularity: Scalars['Int'],
};

export type Restaurant = Node & {
  __typename?: 'Restaurant',
  id: Scalars['ID'],
  name: Scalars['String'],
  shortDescription: Scalars['String'],
  description: Scalars['String'],
  slug: Scalars['String'],
  maxGuests: Scalars['Int'],
  numRatings: Scalars['Int'],
  avgRating?: Maybe<Scalars['Float']>,
  reviews: Array<Review>,
  location?: Maybe<Location>,
  policies?: Maybe<Policies>,
  menu: Array<MenuItem>,
  orders: Array<Order>,
  pictures?: Maybe<Array<Picture>>,
  popularity: Scalars['Int'],
  avgPricePerPerson: Scalars['Int'],
  isCurated: Scalars['Boolean'],
};


export type RestaurantReviewsArgs = {
  where?: Maybe<ReviewWhereInput>,
  orderBy?: Maybe<ReviewOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type RestaurantMenuArgs = {
  where?: Maybe<MenuItemWhereInput>,
  orderBy?: Maybe<MenuItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type RestaurantOrdersArgs = {
  where?: Maybe<OrderWhereInput>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type RestaurantPicturesArgs = {
  where?: Maybe<PictureWhereInput>,
  orderBy?: Maybe<PictureOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type RestaurantConnection = {
  __typename?: 'RestaurantConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<RestaurantEdge>>,
  aggregate: AggregateRestaurant,
};

export type RestaurantCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  shortDescription: Scalars['String'],
  description: Scalars['String'],
  slug: Scalars['String'],
  maxGuests: Scalars['Int'],
  numRatings: Scalars['Int'],
  avgRating?: Maybe<Scalars['Float']>,
  popularity: Scalars['Int'],
  avgPricePerPerson: Scalars['Int'],
  isCurated?: Maybe<Scalars['Boolean']>,
  reviews?: Maybe<ReviewCreateManyInput>,
  location?: Maybe<LocationCreateOneInput>,
  policies?: Maybe<PoliciesCreateOneInput>,
  menu?: Maybe<MenuItemCreateManyInput>,
  orders?: Maybe<OrderCreateManyWithoutRestaurantInput>,
  pictures?: Maybe<PictureCreateManyInput>,
};

export type RestaurantCreateManyInput = {
  create?: Maybe<Array<RestaurantCreateInput>>,
  connect?: Maybe<Array<RestaurantWhereUniqueInput>>,
};

export type RestaurantCreateOneWithoutOrdersInput = {
  create?: Maybe<RestaurantCreateWithoutOrdersInput>,
  connect?: Maybe<RestaurantWhereUniqueInput>,
};

export type RestaurantCreateWithoutOrdersInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  shortDescription: Scalars['String'],
  description: Scalars['String'],
  slug: Scalars['String'],
  maxGuests: Scalars['Int'],
  numRatings: Scalars['Int'],
  avgRating?: Maybe<Scalars['Float']>,
  popularity: Scalars['Int'],
  avgPricePerPerson: Scalars['Int'],
  isCurated?: Maybe<Scalars['Boolean']>,
  reviews?: Maybe<ReviewCreateManyInput>,
  location?: Maybe<LocationCreateOneInput>,
  policies?: Maybe<PoliciesCreateOneInput>,
  menu?: Maybe<MenuItemCreateManyInput>,
  pictures?: Maybe<PictureCreateManyInput>,
};

/** An edge in a connection. */
export type RestaurantEdge = {
  __typename?: 'RestaurantEdge',
  /** The item at the end of the edge. */
  node: Restaurant,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum RestaurantOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  MaxGuestsAsc = 'maxGuests_ASC',
  MaxGuestsDesc = 'maxGuests_DESC',
  NumRatingsAsc = 'numRatings_ASC',
  NumRatingsDesc = 'numRatings_DESC',
  AvgRatingAsc = 'avgRating_ASC',
  AvgRatingDesc = 'avgRating_DESC',
  PopularityAsc = 'popularity_ASC',
  PopularityDesc = 'popularity_DESC',
  AvgPricePerPersonAsc = 'avgPricePerPerson_ASC',
  AvgPricePerPersonDesc = 'avgPricePerPerson_DESC',
  IsCuratedAsc = 'isCurated_ASC',
  IsCuratedDesc = 'isCurated_DESC'
}

export type RestaurantPreviousValues = {
  __typename?: 'RestaurantPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  shortDescription: Scalars['String'],
  description: Scalars['String'],
  slug: Scalars['String'],
  maxGuests: Scalars['Int'],
  numRatings: Scalars['Int'],
  avgRating?: Maybe<Scalars['Float']>,
  popularity: Scalars['Int'],
  avgPricePerPerson: Scalars['Int'],
  isCurated: Scalars['Boolean'],
};

export type RestaurantScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RestaurantScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RestaurantScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RestaurantScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  shortDescription_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  shortDescription_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  shortDescription_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  shortDescription_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  shortDescription_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  shortDescription_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  shortDescription_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  shortDescription_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  shortDescription_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  shortDescription_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  shortDescription_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  shortDescription_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  shortDescription_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  slug_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  slug_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  slug_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  slug_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  slug_not_ends_with?: Maybe<Scalars['String']>,
  maxGuests?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  maxGuests_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  maxGuests_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  maxGuests_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  maxGuests_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  maxGuests_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  maxGuests_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  maxGuests_gte?: Maybe<Scalars['Int']>,
  numRatings?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  numRatings_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  numRatings_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  numRatings_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  numRatings_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  numRatings_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  numRatings_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  numRatings_gte?: Maybe<Scalars['Int']>,
  avgRating?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  avgRating_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  avgRating_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  avgRating_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  avgRating_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  avgRating_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  avgRating_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  avgRating_gte?: Maybe<Scalars['Float']>,
  popularity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  popularity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  popularity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  popularity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  popularity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  popularity_gte?: Maybe<Scalars['Int']>,
  avgPricePerPerson?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  avgPricePerPerson_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  avgPricePerPerson_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  avgPricePerPerson_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  avgPricePerPerson_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  avgPricePerPerson_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  avgPricePerPerson_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  avgPricePerPerson_gte?: Maybe<Scalars['Int']>,
  isCurated?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  isCurated_not?: Maybe<Scalars['Boolean']>,
};

export type RestaurantSubscriptionPayload = {
  __typename?: 'RestaurantSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Restaurant>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<RestaurantPreviousValues>,
};

export type RestaurantSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RestaurantSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RestaurantSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RestaurantSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<RestaurantWhereInput>,
};

export type RestaurantUpdateDataInput = {
  name?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  maxGuests?: Maybe<Scalars['Int']>,
  numRatings?: Maybe<Scalars['Int']>,
  avgRating?: Maybe<Scalars['Float']>,
  popularity?: Maybe<Scalars['Int']>,
  avgPricePerPerson?: Maybe<Scalars['Int']>,
  isCurated?: Maybe<Scalars['Boolean']>,
  reviews?: Maybe<ReviewUpdateManyInput>,
  location?: Maybe<LocationUpdateOneInput>,
  policies?: Maybe<PoliciesUpdateOneInput>,
  menu?: Maybe<MenuItemUpdateManyInput>,
  orders?: Maybe<OrderUpdateManyWithoutRestaurantInput>,
  pictures?: Maybe<PictureUpdateManyInput>,
};

export type RestaurantUpdateInput = {
  name?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  maxGuests?: Maybe<Scalars['Int']>,
  numRatings?: Maybe<Scalars['Int']>,
  avgRating?: Maybe<Scalars['Float']>,
  popularity?: Maybe<Scalars['Int']>,
  avgPricePerPerson?: Maybe<Scalars['Int']>,
  isCurated?: Maybe<Scalars['Boolean']>,
  reviews?: Maybe<ReviewUpdateManyInput>,
  location?: Maybe<LocationUpdateOneInput>,
  policies?: Maybe<PoliciesUpdateOneInput>,
  menu?: Maybe<MenuItemUpdateManyInput>,
  orders?: Maybe<OrderUpdateManyWithoutRestaurantInput>,
  pictures?: Maybe<PictureUpdateManyInput>,
};

export type RestaurantUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  maxGuests?: Maybe<Scalars['Int']>,
  numRatings?: Maybe<Scalars['Int']>,
  avgRating?: Maybe<Scalars['Float']>,
  popularity?: Maybe<Scalars['Int']>,
  avgPricePerPerson?: Maybe<Scalars['Int']>,
  isCurated?: Maybe<Scalars['Boolean']>,
};

export type RestaurantUpdateManyInput = {
  create?: Maybe<Array<RestaurantCreateInput>>,
  connect?: Maybe<Array<RestaurantWhereUniqueInput>>,
  set?: Maybe<Array<RestaurantWhereUniqueInput>>,
  disconnect?: Maybe<Array<RestaurantWhereUniqueInput>>,
  delete?: Maybe<Array<RestaurantWhereUniqueInput>>,
  update?: Maybe<Array<RestaurantUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<RestaurantUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<RestaurantScalarWhereInput>>,
  upsert?: Maybe<Array<RestaurantUpsertWithWhereUniqueNestedInput>>,
};

export type RestaurantUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  maxGuests?: Maybe<Scalars['Int']>,
  numRatings?: Maybe<Scalars['Int']>,
  avgRating?: Maybe<Scalars['Float']>,
  popularity?: Maybe<Scalars['Int']>,
  avgPricePerPerson?: Maybe<Scalars['Int']>,
  isCurated?: Maybe<Scalars['Boolean']>,
};

export type RestaurantUpdateManyWithWhereNestedInput = {
  where: RestaurantScalarWhereInput,
  data: RestaurantUpdateManyDataInput,
};

export type RestaurantUpdateOneRequiredWithoutOrdersInput = {
  create?: Maybe<RestaurantCreateWithoutOrdersInput>,
  connect?: Maybe<RestaurantWhereUniqueInput>,
  update?: Maybe<RestaurantUpdateWithoutOrdersDataInput>,
  upsert?: Maybe<RestaurantUpsertWithoutOrdersInput>,
};

export type RestaurantUpdateWithoutOrdersDataInput = {
  name?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  maxGuests?: Maybe<Scalars['Int']>,
  numRatings?: Maybe<Scalars['Int']>,
  avgRating?: Maybe<Scalars['Float']>,
  popularity?: Maybe<Scalars['Int']>,
  avgPricePerPerson?: Maybe<Scalars['Int']>,
  isCurated?: Maybe<Scalars['Boolean']>,
  reviews?: Maybe<ReviewUpdateManyInput>,
  location?: Maybe<LocationUpdateOneInput>,
  policies?: Maybe<PoliciesUpdateOneInput>,
  menu?: Maybe<MenuItemUpdateManyInput>,
  pictures?: Maybe<PictureUpdateManyInput>,
};

export type RestaurantUpdateWithWhereUniqueNestedInput = {
  where: RestaurantWhereUniqueInput,
  data: RestaurantUpdateDataInput,
};

export type RestaurantUpsertWithoutOrdersInput = {
  update: RestaurantUpdateWithoutOrdersDataInput,
  create: RestaurantCreateWithoutOrdersInput,
};

export type RestaurantUpsertWithWhereUniqueNestedInput = {
  where: RestaurantWhereUniqueInput,
  update: RestaurantUpdateDataInput,
  create: RestaurantCreateInput,
};

export type RestaurantWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RestaurantWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RestaurantWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RestaurantWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  shortDescription_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  shortDescription_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  shortDescription_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  shortDescription_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  shortDescription_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  shortDescription_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  shortDescription_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  shortDescription_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  shortDescription_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  shortDescription_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  shortDescription_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  shortDescription_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  shortDescription_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  slug_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  slug_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  slug_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  slug_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  slug_not_ends_with?: Maybe<Scalars['String']>,
  maxGuests?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  maxGuests_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  maxGuests_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  maxGuests_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  maxGuests_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  maxGuests_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  maxGuests_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  maxGuests_gte?: Maybe<Scalars['Int']>,
  numRatings?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  numRatings_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  numRatings_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  numRatings_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  numRatings_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  numRatings_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  numRatings_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  numRatings_gte?: Maybe<Scalars['Int']>,
  avgRating?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  avgRating_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  avgRating_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  avgRating_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  avgRating_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  avgRating_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  avgRating_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  avgRating_gte?: Maybe<Scalars['Float']>,
  popularity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  popularity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  popularity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  popularity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  popularity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  popularity_gte?: Maybe<Scalars['Int']>,
  avgPricePerPerson?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  avgPricePerPerson_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  avgPricePerPerson_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  avgPricePerPerson_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  avgPricePerPerson_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  avgPricePerPerson_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  avgPricePerPerson_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  avgPricePerPerson_gte?: Maybe<Scalars['Int']>,
  isCurated?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  isCurated_not?: Maybe<Scalars['Boolean']>,
  reviews_every?: Maybe<ReviewWhereInput>,
  reviews_some?: Maybe<ReviewWhereInput>,
  reviews_none?: Maybe<ReviewWhereInput>,
  location?: Maybe<LocationWhereInput>,
  policies?: Maybe<PoliciesWhereInput>,
  menu_every?: Maybe<MenuItemWhereInput>,
  menu_some?: Maybe<MenuItemWhereInput>,
  menu_none?: Maybe<MenuItemWhereInput>,
  orders_every?: Maybe<OrderWhereInput>,
  orders_some?: Maybe<OrderWhereInput>,
  orders_none?: Maybe<OrderWhereInput>,
  pictures_every?: Maybe<PictureWhereInput>,
  pictures_some?: Maybe<PictureWhereInput>,
  pictures_none?: Maybe<PictureWhereInput>,
};

export type RestaurantWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Review = Node & {
  __typename?: 'Review',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  text: Scalars['String'],
  stars: Scalars['Int'],
  accuracy: Scalars['Int'],
  location: Scalars['Int'],
  checkIn: Scalars['Int'],
  value: Scalars['Int'],
  cleanliness: Scalars['Int'],
  communication: Scalars['Int'],
  order: Order,
  experience?: Maybe<Experience>,
};

/** A connection to a list of items. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ReviewEdge>>,
  aggregate: AggregateReview,
};

export type ReviewCreateInput = {
  id?: Maybe<Scalars['ID']>,
  text: Scalars['String'],
  stars: Scalars['Int'],
  accuracy: Scalars['Int'],
  location: Scalars['Int'],
  checkIn: Scalars['Int'],
  value: Scalars['Int'],
  cleanliness: Scalars['Int'],
  communication: Scalars['Int'],
  order: OrderCreateOneInput,
  experience?: Maybe<ExperienceCreateOneWithoutReviewsInput>,
};

export type ReviewCreateManyInput = {
  create?: Maybe<Array<ReviewCreateInput>>,
  connect?: Maybe<Array<ReviewWhereUniqueInput>>,
};

export type ReviewCreateManyWithoutExperienceInput = {
  create?: Maybe<Array<ReviewCreateWithoutExperienceInput>>,
  connect?: Maybe<Array<ReviewWhereUniqueInput>>,
};

export type ReviewCreateWithoutExperienceInput = {
  id?: Maybe<Scalars['ID']>,
  text: Scalars['String'],
  stars: Scalars['Int'],
  accuracy: Scalars['Int'],
  location: Scalars['Int'],
  checkIn: Scalars['Int'],
  value: Scalars['Int'],
  cleanliness: Scalars['Int'],
  communication: Scalars['Int'],
  order: OrderCreateOneInput,
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge',
  /** The item at the end of the edge. */
  node: Review,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum ReviewOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  StarsAsc = 'stars_ASC',
  StarsDesc = 'stars_DESC',
  AccuracyAsc = 'accuracy_ASC',
  AccuracyDesc = 'accuracy_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  CheckInAsc = 'checkIn_ASC',
  CheckInDesc = 'checkIn_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  CleanlinessAsc = 'cleanliness_ASC',
  CleanlinessDesc = 'cleanliness_DESC',
  CommunicationAsc = 'communication_ASC',
  CommunicationDesc = 'communication_DESC'
}

export type ReviewPreviousValues = {
  __typename?: 'ReviewPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  text: Scalars['String'],
  stars: Scalars['Int'],
  accuracy: Scalars['Int'],
  location: Scalars['Int'],
  checkIn: Scalars['Int'],
  value: Scalars['Int'],
  cleanliness: Scalars['Int'],
  communication: Scalars['Int'],
};

export type ReviewScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReviewScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReviewScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReviewScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  text?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  text_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  text_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  text_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  text_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  text_not_ends_with?: Maybe<Scalars['String']>,
  stars?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  stars_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  stars_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  stars_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  stars_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  stars_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  stars_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  stars_gte?: Maybe<Scalars['Int']>,
  accuracy?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  accuracy_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  accuracy_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  accuracy_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  accuracy_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  accuracy_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  accuracy_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  accuracy_gte?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  location_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  location_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  location_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  location_gte?: Maybe<Scalars['Int']>,
  checkIn?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  checkIn_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  checkIn_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  checkIn_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  checkIn_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  checkIn_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  checkIn_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  checkIn_gte?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['Int']>,
  cleanliness?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  cleanliness_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  cleanliness_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  cleanliness_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  cleanliness_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  cleanliness_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  cleanliness_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  cleanliness_gte?: Maybe<Scalars['Int']>,
  communication?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  communication_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  communication_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  communication_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  communication_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  communication_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  communication_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  communication_gte?: Maybe<Scalars['Int']>,
};

export type ReviewSubscriptionPayload = {
  __typename?: 'ReviewSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Review>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ReviewPreviousValues>,
};

export type ReviewSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReviewSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReviewSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReviewSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ReviewWhereInput>,
};

export type ReviewUpdateDataInput = {
  text?: Maybe<Scalars['String']>,
  stars?: Maybe<Scalars['Int']>,
  accuracy?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['Int']>,
  checkIn?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['Int']>,
  cleanliness?: Maybe<Scalars['Int']>,
  communication?: Maybe<Scalars['Int']>,
  order?: Maybe<OrderUpdateOneRequiredInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutReviewsInput>,
};

export type ReviewUpdateInput = {
  text?: Maybe<Scalars['String']>,
  stars?: Maybe<Scalars['Int']>,
  accuracy?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['Int']>,
  checkIn?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['Int']>,
  cleanliness?: Maybe<Scalars['Int']>,
  communication?: Maybe<Scalars['Int']>,
  order?: Maybe<OrderUpdateOneRequiredInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutReviewsInput>,
};

export type ReviewUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>,
  stars?: Maybe<Scalars['Int']>,
  accuracy?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['Int']>,
  checkIn?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['Int']>,
  cleanliness?: Maybe<Scalars['Int']>,
  communication?: Maybe<Scalars['Int']>,
};

export type ReviewUpdateManyInput = {
  create?: Maybe<Array<ReviewCreateInput>>,
  connect?: Maybe<Array<ReviewWhereUniqueInput>>,
  set?: Maybe<Array<ReviewWhereUniqueInput>>,
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>,
  delete?: Maybe<Array<ReviewWhereUniqueInput>>,
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>,
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueNestedInput>>,
};

export type ReviewUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>,
  stars?: Maybe<Scalars['Int']>,
  accuracy?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['Int']>,
  checkIn?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['Int']>,
  cleanliness?: Maybe<Scalars['Int']>,
  communication?: Maybe<Scalars['Int']>,
};

export type ReviewUpdateManyWithoutExperienceInput = {
  create?: Maybe<Array<ReviewCreateWithoutExperienceInput>>,
  connect?: Maybe<Array<ReviewWhereUniqueInput>>,
  set?: Maybe<Array<ReviewWhereUniqueInput>>,
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>,
  delete?: Maybe<Array<ReviewWhereUniqueInput>>,
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutExperienceInput>>,
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>,
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutExperienceInput>>,
};

export type ReviewUpdateManyWithWhereNestedInput = {
  where: ReviewScalarWhereInput,
  data: ReviewUpdateManyDataInput,
};

export type ReviewUpdateWithoutExperienceDataInput = {
  text?: Maybe<Scalars['String']>,
  stars?: Maybe<Scalars['Int']>,
  accuracy?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['Int']>,
  checkIn?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['Int']>,
  cleanliness?: Maybe<Scalars['Int']>,
  communication?: Maybe<Scalars['Int']>,
  order?: Maybe<OrderUpdateOneRequiredInput>,
};

export type ReviewUpdateWithWhereUniqueNestedInput = {
  where: ReviewWhereUniqueInput,
  data: ReviewUpdateDataInput,
};

export type ReviewUpdateWithWhereUniqueWithoutExperienceInput = {
  where: ReviewWhereUniqueInput,
  data: ReviewUpdateWithoutExperienceDataInput,
};

export type ReviewUpsertWithWhereUniqueNestedInput = {
  where: ReviewWhereUniqueInput,
  update: ReviewUpdateDataInput,
  create: ReviewCreateInput,
};

export type ReviewUpsertWithWhereUniqueWithoutExperienceInput = {
  where: ReviewWhereUniqueInput,
  update: ReviewUpdateWithoutExperienceDataInput,
  create: ReviewCreateWithoutExperienceInput,
};

export type ReviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ReviewWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ReviewWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ReviewWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  text?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  text_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  text_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  text_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  text_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  text_not_ends_with?: Maybe<Scalars['String']>,
  stars?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  stars_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  stars_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  stars_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  stars_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  stars_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  stars_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  stars_gte?: Maybe<Scalars['Int']>,
  accuracy?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  accuracy_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  accuracy_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  accuracy_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  accuracy_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  accuracy_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  accuracy_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  accuracy_gte?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  location_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  location_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  location_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  location_gte?: Maybe<Scalars['Int']>,
  checkIn?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  checkIn_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  checkIn_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  checkIn_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  checkIn_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  checkIn_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  checkIn_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  checkIn_gte?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['Int']>,
  cleanliness?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  cleanliness_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  cleanliness_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  cleanliness_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  cleanliness_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  cleanliness_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  cleanliness_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  cleanliness_gte?: Maybe<Scalars['Int']>,
  communication?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  communication_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  communication_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  communication_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  communication_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  communication_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  communication_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  communication_gte?: Maybe<Scalars['Int']>,
  order?: Maybe<OrderWhereInput>,
  experience?: Maybe<ExperienceWhereInput>,
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Subscription = {
  __typename?: 'Subscription',
  user?: Maybe<UserSubscriptionPayload>,
  neighbourhood?: Maybe<NeighbourhoodSubscriptionPayload>,
  city?: Maybe<CitySubscriptionPayload>,
  experience?: Maybe<ExperienceSubscriptionPayload>,
  payment?: Maybe<PaymentSubscriptionPayload>,
  paymentAccount?: Maybe<PaymentAccountSubscriptionPayload>,
  message?: Maybe<MessageSubscriptionPayload>,
  notification?: Maybe<NotificationSubscriptionPayload>,
  restaurant?: Maybe<RestaurantSubscriptionPayload>,
  menuItem?: Maybe<MenuItemSubscriptionPayload>,
  paypalInformation?: Maybe<PaypalInformationSubscriptionPayload>,
  policies?: Maybe<PoliciesSubscriptionPayload>,
  creditCardInformation?: Maybe<CreditCardInformationSubscriptionPayload>,
  location?: Maybe<LocationSubscriptionPayload>,
  review?: Maybe<ReviewSubscriptionPayload>,
  order?: Maybe<OrderSubscriptionPayload>,
  experienceCategory?: Maybe<ExperienceCategorySubscriptionPayload>,
  paytmInformation?: Maybe<PaytmInformationSubscriptionPayload>,
  debitCardInformation?: Maybe<DebitCardInformationSubscriptionPayload>,
  pricing?: Maybe<PricingSubscriptionPayload>,
  picture?: Maybe<PictureSubscriptionPayload>,
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};


export type SubscriptionNeighbourhoodArgs = {
  where?: Maybe<NeighbourhoodSubscriptionWhereInput>
};


export type SubscriptionCityArgs = {
  where?: Maybe<CitySubscriptionWhereInput>
};


export type SubscriptionExperienceArgs = {
  where?: Maybe<ExperienceSubscriptionWhereInput>
};


export type SubscriptionPaymentArgs = {
  where?: Maybe<PaymentSubscriptionWhereInput>
};


export type SubscriptionPaymentAccountArgs = {
  where?: Maybe<PaymentAccountSubscriptionWhereInput>
};


export type SubscriptionMessageArgs = {
  where?: Maybe<MessageSubscriptionWhereInput>
};


export type SubscriptionNotificationArgs = {
  where?: Maybe<NotificationSubscriptionWhereInput>
};


export type SubscriptionRestaurantArgs = {
  where?: Maybe<RestaurantSubscriptionWhereInput>
};


export type SubscriptionMenuItemArgs = {
  where?: Maybe<MenuItemSubscriptionWhereInput>
};


export type SubscriptionPaypalInformationArgs = {
  where?: Maybe<PaypalInformationSubscriptionWhereInput>
};


export type SubscriptionPoliciesArgs = {
  where?: Maybe<PoliciesSubscriptionWhereInput>
};


export type SubscriptionCreditCardInformationArgs = {
  where?: Maybe<CreditCardInformationSubscriptionWhereInput>
};


export type SubscriptionLocationArgs = {
  where?: Maybe<LocationSubscriptionWhereInput>
};


export type SubscriptionReviewArgs = {
  where?: Maybe<ReviewSubscriptionWhereInput>
};


export type SubscriptionOrderArgs = {
  where?: Maybe<OrderSubscriptionWhereInput>
};


export type SubscriptionExperienceCategoryArgs = {
  where?: Maybe<ExperienceCategorySubscriptionWhereInput>
};


export type SubscriptionPaytmInformationArgs = {
  where?: Maybe<PaytmInformationSubscriptionWhereInput>
};


export type SubscriptionDebitCardInformationArgs = {
  where?: Maybe<DebitCardInformationSubscriptionWhereInput>
};


export type SubscriptionPricingArgs = {
  where?: Maybe<PricingSubscriptionWhereInput>
};


export type SubscriptionPictureArgs = {
  where?: Maybe<PictureSubscriptionWhereInput>
};

export type User = Node & {
  __typename?: 'User',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  displayName: Scalars['String'],
  phoneNumber: Scalars['String'],
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  ownedRestaurant?: Maybe<Array<Restaurant>>,
  location?: Maybe<Array<Location>>,
  orders?: Maybe<Array<Order>>,
  paymentAccount?: Maybe<Array<PaymentAccount>>,
  sentMessages?: Maybe<Array<Message>>,
  receivedMessages?: Maybe<Array<Message>>,
  notifications?: Maybe<Array<Notification>>,
  profilePicture?: Maybe<Picture>,
  experiences?: Maybe<Array<Experience>>,
  accountType?: Maybe<UserType>,
  uid: Scalars['String'],
  ownedRestaurants?: Maybe<Array<Restaurant>>,
};


export type UserOwnedRestaurantArgs = {
  where?: Maybe<RestaurantWhereInput>,
  orderBy?: Maybe<RestaurantOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserLocationArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserOrdersArgs = {
  where?: Maybe<OrderWhereInput>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserPaymentAccountArgs = {
  where?: Maybe<PaymentAccountWhereInput>,
  orderBy?: Maybe<PaymentAccountOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserSentMessagesArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserReceivedMessagesArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserNotificationsArgs = {
  where?: Maybe<NotificationWhereInput>,
  orderBy?: Maybe<NotificationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserExperiencesArgs = {
  where?: Maybe<ExperienceWhereInput>,
  orderBy?: Maybe<ExperienceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  displayName: Scalars['String'],
  phoneNumber: Scalars['String'],
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid: Scalars['String'],
  ownedRestaurant?: Maybe<RestaurantCreateManyInput>,
  location?: Maybe<LocationCreateManyInput>,
  orders?: Maybe<OrderCreateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountCreateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageCreateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageCreateManyWithoutToInput>,
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureCreateOneInput>,
  experiences?: Maybe<ExperienceCreateManyWithoutHostInput>,
};

export type UserCreateOneWithoutExperiencesInput = {
  create?: Maybe<UserCreateWithoutExperiencesInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutNotificationsInput = {
  create?: Maybe<UserCreateWithoutNotificationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutOrdersInput = {
  create?: Maybe<UserCreateWithoutOrdersInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutPaymentAccountInput = {
  create?: Maybe<UserCreateWithoutPaymentAccountInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutReceivedMessagesInput = {
  create?: Maybe<UserCreateWithoutReceivedMessagesInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutSentMessagesInput = {
  create?: Maybe<UserCreateWithoutSentMessagesInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutExperiencesInput = {
  id?: Maybe<Scalars['ID']>,
  displayName: Scalars['String'],
  phoneNumber: Scalars['String'],
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid: Scalars['String'],
  ownedRestaurant?: Maybe<RestaurantCreateManyInput>,
  location?: Maybe<LocationCreateManyInput>,
  orders?: Maybe<OrderCreateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountCreateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageCreateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageCreateManyWithoutToInput>,
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureCreateOneInput>,
};

export type UserCreateWithoutNotificationsInput = {
  id?: Maybe<Scalars['ID']>,
  displayName: Scalars['String'],
  phoneNumber: Scalars['String'],
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid: Scalars['String'],
  ownedRestaurant?: Maybe<RestaurantCreateManyInput>,
  location?: Maybe<LocationCreateManyInput>,
  orders?: Maybe<OrderCreateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountCreateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageCreateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageCreateManyWithoutToInput>,
  profilePicture?: Maybe<PictureCreateOneInput>,
  experiences?: Maybe<ExperienceCreateManyWithoutHostInput>,
};

export type UserCreateWithoutOrdersInput = {
  id?: Maybe<Scalars['ID']>,
  displayName: Scalars['String'],
  phoneNumber: Scalars['String'],
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid: Scalars['String'],
  ownedRestaurant?: Maybe<RestaurantCreateManyInput>,
  location?: Maybe<LocationCreateManyInput>,
  paymentAccount?: Maybe<PaymentAccountCreateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageCreateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageCreateManyWithoutToInput>,
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureCreateOneInput>,
  experiences?: Maybe<ExperienceCreateManyWithoutHostInput>,
};

export type UserCreateWithoutPaymentAccountInput = {
  id?: Maybe<Scalars['ID']>,
  displayName: Scalars['String'],
  phoneNumber: Scalars['String'],
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid: Scalars['String'],
  ownedRestaurant?: Maybe<RestaurantCreateManyInput>,
  location?: Maybe<LocationCreateManyInput>,
  orders?: Maybe<OrderCreateManyWithoutBookeeInput>,
  sentMessages?: Maybe<MessageCreateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageCreateManyWithoutToInput>,
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureCreateOneInput>,
  experiences?: Maybe<ExperienceCreateManyWithoutHostInput>,
};

export type UserCreateWithoutReceivedMessagesInput = {
  id?: Maybe<Scalars['ID']>,
  displayName: Scalars['String'],
  phoneNumber: Scalars['String'],
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid: Scalars['String'],
  ownedRestaurant?: Maybe<RestaurantCreateManyInput>,
  location?: Maybe<LocationCreateManyInput>,
  orders?: Maybe<OrderCreateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountCreateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageCreateManyWithoutFromInput>,
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureCreateOneInput>,
  experiences?: Maybe<ExperienceCreateManyWithoutHostInput>,
};

export type UserCreateWithoutSentMessagesInput = {
  id?: Maybe<Scalars['ID']>,
  displayName: Scalars['String'],
  phoneNumber: Scalars['String'],
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid: Scalars['String'],
  ownedRestaurant?: Maybe<RestaurantCreateManyInput>,
  location?: Maybe<LocationCreateManyInput>,
  orders?: Maybe<OrderCreateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountCreateManyWithoutUserInput>,
  receivedMessages?: Maybe<MessageCreateManyWithoutToInput>,
  notifications?: Maybe<NotificationCreateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureCreateOneInput>,
  experiences?: Maybe<ExperienceCreateManyWithoutHostInput>,
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge',
  /** The item at the end of the edge. */
  node: User,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DisplayNameAsc = 'displayName_ASC',
  DisplayNameDesc = 'displayName_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  ResponseRateAsc = 'responseRate_ASC',
  ResponseRateDesc = 'responseRate_DESC',
  ResponseTimeAsc = 'responseTime_ASC',
  ResponseTimeDesc = 'responseTime_DESC',
  AccountTypeAsc = 'accountType_ASC',
  AccountTypeDesc = 'accountType_DESC',
  UidAsc = 'uid_ASC',
  UidDesc = 'uid_DESC'
}

export type UserPreviousValues = {
  __typename?: 'UserPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  displayName: Scalars['String'],
  phoneNumber: Scalars['String'],
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid: Scalars['String'],
};

export type UserSubscriptionPayload = {
  __typename?: 'UserSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type UserSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
};

export enum UserType {
  Admin = 'ADMIN',
  Seller = 'SELLER',
  Consumer = 'CONSUMER'
}

export type UserUpdateInput = {
  displayName?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid?: Maybe<Scalars['String']>,
  ownedRestaurant?: Maybe<RestaurantUpdateManyInput>,
  location?: Maybe<LocationUpdateManyInput>,
  orders?: Maybe<OrderUpdateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountUpdateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageUpdateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageUpdateManyWithoutToInput>,
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureUpdateOneInput>,
  experiences?: Maybe<ExperienceUpdateManyWithoutHostInput>,
};

export type UserUpdateManyMutationInput = {
  displayName?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid?: Maybe<Scalars['String']>,
};

export type UserUpdateOneRequiredWithoutExperiencesInput = {
  create?: Maybe<UserCreateWithoutExperiencesInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutExperiencesDataInput>,
  upsert?: Maybe<UserUpsertWithoutExperiencesInput>,
};

export type UserUpdateOneRequiredWithoutNotificationsInput = {
  create?: Maybe<UserCreateWithoutNotificationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutNotificationsDataInput>,
  upsert?: Maybe<UserUpsertWithoutNotificationsInput>,
};

export type UserUpdateOneRequiredWithoutOrdersInput = {
  create?: Maybe<UserCreateWithoutOrdersInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutOrdersDataInput>,
  upsert?: Maybe<UserUpsertWithoutOrdersInput>,
};

export type UserUpdateOneRequiredWithoutPaymentAccountInput = {
  create?: Maybe<UserCreateWithoutPaymentAccountInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutPaymentAccountDataInput>,
  upsert?: Maybe<UserUpsertWithoutPaymentAccountInput>,
};

export type UserUpdateOneRequiredWithoutReceivedMessagesInput = {
  create?: Maybe<UserCreateWithoutReceivedMessagesInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutReceivedMessagesDataInput>,
  upsert?: Maybe<UserUpsertWithoutReceivedMessagesInput>,
};

export type UserUpdateOneRequiredWithoutSentMessagesInput = {
  create?: Maybe<UserCreateWithoutSentMessagesInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutSentMessagesDataInput>,
  upsert?: Maybe<UserUpsertWithoutSentMessagesInput>,
};

export type UserUpdateWithoutExperiencesDataInput = {
  displayName?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid?: Maybe<Scalars['String']>,
  ownedRestaurant?: Maybe<RestaurantUpdateManyInput>,
  location?: Maybe<LocationUpdateManyInput>,
  orders?: Maybe<OrderUpdateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountUpdateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageUpdateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageUpdateManyWithoutToInput>,
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureUpdateOneInput>,
};

export type UserUpdateWithoutNotificationsDataInput = {
  displayName?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid?: Maybe<Scalars['String']>,
  ownedRestaurant?: Maybe<RestaurantUpdateManyInput>,
  location?: Maybe<LocationUpdateManyInput>,
  orders?: Maybe<OrderUpdateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountUpdateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageUpdateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageUpdateManyWithoutToInput>,
  profilePicture?: Maybe<PictureUpdateOneInput>,
  experiences?: Maybe<ExperienceUpdateManyWithoutHostInput>,
};

export type UserUpdateWithoutOrdersDataInput = {
  displayName?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid?: Maybe<Scalars['String']>,
  ownedRestaurant?: Maybe<RestaurantUpdateManyInput>,
  location?: Maybe<LocationUpdateManyInput>,
  paymentAccount?: Maybe<PaymentAccountUpdateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageUpdateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageUpdateManyWithoutToInput>,
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureUpdateOneInput>,
  experiences?: Maybe<ExperienceUpdateManyWithoutHostInput>,
};

export type UserUpdateWithoutPaymentAccountDataInput = {
  displayName?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid?: Maybe<Scalars['String']>,
  ownedRestaurant?: Maybe<RestaurantUpdateManyInput>,
  location?: Maybe<LocationUpdateManyInput>,
  orders?: Maybe<OrderUpdateManyWithoutBookeeInput>,
  sentMessages?: Maybe<MessageUpdateManyWithoutFromInput>,
  receivedMessages?: Maybe<MessageUpdateManyWithoutToInput>,
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureUpdateOneInput>,
  experiences?: Maybe<ExperienceUpdateManyWithoutHostInput>,
};

export type UserUpdateWithoutReceivedMessagesDataInput = {
  displayName?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid?: Maybe<Scalars['String']>,
  ownedRestaurant?: Maybe<RestaurantUpdateManyInput>,
  location?: Maybe<LocationUpdateManyInput>,
  orders?: Maybe<OrderUpdateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountUpdateManyWithoutUserInput>,
  sentMessages?: Maybe<MessageUpdateManyWithoutFromInput>,
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureUpdateOneInput>,
  experiences?: Maybe<ExperienceUpdateManyWithoutHostInput>,
};

export type UserUpdateWithoutSentMessagesDataInput = {
  displayName?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  responseRate?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  uid?: Maybe<Scalars['String']>,
  ownedRestaurant?: Maybe<RestaurantUpdateManyInput>,
  location?: Maybe<LocationUpdateManyInput>,
  orders?: Maybe<OrderUpdateManyWithoutBookeeInput>,
  paymentAccount?: Maybe<PaymentAccountUpdateManyWithoutUserInput>,
  receivedMessages?: Maybe<MessageUpdateManyWithoutToInput>,
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>,
  profilePicture?: Maybe<PictureUpdateOneInput>,
  experiences?: Maybe<ExperienceUpdateManyWithoutHostInput>,
};

export type UserUpsertWithoutExperiencesInput = {
  update: UserUpdateWithoutExperiencesDataInput,
  create: UserCreateWithoutExperiencesInput,
};

export type UserUpsertWithoutNotificationsInput = {
  update: UserUpdateWithoutNotificationsDataInput,
  create: UserCreateWithoutNotificationsInput,
};

export type UserUpsertWithoutOrdersInput = {
  update: UserUpdateWithoutOrdersDataInput,
  create: UserCreateWithoutOrdersInput,
};

export type UserUpsertWithoutPaymentAccountInput = {
  update: UserUpdateWithoutPaymentAccountDataInput,
  create: UserCreateWithoutPaymentAccountInput,
};

export type UserUpsertWithoutReceivedMessagesInput = {
  update: UserUpdateWithoutReceivedMessagesDataInput,
  create: UserCreateWithoutReceivedMessagesInput,
};

export type UserUpsertWithoutSentMessagesInput = {
  update: UserUpdateWithoutSentMessagesDataInput,
  create: UserCreateWithoutSentMessagesInput,
};

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  displayName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  displayName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  displayName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  displayName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  displayName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  displayName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  displayName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  displayName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  displayName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  displayName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  displayName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  displayName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  displayName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  displayName_not_ends_with?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  phoneNumber_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  phoneNumber_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  phoneNumber_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  phoneNumber_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  phoneNumber_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  phoneNumber_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  phoneNumber_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  phoneNumber_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  phoneNumber_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  phoneNumber_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  phoneNumber_not_ends_with?: Maybe<Scalars['String']>,
  responseRate?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  responseRate_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  responseRate_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  responseRate_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  responseRate_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  responseRate_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  responseRate_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  responseRate_gte?: Maybe<Scalars['Float']>,
  responseTime?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  responseTime_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  responseTime_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  responseTime_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  responseTime_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  responseTime_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  responseTime_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  responseTime_gte?: Maybe<Scalars['Int']>,
  accountType?: Maybe<UserType>,
  /** All values that are not equal to given value. */
  accountType_not?: Maybe<UserType>,
  /** All values that are contained in given list. */
  accountType_in?: Maybe<Array<UserType>>,
  /** All values that are not contained in given list. */
  accountType_not_in?: Maybe<Array<UserType>>,
  uid?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  uid_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  uid_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  uid_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  uid_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  uid_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  uid_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  uid_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  uid_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  uid_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  uid_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  uid_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  uid_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  uid_not_ends_with?: Maybe<Scalars['String']>,
  ownedRestaurant_every?: Maybe<RestaurantWhereInput>,
  ownedRestaurant_some?: Maybe<RestaurantWhereInput>,
  ownedRestaurant_none?: Maybe<RestaurantWhereInput>,
  location_every?: Maybe<LocationWhereInput>,
  location_some?: Maybe<LocationWhereInput>,
  location_none?: Maybe<LocationWhereInput>,
  orders_every?: Maybe<OrderWhereInput>,
  orders_some?: Maybe<OrderWhereInput>,
  orders_none?: Maybe<OrderWhereInput>,
  paymentAccount_every?: Maybe<PaymentAccountWhereInput>,
  paymentAccount_some?: Maybe<PaymentAccountWhereInput>,
  paymentAccount_none?: Maybe<PaymentAccountWhereInput>,
  sentMessages_every?: Maybe<MessageWhereInput>,
  sentMessages_some?: Maybe<MessageWhereInput>,
  sentMessages_none?: Maybe<MessageWhereInput>,
  receivedMessages_every?: Maybe<MessageWhereInput>,
  receivedMessages_some?: Maybe<MessageWhereInput>,
  receivedMessages_none?: Maybe<MessageWhereInput>,
  notifications_every?: Maybe<NotificationWhereInput>,
  notifications_some?: Maybe<NotificationWhereInput>,
  notifications_none?: Maybe<NotificationWhereInput>,
  profilePicture?: Maybe<PictureWhereInput>,
  experiences_every?: Maybe<ExperienceWhereInput>,
  experiences_some?: Maybe<ExperienceWhereInput>,
  experiences_none?: Maybe<ExperienceWhereInput>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  uid?: Maybe<Scalars['String']>,
};

export type Viewer = {
  __typename?: 'Viewer',
  me: User,
  orders: Array<Order>,
};


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  UserWhereInput: UserWhereInput,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  UserType: UserType,
  RestaurantWhereInput: RestaurantWhereInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  ReviewWhereInput: ReviewWhereInput,
  OrderWhereInput: OrderWhereInput,
  PaymentWhereInput: PaymentWhereInput,
  PaymentAccountWhereInput: PaymentAccountWhereInput,
  PAYMENT_PROVIDER: Payment_Provider,
  PaypalInformationWhereInput: PaypalInformationWhereInput,
  PaytmInformationWhereInput: PaytmInformationWhereInput,
  CreditCardInformationWhereInput: CreditCardInformationWhereInput,
  DebitCardInformationWhereInput: DebitCardInformationWhereInput,
  ExperienceWhereInput: ExperienceWhereInput,
  ExperienceCategoryWhereInput: ExperienceCategoryWhereInput,
  LocationWhereInput: LocationWhereInput,
  NeighbourhoodWhereInput: NeighbourhoodWhereInput,
  PictureWhereInput: PictureWhereInput,
  CityWhereInput: CityWhereInput,
  PoliciesWhereInput: PoliciesWhereInput,
  MenuItemWhereInput: MenuItemWhereInput,
  PricingWhereInput: PricingWhereInput,
  MessageWhereInput: MessageWhereInput,
  NotificationWhereInput: NotificationWhereInput,
  NOTIFICATION_TYPE: Notification_Type,
  UserOrderByInput: UserOrderByInput,
  User: ResolverTypeWrapper<User>,
  Node: ResolverTypeWrapper<Node>,
  RestaurantOrderByInput: RestaurantOrderByInput,
  Restaurant: ResolverTypeWrapper<Restaurant>,
  ReviewOrderByInput: ReviewOrderByInput,
  Review: ResolverTypeWrapper<Review>,
  Order: ResolverTypeWrapper<Order>,
  Payment: ResolverTypeWrapper<Payment>,
  PaymentAccount: ResolverTypeWrapper<PaymentAccount>,
  PaymentOrderByInput: PaymentOrderByInput,
  PaypalInformation: ResolverTypeWrapper<PaypalInformation>,
  PaytmInformation: ResolverTypeWrapper<PaytmInformation>,
  CreditCardInformation: ResolverTypeWrapper<CreditCardInformation>,
  DebitCardInformation: ResolverTypeWrapper<DebitCardInformation>,
  Experience: ResolverTypeWrapper<Experience>,
  ExperienceCategory: ResolverTypeWrapper<ExperienceCategory>,
  Location: ResolverTypeWrapper<Location>,
  Neighbourhood: ResolverTypeWrapper<Neighbourhood>,
  LocationOrderByInput: LocationOrderByInput,
  Picture: ResolverTypeWrapper<Picture>,
  City: ResolverTypeWrapper<City>,
  NeighbourhoodOrderByInput: NeighbourhoodOrderByInput,
  Policies: ResolverTypeWrapper<Policies>,
  MenuItemOrderByInput: MenuItemOrderByInput,
  MenuItem: ResolverTypeWrapper<MenuItem>,
  Pricing: ResolverTypeWrapper<Pricing>,
  PictureOrderByInput: PictureOrderByInput,
  OrderOrderByInput: OrderOrderByInput,
  PaymentAccountOrderByInput: PaymentAccountOrderByInput,
  MessageOrderByInput: MessageOrderByInput,
  Message: ResolverTypeWrapper<Message>,
  NotificationOrderByInput: NotificationOrderByInput,
  Notification: ResolverTypeWrapper<Notification>,
  ExperienceOrderByInput: ExperienceOrderByInput,
  CityOrderByInput: CityOrderByInput,
  PaypalInformationOrderByInput: PaypalInformationOrderByInput,
  PoliciesOrderByInput: PoliciesOrderByInput,
  CreditCardInformationOrderByInput: CreditCardInformationOrderByInput,
  ExperienceCategoryOrderByInput: ExperienceCategoryOrderByInput,
  PaytmInformationOrderByInput: PaytmInformationOrderByInput,
  DebitCardInformationOrderByInput: DebitCardInformationOrderByInput,
  PricingOrderByInput: PricingOrderByInput,
  UserWhereUniqueInput: UserWhereUniqueInput,
  NeighbourhoodWhereUniqueInput: NeighbourhoodWhereUniqueInput,
  CityWhereUniqueInput: CityWhereUniqueInput,
  ExperienceWhereUniqueInput: ExperienceWhereUniqueInput,
  PaymentWhereUniqueInput: PaymentWhereUniqueInput,
  PaymentAccountWhereUniqueInput: PaymentAccountWhereUniqueInput,
  MessageWhereUniqueInput: MessageWhereUniqueInput,
  NotificationWhereUniqueInput: NotificationWhereUniqueInput,
  RestaurantWhereUniqueInput: RestaurantWhereUniqueInput,
  MenuItemWhereUniqueInput: MenuItemWhereUniqueInput,
  PaypalInformationWhereUniqueInput: PaypalInformationWhereUniqueInput,
  PoliciesWhereUniqueInput: PoliciesWhereUniqueInput,
  CreditCardInformationWhereUniqueInput: CreditCardInformationWhereUniqueInput,
  LocationWhereUniqueInput: LocationWhereUniqueInput,
  ReviewWhereUniqueInput: ReviewWhereUniqueInput,
  OrderWhereUniqueInput: OrderWhereUniqueInput,
  ExperienceCategoryWhereUniqueInput: ExperienceCategoryWhereUniqueInput,
  PaytmInformationWhereUniqueInput: PaytmInformationWhereUniqueInput,
  DebitCardInformationWhereUniqueInput: DebitCardInformationWhereUniqueInput,
  PricingWhereUniqueInput: PricingWhereUniqueInput,
  PictureWhereUniqueInput: PictureWhereUniqueInput,
  UserConnection: ResolverTypeWrapper<UserConnection>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  UserEdge: ResolverTypeWrapper<UserEdge>,
  AggregateUser: ResolverTypeWrapper<AggregateUser>,
  NeighbourhoodConnection: ResolverTypeWrapper<NeighbourhoodConnection>,
  NeighbourhoodEdge: ResolverTypeWrapper<NeighbourhoodEdge>,
  AggregateNeighbourhood: ResolverTypeWrapper<AggregateNeighbourhood>,
  CityConnection: ResolverTypeWrapper<CityConnection>,
  CityEdge: ResolverTypeWrapper<CityEdge>,
  AggregateCity: ResolverTypeWrapper<AggregateCity>,
  ExperienceConnection: ResolverTypeWrapper<ExperienceConnection>,
  ExperienceEdge: ResolverTypeWrapper<ExperienceEdge>,
  AggregateExperience: ResolverTypeWrapper<AggregateExperience>,
  PaymentConnection: ResolverTypeWrapper<PaymentConnection>,
  PaymentEdge: ResolverTypeWrapper<PaymentEdge>,
  AggregatePayment: ResolverTypeWrapper<AggregatePayment>,
  PaymentAccountConnection: ResolverTypeWrapper<PaymentAccountConnection>,
  PaymentAccountEdge: ResolverTypeWrapper<PaymentAccountEdge>,
  AggregatePaymentAccount: ResolverTypeWrapper<AggregatePaymentAccount>,
  MessageConnection: ResolverTypeWrapper<MessageConnection>,
  MessageEdge: ResolverTypeWrapper<MessageEdge>,
  AggregateMessage: ResolverTypeWrapper<AggregateMessage>,
  NotificationConnection: ResolverTypeWrapper<NotificationConnection>,
  NotificationEdge: ResolverTypeWrapper<NotificationEdge>,
  AggregateNotification: ResolverTypeWrapper<AggregateNotification>,
  RestaurantConnection: ResolverTypeWrapper<RestaurantConnection>,
  RestaurantEdge: ResolverTypeWrapper<RestaurantEdge>,
  AggregateRestaurant: ResolverTypeWrapper<AggregateRestaurant>,
  MenuItemConnection: ResolverTypeWrapper<MenuItemConnection>,
  MenuItemEdge: ResolverTypeWrapper<MenuItemEdge>,
  AggregateMenuItem: ResolverTypeWrapper<AggregateMenuItem>,
  PaypalInformationConnection: ResolverTypeWrapper<PaypalInformationConnection>,
  PaypalInformationEdge: ResolverTypeWrapper<PaypalInformationEdge>,
  AggregatePaypalInformation: ResolverTypeWrapper<AggregatePaypalInformation>,
  PoliciesConnection: ResolverTypeWrapper<PoliciesConnection>,
  PoliciesEdge: ResolverTypeWrapper<PoliciesEdge>,
  AggregatePolicies: ResolverTypeWrapper<AggregatePolicies>,
  CreditCardInformationConnection: ResolverTypeWrapper<CreditCardInformationConnection>,
  CreditCardInformationEdge: ResolverTypeWrapper<CreditCardInformationEdge>,
  AggregateCreditCardInformation: ResolverTypeWrapper<AggregateCreditCardInformation>,
  LocationConnection: ResolverTypeWrapper<LocationConnection>,
  LocationEdge: ResolverTypeWrapper<LocationEdge>,
  AggregateLocation: ResolverTypeWrapper<AggregateLocation>,
  ReviewConnection: ResolverTypeWrapper<ReviewConnection>,
  ReviewEdge: ResolverTypeWrapper<ReviewEdge>,
  AggregateReview: ResolverTypeWrapper<AggregateReview>,
  OrderConnection: ResolverTypeWrapper<OrderConnection>,
  OrderEdge: ResolverTypeWrapper<OrderEdge>,
  AggregateOrder: ResolverTypeWrapper<AggregateOrder>,
  ExperienceCategoryConnection: ResolverTypeWrapper<ExperienceCategoryConnection>,
  ExperienceCategoryEdge: ResolverTypeWrapper<ExperienceCategoryEdge>,
  AggregateExperienceCategory: ResolverTypeWrapper<AggregateExperienceCategory>,
  PaytmInformationConnection: ResolverTypeWrapper<PaytmInformationConnection>,
  PaytmInformationEdge: ResolverTypeWrapper<PaytmInformationEdge>,
  AggregatePaytmInformation: ResolverTypeWrapper<AggregatePaytmInformation>,
  DebitCardInformationConnection: ResolverTypeWrapper<DebitCardInformationConnection>,
  DebitCardInformationEdge: ResolverTypeWrapper<DebitCardInformationEdge>,
  AggregateDebitCardInformation: ResolverTypeWrapper<AggregateDebitCardInformation>,
  PricingConnection: ResolverTypeWrapper<PricingConnection>,
  PricingEdge: ResolverTypeWrapper<PricingEdge>,
  AggregatePricing: ResolverTypeWrapper<AggregatePricing>,
  PictureConnection: ResolverTypeWrapper<PictureConnection>,
  PictureEdge: ResolverTypeWrapper<PictureEdge>,
  AggregatePicture: ResolverTypeWrapper<AggregatePicture>,
  Reservation: ResolverTypeWrapper<Reservation>,
  ExperiencesByCity: ResolverTypeWrapper<ExperiencesByCity>,
  Viewer: ResolverTypeWrapper<Viewer>,
  Mutation: ResolverTypeWrapper<{}>,
  UserCreateInput: UserCreateInput,
  RestaurantCreateManyInput: RestaurantCreateManyInput,
  RestaurantCreateInput: RestaurantCreateInput,
  ReviewCreateManyInput: ReviewCreateManyInput,
  ReviewCreateInput: ReviewCreateInput,
  OrderCreateOneInput: OrderCreateOneInput,
  OrderCreateInput: OrderCreateInput,
  UserCreateOneWithoutOrdersInput: UserCreateOneWithoutOrdersInput,
  UserCreateWithoutOrdersInput: UserCreateWithoutOrdersInput,
  LocationCreateManyInput: LocationCreateManyInput,
  LocationCreateInput: LocationCreateInput,
  NeighbourhoodCreateOneWithoutLocationsInput: NeighbourhoodCreateOneWithoutLocationsInput,
  NeighbourhoodCreateWithoutLocationsInput: NeighbourhoodCreateWithoutLocationsInput,
  PictureCreateOneInput: PictureCreateOneInput,
  PictureCreateInput: PictureCreateInput,
  CityCreateOneWithoutNeighbourhoodsInput: CityCreateOneWithoutNeighbourhoodsInput,
  CityCreateWithoutNeighbourhoodsInput: CityCreateWithoutNeighbourhoodsInput,
  PaymentAccountCreateManyWithoutUserInput: PaymentAccountCreateManyWithoutUserInput,
  PaymentAccountCreateWithoutUserInput: PaymentAccountCreateWithoutUserInput,
  PaymentCreateManyWithoutPaymentMethodInput: PaymentCreateManyWithoutPaymentMethodInput,
  PaymentCreateWithoutPaymentMethodInput: PaymentCreateWithoutPaymentMethodInput,
  OrderCreateOneWithoutPaymentInput: OrderCreateOneWithoutPaymentInput,
  OrderCreateWithoutPaymentInput: OrderCreateWithoutPaymentInput,
  RestaurantCreateOneWithoutOrdersInput: RestaurantCreateOneWithoutOrdersInput,
  RestaurantCreateWithoutOrdersInput: RestaurantCreateWithoutOrdersInput,
  LocationCreateOneInput: LocationCreateOneInput,
  PoliciesCreateOneInput: PoliciesCreateOneInput,
  PoliciesCreateInput: PoliciesCreateInput,
  MenuItemCreateManyInput: MenuItemCreateManyInput,
  MenuItemCreateInput: MenuItemCreateInput,
  PricingCreateOneInput: PricingCreateOneInput,
  PricingCreateInput: PricingCreateInput,
  PictureCreateManyInput: PictureCreateManyInput,
  PaypalInformationCreateOneInput: PaypalInformationCreateOneInput,
  PaypalInformationCreateInput: PaypalInformationCreateInput,
  PaytmInformationCreateOneInput: PaytmInformationCreateOneInput,
  PaytmInformationCreateInput: PaytmInformationCreateInput,
  CreditCardInformationCreateOneInput: CreditCardInformationCreateOneInput,
  CreditCardInformationCreateInput: CreditCardInformationCreateInput,
  DebitCardInformationCreateOneInput: DebitCardInformationCreateOneInput,
  DebitCardInformationCreateInput: DebitCardInformationCreateInput,
  MessageCreateManyWithoutFromInput: MessageCreateManyWithoutFromInput,
  MessageCreateWithoutFromInput: MessageCreateWithoutFromInput,
  UserCreateOneWithoutReceivedMessagesInput: UserCreateOneWithoutReceivedMessagesInput,
  UserCreateWithoutReceivedMessagesInput: UserCreateWithoutReceivedMessagesInput,
  OrderCreateManyWithoutBookeeInput: OrderCreateManyWithoutBookeeInput,
  OrderCreateWithoutBookeeInput: OrderCreateWithoutBookeeInput,
  PaymentCreateOneWithoutOrderInput: PaymentCreateOneWithoutOrderInput,
  PaymentCreateWithoutOrderInput: PaymentCreateWithoutOrderInput,
  PaymentAccountCreateOneWithoutPaymentsInput: PaymentAccountCreateOneWithoutPaymentsInput,
  PaymentAccountCreateWithoutPaymentsInput: PaymentAccountCreateWithoutPaymentsInput,
  UserCreateOneWithoutPaymentAccountInput: UserCreateOneWithoutPaymentAccountInput,
  UserCreateWithoutPaymentAccountInput: UserCreateWithoutPaymentAccountInput,
  MessageCreateManyWithoutToInput: MessageCreateManyWithoutToInput,
  MessageCreateWithoutToInput: MessageCreateWithoutToInput,
  UserCreateOneWithoutSentMessagesInput: UserCreateOneWithoutSentMessagesInput,
  UserCreateWithoutSentMessagesInput: UserCreateWithoutSentMessagesInput,
  NotificationCreateManyWithoutUserInput: NotificationCreateManyWithoutUserInput,
  NotificationCreateWithoutUserInput: NotificationCreateWithoutUserInput,
  ExperienceCreateManyWithoutHostInput: ExperienceCreateManyWithoutHostInput,
  ExperienceCreateWithoutHostInput: ExperienceCreateWithoutHostInput,
  ExperienceCategoryCreateOneInput: ExperienceCategoryCreateOneInput,
  ExperienceCategoryCreateInput: ExperienceCategoryCreateInput,
  ReviewCreateManyWithoutExperienceInput: ReviewCreateManyWithoutExperienceInput,
  ReviewCreateWithoutExperienceInput: ReviewCreateWithoutExperienceInput,
  ExperienceCreateOneWithoutReviewsInput: ExperienceCreateOneWithoutReviewsInput,
  ExperienceCreateWithoutReviewsInput: ExperienceCreateWithoutReviewsInput,
  UserCreateOneWithoutExperiencesInput: UserCreateOneWithoutExperiencesInput,
  UserCreateWithoutExperiencesInput: UserCreateWithoutExperiencesInput,
  OrderCreateManyWithoutRestaurantInput: OrderCreateManyWithoutRestaurantInput,
  OrderCreateWithoutRestaurantInput: OrderCreateWithoutRestaurantInput,
  NeighbourhoodCreateInput: NeighbourhoodCreateInput,
  LocationCreateManyWithoutNeighbourHoodInput: LocationCreateManyWithoutNeighbourHoodInput,
  LocationCreateWithoutNeighbourHoodInput: LocationCreateWithoutNeighbourHoodInput,
  CityCreateInput: CityCreateInput,
  NeighbourhoodCreateManyWithoutCityInput: NeighbourhoodCreateManyWithoutCityInput,
  NeighbourhoodCreateWithoutCityInput: NeighbourhoodCreateWithoutCityInput,
  ExperienceCreateInput: ExperienceCreateInput,
  PaymentCreateInput: PaymentCreateInput,
  PaymentAccountCreateInput: PaymentAccountCreateInput,
  MessageCreateInput: MessageCreateInput,
  NotificationCreateInput: NotificationCreateInput,
  UserCreateOneWithoutNotificationsInput: UserCreateOneWithoutNotificationsInput,
  UserCreateWithoutNotificationsInput: UserCreateWithoutNotificationsInput,
  UserUpdateInput: UserUpdateInput,
  RestaurantUpdateManyInput: RestaurantUpdateManyInput,
  RestaurantUpdateWithWhereUniqueNestedInput: RestaurantUpdateWithWhereUniqueNestedInput,
  RestaurantUpdateDataInput: RestaurantUpdateDataInput,
  ReviewUpdateManyInput: ReviewUpdateManyInput,
  ReviewUpdateWithWhereUniqueNestedInput: ReviewUpdateWithWhereUniqueNestedInput,
  ReviewUpdateDataInput: ReviewUpdateDataInput,
  OrderUpdateOneRequiredInput: OrderUpdateOneRequiredInput,
  OrderUpdateDataInput: OrderUpdateDataInput,
  UserUpdateOneRequiredWithoutOrdersInput: UserUpdateOneRequiredWithoutOrdersInput,
  UserUpdateWithoutOrdersDataInput: UserUpdateWithoutOrdersDataInput,
  LocationUpdateManyInput: LocationUpdateManyInput,
  LocationUpdateWithWhereUniqueNestedInput: LocationUpdateWithWhereUniqueNestedInput,
  LocationUpdateDataInput: LocationUpdateDataInput,
  NeighbourhoodUpdateOneWithoutLocationsInput: NeighbourhoodUpdateOneWithoutLocationsInput,
  NeighbourhoodUpdateWithoutLocationsDataInput: NeighbourhoodUpdateWithoutLocationsDataInput,
  PictureUpdateOneInput: PictureUpdateOneInput,
  PictureUpdateDataInput: PictureUpdateDataInput,
  PictureUpsertNestedInput: PictureUpsertNestedInput,
  CityUpdateOneRequiredWithoutNeighbourhoodsInput: CityUpdateOneRequiredWithoutNeighbourhoodsInput,
  CityUpdateWithoutNeighbourhoodsDataInput: CityUpdateWithoutNeighbourhoodsDataInput,
  CityUpsertWithoutNeighbourhoodsInput: CityUpsertWithoutNeighbourhoodsInput,
  NeighbourhoodUpsertWithoutLocationsInput: NeighbourhoodUpsertWithoutLocationsInput,
  LocationUpdateManyWithWhereNestedInput: LocationUpdateManyWithWhereNestedInput,
  LocationScalarWhereInput: LocationScalarWhereInput,
  LocationUpdateManyDataInput: LocationUpdateManyDataInput,
  LocationUpsertWithWhereUniqueNestedInput: LocationUpsertWithWhereUniqueNestedInput,
  PaymentAccountUpdateManyWithoutUserInput: PaymentAccountUpdateManyWithoutUserInput,
  PaymentAccountUpdateWithWhereUniqueWithoutUserInput: PaymentAccountUpdateWithWhereUniqueWithoutUserInput,
  PaymentAccountUpdateWithoutUserDataInput: PaymentAccountUpdateWithoutUserDataInput,
  PaymentUpdateManyWithoutPaymentMethodInput: PaymentUpdateManyWithoutPaymentMethodInput,
  PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput: PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput,
  PaymentUpdateWithoutPaymentMethodDataInput: PaymentUpdateWithoutPaymentMethodDataInput,
  OrderUpdateOneRequiredWithoutPaymentInput: OrderUpdateOneRequiredWithoutPaymentInput,
  OrderUpdateWithoutPaymentDataInput: OrderUpdateWithoutPaymentDataInput,
  RestaurantUpdateOneRequiredWithoutOrdersInput: RestaurantUpdateOneRequiredWithoutOrdersInput,
  RestaurantUpdateWithoutOrdersDataInput: RestaurantUpdateWithoutOrdersDataInput,
  LocationUpdateOneInput: LocationUpdateOneInput,
  LocationUpsertNestedInput: LocationUpsertNestedInput,
  PoliciesUpdateOneInput: PoliciesUpdateOneInput,
  PoliciesUpdateDataInput: PoliciesUpdateDataInput,
  PoliciesUpsertNestedInput: PoliciesUpsertNestedInput,
  MenuItemUpdateManyInput: MenuItemUpdateManyInput,
  MenuItemUpdateWithWhereUniqueNestedInput: MenuItemUpdateWithWhereUniqueNestedInput,
  MenuItemUpdateDataInput: MenuItemUpdateDataInput,
  PricingUpdateOneRequiredInput: PricingUpdateOneRequiredInput,
  PricingUpdateDataInput: PricingUpdateDataInput,
  PricingUpsertNestedInput: PricingUpsertNestedInput,
  PictureUpdateManyInput: PictureUpdateManyInput,
  PictureUpdateWithWhereUniqueNestedInput: PictureUpdateWithWhereUniqueNestedInput,
  PictureUpdateManyWithWhereNestedInput: PictureUpdateManyWithWhereNestedInput,
  PictureScalarWhereInput: PictureScalarWhereInput,
  PictureUpdateManyDataInput: PictureUpdateManyDataInput,
  PictureUpsertWithWhereUniqueNestedInput: PictureUpsertWithWhereUniqueNestedInput,
  MenuItemUpdateManyWithWhereNestedInput: MenuItemUpdateManyWithWhereNestedInput,
  MenuItemScalarWhereInput: MenuItemScalarWhereInput,
  MenuItemUpdateManyDataInput: MenuItemUpdateManyDataInput,
  MenuItemUpsertWithWhereUniqueNestedInput: MenuItemUpsertWithWhereUniqueNestedInput,
  RestaurantUpsertWithoutOrdersInput: RestaurantUpsertWithoutOrdersInput,
  OrderUpsertWithoutPaymentInput: OrderUpsertWithoutPaymentInput,
  PaymentUpdateManyWithWhereNestedInput: PaymentUpdateManyWithWhereNestedInput,
  PaymentScalarWhereInput: PaymentScalarWhereInput,
  PaymentUpdateManyDataInput: PaymentUpdateManyDataInput,
  PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput: PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput,
  PaypalInformationUpdateOneInput: PaypalInformationUpdateOneInput,
  PaypalInformationUpdateDataInput: PaypalInformationUpdateDataInput,
  PaypalInformationUpsertNestedInput: PaypalInformationUpsertNestedInput,
  PaytmInformationUpdateOneInput: PaytmInformationUpdateOneInput,
  PaytmInformationUpdateDataInput: PaytmInformationUpdateDataInput,
  PaytmInformationUpsertNestedInput: PaytmInformationUpsertNestedInput,
  CreditCardInformationUpdateOneInput: CreditCardInformationUpdateOneInput,
  CreditCardInformationUpdateDataInput: CreditCardInformationUpdateDataInput,
  CreditCardInformationUpsertNestedInput: CreditCardInformationUpsertNestedInput,
  DebitCardInformationUpdateOneInput: DebitCardInformationUpdateOneInput,
  DebitCardInformationUpdateDataInput: DebitCardInformationUpdateDataInput,
  DebitCardInformationUpsertNestedInput: DebitCardInformationUpsertNestedInput,
  PaymentAccountUpdateManyWithWhereNestedInput: PaymentAccountUpdateManyWithWhereNestedInput,
  PaymentAccountScalarWhereInput: PaymentAccountScalarWhereInput,
  PaymentAccountUpdateManyDataInput: PaymentAccountUpdateManyDataInput,
  PaymentAccountUpsertWithWhereUniqueWithoutUserInput: PaymentAccountUpsertWithWhereUniqueWithoutUserInput,
  MessageUpdateManyWithoutFromInput: MessageUpdateManyWithoutFromInput,
  MessageUpdateWithWhereUniqueWithoutFromInput: MessageUpdateWithWhereUniqueWithoutFromInput,
  MessageUpdateWithoutFromDataInput: MessageUpdateWithoutFromDataInput,
  UserUpdateOneRequiredWithoutReceivedMessagesInput: UserUpdateOneRequiredWithoutReceivedMessagesInput,
  UserUpdateWithoutReceivedMessagesDataInput: UserUpdateWithoutReceivedMessagesDataInput,
  OrderUpdateManyWithoutBookeeInput: OrderUpdateManyWithoutBookeeInput,
  OrderUpdateWithWhereUniqueWithoutBookeeInput: OrderUpdateWithWhereUniqueWithoutBookeeInput,
  OrderUpdateWithoutBookeeDataInput: OrderUpdateWithoutBookeeDataInput,
  PaymentUpdateOneRequiredWithoutOrderInput: PaymentUpdateOneRequiredWithoutOrderInput,
  PaymentUpdateWithoutOrderDataInput: PaymentUpdateWithoutOrderDataInput,
  PaymentAccountUpdateOneRequiredWithoutPaymentsInput: PaymentAccountUpdateOneRequiredWithoutPaymentsInput,
  PaymentAccountUpdateWithoutPaymentsDataInput: PaymentAccountUpdateWithoutPaymentsDataInput,
  UserUpdateOneRequiredWithoutPaymentAccountInput: UserUpdateOneRequiredWithoutPaymentAccountInput,
  UserUpdateWithoutPaymentAccountDataInput: UserUpdateWithoutPaymentAccountDataInput,
  MessageUpdateManyWithoutToInput: MessageUpdateManyWithoutToInput,
  MessageUpdateWithWhereUniqueWithoutToInput: MessageUpdateWithWhereUniqueWithoutToInput,
  MessageUpdateWithoutToDataInput: MessageUpdateWithoutToDataInput,
  UserUpdateOneRequiredWithoutSentMessagesInput: UserUpdateOneRequiredWithoutSentMessagesInput,
  UserUpdateWithoutSentMessagesDataInput: UserUpdateWithoutSentMessagesDataInput,
  NotificationUpdateManyWithoutUserInput: NotificationUpdateManyWithoutUserInput,
  NotificationUpdateWithWhereUniqueWithoutUserInput: NotificationUpdateWithWhereUniqueWithoutUserInput,
  NotificationUpdateWithoutUserDataInput: NotificationUpdateWithoutUserDataInput,
  NotificationUpdateManyWithWhereNestedInput: NotificationUpdateManyWithWhereNestedInput,
  NotificationScalarWhereInput: NotificationScalarWhereInput,
  NotificationUpdateManyDataInput: NotificationUpdateManyDataInput,
  NotificationUpsertWithWhereUniqueWithoutUserInput: NotificationUpsertWithWhereUniqueWithoutUserInput,
  ExperienceUpdateManyWithoutHostInput: ExperienceUpdateManyWithoutHostInput,
  ExperienceUpdateWithWhereUniqueWithoutHostInput: ExperienceUpdateWithWhereUniqueWithoutHostInput,
  ExperienceUpdateWithoutHostDataInput: ExperienceUpdateWithoutHostDataInput,
  ExperienceCategoryUpdateOneInput: ExperienceCategoryUpdateOneInput,
  ExperienceCategoryUpdateDataInput: ExperienceCategoryUpdateDataInput,
  ExperienceCategoryUpsertNestedInput: ExperienceCategoryUpsertNestedInput,
  LocationUpdateOneRequiredInput: LocationUpdateOneRequiredInput,
  ReviewUpdateManyWithoutExperienceInput: ReviewUpdateManyWithoutExperienceInput,
  ReviewUpdateWithWhereUniqueWithoutExperienceInput: ReviewUpdateWithWhereUniqueWithoutExperienceInput,
  ReviewUpdateWithoutExperienceDataInput: ReviewUpdateWithoutExperienceDataInput,
  ReviewUpdateManyWithWhereNestedInput: ReviewUpdateManyWithWhereNestedInput,
  ReviewScalarWhereInput: ReviewScalarWhereInput,
  ReviewUpdateManyDataInput: ReviewUpdateManyDataInput,
  ReviewUpsertWithWhereUniqueWithoutExperienceInput: ReviewUpsertWithWhereUniqueWithoutExperienceInput,
  PictureUpdateOneRequiredInput: PictureUpdateOneRequiredInput,
  ExperienceUpdateManyWithWhereNestedInput: ExperienceUpdateManyWithWhereNestedInput,
  ExperienceScalarWhereInput: ExperienceScalarWhereInput,
  ExperienceUpdateManyDataInput: ExperienceUpdateManyDataInput,
  ExperienceUpsertWithWhereUniqueWithoutHostInput: ExperienceUpsertWithWhereUniqueWithoutHostInput,
  UserUpsertWithoutSentMessagesInput: UserUpsertWithoutSentMessagesInput,
  MessageUpdateManyWithWhereNestedInput: MessageUpdateManyWithWhereNestedInput,
  MessageScalarWhereInput: MessageScalarWhereInput,
  MessageUpdateManyDataInput: MessageUpdateManyDataInput,
  MessageUpsertWithWhereUniqueWithoutToInput: MessageUpsertWithWhereUniqueWithoutToInput,
  UserUpsertWithoutPaymentAccountInput: UserUpsertWithoutPaymentAccountInput,
  PaymentAccountUpsertWithoutPaymentsInput: PaymentAccountUpsertWithoutPaymentsInput,
  PaymentUpsertWithoutOrderInput: PaymentUpsertWithoutOrderInput,
  OrderUpdateManyWithWhereNestedInput: OrderUpdateManyWithWhereNestedInput,
  OrderScalarWhereInput: OrderScalarWhereInput,
  OrderUpdateManyDataInput: OrderUpdateManyDataInput,
  OrderUpsertWithWhereUniqueWithoutBookeeInput: OrderUpsertWithWhereUniqueWithoutBookeeInput,
  UserUpsertWithoutReceivedMessagesInput: UserUpsertWithoutReceivedMessagesInput,
  MessageUpsertWithWhereUniqueWithoutFromInput: MessageUpsertWithWhereUniqueWithoutFromInput,
  UserUpsertWithoutOrdersInput: UserUpsertWithoutOrdersInput,
  OrderUpsertNestedInput: OrderUpsertNestedInput,
  ExperienceUpdateOneWithoutReviewsInput: ExperienceUpdateOneWithoutReviewsInput,
  ExperienceUpdateWithoutReviewsDataInput: ExperienceUpdateWithoutReviewsDataInput,
  UserUpdateOneRequiredWithoutExperiencesInput: UserUpdateOneRequiredWithoutExperiencesInput,
  UserUpdateWithoutExperiencesDataInput: UserUpdateWithoutExperiencesDataInput,
  UserUpsertWithoutExperiencesInput: UserUpsertWithoutExperiencesInput,
  ExperienceUpsertWithoutReviewsInput: ExperienceUpsertWithoutReviewsInput,
  ReviewUpsertWithWhereUniqueNestedInput: ReviewUpsertWithWhereUniqueNestedInput,
  OrderUpdateManyWithoutRestaurantInput: OrderUpdateManyWithoutRestaurantInput,
  OrderUpdateWithWhereUniqueWithoutRestaurantInput: OrderUpdateWithWhereUniqueWithoutRestaurantInput,
  OrderUpdateWithoutRestaurantDataInput: OrderUpdateWithoutRestaurantDataInput,
  OrderUpsertWithWhereUniqueWithoutRestaurantInput: OrderUpsertWithWhereUniqueWithoutRestaurantInput,
  RestaurantUpdateManyWithWhereNestedInput: RestaurantUpdateManyWithWhereNestedInput,
  RestaurantScalarWhereInput: RestaurantScalarWhereInput,
  RestaurantUpdateManyDataInput: RestaurantUpdateManyDataInput,
  RestaurantUpsertWithWhereUniqueNestedInput: RestaurantUpsertWithWhereUniqueNestedInput,
  NeighbourhoodUpdateInput: NeighbourhoodUpdateInput,
  LocationUpdateManyWithoutNeighbourHoodInput: LocationUpdateManyWithoutNeighbourHoodInput,
  LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput: LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput,
  LocationUpdateWithoutNeighbourHoodDataInput: LocationUpdateWithoutNeighbourHoodDataInput,
  LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput: LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput,
  CityUpdateInput: CityUpdateInput,
  NeighbourhoodUpdateManyWithoutCityInput: NeighbourhoodUpdateManyWithoutCityInput,
  NeighbourhoodUpdateWithWhereUniqueWithoutCityInput: NeighbourhoodUpdateWithWhereUniqueWithoutCityInput,
  NeighbourhoodUpdateWithoutCityDataInput: NeighbourhoodUpdateWithoutCityDataInput,
  NeighbourhoodUpdateManyWithWhereNestedInput: NeighbourhoodUpdateManyWithWhereNestedInput,
  NeighbourhoodScalarWhereInput: NeighbourhoodScalarWhereInput,
  NeighbourhoodUpdateManyDataInput: NeighbourhoodUpdateManyDataInput,
  NeighbourhoodUpsertWithWhereUniqueWithoutCityInput: NeighbourhoodUpsertWithWhereUniqueWithoutCityInput,
  ExperienceUpdateInput: ExperienceUpdateInput,
  PaymentUpdateInput: PaymentUpdateInput,
  PaymentAccountUpdateInput: PaymentAccountUpdateInput,
  MessageUpdateInput: MessageUpdateInput,
  NotificationUpdateInput: NotificationUpdateInput,
  UserUpdateOneRequiredWithoutNotificationsInput: UserUpdateOneRequiredWithoutNotificationsInput,
  UserUpdateWithoutNotificationsDataInput: UserUpdateWithoutNotificationsDataInput,
  UserUpsertWithoutNotificationsInput: UserUpsertWithoutNotificationsInput,
  RestaurantUpdateInput: RestaurantUpdateInput,
  MenuItemUpdateInput: MenuItemUpdateInput,
  PaypalInformationUpdateInput: PaypalInformationUpdateInput,
  PoliciesUpdateInput: PoliciesUpdateInput,
  CreditCardInformationUpdateInput: CreditCardInformationUpdateInput,
  LocationUpdateInput: LocationUpdateInput,
  ReviewUpdateInput: ReviewUpdateInput,
  OrderUpdateInput: OrderUpdateInput,
  ExperienceCategoryUpdateInput: ExperienceCategoryUpdateInput,
  PaytmInformationUpdateInput: PaytmInformationUpdateInput,
  DebitCardInformationUpdateInput: DebitCardInformationUpdateInput,
  PricingUpdateInput: PricingUpdateInput,
  PictureUpdateInput: PictureUpdateInput,
  UserUpdateManyMutationInput: UserUpdateManyMutationInput,
  BatchPayload: ResolverTypeWrapper<BatchPayload>,
  Long: ResolverTypeWrapper<Scalars['Long']>,
  NeighbourhoodUpdateManyMutationInput: NeighbourhoodUpdateManyMutationInput,
  CityUpdateManyMutationInput: CityUpdateManyMutationInput,
  ExperienceUpdateManyMutationInput: ExperienceUpdateManyMutationInput,
  PaymentUpdateManyMutationInput: PaymentUpdateManyMutationInput,
  PaymentAccountUpdateManyMutationInput: PaymentAccountUpdateManyMutationInput,
  MessageUpdateManyMutationInput: MessageUpdateManyMutationInput,
  NotificationUpdateManyMutationInput: NotificationUpdateManyMutationInput,
  RestaurantUpdateManyMutationInput: RestaurantUpdateManyMutationInput,
  MenuItemUpdateManyMutationInput: MenuItemUpdateManyMutationInput,
  PaypalInformationUpdateManyMutationInput: PaypalInformationUpdateManyMutationInput,
  PoliciesUpdateManyMutationInput: PoliciesUpdateManyMutationInput,
  CreditCardInformationUpdateManyMutationInput: CreditCardInformationUpdateManyMutationInput,
  LocationUpdateManyMutationInput: LocationUpdateManyMutationInput,
  ReviewUpdateManyMutationInput: ReviewUpdateManyMutationInput,
  OrderUpdateManyMutationInput: OrderUpdateManyMutationInput,
  ExperienceCategoryUpdateManyMutationInput: ExperienceCategoryUpdateManyMutationInput,
  PaytmInformationUpdateManyMutationInput: PaytmInformationUpdateManyMutationInput,
  DebitCardInformationUpdateManyMutationInput: DebitCardInformationUpdateManyMutationInput,
  PricingUpdateManyMutationInput: PricingUpdateManyMutationInput,
  PictureUpdateManyMutationInput: PictureUpdateManyMutationInput,
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
  MutationResult: ResolverTypeWrapper<MutationResult>,
  Subscription: ResolverTypeWrapper<{}>,
  UserSubscriptionWhereInput: UserSubscriptionWhereInput,
  MutationType: MutationType,
  UserSubscriptionPayload: ResolverTypeWrapper<UserSubscriptionPayload>,
  UserPreviousValues: ResolverTypeWrapper<UserPreviousValues>,
  NeighbourhoodSubscriptionWhereInput: NeighbourhoodSubscriptionWhereInput,
  NeighbourhoodSubscriptionPayload: ResolverTypeWrapper<NeighbourhoodSubscriptionPayload>,
  NeighbourhoodPreviousValues: ResolverTypeWrapper<NeighbourhoodPreviousValues>,
  CitySubscriptionWhereInput: CitySubscriptionWhereInput,
  CitySubscriptionPayload: ResolverTypeWrapper<CitySubscriptionPayload>,
  CityPreviousValues: ResolverTypeWrapper<CityPreviousValues>,
  ExperienceSubscriptionWhereInput: ExperienceSubscriptionWhereInput,
  ExperienceSubscriptionPayload: ResolverTypeWrapper<ExperienceSubscriptionPayload>,
  ExperiencePreviousValues: ResolverTypeWrapper<ExperiencePreviousValues>,
  PaymentSubscriptionWhereInput: PaymentSubscriptionWhereInput,
  PaymentSubscriptionPayload: ResolverTypeWrapper<PaymentSubscriptionPayload>,
  PaymentPreviousValues: ResolverTypeWrapper<PaymentPreviousValues>,
  PaymentAccountSubscriptionWhereInput: PaymentAccountSubscriptionWhereInput,
  PaymentAccountSubscriptionPayload: ResolverTypeWrapper<PaymentAccountSubscriptionPayload>,
  PaymentAccountPreviousValues: ResolverTypeWrapper<PaymentAccountPreviousValues>,
  MessageSubscriptionWhereInput: MessageSubscriptionWhereInput,
  MessageSubscriptionPayload: ResolverTypeWrapper<MessageSubscriptionPayload>,
  MessagePreviousValues: ResolverTypeWrapper<MessagePreviousValues>,
  NotificationSubscriptionWhereInput: NotificationSubscriptionWhereInput,
  NotificationSubscriptionPayload: ResolverTypeWrapper<NotificationSubscriptionPayload>,
  NotificationPreviousValues: ResolverTypeWrapper<NotificationPreviousValues>,
  RestaurantSubscriptionWhereInput: RestaurantSubscriptionWhereInput,
  RestaurantSubscriptionPayload: ResolverTypeWrapper<RestaurantSubscriptionPayload>,
  RestaurantPreviousValues: ResolverTypeWrapper<RestaurantPreviousValues>,
  MenuItemSubscriptionWhereInput: MenuItemSubscriptionWhereInput,
  MenuItemSubscriptionPayload: ResolverTypeWrapper<MenuItemSubscriptionPayload>,
  MenuItemPreviousValues: ResolverTypeWrapper<MenuItemPreviousValues>,
  PaypalInformationSubscriptionWhereInput: PaypalInformationSubscriptionWhereInput,
  PaypalInformationSubscriptionPayload: ResolverTypeWrapper<PaypalInformationSubscriptionPayload>,
  PaypalInformationPreviousValues: ResolverTypeWrapper<PaypalInformationPreviousValues>,
  PoliciesSubscriptionWhereInput: PoliciesSubscriptionWhereInput,
  PoliciesSubscriptionPayload: ResolverTypeWrapper<PoliciesSubscriptionPayload>,
  PoliciesPreviousValues: ResolverTypeWrapper<PoliciesPreviousValues>,
  CreditCardInformationSubscriptionWhereInput: CreditCardInformationSubscriptionWhereInput,
  CreditCardInformationSubscriptionPayload: ResolverTypeWrapper<CreditCardInformationSubscriptionPayload>,
  CreditCardInformationPreviousValues: ResolverTypeWrapper<CreditCardInformationPreviousValues>,
  LocationSubscriptionWhereInput: LocationSubscriptionWhereInput,
  LocationSubscriptionPayload: ResolverTypeWrapper<LocationSubscriptionPayload>,
  LocationPreviousValues: ResolverTypeWrapper<LocationPreviousValues>,
  ReviewSubscriptionWhereInput: ReviewSubscriptionWhereInput,
  ReviewSubscriptionPayload: ResolverTypeWrapper<ReviewSubscriptionPayload>,
  ReviewPreviousValues: ResolverTypeWrapper<ReviewPreviousValues>,
  OrderSubscriptionWhereInput: OrderSubscriptionWhereInput,
  OrderSubscriptionPayload: ResolverTypeWrapper<OrderSubscriptionPayload>,
  OrderPreviousValues: ResolverTypeWrapper<OrderPreviousValues>,
  ExperienceCategorySubscriptionWhereInput: ExperienceCategorySubscriptionWhereInput,
  ExperienceCategorySubscriptionPayload: ResolverTypeWrapper<ExperienceCategorySubscriptionPayload>,
  ExperienceCategoryPreviousValues: ResolverTypeWrapper<ExperienceCategoryPreviousValues>,
  PaytmInformationSubscriptionWhereInput: PaytmInformationSubscriptionWhereInput,
  PaytmInformationSubscriptionPayload: ResolverTypeWrapper<PaytmInformationSubscriptionPayload>,
  PaytmInformationPreviousValues: ResolverTypeWrapper<PaytmInformationPreviousValues>,
  DebitCardInformationSubscriptionWhereInput: DebitCardInformationSubscriptionWhereInput,
  DebitCardInformationSubscriptionPayload: ResolverTypeWrapper<DebitCardInformationSubscriptionPayload>,
  DebitCardInformationPreviousValues: ResolverTypeWrapper<DebitCardInformationPreviousValues>,
  PricingSubscriptionWhereInput: PricingSubscriptionWhereInput,
  PricingSubscriptionPayload: ResolverTypeWrapper<PricingSubscriptionPayload>,
  PricingPreviousValues: ResolverTypeWrapper<PricingPreviousValues>,
  PictureSubscriptionWhereInput: PictureSubscriptionWhereInput,
  PictureSubscriptionPayload: ResolverTypeWrapper<PictureSubscriptionPayload>,
  PicturePreviousValues: ResolverTypeWrapper<PicturePreviousValues>,
  ACCOUNT_TYPE: Account_Type,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  UserWhereInput: UserWhereInput,
  ID: Scalars['ID'],
  DateTime: Scalars['DateTime'],
  String: Scalars['String'],
  Float: Scalars['Float'],
  Int: Scalars['Int'],
  UserType: UserType,
  RestaurantWhereInput: RestaurantWhereInput,
  Boolean: Scalars['Boolean'],
  ReviewWhereInput: ReviewWhereInput,
  OrderWhereInput: OrderWhereInput,
  PaymentWhereInput: PaymentWhereInput,
  PaymentAccountWhereInput: PaymentAccountWhereInput,
  PAYMENT_PROVIDER: Payment_Provider,
  PaypalInformationWhereInput: PaypalInformationWhereInput,
  PaytmInformationWhereInput: PaytmInformationWhereInput,
  CreditCardInformationWhereInput: CreditCardInformationWhereInput,
  DebitCardInformationWhereInput: DebitCardInformationWhereInput,
  ExperienceWhereInput: ExperienceWhereInput,
  ExperienceCategoryWhereInput: ExperienceCategoryWhereInput,
  LocationWhereInput: LocationWhereInput,
  NeighbourhoodWhereInput: NeighbourhoodWhereInput,
  PictureWhereInput: PictureWhereInput,
  CityWhereInput: CityWhereInput,
  PoliciesWhereInput: PoliciesWhereInput,
  MenuItemWhereInput: MenuItemWhereInput,
  PricingWhereInput: PricingWhereInput,
  MessageWhereInput: MessageWhereInput,
  NotificationWhereInput: NotificationWhereInput,
  NOTIFICATION_TYPE: Notification_Type,
  UserOrderByInput: UserOrderByInput,
  User: User,
  Node: Node,
  RestaurantOrderByInput: RestaurantOrderByInput,
  Restaurant: Restaurant,
  ReviewOrderByInput: ReviewOrderByInput,
  Review: Review,
  Order: Order,
  Payment: Payment,
  PaymentAccount: PaymentAccount,
  PaymentOrderByInput: PaymentOrderByInput,
  PaypalInformation: PaypalInformation,
  PaytmInformation: PaytmInformation,
  CreditCardInformation: CreditCardInformation,
  DebitCardInformation: DebitCardInformation,
  Experience: Experience,
  ExperienceCategory: ExperienceCategory,
  Location: Location,
  Neighbourhood: Neighbourhood,
  LocationOrderByInput: LocationOrderByInput,
  Picture: Picture,
  City: City,
  NeighbourhoodOrderByInput: NeighbourhoodOrderByInput,
  Policies: Policies,
  MenuItemOrderByInput: MenuItemOrderByInput,
  MenuItem: MenuItem,
  Pricing: Pricing,
  PictureOrderByInput: PictureOrderByInput,
  OrderOrderByInput: OrderOrderByInput,
  PaymentAccountOrderByInput: PaymentAccountOrderByInput,
  MessageOrderByInput: MessageOrderByInput,
  Message: Message,
  NotificationOrderByInput: NotificationOrderByInput,
  Notification: Notification,
  ExperienceOrderByInput: ExperienceOrderByInput,
  CityOrderByInput: CityOrderByInput,
  PaypalInformationOrderByInput: PaypalInformationOrderByInput,
  PoliciesOrderByInput: PoliciesOrderByInput,
  CreditCardInformationOrderByInput: CreditCardInformationOrderByInput,
  ExperienceCategoryOrderByInput: ExperienceCategoryOrderByInput,
  PaytmInformationOrderByInput: PaytmInformationOrderByInput,
  DebitCardInformationOrderByInput: DebitCardInformationOrderByInput,
  PricingOrderByInput: PricingOrderByInput,
  UserWhereUniqueInput: UserWhereUniqueInput,
  NeighbourhoodWhereUniqueInput: NeighbourhoodWhereUniqueInput,
  CityWhereUniqueInput: CityWhereUniqueInput,
  ExperienceWhereUniqueInput: ExperienceWhereUniqueInput,
  PaymentWhereUniqueInput: PaymentWhereUniqueInput,
  PaymentAccountWhereUniqueInput: PaymentAccountWhereUniqueInput,
  MessageWhereUniqueInput: MessageWhereUniqueInput,
  NotificationWhereUniqueInput: NotificationWhereUniqueInput,
  RestaurantWhereUniqueInput: RestaurantWhereUniqueInput,
  MenuItemWhereUniqueInput: MenuItemWhereUniqueInput,
  PaypalInformationWhereUniqueInput: PaypalInformationWhereUniqueInput,
  PoliciesWhereUniqueInput: PoliciesWhereUniqueInput,
  CreditCardInformationWhereUniqueInput: CreditCardInformationWhereUniqueInput,
  LocationWhereUniqueInput: LocationWhereUniqueInput,
  ReviewWhereUniqueInput: ReviewWhereUniqueInput,
  OrderWhereUniqueInput: OrderWhereUniqueInput,
  ExperienceCategoryWhereUniqueInput: ExperienceCategoryWhereUniqueInput,
  PaytmInformationWhereUniqueInput: PaytmInformationWhereUniqueInput,
  DebitCardInformationWhereUniqueInput: DebitCardInformationWhereUniqueInput,
  PricingWhereUniqueInput: PricingWhereUniqueInput,
  PictureWhereUniqueInput: PictureWhereUniqueInput,
  UserConnection: UserConnection,
  PageInfo: PageInfo,
  UserEdge: UserEdge,
  AggregateUser: AggregateUser,
  NeighbourhoodConnection: NeighbourhoodConnection,
  NeighbourhoodEdge: NeighbourhoodEdge,
  AggregateNeighbourhood: AggregateNeighbourhood,
  CityConnection: CityConnection,
  CityEdge: CityEdge,
  AggregateCity: AggregateCity,
  ExperienceConnection: ExperienceConnection,
  ExperienceEdge: ExperienceEdge,
  AggregateExperience: AggregateExperience,
  PaymentConnection: PaymentConnection,
  PaymentEdge: PaymentEdge,
  AggregatePayment: AggregatePayment,
  PaymentAccountConnection: PaymentAccountConnection,
  PaymentAccountEdge: PaymentAccountEdge,
  AggregatePaymentAccount: AggregatePaymentAccount,
  MessageConnection: MessageConnection,
  MessageEdge: MessageEdge,
  AggregateMessage: AggregateMessage,
  NotificationConnection: NotificationConnection,
  NotificationEdge: NotificationEdge,
  AggregateNotification: AggregateNotification,
  RestaurantConnection: RestaurantConnection,
  RestaurantEdge: RestaurantEdge,
  AggregateRestaurant: AggregateRestaurant,
  MenuItemConnection: MenuItemConnection,
  MenuItemEdge: MenuItemEdge,
  AggregateMenuItem: AggregateMenuItem,
  PaypalInformationConnection: PaypalInformationConnection,
  PaypalInformationEdge: PaypalInformationEdge,
  AggregatePaypalInformation: AggregatePaypalInformation,
  PoliciesConnection: PoliciesConnection,
  PoliciesEdge: PoliciesEdge,
  AggregatePolicies: AggregatePolicies,
  CreditCardInformationConnection: CreditCardInformationConnection,
  CreditCardInformationEdge: CreditCardInformationEdge,
  AggregateCreditCardInformation: AggregateCreditCardInformation,
  LocationConnection: LocationConnection,
  LocationEdge: LocationEdge,
  AggregateLocation: AggregateLocation,
  ReviewConnection: ReviewConnection,
  ReviewEdge: ReviewEdge,
  AggregateReview: AggregateReview,
  OrderConnection: OrderConnection,
  OrderEdge: OrderEdge,
  AggregateOrder: AggregateOrder,
  ExperienceCategoryConnection: ExperienceCategoryConnection,
  ExperienceCategoryEdge: ExperienceCategoryEdge,
  AggregateExperienceCategory: AggregateExperienceCategory,
  PaytmInformationConnection: PaytmInformationConnection,
  PaytmInformationEdge: PaytmInformationEdge,
  AggregatePaytmInformation: AggregatePaytmInformation,
  DebitCardInformationConnection: DebitCardInformationConnection,
  DebitCardInformationEdge: DebitCardInformationEdge,
  AggregateDebitCardInformation: AggregateDebitCardInformation,
  PricingConnection: PricingConnection,
  PricingEdge: PricingEdge,
  AggregatePricing: AggregatePricing,
  PictureConnection: PictureConnection,
  PictureEdge: PictureEdge,
  AggregatePicture: AggregatePicture,
  Reservation: Reservation,
  ExperiencesByCity: ExperiencesByCity,
  Viewer: Viewer,
  Mutation: {},
  UserCreateInput: UserCreateInput,
  RestaurantCreateManyInput: RestaurantCreateManyInput,
  RestaurantCreateInput: RestaurantCreateInput,
  ReviewCreateManyInput: ReviewCreateManyInput,
  ReviewCreateInput: ReviewCreateInput,
  OrderCreateOneInput: OrderCreateOneInput,
  OrderCreateInput: OrderCreateInput,
  UserCreateOneWithoutOrdersInput: UserCreateOneWithoutOrdersInput,
  UserCreateWithoutOrdersInput: UserCreateWithoutOrdersInput,
  LocationCreateManyInput: LocationCreateManyInput,
  LocationCreateInput: LocationCreateInput,
  NeighbourhoodCreateOneWithoutLocationsInput: NeighbourhoodCreateOneWithoutLocationsInput,
  NeighbourhoodCreateWithoutLocationsInput: NeighbourhoodCreateWithoutLocationsInput,
  PictureCreateOneInput: PictureCreateOneInput,
  PictureCreateInput: PictureCreateInput,
  CityCreateOneWithoutNeighbourhoodsInput: CityCreateOneWithoutNeighbourhoodsInput,
  CityCreateWithoutNeighbourhoodsInput: CityCreateWithoutNeighbourhoodsInput,
  PaymentAccountCreateManyWithoutUserInput: PaymentAccountCreateManyWithoutUserInput,
  PaymentAccountCreateWithoutUserInput: PaymentAccountCreateWithoutUserInput,
  PaymentCreateManyWithoutPaymentMethodInput: PaymentCreateManyWithoutPaymentMethodInput,
  PaymentCreateWithoutPaymentMethodInput: PaymentCreateWithoutPaymentMethodInput,
  OrderCreateOneWithoutPaymentInput: OrderCreateOneWithoutPaymentInput,
  OrderCreateWithoutPaymentInput: OrderCreateWithoutPaymentInput,
  RestaurantCreateOneWithoutOrdersInput: RestaurantCreateOneWithoutOrdersInput,
  RestaurantCreateWithoutOrdersInput: RestaurantCreateWithoutOrdersInput,
  LocationCreateOneInput: LocationCreateOneInput,
  PoliciesCreateOneInput: PoliciesCreateOneInput,
  PoliciesCreateInput: PoliciesCreateInput,
  MenuItemCreateManyInput: MenuItemCreateManyInput,
  MenuItemCreateInput: MenuItemCreateInput,
  PricingCreateOneInput: PricingCreateOneInput,
  PricingCreateInput: PricingCreateInput,
  PictureCreateManyInput: PictureCreateManyInput,
  PaypalInformationCreateOneInput: PaypalInformationCreateOneInput,
  PaypalInformationCreateInput: PaypalInformationCreateInput,
  PaytmInformationCreateOneInput: PaytmInformationCreateOneInput,
  PaytmInformationCreateInput: PaytmInformationCreateInput,
  CreditCardInformationCreateOneInput: CreditCardInformationCreateOneInput,
  CreditCardInformationCreateInput: CreditCardInformationCreateInput,
  DebitCardInformationCreateOneInput: DebitCardInformationCreateOneInput,
  DebitCardInformationCreateInput: DebitCardInformationCreateInput,
  MessageCreateManyWithoutFromInput: MessageCreateManyWithoutFromInput,
  MessageCreateWithoutFromInput: MessageCreateWithoutFromInput,
  UserCreateOneWithoutReceivedMessagesInput: UserCreateOneWithoutReceivedMessagesInput,
  UserCreateWithoutReceivedMessagesInput: UserCreateWithoutReceivedMessagesInput,
  OrderCreateManyWithoutBookeeInput: OrderCreateManyWithoutBookeeInput,
  OrderCreateWithoutBookeeInput: OrderCreateWithoutBookeeInput,
  PaymentCreateOneWithoutOrderInput: PaymentCreateOneWithoutOrderInput,
  PaymentCreateWithoutOrderInput: PaymentCreateWithoutOrderInput,
  PaymentAccountCreateOneWithoutPaymentsInput: PaymentAccountCreateOneWithoutPaymentsInput,
  PaymentAccountCreateWithoutPaymentsInput: PaymentAccountCreateWithoutPaymentsInput,
  UserCreateOneWithoutPaymentAccountInput: UserCreateOneWithoutPaymentAccountInput,
  UserCreateWithoutPaymentAccountInput: UserCreateWithoutPaymentAccountInput,
  MessageCreateManyWithoutToInput: MessageCreateManyWithoutToInput,
  MessageCreateWithoutToInput: MessageCreateWithoutToInput,
  UserCreateOneWithoutSentMessagesInput: UserCreateOneWithoutSentMessagesInput,
  UserCreateWithoutSentMessagesInput: UserCreateWithoutSentMessagesInput,
  NotificationCreateManyWithoutUserInput: NotificationCreateManyWithoutUserInput,
  NotificationCreateWithoutUserInput: NotificationCreateWithoutUserInput,
  ExperienceCreateManyWithoutHostInput: ExperienceCreateManyWithoutHostInput,
  ExperienceCreateWithoutHostInput: ExperienceCreateWithoutHostInput,
  ExperienceCategoryCreateOneInput: ExperienceCategoryCreateOneInput,
  ExperienceCategoryCreateInput: ExperienceCategoryCreateInput,
  ReviewCreateManyWithoutExperienceInput: ReviewCreateManyWithoutExperienceInput,
  ReviewCreateWithoutExperienceInput: ReviewCreateWithoutExperienceInput,
  ExperienceCreateOneWithoutReviewsInput: ExperienceCreateOneWithoutReviewsInput,
  ExperienceCreateWithoutReviewsInput: ExperienceCreateWithoutReviewsInput,
  UserCreateOneWithoutExperiencesInput: UserCreateOneWithoutExperiencesInput,
  UserCreateWithoutExperiencesInput: UserCreateWithoutExperiencesInput,
  OrderCreateManyWithoutRestaurantInput: OrderCreateManyWithoutRestaurantInput,
  OrderCreateWithoutRestaurantInput: OrderCreateWithoutRestaurantInput,
  NeighbourhoodCreateInput: NeighbourhoodCreateInput,
  LocationCreateManyWithoutNeighbourHoodInput: LocationCreateManyWithoutNeighbourHoodInput,
  LocationCreateWithoutNeighbourHoodInput: LocationCreateWithoutNeighbourHoodInput,
  CityCreateInput: CityCreateInput,
  NeighbourhoodCreateManyWithoutCityInput: NeighbourhoodCreateManyWithoutCityInput,
  NeighbourhoodCreateWithoutCityInput: NeighbourhoodCreateWithoutCityInput,
  ExperienceCreateInput: ExperienceCreateInput,
  PaymentCreateInput: PaymentCreateInput,
  PaymentAccountCreateInput: PaymentAccountCreateInput,
  MessageCreateInput: MessageCreateInput,
  NotificationCreateInput: NotificationCreateInput,
  UserCreateOneWithoutNotificationsInput: UserCreateOneWithoutNotificationsInput,
  UserCreateWithoutNotificationsInput: UserCreateWithoutNotificationsInput,
  UserUpdateInput: UserUpdateInput,
  RestaurantUpdateManyInput: RestaurantUpdateManyInput,
  RestaurantUpdateWithWhereUniqueNestedInput: RestaurantUpdateWithWhereUniqueNestedInput,
  RestaurantUpdateDataInput: RestaurantUpdateDataInput,
  ReviewUpdateManyInput: ReviewUpdateManyInput,
  ReviewUpdateWithWhereUniqueNestedInput: ReviewUpdateWithWhereUniqueNestedInput,
  ReviewUpdateDataInput: ReviewUpdateDataInput,
  OrderUpdateOneRequiredInput: OrderUpdateOneRequiredInput,
  OrderUpdateDataInput: OrderUpdateDataInput,
  UserUpdateOneRequiredWithoutOrdersInput: UserUpdateOneRequiredWithoutOrdersInput,
  UserUpdateWithoutOrdersDataInput: UserUpdateWithoutOrdersDataInput,
  LocationUpdateManyInput: LocationUpdateManyInput,
  LocationUpdateWithWhereUniqueNestedInput: LocationUpdateWithWhereUniqueNestedInput,
  LocationUpdateDataInput: LocationUpdateDataInput,
  NeighbourhoodUpdateOneWithoutLocationsInput: NeighbourhoodUpdateOneWithoutLocationsInput,
  NeighbourhoodUpdateWithoutLocationsDataInput: NeighbourhoodUpdateWithoutLocationsDataInput,
  PictureUpdateOneInput: PictureUpdateOneInput,
  PictureUpdateDataInput: PictureUpdateDataInput,
  PictureUpsertNestedInput: PictureUpsertNestedInput,
  CityUpdateOneRequiredWithoutNeighbourhoodsInput: CityUpdateOneRequiredWithoutNeighbourhoodsInput,
  CityUpdateWithoutNeighbourhoodsDataInput: CityUpdateWithoutNeighbourhoodsDataInput,
  CityUpsertWithoutNeighbourhoodsInput: CityUpsertWithoutNeighbourhoodsInput,
  NeighbourhoodUpsertWithoutLocationsInput: NeighbourhoodUpsertWithoutLocationsInput,
  LocationUpdateManyWithWhereNestedInput: LocationUpdateManyWithWhereNestedInput,
  LocationScalarWhereInput: LocationScalarWhereInput,
  LocationUpdateManyDataInput: LocationUpdateManyDataInput,
  LocationUpsertWithWhereUniqueNestedInput: LocationUpsertWithWhereUniqueNestedInput,
  PaymentAccountUpdateManyWithoutUserInput: PaymentAccountUpdateManyWithoutUserInput,
  PaymentAccountUpdateWithWhereUniqueWithoutUserInput: PaymentAccountUpdateWithWhereUniqueWithoutUserInput,
  PaymentAccountUpdateWithoutUserDataInput: PaymentAccountUpdateWithoutUserDataInput,
  PaymentUpdateManyWithoutPaymentMethodInput: PaymentUpdateManyWithoutPaymentMethodInput,
  PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput: PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput,
  PaymentUpdateWithoutPaymentMethodDataInput: PaymentUpdateWithoutPaymentMethodDataInput,
  OrderUpdateOneRequiredWithoutPaymentInput: OrderUpdateOneRequiredWithoutPaymentInput,
  OrderUpdateWithoutPaymentDataInput: OrderUpdateWithoutPaymentDataInput,
  RestaurantUpdateOneRequiredWithoutOrdersInput: RestaurantUpdateOneRequiredWithoutOrdersInput,
  RestaurantUpdateWithoutOrdersDataInput: RestaurantUpdateWithoutOrdersDataInput,
  LocationUpdateOneInput: LocationUpdateOneInput,
  LocationUpsertNestedInput: LocationUpsertNestedInput,
  PoliciesUpdateOneInput: PoliciesUpdateOneInput,
  PoliciesUpdateDataInput: PoliciesUpdateDataInput,
  PoliciesUpsertNestedInput: PoliciesUpsertNestedInput,
  MenuItemUpdateManyInput: MenuItemUpdateManyInput,
  MenuItemUpdateWithWhereUniqueNestedInput: MenuItemUpdateWithWhereUniqueNestedInput,
  MenuItemUpdateDataInput: MenuItemUpdateDataInput,
  PricingUpdateOneRequiredInput: PricingUpdateOneRequiredInput,
  PricingUpdateDataInput: PricingUpdateDataInput,
  PricingUpsertNestedInput: PricingUpsertNestedInput,
  PictureUpdateManyInput: PictureUpdateManyInput,
  PictureUpdateWithWhereUniqueNestedInput: PictureUpdateWithWhereUniqueNestedInput,
  PictureUpdateManyWithWhereNestedInput: PictureUpdateManyWithWhereNestedInput,
  PictureScalarWhereInput: PictureScalarWhereInput,
  PictureUpdateManyDataInput: PictureUpdateManyDataInput,
  PictureUpsertWithWhereUniqueNestedInput: PictureUpsertWithWhereUniqueNestedInput,
  MenuItemUpdateManyWithWhereNestedInput: MenuItemUpdateManyWithWhereNestedInput,
  MenuItemScalarWhereInput: MenuItemScalarWhereInput,
  MenuItemUpdateManyDataInput: MenuItemUpdateManyDataInput,
  MenuItemUpsertWithWhereUniqueNestedInput: MenuItemUpsertWithWhereUniqueNestedInput,
  RestaurantUpsertWithoutOrdersInput: RestaurantUpsertWithoutOrdersInput,
  OrderUpsertWithoutPaymentInput: OrderUpsertWithoutPaymentInput,
  PaymentUpdateManyWithWhereNestedInput: PaymentUpdateManyWithWhereNestedInput,
  PaymentScalarWhereInput: PaymentScalarWhereInput,
  PaymentUpdateManyDataInput: PaymentUpdateManyDataInput,
  PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput: PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput,
  PaypalInformationUpdateOneInput: PaypalInformationUpdateOneInput,
  PaypalInformationUpdateDataInput: PaypalInformationUpdateDataInput,
  PaypalInformationUpsertNestedInput: PaypalInformationUpsertNestedInput,
  PaytmInformationUpdateOneInput: PaytmInformationUpdateOneInput,
  PaytmInformationUpdateDataInput: PaytmInformationUpdateDataInput,
  PaytmInformationUpsertNestedInput: PaytmInformationUpsertNestedInput,
  CreditCardInformationUpdateOneInput: CreditCardInformationUpdateOneInput,
  CreditCardInformationUpdateDataInput: CreditCardInformationUpdateDataInput,
  CreditCardInformationUpsertNestedInput: CreditCardInformationUpsertNestedInput,
  DebitCardInformationUpdateOneInput: DebitCardInformationUpdateOneInput,
  DebitCardInformationUpdateDataInput: DebitCardInformationUpdateDataInput,
  DebitCardInformationUpsertNestedInput: DebitCardInformationUpsertNestedInput,
  PaymentAccountUpdateManyWithWhereNestedInput: PaymentAccountUpdateManyWithWhereNestedInput,
  PaymentAccountScalarWhereInput: PaymentAccountScalarWhereInput,
  PaymentAccountUpdateManyDataInput: PaymentAccountUpdateManyDataInput,
  PaymentAccountUpsertWithWhereUniqueWithoutUserInput: PaymentAccountUpsertWithWhereUniqueWithoutUserInput,
  MessageUpdateManyWithoutFromInput: MessageUpdateManyWithoutFromInput,
  MessageUpdateWithWhereUniqueWithoutFromInput: MessageUpdateWithWhereUniqueWithoutFromInput,
  MessageUpdateWithoutFromDataInput: MessageUpdateWithoutFromDataInput,
  UserUpdateOneRequiredWithoutReceivedMessagesInput: UserUpdateOneRequiredWithoutReceivedMessagesInput,
  UserUpdateWithoutReceivedMessagesDataInput: UserUpdateWithoutReceivedMessagesDataInput,
  OrderUpdateManyWithoutBookeeInput: OrderUpdateManyWithoutBookeeInput,
  OrderUpdateWithWhereUniqueWithoutBookeeInput: OrderUpdateWithWhereUniqueWithoutBookeeInput,
  OrderUpdateWithoutBookeeDataInput: OrderUpdateWithoutBookeeDataInput,
  PaymentUpdateOneRequiredWithoutOrderInput: PaymentUpdateOneRequiredWithoutOrderInput,
  PaymentUpdateWithoutOrderDataInput: PaymentUpdateWithoutOrderDataInput,
  PaymentAccountUpdateOneRequiredWithoutPaymentsInput: PaymentAccountUpdateOneRequiredWithoutPaymentsInput,
  PaymentAccountUpdateWithoutPaymentsDataInput: PaymentAccountUpdateWithoutPaymentsDataInput,
  UserUpdateOneRequiredWithoutPaymentAccountInput: UserUpdateOneRequiredWithoutPaymentAccountInput,
  UserUpdateWithoutPaymentAccountDataInput: UserUpdateWithoutPaymentAccountDataInput,
  MessageUpdateManyWithoutToInput: MessageUpdateManyWithoutToInput,
  MessageUpdateWithWhereUniqueWithoutToInput: MessageUpdateWithWhereUniqueWithoutToInput,
  MessageUpdateWithoutToDataInput: MessageUpdateWithoutToDataInput,
  UserUpdateOneRequiredWithoutSentMessagesInput: UserUpdateOneRequiredWithoutSentMessagesInput,
  UserUpdateWithoutSentMessagesDataInput: UserUpdateWithoutSentMessagesDataInput,
  NotificationUpdateManyWithoutUserInput: NotificationUpdateManyWithoutUserInput,
  NotificationUpdateWithWhereUniqueWithoutUserInput: NotificationUpdateWithWhereUniqueWithoutUserInput,
  NotificationUpdateWithoutUserDataInput: NotificationUpdateWithoutUserDataInput,
  NotificationUpdateManyWithWhereNestedInput: NotificationUpdateManyWithWhereNestedInput,
  NotificationScalarWhereInput: NotificationScalarWhereInput,
  NotificationUpdateManyDataInput: NotificationUpdateManyDataInput,
  NotificationUpsertWithWhereUniqueWithoutUserInput: NotificationUpsertWithWhereUniqueWithoutUserInput,
  ExperienceUpdateManyWithoutHostInput: ExperienceUpdateManyWithoutHostInput,
  ExperienceUpdateWithWhereUniqueWithoutHostInput: ExperienceUpdateWithWhereUniqueWithoutHostInput,
  ExperienceUpdateWithoutHostDataInput: ExperienceUpdateWithoutHostDataInput,
  ExperienceCategoryUpdateOneInput: ExperienceCategoryUpdateOneInput,
  ExperienceCategoryUpdateDataInput: ExperienceCategoryUpdateDataInput,
  ExperienceCategoryUpsertNestedInput: ExperienceCategoryUpsertNestedInput,
  LocationUpdateOneRequiredInput: LocationUpdateOneRequiredInput,
  ReviewUpdateManyWithoutExperienceInput: ReviewUpdateManyWithoutExperienceInput,
  ReviewUpdateWithWhereUniqueWithoutExperienceInput: ReviewUpdateWithWhereUniqueWithoutExperienceInput,
  ReviewUpdateWithoutExperienceDataInput: ReviewUpdateWithoutExperienceDataInput,
  ReviewUpdateManyWithWhereNestedInput: ReviewUpdateManyWithWhereNestedInput,
  ReviewScalarWhereInput: ReviewScalarWhereInput,
  ReviewUpdateManyDataInput: ReviewUpdateManyDataInput,
  ReviewUpsertWithWhereUniqueWithoutExperienceInput: ReviewUpsertWithWhereUniqueWithoutExperienceInput,
  PictureUpdateOneRequiredInput: PictureUpdateOneRequiredInput,
  ExperienceUpdateManyWithWhereNestedInput: ExperienceUpdateManyWithWhereNestedInput,
  ExperienceScalarWhereInput: ExperienceScalarWhereInput,
  ExperienceUpdateManyDataInput: ExperienceUpdateManyDataInput,
  ExperienceUpsertWithWhereUniqueWithoutHostInput: ExperienceUpsertWithWhereUniqueWithoutHostInput,
  UserUpsertWithoutSentMessagesInput: UserUpsertWithoutSentMessagesInput,
  MessageUpdateManyWithWhereNestedInput: MessageUpdateManyWithWhereNestedInput,
  MessageScalarWhereInput: MessageScalarWhereInput,
  MessageUpdateManyDataInput: MessageUpdateManyDataInput,
  MessageUpsertWithWhereUniqueWithoutToInput: MessageUpsertWithWhereUniqueWithoutToInput,
  UserUpsertWithoutPaymentAccountInput: UserUpsertWithoutPaymentAccountInput,
  PaymentAccountUpsertWithoutPaymentsInput: PaymentAccountUpsertWithoutPaymentsInput,
  PaymentUpsertWithoutOrderInput: PaymentUpsertWithoutOrderInput,
  OrderUpdateManyWithWhereNestedInput: OrderUpdateManyWithWhereNestedInput,
  OrderScalarWhereInput: OrderScalarWhereInput,
  OrderUpdateManyDataInput: OrderUpdateManyDataInput,
  OrderUpsertWithWhereUniqueWithoutBookeeInput: OrderUpsertWithWhereUniqueWithoutBookeeInput,
  UserUpsertWithoutReceivedMessagesInput: UserUpsertWithoutReceivedMessagesInput,
  MessageUpsertWithWhereUniqueWithoutFromInput: MessageUpsertWithWhereUniqueWithoutFromInput,
  UserUpsertWithoutOrdersInput: UserUpsertWithoutOrdersInput,
  OrderUpsertNestedInput: OrderUpsertNestedInput,
  ExperienceUpdateOneWithoutReviewsInput: ExperienceUpdateOneWithoutReviewsInput,
  ExperienceUpdateWithoutReviewsDataInput: ExperienceUpdateWithoutReviewsDataInput,
  UserUpdateOneRequiredWithoutExperiencesInput: UserUpdateOneRequiredWithoutExperiencesInput,
  UserUpdateWithoutExperiencesDataInput: UserUpdateWithoutExperiencesDataInput,
  UserUpsertWithoutExperiencesInput: UserUpsertWithoutExperiencesInput,
  ExperienceUpsertWithoutReviewsInput: ExperienceUpsertWithoutReviewsInput,
  ReviewUpsertWithWhereUniqueNestedInput: ReviewUpsertWithWhereUniqueNestedInput,
  OrderUpdateManyWithoutRestaurantInput: OrderUpdateManyWithoutRestaurantInput,
  OrderUpdateWithWhereUniqueWithoutRestaurantInput: OrderUpdateWithWhereUniqueWithoutRestaurantInput,
  OrderUpdateWithoutRestaurantDataInput: OrderUpdateWithoutRestaurantDataInput,
  OrderUpsertWithWhereUniqueWithoutRestaurantInput: OrderUpsertWithWhereUniqueWithoutRestaurantInput,
  RestaurantUpdateManyWithWhereNestedInput: RestaurantUpdateManyWithWhereNestedInput,
  RestaurantScalarWhereInput: RestaurantScalarWhereInput,
  RestaurantUpdateManyDataInput: RestaurantUpdateManyDataInput,
  RestaurantUpsertWithWhereUniqueNestedInput: RestaurantUpsertWithWhereUniqueNestedInput,
  NeighbourhoodUpdateInput: NeighbourhoodUpdateInput,
  LocationUpdateManyWithoutNeighbourHoodInput: LocationUpdateManyWithoutNeighbourHoodInput,
  LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput: LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput,
  LocationUpdateWithoutNeighbourHoodDataInput: LocationUpdateWithoutNeighbourHoodDataInput,
  LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput: LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput,
  CityUpdateInput: CityUpdateInput,
  NeighbourhoodUpdateManyWithoutCityInput: NeighbourhoodUpdateManyWithoutCityInput,
  NeighbourhoodUpdateWithWhereUniqueWithoutCityInput: NeighbourhoodUpdateWithWhereUniqueWithoutCityInput,
  NeighbourhoodUpdateWithoutCityDataInput: NeighbourhoodUpdateWithoutCityDataInput,
  NeighbourhoodUpdateManyWithWhereNestedInput: NeighbourhoodUpdateManyWithWhereNestedInput,
  NeighbourhoodScalarWhereInput: NeighbourhoodScalarWhereInput,
  NeighbourhoodUpdateManyDataInput: NeighbourhoodUpdateManyDataInput,
  NeighbourhoodUpsertWithWhereUniqueWithoutCityInput: NeighbourhoodUpsertWithWhereUniqueWithoutCityInput,
  ExperienceUpdateInput: ExperienceUpdateInput,
  PaymentUpdateInput: PaymentUpdateInput,
  PaymentAccountUpdateInput: PaymentAccountUpdateInput,
  MessageUpdateInput: MessageUpdateInput,
  NotificationUpdateInput: NotificationUpdateInput,
  UserUpdateOneRequiredWithoutNotificationsInput: UserUpdateOneRequiredWithoutNotificationsInput,
  UserUpdateWithoutNotificationsDataInput: UserUpdateWithoutNotificationsDataInput,
  UserUpsertWithoutNotificationsInput: UserUpsertWithoutNotificationsInput,
  RestaurantUpdateInput: RestaurantUpdateInput,
  MenuItemUpdateInput: MenuItemUpdateInput,
  PaypalInformationUpdateInput: PaypalInformationUpdateInput,
  PoliciesUpdateInput: PoliciesUpdateInput,
  CreditCardInformationUpdateInput: CreditCardInformationUpdateInput,
  LocationUpdateInput: LocationUpdateInput,
  ReviewUpdateInput: ReviewUpdateInput,
  OrderUpdateInput: OrderUpdateInput,
  ExperienceCategoryUpdateInput: ExperienceCategoryUpdateInput,
  PaytmInformationUpdateInput: PaytmInformationUpdateInput,
  DebitCardInformationUpdateInput: DebitCardInformationUpdateInput,
  PricingUpdateInput: PricingUpdateInput,
  PictureUpdateInput: PictureUpdateInput,
  UserUpdateManyMutationInput: UserUpdateManyMutationInput,
  BatchPayload: BatchPayload,
  Long: Scalars['Long'],
  NeighbourhoodUpdateManyMutationInput: NeighbourhoodUpdateManyMutationInput,
  CityUpdateManyMutationInput: CityUpdateManyMutationInput,
  ExperienceUpdateManyMutationInput: ExperienceUpdateManyMutationInput,
  PaymentUpdateManyMutationInput: PaymentUpdateManyMutationInput,
  PaymentAccountUpdateManyMutationInput: PaymentAccountUpdateManyMutationInput,
  MessageUpdateManyMutationInput: MessageUpdateManyMutationInput,
  NotificationUpdateManyMutationInput: NotificationUpdateManyMutationInput,
  RestaurantUpdateManyMutationInput: RestaurantUpdateManyMutationInput,
  MenuItemUpdateManyMutationInput: MenuItemUpdateManyMutationInput,
  PaypalInformationUpdateManyMutationInput: PaypalInformationUpdateManyMutationInput,
  PoliciesUpdateManyMutationInput: PoliciesUpdateManyMutationInput,
  CreditCardInformationUpdateManyMutationInput: CreditCardInformationUpdateManyMutationInput,
  LocationUpdateManyMutationInput: LocationUpdateManyMutationInput,
  ReviewUpdateManyMutationInput: ReviewUpdateManyMutationInput,
  OrderUpdateManyMutationInput: OrderUpdateManyMutationInput,
  ExperienceCategoryUpdateManyMutationInput: ExperienceCategoryUpdateManyMutationInput,
  PaytmInformationUpdateManyMutationInput: PaytmInformationUpdateManyMutationInput,
  DebitCardInformationUpdateManyMutationInput: DebitCardInformationUpdateManyMutationInput,
  PricingUpdateManyMutationInput: PricingUpdateManyMutationInput,
  PictureUpdateManyMutationInput: PictureUpdateManyMutationInput,
  AuthPayload: AuthPayload,
  MutationResult: MutationResult,
  Subscription: {},
  UserSubscriptionWhereInput: UserSubscriptionWhereInput,
  MutationType: MutationType,
  UserSubscriptionPayload: UserSubscriptionPayload,
  UserPreviousValues: UserPreviousValues,
  NeighbourhoodSubscriptionWhereInput: NeighbourhoodSubscriptionWhereInput,
  NeighbourhoodSubscriptionPayload: NeighbourhoodSubscriptionPayload,
  NeighbourhoodPreviousValues: NeighbourhoodPreviousValues,
  CitySubscriptionWhereInput: CitySubscriptionWhereInput,
  CitySubscriptionPayload: CitySubscriptionPayload,
  CityPreviousValues: CityPreviousValues,
  ExperienceSubscriptionWhereInput: ExperienceSubscriptionWhereInput,
  ExperienceSubscriptionPayload: ExperienceSubscriptionPayload,
  ExperiencePreviousValues: ExperiencePreviousValues,
  PaymentSubscriptionWhereInput: PaymentSubscriptionWhereInput,
  PaymentSubscriptionPayload: PaymentSubscriptionPayload,
  PaymentPreviousValues: PaymentPreviousValues,
  PaymentAccountSubscriptionWhereInput: PaymentAccountSubscriptionWhereInput,
  PaymentAccountSubscriptionPayload: PaymentAccountSubscriptionPayload,
  PaymentAccountPreviousValues: PaymentAccountPreviousValues,
  MessageSubscriptionWhereInput: MessageSubscriptionWhereInput,
  MessageSubscriptionPayload: MessageSubscriptionPayload,
  MessagePreviousValues: MessagePreviousValues,
  NotificationSubscriptionWhereInput: NotificationSubscriptionWhereInput,
  NotificationSubscriptionPayload: NotificationSubscriptionPayload,
  NotificationPreviousValues: NotificationPreviousValues,
  RestaurantSubscriptionWhereInput: RestaurantSubscriptionWhereInput,
  RestaurantSubscriptionPayload: RestaurantSubscriptionPayload,
  RestaurantPreviousValues: RestaurantPreviousValues,
  MenuItemSubscriptionWhereInput: MenuItemSubscriptionWhereInput,
  MenuItemSubscriptionPayload: MenuItemSubscriptionPayload,
  MenuItemPreviousValues: MenuItemPreviousValues,
  PaypalInformationSubscriptionWhereInput: PaypalInformationSubscriptionWhereInput,
  PaypalInformationSubscriptionPayload: PaypalInformationSubscriptionPayload,
  PaypalInformationPreviousValues: PaypalInformationPreviousValues,
  PoliciesSubscriptionWhereInput: PoliciesSubscriptionWhereInput,
  PoliciesSubscriptionPayload: PoliciesSubscriptionPayload,
  PoliciesPreviousValues: PoliciesPreviousValues,
  CreditCardInformationSubscriptionWhereInput: CreditCardInformationSubscriptionWhereInput,
  CreditCardInformationSubscriptionPayload: CreditCardInformationSubscriptionPayload,
  CreditCardInformationPreviousValues: CreditCardInformationPreviousValues,
  LocationSubscriptionWhereInput: LocationSubscriptionWhereInput,
  LocationSubscriptionPayload: LocationSubscriptionPayload,
  LocationPreviousValues: LocationPreviousValues,
  ReviewSubscriptionWhereInput: ReviewSubscriptionWhereInput,
  ReviewSubscriptionPayload: ReviewSubscriptionPayload,
  ReviewPreviousValues: ReviewPreviousValues,
  OrderSubscriptionWhereInput: OrderSubscriptionWhereInput,
  OrderSubscriptionPayload: OrderSubscriptionPayload,
  OrderPreviousValues: OrderPreviousValues,
  ExperienceCategorySubscriptionWhereInput: ExperienceCategorySubscriptionWhereInput,
  ExperienceCategorySubscriptionPayload: ExperienceCategorySubscriptionPayload,
  ExperienceCategoryPreviousValues: ExperienceCategoryPreviousValues,
  PaytmInformationSubscriptionWhereInput: PaytmInformationSubscriptionWhereInput,
  PaytmInformationSubscriptionPayload: PaytmInformationSubscriptionPayload,
  PaytmInformationPreviousValues: PaytmInformationPreviousValues,
  DebitCardInformationSubscriptionWhereInput: DebitCardInformationSubscriptionWhereInput,
  DebitCardInformationSubscriptionPayload: DebitCardInformationSubscriptionPayload,
  DebitCardInformationPreviousValues: DebitCardInformationPreviousValues,
  PricingSubscriptionWhereInput: PricingSubscriptionWhereInput,
  PricingSubscriptionPayload: PricingSubscriptionPayload,
  PricingPreviousValues: PricingPreviousValues,
  PictureSubscriptionWhereInput: PictureSubscriptionWhereInput,
  PictureSubscriptionPayload: PictureSubscriptionPayload,
  PicturePreviousValues: PicturePreviousValues,
  ACCOUNT_TYPE: Account_Type,
};

export type AggregateCityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateCity'] = ResolversParentTypes['AggregateCity']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateCreditCardInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateCreditCardInformation'] = ResolversParentTypes['AggregateCreditCardInformation']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateDebitCardInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateDebitCardInformation'] = ResolversParentTypes['AggregateDebitCardInformation']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateExperience'] = ResolversParentTypes['AggregateExperience']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateExperienceCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateExperienceCategory'] = ResolversParentTypes['AggregateExperienceCategory']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateLocation'] = ResolversParentTypes['AggregateLocation']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateMenuItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMenuItem'] = ResolversParentTypes['AggregateMenuItem']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMessage'] = ResolversParentTypes['AggregateMessage']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateNeighbourhoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateNeighbourhood'] = ResolversParentTypes['AggregateNeighbourhood']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateNotification'] = ResolversParentTypes['AggregateNotification']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateOrder'] = ResolversParentTypes['AggregateOrder']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregatePaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePayment'] = ResolversParentTypes['AggregatePayment']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregatePaymentAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePaymentAccount'] = ResolversParentTypes['AggregatePaymentAccount']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregatePaypalInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePaypalInformation'] = ResolversParentTypes['AggregatePaypalInformation']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregatePaytmInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePaytmInformation'] = ResolversParentTypes['AggregatePaytmInformation']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregatePictureResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePicture'] = ResolversParentTypes['AggregatePicture']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregatePoliciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePolicies'] = ResolversParentTypes['AggregatePolicies']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregatePricingResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePricing'] = ResolversParentTypes['AggregatePricing']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateRestaurantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateRestaurant'] = ResolversParentTypes['AggregateRestaurant']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateReview'] = ResolversParentTypes['AggregateReview']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
};

export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = {
  count?: Resolver<ResolversTypes['Long'], ParentType, ContextType>,
};

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  neighbourhoods?: Resolver<Maybe<Array<ResolversTypes['Neighbourhood']>>, ParentType, ContextType, CityNeighbourhoodsArgs>,
};

export type CityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityConnection'] = ResolversParentTypes['CityConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['CityEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateCity'], ParentType, ContextType>,
};

export type CityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityEdge'] = ResolversParentTypes['CityEdge']> = {
  node?: Resolver<ResolversTypes['City'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CityPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityPreviousValues'] = ResolversParentTypes['CityPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CitySubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitySubscriptionPayload'] = ResolversParentTypes['CitySubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['CityPreviousValues']>, ParentType, ContextType>,
};

export type CreditCardInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditCardInformation'] = ResolversParentTypes['CreditCardInformation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  cardNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expiresOnMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  expiresOnYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  securityCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CreditCardInformationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditCardInformationConnection'] = ResolversParentTypes['CreditCardInformationConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['CreditCardInformationEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateCreditCardInformation'], ParentType, ContextType>,
};

export type CreditCardInformationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditCardInformationEdge'] = ResolversParentTypes['CreditCardInformationEdge']> = {
  node?: Resolver<ResolversTypes['CreditCardInformation'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CreditCardInformationPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditCardInformationPreviousValues'] = ResolversParentTypes['CreditCardInformationPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  cardNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expiresOnMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  expiresOnYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  securityCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CreditCardInformationSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditCardInformationSubscriptionPayload'] = ResolversParentTypes['CreditCardInformationSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['CreditCardInformation']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['CreditCardInformationPreviousValues']>, ParentType, ContextType>,
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DebitCardInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DebitCardInformation'] = ResolversParentTypes['DebitCardInformation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  cardNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expiresOnMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  expiresOnYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  securityCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type DebitCardInformationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DebitCardInformationConnection'] = ResolversParentTypes['DebitCardInformationConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['DebitCardInformationEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateDebitCardInformation'], ParentType, ContextType>,
};

export type DebitCardInformationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DebitCardInformationEdge'] = ResolversParentTypes['DebitCardInformationEdge']> = {
  node?: Resolver<ResolversTypes['DebitCardInformation'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type DebitCardInformationPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['DebitCardInformationPreviousValues'] = ResolversParentTypes['DebitCardInformationPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  cardNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expiresOnMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  expiresOnYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  securityCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type DebitCardInformationSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DebitCardInformationSubscriptionPayload'] = ResolversParentTypes['DebitCardInformationSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['DebitCardInformation']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['DebitCardInformationPreviousValues']>, ParentType, ContextType>,
};

export type ExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Experience'] = ResolversParentTypes['Experience']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  category?: Resolver<Maybe<ResolversTypes['ExperienceCategory']>, ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  host?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>,
  pricePerPerson?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, ExperienceReviewsArgs>,
  preview?: Resolver<ResolversTypes['Picture'], ParentType, ContextType>,
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ExperienceCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceCategory'] = ResolversParentTypes['ExperienceCategory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  mainColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ExperienceCategoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceCategoryConnection'] = ResolversParentTypes['ExperienceCategoryConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['ExperienceCategoryEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateExperienceCategory'], ParentType, ContextType>,
};

export type ExperienceCategoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceCategoryEdge'] = ResolversParentTypes['ExperienceCategoryEdge']> = {
  node?: Resolver<ResolversTypes['ExperienceCategory'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ExperienceCategoryPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceCategoryPreviousValues'] = ResolversParentTypes['ExperienceCategoryPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  mainColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ExperienceCategorySubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceCategorySubscriptionPayload'] = ResolversParentTypes['ExperienceCategorySubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['ExperienceCategory']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['ExperienceCategoryPreviousValues']>, ParentType, ContextType>,
};

export type ExperienceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceConnection'] = ResolversParentTypes['ExperienceConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['ExperienceEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateExperience'], ParentType, ContextType>,
};

export type ExperienceEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceEdge'] = ResolversParentTypes['ExperienceEdge']> = {
  node?: Resolver<ResolversTypes['Experience'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ExperiencePreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperiencePreviousValues'] = ResolversParentTypes['ExperiencePreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  pricePerPerson?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ExperiencesByCityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperiencesByCity'] = ResolversParentTypes['ExperiencesByCity']> = {
  experiences?: Resolver<Array<ResolversTypes['Experience']>, ParentType, ContextType>,
  city?: Resolver<ResolversTypes['City'], ParentType, ContextType>,
};

export type ExperienceSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceSubscriptionPayload'] = ResolversParentTypes['ExperienceSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Experience']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['ExperiencePreviousValues']>, ParentType, ContextType>,
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  lng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  neighbourHood?: Resolver<Maybe<ResolversTypes['Neighbourhood']>, ParentType, ContextType>,
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  directions?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type LocationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationConnection'] = ResolversParentTypes['LocationConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['LocationEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateLocation'], ParentType, ContextType>,
};

export type LocationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationEdge'] = ResolversParentTypes['LocationEdge']> = {
  node?: Resolver<ResolversTypes['Location'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type LocationPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationPreviousValues'] = ResolversParentTypes['LocationPreviousValues']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  lng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  directions?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type LocationSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationSubscriptionPayload'] = ResolversParentTypes['LocationSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['LocationPreviousValues']>, ParentType, ContextType>,
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long'
}

export type MenuItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['MenuItem'] = ResolversParentTypes['MenuItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  pricing?: Resolver<ResolversTypes['Pricing'], ParentType, ContextType>,
  pictures?: Resolver<Array<ResolversTypes['Picture']>, ParentType, ContextType, MenuItemPicturesArgs>,
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, MenuItemReviewsArgs>,
};

export type MenuItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MenuItemConnection'] = ResolversParentTypes['MenuItemConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['MenuItemEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateMenuItem'], ParentType, ContextType>,
};

export type MenuItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MenuItemEdge'] = ResolversParentTypes['MenuItemEdge']> = {
  node?: Resolver<ResolversTypes['MenuItem'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MenuItemPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['MenuItemPreviousValues'] = ResolversParentTypes['MenuItemPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MenuItemSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['MenuItemSubscriptionPayload'] = ResolversParentTypes['MenuItemSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['MenuItem']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['MenuItemPreviousValues']>, ParentType, ContextType>,
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  from?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  to?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  deliveredAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  readAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
};

export type MessageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageConnection'] = ResolversParentTypes['MessageConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['MessageEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateMessage'], ParentType, ContextType>,
};

export type MessageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEdge'] = ResolversParentTypes['MessageEdge']> = {
  node?: Resolver<ResolversTypes['Message'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MessagePreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessagePreviousValues'] = ResolversParentTypes['MessagePreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  deliveredAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  readAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
};

export type MessageSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageSubscriptionPayload'] = ResolversParentTypes['MessageSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['MessagePreviousValues']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>,
  createNeighbourhood?: Resolver<ResolversTypes['Neighbourhood'], ParentType, ContextType, RequireFields<MutationCreateNeighbourhoodArgs, 'data'>>,
  createCity?: Resolver<ResolversTypes['City'], ParentType, ContextType, RequireFields<MutationCreateCityArgs, 'data'>>,
  createExperience?: Resolver<ResolversTypes['Experience'], ParentType, ContextType, RequireFields<MutationCreateExperienceArgs, 'data'>>,
  createPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationCreatePaymentArgs, 'data'>>,
  createPaymentAccount?: Resolver<ResolversTypes['PaymentAccount'], ParentType, ContextType, RequireFields<MutationCreatePaymentAccountArgs, 'data'>>,
  createMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'data'>>,
  createNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationCreateNotificationArgs, 'data'>>,
  createRestaurant?: Resolver<ResolversTypes['Restaurant'], ParentType, ContextType, RequireFields<MutationCreateRestaurantArgs, 'data'>>,
  createMenuItem?: Resolver<ResolversTypes['MenuItem'], ParentType, ContextType, RequireFields<MutationCreateMenuItemArgs, 'data'>>,
  createPaypalInformation?: Resolver<ResolversTypes['PaypalInformation'], ParentType, ContextType, RequireFields<MutationCreatePaypalInformationArgs, 'data'>>,
  createPolicies?: Resolver<ResolversTypes['Policies'], ParentType, ContextType, RequireFields<MutationCreatePoliciesArgs, 'data'>>,
  createCreditCardInformation?: Resolver<ResolversTypes['CreditCardInformation'], ParentType, ContextType, RequireFields<MutationCreateCreditCardInformationArgs, 'data'>>,
  createLocation?: Resolver<ResolversTypes['Location'], ParentType, ContextType, RequireFields<MutationCreateLocationArgs, 'data'>>,
  createReview?: Resolver<ResolversTypes['Review'], ParentType, ContextType, RequireFields<MutationCreateReviewArgs, 'data'>>,
  createOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'data'>>,
  createExperienceCategory?: Resolver<ResolversTypes['ExperienceCategory'], ParentType, ContextType, RequireFields<MutationCreateExperienceCategoryArgs, 'data'>>,
  createPaytmInformation?: Resolver<ResolversTypes['PaytmInformation'], ParentType, ContextType, RequireFields<MutationCreatePaytmInformationArgs, 'data'>>,
  createDebitCardInformation?: Resolver<ResolversTypes['DebitCardInformation'], ParentType, ContextType, RequireFields<MutationCreateDebitCardInformationArgs, 'data'>>,
  createPricing?: Resolver<ResolversTypes['Pricing'], ParentType, ContextType, RequireFields<MutationCreatePricingArgs, 'data'>>,
  createPicture?: Resolver<ResolversTypes['Picture'], ParentType, ContextType, RequireFields<MutationCreatePictureArgs, 'data'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>,
  updateNeighbourhood?: Resolver<Maybe<ResolversTypes['Neighbourhood']>, ParentType, ContextType, RequireFields<MutationUpdateNeighbourhoodArgs, 'data' | 'where'>>,
  updateCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<MutationUpdateCityArgs, 'data' | 'where'>>,
  updateExperience?: Resolver<Maybe<ResolversTypes['Experience']>, ParentType, ContextType, RequireFields<MutationUpdateExperienceArgs, 'data' | 'where'>>,
  updatePayment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<MutationUpdatePaymentArgs, 'data' | 'where'>>,
  updatePaymentAccount?: Resolver<Maybe<ResolversTypes['PaymentAccount']>, ParentType, ContextType, RequireFields<MutationUpdatePaymentAccountArgs, 'data' | 'where'>>,
  updateMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationUpdateMessageArgs, 'data' | 'where'>>,
  updateNotification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationUpdateNotificationArgs, 'data' | 'where'>>,
  updateRestaurant?: Resolver<Maybe<ResolversTypes['Restaurant']>, ParentType, ContextType, RequireFields<MutationUpdateRestaurantArgs, 'data' | 'where'>>,
  updateMenuItem?: Resolver<Maybe<ResolversTypes['MenuItem']>, ParentType, ContextType, RequireFields<MutationUpdateMenuItemArgs, 'data' | 'where'>>,
  updatePaypalInformation?: Resolver<Maybe<ResolversTypes['PaypalInformation']>, ParentType, ContextType, RequireFields<MutationUpdatePaypalInformationArgs, 'data' | 'where'>>,
  updatePolicies?: Resolver<Maybe<ResolversTypes['Policies']>, ParentType, ContextType, RequireFields<MutationUpdatePoliciesArgs, 'data' | 'where'>>,
  updateCreditCardInformation?: Resolver<Maybe<ResolversTypes['CreditCardInformation']>, ParentType, ContextType, RequireFields<MutationUpdateCreditCardInformationArgs, 'data' | 'where'>>,
  updateLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<MutationUpdateLocationArgs, 'data' | 'where'>>,
  updateReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationUpdateReviewArgs, 'data' | 'where'>>,
  updateOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'data' | 'where'>>,
  updateExperienceCategory?: Resolver<Maybe<ResolversTypes['ExperienceCategory']>, ParentType, ContextType, RequireFields<MutationUpdateExperienceCategoryArgs, 'data' | 'where'>>,
  updatePaytmInformation?: Resolver<Maybe<ResolversTypes['PaytmInformation']>, ParentType, ContextType, RequireFields<MutationUpdatePaytmInformationArgs, 'data' | 'where'>>,
  updateDebitCardInformation?: Resolver<Maybe<ResolversTypes['DebitCardInformation']>, ParentType, ContextType, RequireFields<MutationUpdateDebitCardInformationArgs, 'data' | 'where'>>,
  updatePricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<MutationUpdatePricingArgs, 'data' | 'where'>>,
  updatePicture?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType, RequireFields<MutationUpdatePictureArgs, 'data' | 'where'>>,
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>,
  deleteNeighbourhood?: Resolver<Maybe<ResolversTypes['Neighbourhood']>, ParentType, ContextType, RequireFields<MutationDeleteNeighbourhoodArgs, 'where'>>,
  deleteCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<MutationDeleteCityArgs, 'where'>>,
  deleteExperience?: Resolver<Maybe<ResolversTypes['Experience']>, ParentType, ContextType, RequireFields<MutationDeleteExperienceArgs, 'where'>>,
  deletePayment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<MutationDeletePaymentArgs, 'where'>>,
  deletePaymentAccount?: Resolver<Maybe<ResolversTypes['PaymentAccount']>, ParentType, ContextType, RequireFields<MutationDeletePaymentAccountArgs, 'where'>>,
  deleteMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationDeleteMessageArgs, 'where'>>,
  deleteNotification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationDeleteNotificationArgs, 'where'>>,
  deleteRestaurant?: Resolver<Maybe<ResolversTypes['Restaurant']>, ParentType, ContextType, RequireFields<MutationDeleteRestaurantArgs, 'where'>>,
  deleteMenuItem?: Resolver<Maybe<ResolversTypes['MenuItem']>, ParentType, ContextType, RequireFields<MutationDeleteMenuItemArgs, 'where'>>,
  deletePaypalInformation?: Resolver<Maybe<ResolversTypes['PaypalInformation']>, ParentType, ContextType, RequireFields<MutationDeletePaypalInformationArgs, 'where'>>,
  deletePolicies?: Resolver<Maybe<ResolversTypes['Policies']>, ParentType, ContextType, RequireFields<MutationDeletePoliciesArgs, 'where'>>,
  deleteCreditCardInformation?: Resolver<Maybe<ResolversTypes['CreditCardInformation']>, ParentType, ContextType, RequireFields<MutationDeleteCreditCardInformationArgs, 'where'>>,
  deleteLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<MutationDeleteLocationArgs, 'where'>>,
  deleteReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationDeleteReviewArgs, 'where'>>,
  deleteOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, 'where'>>,
  deleteExperienceCategory?: Resolver<Maybe<ResolversTypes['ExperienceCategory']>, ParentType, ContextType, RequireFields<MutationDeleteExperienceCategoryArgs, 'where'>>,
  deletePaytmInformation?: Resolver<Maybe<ResolversTypes['PaytmInformation']>, ParentType, ContextType, RequireFields<MutationDeletePaytmInformationArgs, 'where'>>,
  deleteDebitCardInformation?: Resolver<Maybe<ResolversTypes['DebitCardInformation']>, ParentType, ContextType, RequireFields<MutationDeleteDebitCardInformationArgs, 'where'>>,
  deletePricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<MutationDeletePricingArgs, 'where'>>,
  deletePicture?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType, RequireFields<MutationDeletePictureArgs, 'where'>>,
  upsertUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpsertUserArgs, 'where' | 'create' | 'update'>>,
  upsertNeighbourhood?: Resolver<ResolversTypes['Neighbourhood'], ParentType, ContextType, RequireFields<MutationUpsertNeighbourhoodArgs, 'where' | 'create' | 'update'>>,
  upsertCity?: Resolver<ResolversTypes['City'], ParentType, ContextType, RequireFields<MutationUpsertCityArgs, 'where' | 'create' | 'update'>>,
  upsertExperience?: Resolver<ResolversTypes['Experience'], ParentType, ContextType, RequireFields<MutationUpsertExperienceArgs, 'where' | 'create' | 'update'>>,
  upsertPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationUpsertPaymentArgs, 'where' | 'create' | 'update'>>,
  upsertPaymentAccount?: Resolver<ResolversTypes['PaymentAccount'], ParentType, ContextType, RequireFields<MutationUpsertPaymentAccountArgs, 'where' | 'create' | 'update'>>,
  upsertMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationUpsertMessageArgs, 'where' | 'create' | 'update'>>,
  upsertNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationUpsertNotificationArgs, 'where' | 'create' | 'update'>>,
  upsertRestaurant?: Resolver<ResolversTypes['Restaurant'], ParentType, ContextType, RequireFields<MutationUpsertRestaurantArgs, 'where' | 'create' | 'update'>>,
  upsertMenuItem?: Resolver<ResolversTypes['MenuItem'], ParentType, ContextType, RequireFields<MutationUpsertMenuItemArgs, 'where' | 'create' | 'update'>>,
  upsertPaypalInformation?: Resolver<ResolversTypes['PaypalInformation'], ParentType, ContextType, RequireFields<MutationUpsertPaypalInformationArgs, 'where' | 'create' | 'update'>>,
  upsertPolicies?: Resolver<ResolversTypes['Policies'], ParentType, ContextType, RequireFields<MutationUpsertPoliciesArgs, 'where' | 'create' | 'update'>>,
  upsertCreditCardInformation?: Resolver<ResolversTypes['CreditCardInformation'], ParentType, ContextType, RequireFields<MutationUpsertCreditCardInformationArgs, 'where' | 'create' | 'update'>>,
  upsertLocation?: Resolver<ResolversTypes['Location'], ParentType, ContextType, RequireFields<MutationUpsertLocationArgs, 'where' | 'create' | 'update'>>,
  upsertReview?: Resolver<ResolversTypes['Review'], ParentType, ContextType, RequireFields<MutationUpsertReviewArgs, 'where' | 'create' | 'update'>>,
  upsertOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUpsertOrderArgs, 'where' | 'create' | 'update'>>,
  upsertExperienceCategory?: Resolver<ResolversTypes['ExperienceCategory'], ParentType, ContextType, RequireFields<MutationUpsertExperienceCategoryArgs, 'where' | 'create' | 'update'>>,
  upsertPaytmInformation?: Resolver<ResolversTypes['PaytmInformation'], ParentType, ContextType, RequireFields<MutationUpsertPaytmInformationArgs, 'where' | 'create' | 'update'>>,
  upsertDebitCardInformation?: Resolver<ResolversTypes['DebitCardInformation'], ParentType, ContextType, RequireFields<MutationUpsertDebitCardInformationArgs, 'where' | 'create' | 'update'>>,
  upsertPricing?: Resolver<ResolversTypes['Pricing'], ParentType, ContextType, RequireFields<MutationUpsertPricingArgs, 'where' | 'create' | 'update'>>,
  upsertPicture?: Resolver<ResolversTypes['Picture'], ParentType, ContextType, RequireFields<MutationUpsertPictureArgs, 'where' | 'create' | 'update'>>,
  updateManyUsers?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyUsersArgs, 'data'>>,
  updateManyNeighbourhoods?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyNeighbourhoodsArgs, 'data'>>,
  updateManyCities?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyCitiesArgs, 'data'>>,
  updateManyExperiences?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyExperiencesArgs, 'data'>>,
  updateManyPayments?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPaymentsArgs, 'data'>>,
  updateManyPaymentAccounts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPaymentAccountsArgs, 'data'>>,
  updateManyMessages?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyMessagesArgs, 'data'>>,
  updateManyNotifications?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyNotificationsArgs, 'data'>>,
  updateManyRestaurants?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyRestaurantsArgs, 'data'>>,
  updateManyMenuItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyMenuItemsArgs, 'data'>>,
  updateManyPaypalInformations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPaypalInformationsArgs, 'data'>>,
  updateManyPolicieses?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPoliciesesArgs, 'data'>>,
  updateManyCreditCardInformations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyCreditCardInformationsArgs, 'data'>>,
  updateManyLocations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyLocationsArgs, 'data'>>,
  updateManyReviews?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyReviewsArgs, 'data'>>,
  updateManyOrders?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyOrdersArgs, 'data'>>,
  updateManyExperienceCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyExperienceCategoriesArgs, 'data'>>,
  updateManyPaytmInformations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPaytmInformationsArgs, 'data'>>,
  updateManyDebitCardInformations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyDebitCardInformationsArgs, 'data'>>,
  updateManyPricings?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPricingsArgs, 'data'>>,
  updateManyPictures?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPicturesArgs, 'data'>>,
  deleteManyUsers?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyUsersArgs>,
  deleteManyNeighbourhoods?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyNeighbourhoodsArgs>,
  deleteManyCities?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyCitiesArgs>,
  deleteManyExperiences?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyExperiencesArgs>,
  deleteManyPayments?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyPaymentsArgs>,
  deleteManyPaymentAccounts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyPaymentAccountsArgs>,
  deleteManyMessages?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyMessagesArgs>,
  deleteManyNotifications?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyNotificationsArgs>,
  deleteManyRestaurants?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyRestaurantsArgs>,
  deleteManyMenuItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyMenuItemsArgs>,
  deleteManyPaypalInformations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyPaypalInformationsArgs>,
  deleteManyPolicieses?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyPoliciesesArgs>,
  deleteManyCreditCardInformations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyCreditCardInformationsArgs>,
  deleteManyLocations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyLocationsArgs>,
  deleteManyReviews?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyReviewsArgs>,
  deleteManyOrders?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyOrdersArgs>,
  deleteManyExperienceCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyExperienceCategoriesArgs>,
  deleteManyPaytmInformations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyPaytmInformationsArgs>,
  deleteManyDebitCardInformations?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyDebitCardInformationsArgs>,
  deleteManyPricings?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyPricingsArgs>,
  deleteManyPictures?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyPicturesArgs>,
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'idToken'>>,
  addPaymentMethod?: Resolver<ResolversTypes['MutationResult'], ParentType, ContextType, RequireFields<MutationAddPaymentMethodArgs, 'cardNumber' | 'expiresOnMonth' | 'expiresOnYear' | 'securityCode' | 'firstName' | 'lastName' | 'postalCode' | 'country'>>,
  book?: Resolver<ResolversTypes['MutationResult'], ParentType, ContextType, RequireFields<MutationBookArgs, 'restaurantId' | 'checkIn' | 'checkOut' | 'paymentId' | 'numGuests'>>,
};

export type MutationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResult'] = ResolversParentTypes['MutationResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type NeighbourhoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Neighbourhood'] = ResolversParentTypes['Neighbourhood']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  locations?: Resolver<Maybe<Array<ResolversTypes['Location']>>, ParentType, ContextType, NeighbourhoodLocationsArgs>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  homePreview?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType>,
  city?: Resolver<ResolversTypes['City'], ParentType, ContextType>,
  featured?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type NeighbourhoodConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NeighbourhoodConnection'] = ResolversParentTypes['NeighbourhoodConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['NeighbourhoodEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateNeighbourhood'], ParentType, ContextType>,
};

export type NeighbourhoodEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NeighbourhoodEdge'] = ResolversParentTypes['NeighbourhoodEdge']> = {
  node?: Resolver<ResolversTypes['Neighbourhood'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type NeighbourhoodPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['NeighbourhoodPreviousValues'] = ResolversParentTypes['NeighbourhoodPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  featured?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type NeighbourhoodSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['NeighbourhoodSubscriptionPayload'] = ResolversParentTypes['NeighbourhoodSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Neighbourhood']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['NeighbourhoodPreviousValues']>, ParentType, ContextType>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'User' | 'Restaurant' | 'Review' | 'Order' | 'Payment' | 'PaymentAccount' | 'PaypalInformation' | 'PaytmInformation' | 'CreditCardInformation' | 'DebitCardInformation' | 'Experience' | 'ExperienceCategory' | 'Location' | 'Neighbourhood' | 'Picture' | 'City' | 'Policies' | 'MenuItem' | 'Pricing' | 'Message' | 'Notification', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['NOTIFICATION_TYPE']>, ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  readDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
};

export type NotificationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationConnection'] = ResolversParentTypes['NotificationConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['NotificationEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateNotification'], ParentType, ContextType>,
};

export type NotificationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationEdge'] = ResolversParentTypes['NotificationEdge']> = {
  node?: Resolver<ResolversTypes['Notification'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type NotificationPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationPreviousValues'] = ResolversParentTypes['NotificationPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['NOTIFICATION_TYPE']>, ParentType, ContextType>,
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  readDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
};

export type NotificationSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationSubscriptionPayload'] = ResolversParentTypes['NotificationSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['NotificationPreviousValues']>, ParentType, ContextType>,
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  bookee?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  restaurant?: Resolver<ResolversTypes['Restaurant'], ParentType, ContextType>,
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  payment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType>,
};

export type OrderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnection'] = ResolversParentTypes['OrderConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['OrderEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateOrder'], ParentType, ContextType>,
};

export type OrderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderEdge'] = ResolversParentTypes['OrderEdge']> = {
  node?: Resolver<ResolversTypes['Order'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type OrderPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderPreviousValues'] = ResolversParentTypes['OrderPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
};

export type OrderSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderSubscriptionPayload'] = ResolversParentTypes['OrderSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['OrderPreviousValues']>, ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  serviceFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  restaurantPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  totalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>,
  paymentMethod?: Resolver<ResolversTypes['PaymentAccount'], ParentType, ContextType>,
};

export type PaymentAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentAccount'] = ResolversParentTypes['PaymentAccount']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['PAYMENT_PROVIDER']>, ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  payments?: Resolver<Array<ResolversTypes['Payment']>, ParentType, ContextType, PaymentAccountPaymentsArgs>,
  paypal?: Resolver<Maybe<ResolversTypes['PaypalInformation']>, ParentType, ContextType>,
  paytm?: Resolver<Maybe<ResolversTypes['PaytmInformation']>, ParentType, ContextType>,
  creditcard?: Resolver<Maybe<ResolversTypes['CreditCardInformation']>, ParentType, ContextType>,
  debitcard?: Resolver<Maybe<ResolversTypes['DebitCardInformation']>, ParentType, ContextType>,
};

export type PaymentAccountConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentAccountConnection'] = ResolversParentTypes['PaymentAccountConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['PaymentAccountEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregatePaymentAccount'], ParentType, ContextType>,
};

export type PaymentAccountEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentAccountEdge'] = ResolversParentTypes['PaymentAccountEdge']> = {
  node?: Resolver<ResolversTypes['PaymentAccount'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PaymentAccountPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentAccountPreviousValues'] = ResolversParentTypes['PaymentAccountPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['PAYMENT_PROVIDER']>, ParentType, ContextType>,
};

export type PaymentAccountSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentAccountSubscriptionPayload'] = ResolversParentTypes['PaymentAccountSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['PaymentAccount']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['PaymentAccountPreviousValues']>, ParentType, ContextType>,
};

export type PaymentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentConnection'] = ResolversParentTypes['PaymentConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['PaymentEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregatePayment'], ParentType, ContextType>,
};

export type PaymentEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentEdge'] = ResolversParentTypes['PaymentEdge']> = {
  node?: Resolver<ResolversTypes['Payment'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PaymentPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentPreviousValues'] = ResolversParentTypes['PaymentPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  serviceFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  restaurantPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  totalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
};

export type PaymentSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentSubscriptionPayload'] = ResolversParentTypes['PaymentSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['PaymentPreviousValues']>, ParentType, ContextType>,
};

export type PaypalInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaypalInformation'] = ResolversParentTypes['PaypalInformation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PaypalInformationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaypalInformationConnection'] = ResolversParentTypes['PaypalInformationConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['PaypalInformationEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregatePaypalInformation'], ParentType, ContextType>,
};

export type PaypalInformationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaypalInformationEdge'] = ResolversParentTypes['PaypalInformationEdge']> = {
  node?: Resolver<ResolversTypes['PaypalInformation'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PaypalInformationPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaypalInformationPreviousValues'] = ResolversParentTypes['PaypalInformationPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PaypalInformationSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaypalInformationSubscriptionPayload'] = ResolversParentTypes['PaypalInformationSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['PaypalInformation']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['PaypalInformationPreviousValues']>, ParentType, ContextType>,
};

export type PaytmInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaytmInformation'] = ResolversParentTypes['PaytmInformation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  mobile?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PaytmInformationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaytmInformationConnection'] = ResolversParentTypes['PaytmInformationConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['PaytmInformationEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregatePaytmInformation'], ParentType, ContextType>,
};

export type PaytmInformationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaytmInformationEdge'] = ResolversParentTypes['PaytmInformationEdge']> = {
  node?: Resolver<ResolversTypes['PaytmInformation'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PaytmInformationPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaytmInformationPreviousValues'] = ResolversParentTypes['PaytmInformationPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PaytmInformationSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaytmInformationSubscriptionPayload'] = ResolversParentTypes['PaytmInformationSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['PaytmInformation']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['PaytmInformationPreviousValues']>, ParentType, ContextType>,
};

export type PictureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Picture'] = ResolversParentTypes['Picture']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PictureConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PictureConnection'] = ResolversParentTypes['PictureConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['PictureEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregatePicture'], ParentType, ContextType>,
};

export type PictureEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PictureEdge'] = ResolversParentTypes['PictureEdge']> = {
  node?: Resolver<ResolversTypes['Picture'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PicturePreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PicturePreviousValues'] = ResolversParentTypes['PicturePreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PictureSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PictureSubscriptionPayload'] = ResolversParentTypes['PictureSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['PicturePreviousValues']>, ParentType, ContextType>,
};

export type PoliciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Policies'] = ResolversParentTypes['Policies']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  openingTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  closingTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
};

export type PoliciesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoliciesConnection'] = ResolversParentTypes['PoliciesConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['PoliciesEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregatePolicies'], ParentType, ContextType>,
};

export type PoliciesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoliciesEdge'] = ResolversParentTypes['PoliciesEdge']> = {
  node?: Resolver<ResolversTypes['Policies'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PoliciesPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoliciesPreviousValues'] = ResolversParentTypes['PoliciesPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  openingTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  closingTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
};

export type PoliciesSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoliciesSubscriptionPayload'] = ResolversParentTypes['PoliciesSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Policies']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['PoliciesPreviousValues']>, ParentType, ContextType>,
};

export type PricingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pricing'] = ResolversParentTypes['Pricing']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  monthlyDiscount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  weeklyDiscount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  smartPricing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  basePrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  averageWeekly?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  averageMonthly?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  weekendPricing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type PricingConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingConnection'] = ResolversParentTypes['PricingConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['PricingEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregatePricing'], ParentType, ContextType>,
};

export type PricingEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingEdge'] = ResolversParentTypes['PricingEdge']> = {
  node?: Resolver<ResolversTypes['Pricing'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PricingPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingPreviousValues'] = ResolversParentTypes['PricingPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  monthlyDiscount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  weeklyDiscount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  smartPricing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  basePrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  averageWeekly?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  averageMonthly?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  weekendPricing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type PricingSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingSubscriptionPayload'] = ResolversParentTypes['PricingSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['PricingPreviousValues']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, QueryUsersArgs>,
  neighbourhoods?: Resolver<Array<Maybe<ResolversTypes['Neighbourhood']>>, ParentType, ContextType, QueryNeighbourhoodsArgs>,
  cities?: Resolver<Array<Maybe<ResolversTypes['City']>>, ParentType, ContextType, QueryCitiesArgs>,
  experiences?: Resolver<Array<Maybe<ResolversTypes['Experience']>>, ParentType, ContextType, QueryExperiencesArgs>,
  payments?: Resolver<Array<Maybe<ResolversTypes['Payment']>>, ParentType, ContextType, QueryPaymentsArgs>,
  paymentAccounts?: Resolver<Array<Maybe<ResolversTypes['PaymentAccount']>>, ParentType, ContextType, QueryPaymentAccountsArgs>,
  messages?: Resolver<Array<Maybe<ResolversTypes['Message']>>, ParentType, ContextType, QueryMessagesArgs>,
  notifications?: Resolver<Array<Maybe<ResolversTypes['Notification']>>, ParentType, ContextType, QueryNotificationsArgs>,
  restaurants?: Resolver<Array<Maybe<ResolversTypes['Restaurant']>>, ParentType, ContextType, QueryRestaurantsArgs>,
  menuItems?: Resolver<Array<Maybe<ResolversTypes['MenuItem']>>, ParentType, ContextType, QueryMenuItemsArgs>,
  paypalInformations?: Resolver<Array<Maybe<ResolversTypes['PaypalInformation']>>, ParentType, ContextType, QueryPaypalInformationsArgs>,
  policieses?: Resolver<Array<Maybe<ResolversTypes['Policies']>>, ParentType, ContextType, QueryPoliciesesArgs>,
  creditCardInformations?: Resolver<Array<Maybe<ResolversTypes['CreditCardInformation']>>, ParentType, ContextType, QueryCreditCardInformationsArgs>,
  locations?: Resolver<Array<Maybe<ResolversTypes['Location']>>, ParentType, ContextType, QueryLocationsArgs>,
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType, QueryReviewsArgs>,
  orders?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType, QueryOrdersArgs>,
  experienceCategories?: Resolver<Array<Maybe<ResolversTypes['ExperienceCategory']>>, ParentType, ContextType, QueryExperienceCategoriesArgs>,
  paytmInformations?: Resolver<Array<Maybe<ResolversTypes['PaytmInformation']>>, ParentType, ContextType, QueryPaytmInformationsArgs>,
  debitCardInformations?: Resolver<Array<Maybe<ResolversTypes['DebitCardInformation']>>, ParentType, ContextType, QueryDebitCardInformationsArgs>,
  pricings?: Resolver<Array<Maybe<ResolversTypes['Pricing']>>, ParentType, ContextType, QueryPricingsArgs>,
  pictures?: Resolver<Array<Maybe<ResolversTypes['Picture']>>, ParentType, ContextType, QueryPicturesArgs>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>,
  neighbourhood?: Resolver<Maybe<ResolversTypes['Neighbourhood']>, ParentType, ContextType, RequireFields<QueryNeighbourhoodArgs, 'where'>>,
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<QueryCityArgs, 'where'>>,
  experience?: Resolver<Maybe<ResolversTypes['Experience']>, ParentType, ContextType, RequireFields<QueryExperienceArgs, 'where'>>,
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<QueryPaymentArgs, 'where'>>,
  paymentAccount?: Resolver<Maybe<ResolversTypes['PaymentAccount']>, ParentType, ContextType, RequireFields<QueryPaymentAccountArgs, 'where'>>,
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryMessageArgs, 'where'>>,
  notification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<QueryNotificationArgs, 'where'>>,
  restaurant?: Resolver<Maybe<ResolversTypes['Restaurant']>, ParentType, ContextType, RequireFields<QueryRestaurantArgs, 'where'>>,
  menuItem?: Resolver<Maybe<ResolversTypes['MenuItem']>, ParentType, ContextType, RequireFields<QueryMenuItemArgs, 'where'>>,
  paypalInformation?: Resolver<Maybe<ResolversTypes['PaypalInformation']>, ParentType, ContextType, RequireFields<QueryPaypalInformationArgs, 'where'>>,
  policies?: Resolver<Maybe<ResolversTypes['Policies']>, ParentType, ContextType, RequireFields<QueryPoliciesArgs, 'where'>>,
  creditCardInformation?: Resolver<Maybe<ResolversTypes['CreditCardInformation']>, ParentType, ContextType, RequireFields<QueryCreditCardInformationArgs, 'where'>>,
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QueryLocationArgs, 'where'>>,
  review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryReviewArgs, 'where'>>,
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'where'>>,
  experienceCategory?: Resolver<Maybe<ResolversTypes['ExperienceCategory']>, ParentType, ContextType, RequireFields<QueryExperienceCategoryArgs, 'where'>>,
  paytmInformation?: Resolver<Maybe<ResolversTypes['PaytmInformation']>, ParentType, ContextType, RequireFields<QueryPaytmInformationArgs, 'where'>>,
  debitCardInformation?: Resolver<Maybe<ResolversTypes['DebitCardInformation']>, ParentType, ContextType, RequireFields<QueryDebitCardInformationArgs, 'where'>>,
  pricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<QueryPricingArgs, 'where'>>,
  picture?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType, RequireFields<QueryPictureArgs, 'where'>>,
  usersConnection?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, QueryUsersConnectionArgs>,
  neighbourhoodsConnection?: Resolver<ResolversTypes['NeighbourhoodConnection'], ParentType, ContextType, QueryNeighbourhoodsConnectionArgs>,
  citiesConnection?: Resolver<ResolversTypes['CityConnection'], ParentType, ContextType, QueryCitiesConnectionArgs>,
  experiencesConnection?: Resolver<ResolversTypes['ExperienceConnection'], ParentType, ContextType, QueryExperiencesConnectionArgs>,
  paymentsConnection?: Resolver<ResolversTypes['PaymentConnection'], ParentType, ContextType, QueryPaymentsConnectionArgs>,
  paymentAccountsConnection?: Resolver<ResolversTypes['PaymentAccountConnection'], ParentType, ContextType, QueryPaymentAccountsConnectionArgs>,
  messagesConnection?: Resolver<ResolversTypes['MessageConnection'], ParentType, ContextType, QueryMessagesConnectionArgs>,
  notificationsConnection?: Resolver<ResolversTypes['NotificationConnection'], ParentType, ContextType, QueryNotificationsConnectionArgs>,
  restaurantsConnection?: Resolver<ResolversTypes['RestaurantConnection'], ParentType, ContextType, QueryRestaurantsConnectionArgs>,
  menuItemsConnection?: Resolver<ResolversTypes['MenuItemConnection'], ParentType, ContextType, QueryMenuItemsConnectionArgs>,
  paypalInformationsConnection?: Resolver<ResolversTypes['PaypalInformationConnection'], ParentType, ContextType, QueryPaypalInformationsConnectionArgs>,
  policiesesConnection?: Resolver<ResolversTypes['PoliciesConnection'], ParentType, ContextType, QueryPoliciesesConnectionArgs>,
  creditCardInformationsConnection?: Resolver<ResolversTypes['CreditCardInformationConnection'], ParentType, ContextType, QueryCreditCardInformationsConnectionArgs>,
  locationsConnection?: Resolver<ResolversTypes['LocationConnection'], ParentType, ContextType, QueryLocationsConnectionArgs>,
  reviewsConnection?: Resolver<ResolversTypes['ReviewConnection'], ParentType, ContextType, QueryReviewsConnectionArgs>,
  ordersConnection?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType, QueryOrdersConnectionArgs>,
  experienceCategoriesConnection?: Resolver<ResolversTypes['ExperienceCategoryConnection'], ParentType, ContextType, QueryExperienceCategoriesConnectionArgs>,
  paytmInformationsConnection?: Resolver<ResolversTypes['PaytmInformationConnection'], ParentType, ContextType, QueryPaytmInformationsConnectionArgs>,
  debitCardInformationsConnection?: Resolver<ResolversTypes['DebitCardInformationConnection'], ParentType, ContextType, QueryDebitCardInformationsConnectionArgs>,
  pricingsConnection?: Resolver<ResolversTypes['PricingConnection'], ParentType, ContextType, QueryPricingsConnectionArgs>,
  picturesConnection?: Resolver<ResolversTypes['PictureConnection'], ParentType, ContextType, QueryPicturesConnectionArgs>,
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>,
  topExperiences?: Resolver<Array<ResolversTypes['Experience']>, ParentType, ContextType>,
  topRestaurants?: Resolver<Array<ResolversTypes['Restaurant']>, ParentType, ContextType>,
  restaurantsInPriceRange?: Resolver<Array<ResolversTypes['Restaurant']>, ParentType, ContextType, RequireFields<QueryRestaurantsInPriceRangeArgs, 'min' | 'max'>>,
  topReservations?: Resolver<Array<ResolversTypes['Reservation']>, ParentType, ContextType>,
  featuredDestinations?: Resolver<Array<ResolversTypes['Neighbourhood']>, ParentType, ContextType>,
  experiencesByCity?: Resolver<Array<ResolversTypes['ExperiencesByCity']>, ParentType, ContextType, RequireFields<QueryExperiencesByCityArgs, 'cities'>>,
  viewer?: Resolver<Maybe<ResolversTypes['Viewer']>, ParentType, ContextType>,
  myLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>,
  test?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ReservationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reservation'] = ResolversParentTypes['Reservation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  avgPricePerPerson?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  pictures?: Resolver<Array<ResolversTypes['Picture']>, ParentType, ContextType>,
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>,
  isCurated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type RestaurantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Restaurant'] = ResolversParentTypes['Restaurant']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  maxGuests?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  numRatings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  avgRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, RestaurantReviewsArgs>,
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>,
  policies?: Resolver<Maybe<ResolversTypes['Policies']>, ParentType, ContextType>,
  menu?: Resolver<Array<ResolversTypes['MenuItem']>, ParentType, ContextType, RestaurantMenuArgs>,
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RestaurantOrdersArgs>,
  pictures?: Resolver<Maybe<Array<ResolversTypes['Picture']>>, ParentType, ContextType, RestaurantPicturesArgs>,
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  avgPricePerPerson?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  isCurated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type RestaurantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestaurantConnection'] = ResolversParentTypes['RestaurantConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['RestaurantEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateRestaurant'], ParentType, ContextType>,
};

export type RestaurantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestaurantEdge'] = ResolversParentTypes['RestaurantEdge']> = {
  node?: Resolver<ResolversTypes['Restaurant'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type RestaurantPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestaurantPreviousValues'] = ResolversParentTypes['RestaurantPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  maxGuests?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  numRatings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  avgRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  avgPricePerPerson?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  isCurated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type RestaurantSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestaurantSubscriptionPayload'] = ResolversParentTypes['RestaurantSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Restaurant']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['RestaurantPreviousValues']>, ParentType, ContextType>,
};

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  stars?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  accuracy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  location?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  checkIn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  cleanliness?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  communication?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>,
  experience?: Resolver<Maybe<ResolversTypes['Experience']>, ParentType, ContextType>,
};

export type ReviewConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewConnection'] = ResolversParentTypes['ReviewConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['ReviewEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateReview'], ParentType, ContextType>,
};

export type ReviewEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewEdge'] = ResolversParentTypes['ReviewEdge']> = {
  node?: Resolver<ResolversTypes['Review'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ReviewPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewPreviousValues'] = ResolversParentTypes['ReviewPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  stars?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  accuracy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  location?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  checkIn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  cleanliness?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  communication?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ReviewSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewSubscriptionPayload'] = ResolversParentTypes['ReviewSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['ReviewPreviousValues']>, ParentType, ContextType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  user?: SubscriptionResolver<Maybe<ResolversTypes['UserSubscriptionPayload']>, "user", ParentType, ContextType, SubscriptionUserArgs>,
  neighbourhood?: SubscriptionResolver<Maybe<ResolversTypes['NeighbourhoodSubscriptionPayload']>, "neighbourhood", ParentType, ContextType, SubscriptionNeighbourhoodArgs>,
  city?: SubscriptionResolver<Maybe<ResolversTypes['CitySubscriptionPayload']>, "city", ParentType, ContextType, SubscriptionCityArgs>,
  experience?: SubscriptionResolver<Maybe<ResolversTypes['ExperienceSubscriptionPayload']>, "experience", ParentType, ContextType, SubscriptionExperienceArgs>,
  payment?: SubscriptionResolver<Maybe<ResolversTypes['PaymentSubscriptionPayload']>, "payment", ParentType, ContextType, SubscriptionPaymentArgs>,
  paymentAccount?: SubscriptionResolver<Maybe<ResolversTypes['PaymentAccountSubscriptionPayload']>, "paymentAccount", ParentType, ContextType, SubscriptionPaymentAccountArgs>,
  message?: SubscriptionResolver<Maybe<ResolversTypes['MessageSubscriptionPayload']>, "message", ParentType, ContextType, SubscriptionMessageArgs>,
  notification?: SubscriptionResolver<Maybe<ResolversTypes['NotificationSubscriptionPayload']>, "notification", ParentType, ContextType, SubscriptionNotificationArgs>,
  restaurant?: SubscriptionResolver<Maybe<ResolversTypes['RestaurantSubscriptionPayload']>, "restaurant", ParentType, ContextType, SubscriptionRestaurantArgs>,
  menuItem?: SubscriptionResolver<Maybe<ResolversTypes['MenuItemSubscriptionPayload']>, "menuItem", ParentType, ContextType, SubscriptionMenuItemArgs>,
  paypalInformation?: SubscriptionResolver<Maybe<ResolversTypes['PaypalInformationSubscriptionPayload']>, "paypalInformation", ParentType, ContextType, SubscriptionPaypalInformationArgs>,
  policies?: SubscriptionResolver<Maybe<ResolversTypes['PoliciesSubscriptionPayload']>, "policies", ParentType, ContextType, SubscriptionPoliciesArgs>,
  creditCardInformation?: SubscriptionResolver<Maybe<ResolversTypes['CreditCardInformationSubscriptionPayload']>, "creditCardInformation", ParentType, ContextType, SubscriptionCreditCardInformationArgs>,
  location?: SubscriptionResolver<Maybe<ResolversTypes['LocationSubscriptionPayload']>, "location", ParentType, ContextType, SubscriptionLocationArgs>,
  review?: SubscriptionResolver<Maybe<ResolversTypes['ReviewSubscriptionPayload']>, "review", ParentType, ContextType, SubscriptionReviewArgs>,
  order?: SubscriptionResolver<Maybe<ResolversTypes['OrderSubscriptionPayload']>, "order", ParentType, ContextType, SubscriptionOrderArgs>,
  experienceCategory?: SubscriptionResolver<Maybe<ResolversTypes['ExperienceCategorySubscriptionPayload']>, "experienceCategory", ParentType, ContextType, SubscriptionExperienceCategoryArgs>,
  paytmInformation?: SubscriptionResolver<Maybe<ResolversTypes['PaytmInformationSubscriptionPayload']>, "paytmInformation", ParentType, ContextType, SubscriptionPaytmInformationArgs>,
  debitCardInformation?: SubscriptionResolver<Maybe<ResolversTypes['DebitCardInformationSubscriptionPayload']>, "debitCardInformation", ParentType, ContextType, SubscriptionDebitCardInformationArgs>,
  pricing?: SubscriptionResolver<Maybe<ResolversTypes['PricingSubscriptionPayload']>, "pricing", ParentType, ContextType, SubscriptionPricingArgs>,
  picture?: SubscriptionResolver<Maybe<ResolversTypes['PictureSubscriptionPayload']>, "picture", ParentType, ContextType, SubscriptionPictureArgs>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  responseRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  responseTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  ownedRestaurant?: Resolver<Maybe<Array<ResolversTypes['Restaurant']>>, ParentType, ContextType, UserOwnedRestaurantArgs>,
  location?: Resolver<Maybe<Array<ResolversTypes['Location']>>, ParentType, ContextType, UserLocationArgs>,
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType, UserOrdersArgs>,
  paymentAccount?: Resolver<Maybe<Array<ResolversTypes['PaymentAccount']>>, ParentType, ContextType, UserPaymentAccountArgs>,
  sentMessages?: Resolver<Maybe<Array<ResolversTypes['Message']>>, ParentType, ContextType, UserSentMessagesArgs>,
  receivedMessages?: Resolver<Maybe<Array<ResolversTypes['Message']>>, ParentType, ContextType, UserReceivedMessagesArgs>,
  notifications?: Resolver<Maybe<Array<ResolversTypes['Notification']>>, ParentType, ContextType, UserNotificationsArgs>,
  profilePicture?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType>,
  experiences?: Resolver<Maybe<Array<ResolversTypes['Experience']>>, ParentType, ContextType, UserExperiencesArgs>,
  accountType?: Resolver<Maybe<ResolversTypes['UserType']>, ParentType, ContextType>,
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ownedRestaurants?: Resolver<Maybe<Array<ResolversTypes['Restaurant']>>, ParentType, ContextType>,
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['UserEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateUser'], ParentType, ContextType>,
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type UserPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreviousValues'] = ResolversParentTypes['UserPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  responseRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  responseTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  accountType?: Resolver<Maybe<ResolversTypes['UserType']>, ParentType, ContextType>,
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type UserSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSubscriptionPayload'] = ResolversParentTypes['UserSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['UserPreviousValues']>, ParentType, ContextType>,
};

export type ViewerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']> = {
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  AggregateCity?: AggregateCityResolvers<ContextType>,
  AggregateCreditCardInformation?: AggregateCreditCardInformationResolvers<ContextType>,
  AggregateDebitCardInformation?: AggregateDebitCardInformationResolvers<ContextType>,
  AggregateExperience?: AggregateExperienceResolvers<ContextType>,
  AggregateExperienceCategory?: AggregateExperienceCategoryResolvers<ContextType>,
  AggregateLocation?: AggregateLocationResolvers<ContextType>,
  AggregateMenuItem?: AggregateMenuItemResolvers<ContextType>,
  AggregateMessage?: AggregateMessageResolvers<ContextType>,
  AggregateNeighbourhood?: AggregateNeighbourhoodResolvers<ContextType>,
  AggregateNotification?: AggregateNotificationResolvers<ContextType>,
  AggregateOrder?: AggregateOrderResolvers<ContextType>,
  AggregatePayment?: AggregatePaymentResolvers<ContextType>,
  AggregatePaymentAccount?: AggregatePaymentAccountResolvers<ContextType>,
  AggregatePaypalInformation?: AggregatePaypalInformationResolvers<ContextType>,
  AggregatePaytmInformation?: AggregatePaytmInformationResolvers<ContextType>,
  AggregatePicture?: AggregatePictureResolvers<ContextType>,
  AggregatePolicies?: AggregatePoliciesResolvers<ContextType>,
  AggregatePricing?: AggregatePricingResolvers<ContextType>,
  AggregateRestaurant?: AggregateRestaurantResolvers<ContextType>,
  AggregateReview?: AggregateReviewResolvers<ContextType>,
  AggregateUser?: AggregateUserResolvers<ContextType>,
  AuthPayload?: AuthPayloadResolvers<ContextType>,
  BatchPayload?: BatchPayloadResolvers<ContextType>,
  City?: CityResolvers<ContextType>,
  CityConnection?: CityConnectionResolvers<ContextType>,
  CityEdge?: CityEdgeResolvers<ContextType>,
  CityPreviousValues?: CityPreviousValuesResolvers<ContextType>,
  CitySubscriptionPayload?: CitySubscriptionPayloadResolvers<ContextType>,
  CreditCardInformation?: CreditCardInformationResolvers<ContextType>,
  CreditCardInformationConnection?: CreditCardInformationConnectionResolvers<ContextType>,
  CreditCardInformationEdge?: CreditCardInformationEdgeResolvers<ContextType>,
  CreditCardInformationPreviousValues?: CreditCardInformationPreviousValuesResolvers<ContextType>,
  CreditCardInformationSubscriptionPayload?: CreditCardInformationSubscriptionPayloadResolvers<ContextType>,
  DateTime?: GraphQLScalarType,
  DebitCardInformation?: DebitCardInformationResolvers<ContextType>,
  DebitCardInformationConnection?: DebitCardInformationConnectionResolvers<ContextType>,
  DebitCardInformationEdge?: DebitCardInformationEdgeResolvers<ContextType>,
  DebitCardInformationPreviousValues?: DebitCardInformationPreviousValuesResolvers<ContextType>,
  DebitCardInformationSubscriptionPayload?: DebitCardInformationSubscriptionPayloadResolvers<ContextType>,
  Experience?: ExperienceResolvers<ContextType>,
  ExperienceCategory?: ExperienceCategoryResolvers<ContextType>,
  ExperienceCategoryConnection?: ExperienceCategoryConnectionResolvers<ContextType>,
  ExperienceCategoryEdge?: ExperienceCategoryEdgeResolvers<ContextType>,
  ExperienceCategoryPreviousValues?: ExperienceCategoryPreviousValuesResolvers<ContextType>,
  ExperienceCategorySubscriptionPayload?: ExperienceCategorySubscriptionPayloadResolvers<ContextType>,
  ExperienceConnection?: ExperienceConnectionResolvers<ContextType>,
  ExperienceEdge?: ExperienceEdgeResolvers<ContextType>,
  ExperiencePreviousValues?: ExperiencePreviousValuesResolvers<ContextType>,
  ExperiencesByCity?: ExperiencesByCityResolvers<ContextType>,
  ExperienceSubscriptionPayload?: ExperienceSubscriptionPayloadResolvers<ContextType>,
  Location?: LocationResolvers<ContextType>,
  LocationConnection?: LocationConnectionResolvers<ContextType>,
  LocationEdge?: LocationEdgeResolvers<ContextType>,
  LocationPreviousValues?: LocationPreviousValuesResolvers<ContextType>,
  LocationSubscriptionPayload?: LocationSubscriptionPayloadResolvers<ContextType>,
  Long?: GraphQLScalarType,
  MenuItem?: MenuItemResolvers<ContextType>,
  MenuItemConnection?: MenuItemConnectionResolvers<ContextType>,
  MenuItemEdge?: MenuItemEdgeResolvers<ContextType>,
  MenuItemPreviousValues?: MenuItemPreviousValuesResolvers<ContextType>,
  MenuItemSubscriptionPayload?: MenuItemSubscriptionPayloadResolvers<ContextType>,
  Message?: MessageResolvers<ContextType>,
  MessageConnection?: MessageConnectionResolvers<ContextType>,
  MessageEdge?: MessageEdgeResolvers<ContextType>,
  MessagePreviousValues?: MessagePreviousValuesResolvers<ContextType>,
  MessageSubscriptionPayload?: MessageSubscriptionPayloadResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  MutationResult?: MutationResultResolvers<ContextType>,
  Neighbourhood?: NeighbourhoodResolvers<ContextType>,
  NeighbourhoodConnection?: NeighbourhoodConnectionResolvers<ContextType>,
  NeighbourhoodEdge?: NeighbourhoodEdgeResolvers<ContextType>,
  NeighbourhoodPreviousValues?: NeighbourhoodPreviousValuesResolvers<ContextType>,
  NeighbourhoodSubscriptionPayload?: NeighbourhoodSubscriptionPayloadResolvers<ContextType>,
  Node?: NodeResolvers,
  Notification?: NotificationResolvers<ContextType>,
  NotificationConnection?: NotificationConnectionResolvers<ContextType>,
  NotificationEdge?: NotificationEdgeResolvers<ContextType>,
  NotificationPreviousValues?: NotificationPreviousValuesResolvers<ContextType>,
  NotificationSubscriptionPayload?: NotificationSubscriptionPayloadResolvers<ContextType>,
  Order?: OrderResolvers<ContextType>,
  OrderConnection?: OrderConnectionResolvers<ContextType>,
  OrderEdge?: OrderEdgeResolvers<ContextType>,
  OrderPreviousValues?: OrderPreviousValuesResolvers<ContextType>,
  OrderSubscriptionPayload?: OrderSubscriptionPayloadResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  Payment?: PaymentResolvers<ContextType>,
  PaymentAccount?: PaymentAccountResolvers<ContextType>,
  PaymentAccountConnection?: PaymentAccountConnectionResolvers<ContextType>,
  PaymentAccountEdge?: PaymentAccountEdgeResolvers<ContextType>,
  PaymentAccountPreviousValues?: PaymentAccountPreviousValuesResolvers<ContextType>,
  PaymentAccountSubscriptionPayload?: PaymentAccountSubscriptionPayloadResolvers<ContextType>,
  PaymentConnection?: PaymentConnectionResolvers<ContextType>,
  PaymentEdge?: PaymentEdgeResolvers<ContextType>,
  PaymentPreviousValues?: PaymentPreviousValuesResolvers<ContextType>,
  PaymentSubscriptionPayload?: PaymentSubscriptionPayloadResolvers<ContextType>,
  PaypalInformation?: PaypalInformationResolvers<ContextType>,
  PaypalInformationConnection?: PaypalInformationConnectionResolvers<ContextType>,
  PaypalInformationEdge?: PaypalInformationEdgeResolvers<ContextType>,
  PaypalInformationPreviousValues?: PaypalInformationPreviousValuesResolvers<ContextType>,
  PaypalInformationSubscriptionPayload?: PaypalInformationSubscriptionPayloadResolvers<ContextType>,
  PaytmInformation?: PaytmInformationResolvers<ContextType>,
  PaytmInformationConnection?: PaytmInformationConnectionResolvers<ContextType>,
  PaytmInformationEdge?: PaytmInformationEdgeResolvers<ContextType>,
  PaytmInformationPreviousValues?: PaytmInformationPreviousValuesResolvers<ContextType>,
  PaytmInformationSubscriptionPayload?: PaytmInformationSubscriptionPayloadResolvers<ContextType>,
  Picture?: PictureResolvers<ContextType>,
  PictureConnection?: PictureConnectionResolvers<ContextType>,
  PictureEdge?: PictureEdgeResolvers<ContextType>,
  PicturePreviousValues?: PicturePreviousValuesResolvers<ContextType>,
  PictureSubscriptionPayload?: PictureSubscriptionPayloadResolvers<ContextType>,
  Policies?: PoliciesResolvers<ContextType>,
  PoliciesConnection?: PoliciesConnectionResolvers<ContextType>,
  PoliciesEdge?: PoliciesEdgeResolvers<ContextType>,
  PoliciesPreviousValues?: PoliciesPreviousValuesResolvers<ContextType>,
  PoliciesSubscriptionPayload?: PoliciesSubscriptionPayloadResolvers<ContextType>,
  Pricing?: PricingResolvers<ContextType>,
  PricingConnection?: PricingConnectionResolvers<ContextType>,
  PricingEdge?: PricingEdgeResolvers<ContextType>,
  PricingPreviousValues?: PricingPreviousValuesResolvers<ContextType>,
  PricingSubscriptionPayload?: PricingSubscriptionPayloadResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Reservation?: ReservationResolvers<ContextType>,
  Restaurant?: RestaurantResolvers<ContextType>,
  RestaurantConnection?: RestaurantConnectionResolvers<ContextType>,
  RestaurantEdge?: RestaurantEdgeResolvers<ContextType>,
  RestaurantPreviousValues?: RestaurantPreviousValuesResolvers<ContextType>,
  RestaurantSubscriptionPayload?: RestaurantSubscriptionPayloadResolvers<ContextType>,
  Review?: ReviewResolvers<ContextType>,
  ReviewConnection?: ReviewConnectionResolvers<ContextType>,
  ReviewEdge?: ReviewEdgeResolvers<ContextType>,
  ReviewPreviousValues?: ReviewPreviousValuesResolvers<ContextType>,
  ReviewSubscriptionPayload?: ReviewSubscriptionPayloadResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserConnection?: UserConnectionResolvers<ContextType>,
  UserEdge?: UserEdgeResolvers<ContextType>,
  UserPreviousValues?: UserPreviousValuesResolvers<ContextType>,
  UserSubscriptionPayload?: UserSubscriptionPayloadResolvers<ContextType>,
  Viewer?: ViewerResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
