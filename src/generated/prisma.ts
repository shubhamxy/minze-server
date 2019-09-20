import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    places: <T = Array<Place | null>>(args: { where?: PlaceWhereInput | null, orderBy?: PlaceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricings: <T = Array<Pricing | null>>(args: { where?: PricingWhereInput | null, orderBy?: PricingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    guestRequirementses: <T = Array<GuestRequirements | null>>(args: { where?: GuestRequirementsWhereInput | null, orderBy?: GuestRequirementsOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    policieses: <T = Array<Policies | null>>(args: { where?: PoliciesWhereInput | null, orderBy?: PoliciesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    viewses: <T = Array<Views | null>>(args: { where?: ViewsWhereInput | null, orderBy?: ViewsOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Array<Location | null>>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    neighbourhoods: <T = Array<Neighbourhood | null>>(args: { where?: NeighbourhoodWhereInput | null, orderBy?: NeighbourhoodOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cities: <T = Array<City | null>>(args: { where?: CityWhereInput | null, orderBy?: CityOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experiences: <T = Array<Experience | null>>(args: { where?: ExperienceWhereInput | null, orderBy?: ExperienceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experienceCategories: <T = Array<ExperienceCategory | null>>(args: { where?: ExperienceCategoryWhereInput | null, orderBy?: ExperienceCategoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    amenitieses: <T = Array<Amenities | null>>(args: { where?: AmenitiesWhereInput | null, orderBy?: AmenitiesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviews: <T = Array<Review | null>>(args: { where?: ReviewWhereInput | null, orderBy?: ReviewOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orders: <T = Array<Order | null>>(args: { where?: OrderWhereInput | null, orderBy?: OrderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    payments: <T = Array<Payment | null>>(args: { where?: PaymentWhereInput | null, orderBy?: PaymentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformations: <T = Array<PaypalInformation | null>>(args: { where?: PaypalInformationWhereInput | null, orderBy?: PaypalInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paytmInformations: <T = Array<PaytmInformation | null>>(args: { where?: PaytmInformationWhereInput | null, orderBy?: PaytmInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformations: <T = Array<CreditCardInformation | null>>(args: { where?: CreditCardInformationWhereInput | null, orderBy?: CreditCardInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    debitCardInformations: <T = Array<DebitCardInformation | null>>(args: { where?: DebitCardInformationWhereInput | null, orderBy?: DebitCardInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Array<Message | null>>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Array<Notification | null>>(args: { where?: NotificationWhereInput | null, orderBy?: NotificationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    restaurants: <T = Array<Restaurant | null>>(args: { where?: RestaurantWhereInput | null, orderBy?: RestaurantOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    houseRuleses: <T = Array<HouseRules | null>>(args: { where?: HouseRulesWhereInput | null, orderBy?: HouseRulesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccounts: <T = Array<PaymentAccount | null>>(args: { where?: PaymentAccountWhereInput | null, orderBy?: PaymentAccountOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pictures: <T = Array<Picture | null>>(args: { where?: PictureWhereInput | null, orderBy?: PictureOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    place: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pricing: <T = Pricing | null>(args: { where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    guestRequirements: <T = GuestRequirements | null>(args: { where: GuestRequirementsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    policies: <T = Policies | null>(args: { where: PoliciesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    views: <T = Views | null>(args: { where: ViewsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    neighbourhood: <T = Neighbourhood | null>(args: { where: NeighbourhoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    city: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    experience: <T = Experience | null>(args: { where: ExperienceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    experienceCategory: <T = ExperienceCategory | null>(args: { where: ExperienceCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    amenities: <T = Amenities | null>(args: { where: AmenitiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    review: <T = Review | null>(args: { where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    order: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    payment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paypalInformation: <T = PaypalInformation | null>(args: { where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paytmInformation: <T = PaytmInformation | null>(args: { where: PaytmInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    creditCardInformation: <T = CreditCardInformation | null>(args: { where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    debitCardInformation: <T = DebitCardInformation | null>(args: { where: DebitCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    restaurant: <T = Restaurant | null>(args: { where: RestaurantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    houseRules: <T = HouseRules | null>(args: { where: HouseRulesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paymentAccount: <T = PaymentAccount | null>(args: { where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    picture: <T = Picture | null>(args: { where: PictureWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placesConnection: <T = PlaceConnection>(args: { where?: PlaceWhereInput | null, orderBy?: PlaceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricingsConnection: <T = PricingConnection>(args: { where?: PricingWhereInput | null, orderBy?: PricingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    guestRequirementsesConnection: <T = GuestRequirementsConnection>(args: { where?: GuestRequirementsWhereInput | null, orderBy?: GuestRequirementsOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    policiesesConnection: <T = PoliciesConnection>(args: { where?: PoliciesWhereInput | null, orderBy?: PoliciesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    viewsesConnection: <T = ViewsConnection>(args: { where?: ViewsWhereInput | null, orderBy?: ViewsOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    neighbourhoodsConnection: <T = NeighbourhoodConnection>(args: { where?: NeighbourhoodWhereInput | null, orderBy?: NeighbourhoodOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    citiesConnection: <T = CityConnection>(args: { where?: CityWhereInput | null, orderBy?: CityOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experiencesConnection: <T = ExperienceConnection>(args: { where?: ExperienceWhereInput | null, orderBy?: ExperienceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experienceCategoriesConnection: <T = ExperienceCategoryConnection>(args: { where?: ExperienceCategoryWhereInput | null, orderBy?: ExperienceCategoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    amenitiesesConnection: <T = AmenitiesConnection>(args: { where?: AmenitiesWhereInput | null, orderBy?: AmenitiesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviewsConnection: <T = ReviewConnection>(args: { where?: ReviewWhereInput | null, orderBy?: ReviewOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ordersConnection: <T = OrderConnection>(args: { where?: OrderWhereInput | null, orderBy?: OrderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentsConnection: <T = PaymentConnection>(args: { where?: PaymentWhereInput | null, orderBy?: PaymentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformationsConnection: <T = PaypalInformationConnection>(args: { where?: PaypalInformationWhereInput | null, orderBy?: PaypalInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paytmInformationsConnection: <T = PaytmInformationConnection>(args: { where?: PaytmInformationWhereInput | null, orderBy?: PaytmInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformationsConnection: <T = CreditCardInformationConnection>(args: { where?: CreditCardInformationWhereInput | null, orderBy?: CreditCardInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    debitCardInformationsConnection: <T = DebitCardInformationConnection>(args: { where?: DebitCardInformationWhereInput | null, orderBy?: DebitCardInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput | null, orderBy?: NotificationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    restaurantsConnection: <T = RestaurantConnection>(args: { where?: RestaurantWhereInput | null, orderBy?: RestaurantOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    houseRulesesConnection: <T = HouseRulesConnection>(args: { where?: HouseRulesWhereInput | null, orderBy?: HouseRulesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccountsConnection: <T = PaymentAccountConnection>(args: { where?: PaymentAccountWhereInput | null, orderBy?: PaymentAccountOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    picturesConnection: <T = PictureConnection>(args: { where?: PictureWhereInput | null, orderBy?: PictureOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPlace: <T = Place>(args: { data: PlaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPricing: <T = Pricing>(args: { data: PricingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGuestRequirements: <T = GuestRequirements>(args: { data: GuestRequirementsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPolicies: <T = Policies>(args: { data: PoliciesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createViews: <T = Views>(args: { data: ViewsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNeighbourhood: <T = Neighbourhood>(args: { data: NeighbourhoodCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCity: <T = City>(args: { data: CityCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createExperience: <T = Experience>(args: { data: ExperienceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createExperienceCategory: <T = ExperienceCategory>(args: { data: ExperienceCategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAmenities: <T = Amenities>(args: { data: AmenitiesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createReview: <T = Review>(args: { data: ReviewCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrder: <T = Order>(args: { data: OrderCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPayment: <T = Payment>(args: { data: PaymentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaypalInformation: <T = PaypalInformation>(args: { data: PaypalInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaytmInformation: <T = PaytmInformation>(args: { data: PaytmInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCreditCardInformation: <T = CreditCardInformation>(args: { data: CreditCardInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDebitCardInformation: <T = DebitCardInformation>(args: { data: DebitCardInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRestaurant: <T = Restaurant>(args: { data: RestaurantCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createHouseRules: <T = HouseRules>(args: { data: HouseRulesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaymentAccount: <T = PaymentAccount>(args: { data: PaymentAccountCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPicture: <T = Picture>(args: { data: PictureCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePlace: <T = Place | null>(args: { data: PlaceUpdateInput, where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePricing: <T = Pricing | null>(args: { data: PricingUpdateInput, where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateGuestRequirements: <T = GuestRequirements | null>(args: { data: GuestRequirementsUpdateInput, where: GuestRequirementsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePolicies: <T = Policies | null>(args: { data: PoliciesUpdateInput, where: PoliciesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateViews: <T = Views | null>(args: { data: ViewsUpdateInput, where: ViewsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNeighbourhood: <T = Neighbourhood | null>(args: { data: NeighbourhoodUpdateInput, where: NeighbourhoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCity: <T = City | null>(args: { data: CityUpdateInput, where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateExperience: <T = Experience | null>(args: { data: ExperienceUpdateInput, where: ExperienceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateExperienceCategory: <T = ExperienceCategory | null>(args: { data: ExperienceCategoryUpdateInput, where: ExperienceCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAmenities: <T = Amenities | null>(args: { data: AmenitiesUpdateInput, where: AmenitiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateReview: <T = Review | null>(args: { data: ReviewUpdateInput, where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateOrder: <T = Order | null>(args: { data: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePayment: <T = Payment | null>(args: { data: PaymentUpdateInput, where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePaypalInformation: <T = PaypalInformation | null>(args: { data: PaypalInformationUpdateInput, where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePaytmInformation: <T = PaytmInformation | null>(args: { data: PaytmInformationUpdateInput, where: PaytmInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCreditCardInformation: <T = CreditCardInformation | null>(args: { data: CreditCardInformationUpdateInput, where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateDebitCardInformation: <T = DebitCardInformation | null>(args: { data: DebitCardInformationUpdateInput, where: DebitCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateRestaurant: <T = Restaurant | null>(args: { data: RestaurantUpdateInput, where: RestaurantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateHouseRules: <T = HouseRules | null>(args: { data: HouseRulesUpdateInput, where: HouseRulesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePaymentAccount: <T = PaymentAccount | null>(args: { data: PaymentAccountUpdateInput, where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePicture: <T = Picture | null>(args: { data: PictureUpdateInput, where: PictureWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePlace: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePricing: <T = Pricing | null>(args: { where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteGuestRequirements: <T = GuestRequirements | null>(args: { where: GuestRequirementsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePolicies: <T = Policies | null>(args: { where: PoliciesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteViews: <T = Views | null>(args: { where: ViewsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNeighbourhood: <T = Neighbourhood | null>(args: { where: NeighbourhoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCity: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteExperience: <T = Experience | null>(args: { where: ExperienceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteExperienceCategory: <T = ExperienceCategory | null>(args: { where: ExperienceCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAmenities: <T = Amenities | null>(args: { where: AmenitiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteReview: <T = Review | null>(args: { where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteOrder: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePayment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePaypalInformation: <T = PaypalInformation | null>(args: { where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePaytmInformation: <T = PaytmInformation | null>(args: { where: PaytmInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCreditCardInformation: <T = CreditCardInformation | null>(args: { where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteDebitCardInformation: <T = DebitCardInformation | null>(args: { where: DebitCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRestaurant: <T = Restaurant | null>(args: { where: RestaurantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteHouseRules: <T = HouseRules | null>(args: { where: HouseRulesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePaymentAccount: <T = PaymentAccount | null>(args: { where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePicture: <T = Picture | null>(args: { where: PictureWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPlace: <T = Place>(args: { where: PlaceWhereUniqueInput, create: PlaceCreateInput, update: PlaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPricing: <T = Pricing>(args: { where: PricingWhereUniqueInput, create: PricingCreateInput, update: PricingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGuestRequirements: <T = GuestRequirements>(args: { where: GuestRequirementsWhereUniqueInput, create: GuestRequirementsCreateInput, update: GuestRequirementsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPolicies: <T = Policies>(args: { where: PoliciesWhereUniqueInput, create: PoliciesCreateInput, update: PoliciesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertViews: <T = Views>(args: { where: ViewsWhereUniqueInput, create: ViewsCreateInput, update: ViewsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNeighbourhood: <T = Neighbourhood>(args: { where: NeighbourhoodWhereUniqueInput, create: NeighbourhoodCreateInput, update: NeighbourhoodUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCity: <T = City>(args: { where: CityWhereUniqueInput, create: CityCreateInput, update: CityUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertExperience: <T = Experience>(args: { where: ExperienceWhereUniqueInput, create: ExperienceCreateInput, update: ExperienceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertExperienceCategory: <T = ExperienceCategory>(args: { where: ExperienceCategoryWhereUniqueInput, create: ExperienceCategoryCreateInput, update: ExperienceCategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAmenities: <T = Amenities>(args: { where: AmenitiesWhereUniqueInput, create: AmenitiesCreateInput, update: AmenitiesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertReview: <T = Review>(args: { where: ReviewWhereUniqueInput, create: ReviewCreateInput, update: ReviewUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrder: <T = Order>(args: { where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPayment: <T = Payment>(args: { where: PaymentWhereUniqueInput, create: PaymentCreateInput, update: PaymentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaypalInformation: <T = PaypalInformation>(args: { where: PaypalInformationWhereUniqueInput, create: PaypalInformationCreateInput, update: PaypalInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaytmInformation: <T = PaytmInformation>(args: { where: PaytmInformationWhereUniqueInput, create: PaytmInformationCreateInput, update: PaytmInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCreditCardInformation: <T = CreditCardInformation>(args: { where: CreditCardInformationWhereUniqueInput, create: CreditCardInformationCreateInput, update: CreditCardInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDebitCardInformation: <T = DebitCardInformation>(args: { where: DebitCardInformationWhereUniqueInput, create: DebitCardInformationCreateInput, update: DebitCardInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRestaurant: <T = Restaurant>(args: { where: RestaurantWhereUniqueInput, create: RestaurantCreateInput, update: RestaurantUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertHouseRules: <T = HouseRules>(args: { where: HouseRulesWhereUniqueInput, create: HouseRulesCreateInput, update: HouseRulesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaymentAccount: <T = PaymentAccount>(args: { where: PaymentAccountWhereUniqueInput, create: PaymentAccountCreateInput, update: PaymentAccountUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPicture: <T = Picture>(args: { where: PictureWhereUniqueInput, create: PictureCreateInput, update: PictureUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPlaces: <T = BatchPayload>(args: { data: PlaceUpdateManyMutationInput, where?: PlaceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPricings: <T = BatchPayload>(args: { data: PricingUpdateManyMutationInput, where?: PricingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGuestRequirementses: <T = BatchPayload>(args: { data: GuestRequirementsUpdateManyMutationInput, where?: GuestRequirementsWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPolicieses: <T = BatchPayload>(args: { data: PoliciesUpdateManyMutationInput, where?: PoliciesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyViewses: <T = BatchPayload>(args: { data: ViewsUpdateManyMutationInput, where?: ViewsWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateManyMutationInput, where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNeighbourhoods: <T = BatchPayload>(args: { data: NeighbourhoodUpdateManyMutationInput, where?: NeighbourhoodWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCities: <T = BatchPayload>(args: { data: CityUpdateManyMutationInput, where?: CityWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyExperiences: <T = BatchPayload>(args: { data: ExperienceUpdateManyMutationInput, where?: ExperienceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyExperienceCategories: <T = BatchPayload>(args: { data: ExperienceCategoryUpdateManyMutationInput, where?: ExperienceCategoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAmenitieses: <T = BatchPayload>(args: { data: AmenitiesUpdateManyMutationInput, where?: AmenitiesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyReviews: <T = BatchPayload>(args: { data: ReviewUpdateManyMutationInput, where?: ReviewWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrders: <T = BatchPayload>(args: { data: OrderUpdateManyMutationInput, where?: OrderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPayments: <T = BatchPayload>(args: { data: PaymentUpdateManyMutationInput, where?: PaymentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaypalInformations: <T = BatchPayload>(args: { data: PaypalInformationUpdateManyMutationInput, where?: PaypalInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaytmInformations: <T = BatchPayload>(args: { data: PaytmInformationUpdateManyMutationInput, where?: PaytmInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCreditCardInformations: <T = BatchPayload>(args: { data: CreditCardInformationUpdateManyMutationInput, where?: CreditCardInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDebitCardInformations: <T = BatchPayload>(args: { data: DebitCardInformationUpdateManyMutationInput, where?: DebitCardInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateManyMutationInput, where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateManyMutationInput, where?: NotificationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRestaurants: <T = BatchPayload>(args: { data: RestaurantUpdateManyMutationInput, where?: RestaurantWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyHouseRuleses: <T = BatchPayload>(args: { data: HouseRulesUpdateManyMutationInput, where?: HouseRulesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaymentAccounts: <T = BatchPayload>(args: { data: PaymentAccountUpdateManyMutationInput, where?: PaymentAccountWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPictures: <T = BatchPayload>(args: { data: PictureUpdateManyMutationInput, where?: PictureWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPlaces: <T = BatchPayload>(args: { where?: PlaceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPricings: <T = BatchPayload>(args: { where?: PricingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGuestRequirementses: <T = BatchPayload>(args: { where?: GuestRequirementsWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPolicieses: <T = BatchPayload>(args: { where?: PoliciesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyViewses: <T = BatchPayload>(args: { where?: ViewsWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNeighbourhoods: <T = BatchPayload>(args: { where?: NeighbourhoodWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCities: <T = BatchPayload>(args: { where?: CityWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyExperiences: <T = BatchPayload>(args: { where?: ExperienceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyExperienceCategories: <T = BatchPayload>(args: { where?: ExperienceCategoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAmenitieses: <T = BatchPayload>(args: { where?: AmenitiesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyReviews: <T = BatchPayload>(args: { where?: ReviewWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrders: <T = BatchPayload>(args: { where?: OrderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPayments: <T = BatchPayload>(args: { where?: PaymentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaypalInformations: <T = BatchPayload>(args: { where?: PaypalInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaytmInformations: <T = BatchPayload>(args: { where?: PaytmInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCreditCardInformations: <T = BatchPayload>(args: { where?: CreditCardInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDebitCardInformations: <T = BatchPayload>(args: { where?: DebitCardInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRestaurants: <T = BatchPayload>(args: { where?: RestaurantWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyHouseRuleses: <T = BatchPayload>(args: { where?: HouseRulesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaymentAccounts: <T = BatchPayload>(args: { where?: PaymentAccountWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPictures: <T = BatchPayload>(args: { where?: PictureWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    place: <T = PlaceSubscriptionPayload | null>(args: { where?: PlaceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pricing: <T = PricingSubscriptionPayload | null>(args: { where?: PricingSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    guestRequirements: <T = GuestRequirementsSubscriptionPayload | null>(args: { where?: GuestRequirementsSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    policies: <T = PoliciesSubscriptionPayload | null>(args: { where?: PoliciesSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    views: <T = ViewsSubscriptionPayload | null>(args: { where?: ViewsSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    neighbourhood: <T = NeighbourhoodSubscriptionPayload | null>(args: { where?: NeighbourhoodSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    city: <T = CitySubscriptionPayload | null>(args: { where?: CitySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    experience: <T = ExperienceSubscriptionPayload | null>(args: { where?: ExperienceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    experienceCategory: <T = ExperienceCategorySubscriptionPayload | null>(args: { where?: ExperienceCategorySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    amenities: <T = AmenitiesSubscriptionPayload | null>(args: { where?: AmenitiesSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    review: <T = ReviewSubscriptionPayload | null>(args: { where?: ReviewSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    order: <T = OrderSubscriptionPayload | null>(args: { where?: OrderSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    payment: <T = PaymentSubscriptionPayload | null>(args: { where?: PaymentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    paypalInformation: <T = PaypalInformationSubscriptionPayload | null>(args: { where?: PaypalInformationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    paytmInformation: <T = PaytmInformationSubscriptionPayload | null>(args: { where?: PaytmInformationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    creditCardInformation: <T = CreditCardInformationSubscriptionPayload | null>(args: { where?: CreditCardInformationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    debitCardInformation: <T = DebitCardInformationSubscriptionPayload | null>(args: { where?: DebitCardInformationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    restaurant: <T = RestaurantSubscriptionPayload | null>(args: { where?: RestaurantSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    houseRules: <T = HouseRulesSubscriptionPayload | null>(args: { where?: HouseRulesSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    paymentAccount: <T = PaymentAccountSubscriptionPayload | null>(args: { where?: PaymentAccountSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    picture: <T = PictureSubscriptionPayload | null>(args: { where?: PictureSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Place: (where?: PlaceWhereInput) => Promise<boolean>
  Pricing: (where?: PricingWhereInput) => Promise<boolean>
  GuestRequirements: (where?: GuestRequirementsWhereInput) => Promise<boolean>
  Policies: (where?: PoliciesWhereInput) => Promise<boolean>
  Views: (where?: ViewsWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Neighbourhood: (where?: NeighbourhoodWhereInput) => Promise<boolean>
  City: (where?: CityWhereInput) => Promise<boolean>
  Experience: (where?: ExperienceWhereInput) => Promise<boolean>
  ExperienceCategory: (where?: ExperienceCategoryWhereInput) => Promise<boolean>
  Amenities: (where?: AmenitiesWhereInput) => Promise<boolean>
  Review: (where?: ReviewWhereInput) => Promise<boolean>
  Order: (where?: OrderWhereInput) => Promise<boolean>
  Payment: (where?: PaymentWhereInput) => Promise<boolean>
  PaypalInformation: (where?: PaypalInformationWhereInput) => Promise<boolean>
  PaytmInformation: (where?: PaytmInformationWhereInput) => Promise<boolean>
  CreditCardInformation: (where?: CreditCardInformationWhereInput) => Promise<boolean>
  DebitCardInformation: (where?: DebitCardInformationWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Restaurant: (where?: RestaurantWhereInput) => Promise<boolean>
  HouseRules: (where?: HouseRulesWhereInput) => Promise<boolean>
  PaymentAccount: (where?: PaymentAccountWhereInput) => Promise<boolean>
  Picture: (where?: PictureWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAmenities {
  count: Int!
}

type AggregateCity {
  count: Int!
}

type AggregateCreditCardInformation {
  count: Int!
}

type AggregateDebitCardInformation {
  count: Int!
}

type AggregateExperience {
  count: Int!
}

type AggregateExperienceCategory {
  count: Int!
}

type AggregateGuestRequirements {
  count: Int!
}

type AggregateHouseRules {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateNeighbourhood {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregatePayment {
  count: Int!
}

type AggregatePaymentAccount {
  count: Int!
}

type AggregatePaypalInformation {
  count: Int!
}

type AggregatePaytmInformation {
  count: Int!
}

type AggregatePicture {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type AggregatePolicies {
  count: Int!
}

type AggregatePricing {
  count: Int!
}

type AggregateRestaurant {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateViews {
  count: Int!
}

type Amenities implements Node {
  id: ID!
  place: Place!
  elevator: Boolean!
  petsAllowed: Boolean!
  internet: Boolean!
  kitchen: Boolean!
  wirelessInternet: Boolean!
  familyKidFriendly: Boolean!
  freeParkingOnPremises: Boolean!
  hotTub: Boolean!
  pool: Boolean!
  smokingAllowed: Boolean!
  wheelchairAccessible: Boolean!
  breakfast: Boolean!
  cableTv: Boolean!
  suitableForEvents: Boolean!
  dryer: Boolean!
  washer: Boolean!
  indoorFireplace: Boolean!
  tv: Boolean!
  heating: Boolean!
  hangers: Boolean!
  iron: Boolean!
  hairDryer: Boolean!
  doorman: Boolean!
  paidParkingOffPremises: Boolean!
  freeParkingOnStreet: Boolean!
  gym: Boolean!
  airConditioning: Boolean!
  shampoo: Boolean!
  essentials: Boolean!
  laptopFriendlyWorkspace: Boolean!
  privateEntrance: Boolean!
  buzzerWirelessIntercom: Boolean!
  babyBath: Boolean!
  babyMonitor: Boolean!
  babysitterRecommendations: Boolean!
  bathtub: Boolean!
  changingTable: Boolean!
  childrensBooksAndToys: Boolean!
  childrensDinnerware: Boolean!
  crib: Boolean!
}

"""A connection to a list of items."""
type AmenitiesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AmenitiesEdge]!
  aggregate: AggregateAmenities!
}

input AmenitiesCreateInput {
  id: ID
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
  place: PlaceCreateOneWithoutAmenitiesInput!
}

input AmenitiesCreateOneWithoutPlaceInput {
  create: AmenitiesCreateWithoutPlaceInput
  connect: AmenitiesWhereUniqueInput
}

input AmenitiesCreateWithoutPlaceInput {
  id: ID
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

"""An edge in a connection."""
type AmenitiesEdge {
  """The item at the end of the edge."""
  node: Amenities!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AmenitiesOrderByInput {
  id_ASC
  id_DESC
  elevator_ASC
  elevator_DESC
  petsAllowed_ASC
  petsAllowed_DESC
  internet_ASC
  internet_DESC
  kitchen_ASC
  kitchen_DESC
  wirelessInternet_ASC
  wirelessInternet_DESC
  familyKidFriendly_ASC
  familyKidFriendly_DESC
  freeParkingOnPremises_ASC
  freeParkingOnPremises_DESC
  hotTub_ASC
  hotTub_DESC
  pool_ASC
  pool_DESC
  smokingAllowed_ASC
  smokingAllowed_DESC
  wheelchairAccessible_ASC
  wheelchairAccessible_DESC
  breakfast_ASC
  breakfast_DESC
  cableTv_ASC
  cableTv_DESC
  suitableForEvents_ASC
  suitableForEvents_DESC
  dryer_ASC
  dryer_DESC
  washer_ASC
  washer_DESC
  indoorFireplace_ASC
  indoorFireplace_DESC
  tv_ASC
  tv_DESC
  heating_ASC
  heating_DESC
  hangers_ASC
  hangers_DESC
  iron_ASC
  iron_DESC
  hairDryer_ASC
  hairDryer_DESC
  doorman_ASC
  doorman_DESC
  paidParkingOffPremises_ASC
  paidParkingOffPremises_DESC
  freeParkingOnStreet_ASC
  freeParkingOnStreet_DESC
  gym_ASC
  gym_DESC
  airConditioning_ASC
  airConditioning_DESC
  shampoo_ASC
  shampoo_DESC
  essentials_ASC
  essentials_DESC
  laptopFriendlyWorkspace_ASC
  laptopFriendlyWorkspace_DESC
  privateEntrance_ASC
  privateEntrance_DESC
  buzzerWirelessIntercom_ASC
  buzzerWirelessIntercom_DESC
  babyBath_ASC
  babyBath_DESC
  babyMonitor_ASC
  babyMonitor_DESC
  babysitterRecommendations_ASC
  babysitterRecommendations_DESC
  bathtub_ASC
  bathtub_DESC
  changingTable_ASC
  changingTable_DESC
  childrensBooksAndToys_ASC
  childrensBooksAndToys_DESC
  childrensDinnerware_ASC
  childrensDinnerware_DESC
  crib_ASC
  crib_DESC
}

type AmenitiesPreviousValues {
  id: ID!
  elevator: Boolean!
  petsAllowed: Boolean!
  internet: Boolean!
  kitchen: Boolean!
  wirelessInternet: Boolean!
  familyKidFriendly: Boolean!
  freeParkingOnPremises: Boolean!
  hotTub: Boolean!
  pool: Boolean!
  smokingAllowed: Boolean!
  wheelchairAccessible: Boolean!
  breakfast: Boolean!
  cableTv: Boolean!
  suitableForEvents: Boolean!
  dryer: Boolean!
  washer: Boolean!
  indoorFireplace: Boolean!
  tv: Boolean!
  heating: Boolean!
  hangers: Boolean!
  iron: Boolean!
  hairDryer: Boolean!
  doorman: Boolean!
  paidParkingOffPremises: Boolean!
  freeParkingOnStreet: Boolean!
  gym: Boolean!
  airConditioning: Boolean!
  shampoo: Boolean!
  essentials: Boolean!
  laptopFriendlyWorkspace: Boolean!
  privateEntrance: Boolean!
  buzzerWirelessIntercom: Boolean!
  babyBath: Boolean!
  babyMonitor: Boolean!
  babysitterRecommendations: Boolean!
  bathtub: Boolean!
  changingTable: Boolean!
  childrensBooksAndToys: Boolean!
  childrensDinnerware: Boolean!
  crib: Boolean!
}

type AmenitiesSubscriptionPayload {
  mutation: MutationType!
  node: Amenities
  updatedFields: [String!]
  previousValues: AmenitiesPreviousValues
}

input AmenitiesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AmenitiesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AmenitiesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AmenitiesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AmenitiesWhereInput
}

input AmenitiesUpdateInput {
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
  place: PlaceUpdateOneRequiredWithoutAmenitiesInput
}

input AmenitiesUpdateManyMutationInput {
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

input AmenitiesUpdateOneRequiredWithoutPlaceInput {
  create: AmenitiesCreateWithoutPlaceInput
  connect: AmenitiesWhereUniqueInput
  update: AmenitiesUpdateWithoutPlaceDataInput
  upsert: AmenitiesUpsertWithoutPlaceInput
}

input AmenitiesUpdateWithoutPlaceDataInput {
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

input AmenitiesUpsertWithoutPlaceInput {
  update: AmenitiesUpdateWithoutPlaceDataInput!
  create: AmenitiesCreateWithoutPlaceInput!
}

input AmenitiesWhereInput {
  """Logical AND on all given filters."""
  AND: [AmenitiesWhereInput!]

  """Logical OR on all given filters."""
  OR: [AmenitiesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AmenitiesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  elevator: Boolean

  """All values that are not equal to given value."""
  elevator_not: Boolean
  petsAllowed: Boolean

  """All values that are not equal to given value."""
  petsAllowed_not: Boolean
  internet: Boolean

  """All values that are not equal to given value."""
  internet_not: Boolean
  kitchen: Boolean

  """All values that are not equal to given value."""
  kitchen_not: Boolean
  wirelessInternet: Boolean

  """All values that are not equal to given value."""
  wirelessInternet_not: Boolean
  familyKidFriendly: Boolean

  """All values that are not equal to given value."""
  familyKidFriendly_not: Boolean
  freeParkingOnPremises: Boolean

  """All values that are not equal to given value."""
  freeParkingOnPremises_not: Boolean
  hotTub: Boolean

  """All values that are not equal to given value."""
  hotTub_not: Boolean
  pool: Boolean

  """All values that are not equal to given value."""
  pool_not: Boolean
  smokingAllowed: Boolean

  """All values that are not equal to given value."""
  smokingAllowed_not: Boolean
  wheelchairAccessible: Boolean

  """All values that are not equal to given value."""
  wheelchairAccessible_not: Boolean
  breakfast: Boolean

  """All values that are not equal to given value."""
  breakfast_not: Boolean
  cableTv: Boolean

  """All values that are not equal to given value."""
  cableTv_not: Boolean
  suitableForEvents: Boolean

  """All values that are not equal to given value."""
  suitableForEvents_not: Boolean
  dryer: Boolean

  """All values that are not equal to given value."""
  dryer_not: Boolean
  washer: Boolean

  """All values that are not equal to given value."""
  washer_not: Boolean
  indoorFireplace: Boolean

  """All values that are not equal to given value."""
  indoorFireplace_not: Boolean
  tv: Boolean

  """All values that are not equal to given value."""
  tv_not: Boolean
  heating: Boolean

  """All values that are not equal to given value."""
  heating_not: Boolean
  hangers: Boolean

  """All values that are not equal to given value."""
  hangers_not: Boolean
  iron: Boolean

  """All values that are not equal to given value."""
  iron_not: Boolean
  hairDryer: Boolean

  """All values that are not equal to given value."""
  hairDryer_not: Boolean
  doorman: Boolean

  """All values that are not equal to given value."""
  doorman_not: Boolean
  paidParkingOffPremises: Boolean

  """All values that are not equal to given value."""
  paidParkingOffPremises_not: Boolean
  freeParkingOnStreet: Boolean

  """All values that are not equal to given value."""
  freeParkingOnStreet_not: Boolean
  gym: Boolean

  """All values that are not equal to given value."""
  gym_not: Boolean
  airConditioning: Boolean

  """All values that are not equal to given value."""
  airConditioning_not: Boolean
  shampoo: Boolean

  """All values that are not equal to given value."""
  shampoo_not: Boolean
  essentials: Boolean

  """All values that are not equal to given value."""
  essentials_not: Boolean
  laptopFriendlyWorkspace: Boolean

  """All values that are not equal to given value."""
  laptopFriendlyWorkspace_not: Boolean
  privateEntrance: Boolean

  """All values that are not equal to given value."""
  privateEntrance_not: Boolean
  buzzerWirelessIntercom: Boolean

  """All values that are not equal to given value."""
  buzzerWirelessIntercom_not: Boolean
  babyBath: Boolean

  """All values that are not equal to given value."""
  babyBath_not: Boolean
  babyMonitor: Boolean

  """All values that are not equal to given value."""
  babyMonitor_not: Boolean
  babysitterRecommendations: Boolean

  """All values that are not equal to given value."""
  babysitterRecommendations_not: Boolean
  bathtub: Boolean

  """All values that are not equal to given value."""
  bathtub_not: Boolean
  changingTable: Boolean

  """All values that are not equal to given value."""
  changingTable_not: Boolean
  childrensBooksAndToys: Boolean

  """All values that are not equal to given value."""
  childrensBooksAndToys_not: Boolean
  childrensDinnerware: Boolean

  """All values that are not equal to given value."""
  childrensDinnerware_not: Boolean
  crib: Boolean

  """All values that are not equal to given value."""
  crib_not: Boolean
  place: PlaceWhereInput
}

input AmenitiesWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type City implements Node {
  id: ID!
  name: String!
  neighbourhoods(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Neighbourhood!]
}

"""A connection to a list of items."""
type CityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  id: ID
  name: String!
  neighbourhoods: NeighbourhoodCreateManyWithoutCityInput
}

input CityCreateOneWithoutNeighbourhoodsInput {
  create: CityCreateWithoutNeighbourhoodsInput
  connect: CityWhereUniqueInput
}

input CityCreateWithoutNeighbourhoodsInput {
  id: ID
  name: String!
}

"""An edge in a connection."""
type CityEdge {
  """The item at the end of the edge."""
  node: City!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type CityPreviousValues {
  id: ID!
  name: String!
}

type CitySubscriptionPayload {
  mutation: MutationType!
  node: City
  updatedFields: [String!]
  previousValues: CityPreviousValues
}

input CitySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CitySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CitySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CitySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CityWhereInput
}

input CityUpdateInput {
  name: String
  neighbourhoods: NeighbourhoodUpdateManyWithoutCityInput
}

input CityUpdateManyMutationInput {
  name: String
}

input CityUpdateOneRequiredWithoutNeighbourhoodsInput {
  create: CityCreateWithoutNeighbourhoodsInput
  connect: CityWhereUniqueInput
  update: CityUpdateWithoutNeighbourhoodsDataInput
  upsert: CityUpsertWithoutNeighbourhoodsInput
}

input CityUpdateWithoutNeighbourhoodsDataInput {
  name: String
}

input CityUpsertWithoutNeighbourhoodsInput {
  update: CityUpdateWithoutNeighbourhoodsDataInput!
  create: CityCreateWithoutNeighbourhoodsInput!
}

input CityWhereInput {
  """Logical AND on all given filters."""
  AND: [CityWhereInput!]

  """Logical OR on all given filters."""
  OR: [CityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CityWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  neighbourhoods_every: NeighbourhoodWhereInput
  neighbourhoods_some: NeighbourhoodWhereInput
  neighbourhoods_none: NeighbourhoodWhereInput
}

input CityWhereUniqueInput {
  id: ID
}

type CreditCardInformation implements Node {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount: PaymentAccount
}

"""A connection to a list of items."""
type CreditCardInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CreditCardInformationEdge]!
  aggregate: AggregateCreditCardInformation!
}

input CreditCardInformationCreateInput {
  id: ID
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount: PaymentAccountCreateOneWithoutCreditcardInput
}

input CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  connect: CreditCardInformationWhereUniqueInput
}

input CreditCardInformationCreateWithoutPaymentAccountInput {
  id: ID
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

"""An edge in a connection."""
type CreditCardInformationEdge {
  """The item at the end of the edge."""
  node: CreditCardInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CreditCardInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  cardNumber_ASC
  cardNumber_DESC
  expiresOnMonth_ASC
  expiresOnMonth_DESC
  expiresOnYear_ASC
  expiresOnYear_DESC
  securityCode_ASC
  securityCode_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  postalCode_ASC
  postalCode_DESC
  country_ASC
  country_DESC
}

type CreditCardInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

type CreditCardInformationSubscriptionPayload {
  mutation: MutationType!
  node: CreditCardInformation
  updatedFields: [String!]
  previousValues: CreditCardInformationPreviousValues
}

input CreditCardInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CreditCardInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CreditCardInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CreditCardInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CreditCardInformationWhereInput
}

input CreditCardInformationUpdateInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount: PaymentAccountUpdateOneWithoutCreditcardInput
}

input CreditCardInformationUpdateManyMutationInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

input CreditCardInformationUpdateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  connect: CreditCardInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  upsert: CreditCardInformationUpsertWithoutPaymentAccountInput
}

input CreditCardInformationUpdateWithoutPaymentAccountDataInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

input CreditCardInformationUpsertWithoutPaymentAccountInput {
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput!
  create: CreditCardInformationCreateWithoutPaymentAccountInput!
}

input CreditCardInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [CreditCardInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [CreditCardInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CreditCardInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  cardNumber: String

  """All values that are not equal to given value."""
  cardNumber_not: String

  """All values that are contained in given list."""
  cardNumber_in: [String!]

  """All values that are not contained in given list."""
  cardNumber_not_in: [String!]

  """All values less than the given value."""
  cardNumber_lt: String

  """All values less than or equal the given value."""
  cardNumber_lte: String

  """All values greater than the given value."""
  cardNumber_gt: String

  """All values greater than or equal the given value."""
  cardNumber_gte: String

  """All values containing the given string."""
  cardNumber_contains: String

  """All values not containing the given string."""
  cardNumber_not_contains: String

  """All values starting with the given string."""
  cardNumber_starts_with: String

  """All values not starting with the given string."""
  cardNumber_not_starts_with: String

  """All values ending with the given string."""
  cardNumber_ends_with: String

  """All values not ending with the given string."""
  cardNumber_not_ends_with: String
  expiresOnMonth: Int

  """All values that are not equal to given value."""
  expiresOnMonth_not: Int

  """All values that are contained in given list."""
  expiresOnMonth_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnMonth_not_in: [Int!]

  """All values less than the given value."""
  expiresOnMonth_lt: Int

  """All values less than or equal the given value."""
  expiresOnMonth_lte: Int

  """All values greater than the given value."""
  expiresOnMonth_gt: Int

  """All values greater than or equal the given value."""
  expiresOnMonth_gte: Int
  expiresOnYear: Int

  """All values that are not equal to given value."""
  expiresOnYear_not: Int

  """All values that are contained in given list."""
  expiresOnYear_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnYear_not_in: [Int!]

  """All values less than the given value."""
  expiresOnYear_lt: Int

  """All values less than or equal the given value."""
  expiresOnYear_lte: Int

  """All values greater than the given value."""
  expiresOnYear_gt: Int

  """All values greater than or equal the given value."""
  expiresOnYear_gte: Int
  securityCode: String

  """All values that are not equal to given value."""
  securityCode_not: String

  """All values that are contained in given list."""
  securityCode_in: [String!]

  """All values that are not contained in given list."""
  securityCode_not_in: [String!]

  """All values less than the given value."""
  securityCode_lt: String

  """All values less than or equal the given value."""
  securityCode_lte: String

  """All values greater than the given value."""
  securityCode_gt: String

  """All values greater than or equal the given value."""
  securityCode_gte: String

  """All values containing the given string."""
  securityCode_contains: String

  """All values not containing the given string."""
  securityCode_not_contains: String

  """All values starting with the given string."""
  securityCode_starts_with: String

  """All values not starting with the given string."""
  securityCode_not_starts_with: String

  """All values ending with the given string."""
  securityCode_ends_with: String

  """All values not ending with the given string."""
  securityCode_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  postalCode: String

  """All values that are not equal to given value."""
  postalCode_not: String

  """All values that are contained in given list."""
  postalCode_in: [String!]

  """All values that are not contained in given list."""
  postalCode_not_in: [String!]

  """All values less than the given value."""
  postalCode_lt: String

  """All values less than or equal the given value."""
  postalCode_lte: String

  """All values greater than the given value."""
  postalCode_gt: String

  """All values greater than or equal the given value."""
  postalCode_gte: String

  """All values containing the given string."""
  postalCode_contains: String

  """All values not containing the given string."""
  postalCode_not_contains: String

  """All values starting with the given string."""
  postalCode_starts_with: String

  """All values not starting with the given string."""
  postalCode_not_starts_with: String

  """All values ending with the given string."""
  postalCode_ends_with: String

  """All values not ending with the given string."""
  postalCode_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input CreditCardInformationWhereUniqueInput {
  id: ID
}

enum CURRENCY {
  CAD
  INR
  CHF
  EUR
  JPY
  USD
  ZAR
}

scalar DateTime

type DebitCardInformation implements Node {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount: PaymentAccount
}

"""A connection to a list of items."""
type DebitCardInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DebitCardInformationEdge]!
  aggregate: AggregateDebitCardInformation!
}

input DebitCardInformationCreateInput {
  id: ID
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount: PaymentAccountCreateOneInput
}

"""An edge in a connection."""
type DebitCardInformationEdge {
  """The item at the end of the edge."""
  node: DebitCardInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DebitCardInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  cardNumber_ASC
  cardNumber_DESC
  expiresOnMonth_ASC
  expiresOnMonth_DESC
  expiresOnYear_ASC
  expiresOnYear_DESC
  securityCode_ASC
  securityCode_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  postalCode_ASC
  postalCode_DESC
  country_ASC
  country_DESC
}

type DebitCardInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

type DebitCardInformationSubscriptionPayload {
  mutation: MutationType!
  node: DebitCardInformation
  updatedFields: [String!]
  previousValues: DebitCardInformationPreviousValues
}

input DebitCardInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DebitCardInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DebitCardInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DebitCardInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DebitCardInformationWhereInput
}

input DebitCardInformationUpdateInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount: PaymentAccountUpdateOneInput
}

input DebitCardInformationUpdateManyMutationInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

input DebitCardInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [DebitCardInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [DebitCardInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DebitCardInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  cardNumber: String

  """All values that are not equal to given value."""
  cardNumber_not: String

  """All values that are contained in given list."""
  cardNumber_in: [String!]

  """All values that are not contained in given list."""
  cardNumber_not_in: [String!]

  """All values less than the given value."""
  cardNumber_lt: String

  """All values less than or equal the given value."""
  cardNumber_lte: String

  """All values greater than the given value."""
  cardNumber_gt: String

  """All values greater than or equal the given value."""
  cardNumber_gte: String

  """All values containing the given string."""
  cardNumber_contains: String

  """All values not containing the given string."""
  cardNumber_not_contains: String

  """All values starting with the given string."""
  cardNumber_starts_with: String

  """All values not starting with the given string."""
  cardNumber_not_starts_with: String

  """All values ending with the given string."""
  cardNumber_ends_with: String

  """All values not ending with the given string."""
  cardNumber_not_ends_with: String
  expiresOnMonth: Int

  """All values that are not equal to given value."""
  expiresOnMonth_not: Int

  """All values that are contained in given list."""
  expiresOnMonth_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnMonth_not_in: [Int!]

  """All values less than the given value."""
  expiresOnMonth_lt: Int

  """All values less than or equal the given value."""
  expiresOnMonth_lte: Int

  """All values greater than the given value."""
  expiresOnMonth_gt: Int

  """All values greater than or equal the given value."""
  expiresOnMonth_gte: Int
  expiresOnYear: Int

  """All values that are not equal to given value."""
  expiresOnYear_not: Int

  """All values that are contained in given list."""
  expiresOnYear_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnYear_not_in: [Int!]

  """All values less than the given value."""
  expiresOnYear_lt: Int

  """All values less than or equal the given value."""
  expiresOnYear_lte: Int

  """All values greater than the given value."""
  expiresOnYear_gt: Int

  """All values greater than or equal the given value."""
  expiresOnYear_gte: Int
  securityCode: String

  """All values that are not equal to given value."""
  securityCode_not: String

  """All values that are contained in given list."""
  securityCode_in: [String!]

  """All values that are not contained in given list."""
  securityCode_not_in: [String!]

  """All values less than the given value."""
  securityCode_lt: String

  """All values less than or equal the given value."""
  securityCode_lte: String

  """All values greater than the given value."""
  securityCode_gt: String

  """All values greater than or equal the given value."""
  securityCode_gte: String

  """All values containing the given string."""
  securityCode_contains: String

  """All values not containing the given string."""
  securityCode_not_contains: String

  """All values starting with the given string."""
  securityCode_starts_with: String

  """All values not starting with the given string."""
  securityCode_not_starts_with: String

  """All values ending with the given string."""
  securityCode_ends_with: String

  """All values not ending with the given string."""
  securityCode_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  postalCode: String

  """All values that are not equal to given value."""
  postalCode_not: String

  """All values that are contained in given list."""
  postalCode_in: [String!]

  """All values that are not contained in given list."""
  postalCode_not_in: [String!]

  """All values less than the given value."""
  postalCode_lt: String

  """All values less than or equal the given value."""
  postalCode_lte: String

  """All values greater than the given value."""
  postalCode_gt: String

  """All values greater than or equal the given value."""
  postalCode_gte: String

  """All values containing the given string."""
  postalCode_contains: String

  """All values not containing the given string."""
  postalCode_not_contains: String

  """All values starting with the given string."""
  postalCode_starts_with: String

  """All values not starting with the given string."""
  postalCode_not_starts_with: String

  """All values ending with the given string."""
  postalCode_ends_with: String

  """All values not ending with the given string."""
  postalCode_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input DebitCardInformationWhereUniqueInput {
  id: ID
}

type Experience implements Node {
  id: ID!
  category: ExperienceCategory
  title: String!
  host: User!
  location: Location!
  pricePerPerson: Int!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  preview: Picture!
  popularity: Int!
}

type ExperienceCategory implements Node {
  id: ID!
  mainColor: String!
  name: String!
  experience: Experience
}

"""A connection to a list of items."""
type ExperienceCategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ExperienceCategoryEdge]!
  aggregate: AggregateExperienceCategory!
}

input ExperienceCategoryCreateInput {
  id: ID
  mainColor: String
  name: String!
  experience: ExperienceCreateOneWithoutCategoryInput
}

input ExperienceCategoryCreateOneWithoutExperienceInput {
  create: ExperienceCategoryCreateWithoutExperienceInput
  connect: ExperienceCategoryWhereUniqueInput
}

input ExperienceCategoryCreateWithoutExperienceInput {
  id: ID
  mainColor: String
  name: String!
}

"""An edge in a connection."""
type ExperienceCategoryEdge {
  """The item at the end of the edge."""
  node: ExperienceCategory!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ExperienceCategoryOrderByInput {
  id_ASC
  id_DESC
  mainColor_ASC
  mainColor_DESC
  name_ASC
  name_DESC
}

type ExperienceCategoryPreviousValues {
  id: ID!
  mainColor: String!
  name: String!
}

type ExperienceCategorySubscriptionPayload {
  mutation: MutationType!
  node: ExperienceCategory
  updatedFields: [String!]
  previousValues: ExperienceCategoryPreviousValues
}

input ExperienceCategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ExperienceCategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExperienceCategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExperienceCategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ExperienceCategoryWhereInput
}

input ExperienceCategoryUpdateInput {
  mainColor: String
  name: String
  experience: ExperienceUpdateOneWithoutCategoryInput
}

input ExperienceCategoryUpdateManyMutationInput {
  mainColor: String
  name: String
}

input ExperienceCategoryUpdateOneWithoutExperienceInput {
  create: ExperienceCategoryCreateWithoutExperienceInput
  connect: ExperienceCategoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceCategoryUpdateWithoutExperienceDataInput
  upsert: ExperienceCategoryUpsertWithoutExperienceInput
}

input ExperienceCategoryUpdateWithoutExperienceDataInput {
  mainColor: String
  name: String
}

input ExperienceCategoryUpsertWithoutExperienceInput {
  update: ExperienceCategoryUpdateWithoutExperienceDataInput!
  create: ExperienceCategoryCreateWithoutExperienceInput!
}

input ExperienceCategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [ExperienceCategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExperienceCategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExperienceCategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  mainColor: String

  """All values that are not equal to given value."""
  mainColor_not: String

  """All values that are contained in given list."""
  mainColor_in: [String!]

  """All values that are not contained in given list."""
  mainColor_not_in: [String!]

  """All values less than the given value."""
  mainColor_lt: String

  """All values less than or equal the given value."""
  mainColor_lte: String

  """All values greater than the given value."""
  mainColor_gt: String

  """All values greater than or equal the given value."""
  mainColor_gte: String

  """All values containing the given string."""
  mainColor_contains: String

  """All values not containing the given string."""
  mainColor_not_contains: String

  """All values starting with the given string."""
  mainColor_starts_with: String

  """All values not starting with the given string."""
  mainColor_not_starts_with: String

  """All values ending with the given string."""
  mainColor_ends_with: String

  """All values not ending with the given string."""
  mainColor_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  experience: ExperienceWhereInput
}

input ExperienceCategoryWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type ExperienceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ExperienceEdge]!
  aggregate: AggregateExperience!
}

input ExperienceCreateInput {
  id: ID
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  host: UserCreateOneWithoutHostingExperiencesInput!
  location: LocationCreateOneWithoutExperienceInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateManyWithoutHostInput {
  create: [ExperienceCreateWithoutHostInput!]
  connect: [ExperienceWhereUniqueInput!]
}

input ExperienceCreateOneWithoutCategoryInput {
  create: ExperienceCreateWithoutCategoryInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateOneWithoutLocationInput {
  create: ExperienceCreateWithoutLocationInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateOneWithoutReviewsInput {
  create: ExperienceCreateWithoutReviewsInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateWithoutCategoryInput {
  id: ID
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  host: UserCreateOneWithoutHostingExperiencesInput!
  location: LocationCreateOneWithoutExperienceInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateWithoutHostInput {
  id: ID
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  location: LocationCreateOneWithoutExperienceInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateWithoutLocationInput {
  id: ID
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  host: UserCreateOneWithoutHostingExperiencesInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateWithoutReviewsInput {
  id: ID
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  host: UserCreateOneWithoutHostingExperiencesInput!
  location: LocationCreateOneWithoutExperienceInput!
  preview: PictureCreateOneInput!
}

"""An edge in a connection."""
type ExperienceEdge {
  """The item at the end of the edge."""
  node: Experience!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ExperienceOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  pricePerPerson_ASC
  pricePerPerson_DESC
  popularity_ASC
  popularity_DESC
}

type ExperiencePreviousValues {
  id: ID!
  title: String!
  pricePerPerson: Int!
  popularity: Int!
}

input ExperienceScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ExperienceScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExperienceScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExperienceScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  pricePerPerson: Int

  """All values that are not equal to given value."""
  pricePerPerson_not: Int

  """All values that are contained in given list."""
  pricePerPerson_in: [Int!]

  """All values that are not contained in given list."""
  pricePerPerson_not_in: [Int!]

  """All values less than the given value."""
  pricePerPerson_lt: Int

  """All values less than or equal the given value."""
  pricePerPerson_lte: Int

  """All values greater than the given value."""
  pricePerPerson_gt: Int

  """All values greater than or equal the given value."""
  pricePerPerson_gte: Int
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
}

type ExperienceSubscriptionPayload {
  mutation: MutationType!
  node: Experience
  updatedFields: [String!]
  previousValues: ExperiencePreviousValues
}

input ExperienceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ExperienceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExperienceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExperienceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ExperienceWhereInput
}

input ExperienceUpdateInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  host: UserUpdateOneRequiredWithoutHostingExperiencesInput
  location: LocationUpdateOneRequiredWithoutExperienceInput
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneRequiredInput
}

input ExperienceUpdateManyDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
}

input ExperienceUpdateManyMutationInput {
  title: String
  pricePerPerson: Int
  popularity: Int
}

input ExperienceUpdateManyWithoutHostInput {
  create: [ExperienceCreateWithoutHostInput!]
  connect: [ExperienceWhereUniqueInput!]
  set: [ExperienceWhereUniqueInput!]
  disconnect: [ExperienceWhereUniqueInput!]
  delete: [ExperienceWhereUniqueInput!]
  update: [ExperienceUpdateWithWhereUniqueWithoutHostInput!]
  updateMany: [ExperienceUpdateManyWithWhereNestedInput!]
  deleteMany: [ExperienceScalarWhereInput!]
  upsert: [ExperienceUpsertWithWhereUniqueWithoutHostInput!]
}

input ExperienceUpdateManyWithWhereNestedInput {
  where: ExperienceScalarWhereInput!
  data: ExperienceUpdateManyDataInput!
}

input ExperienceUpdateOneWithoutCategoryInput {
  create: ExperienceCreateWithoutCategoryInput
  connect: ExperienceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceUpdateWithoutCategoryDataInput
  upsert: ExperienceUpsertWithoutCategoryInput
}

input ExperienceUpdateOneWithoutLocationInput {
  create: ExperienceCreateWithoutLocationInput
  connect: ExperienceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceUpdateWithoutLocationDataInput
  upsert: ExperienceUpsertWithoutLocationInput
}

input ExperienceUpdateOneWithoutReviewsInput {
  create: ExperienceCreateWithoutReviewsInput
  connect: ExperienceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceUpdateWithoutReviewsDataInput
  upsert: ExperienceUpsertWithoutReviewsInput
}

input ExperienceUpdateWithoutCategoryDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  host: UserUpdateOneRequiredWithoutHostingExperiencesInput
  location: LocationUpdateOneRequiredWithoutExperienceInput
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneRequiredInput
}

input ExperienceUpdateWithoutHostDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  location: LocationUpdateOneRequiredWithoutExperienceInput
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneRequiredInput
}

input ExperienceUpdateWithoutLocationDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  host: UserUpdateOneRequiredWithoutHostingExperiencesInput
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneRequiredInput
}

input ExperienceUpdateWithoutReviewsDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  host: UserUpdateOneRequiredWithoutHostingExperiencesInput
  location: LocationUpdateOneRequiredWithoutExperienceInput
  preview: PictureUpdateOneRequiredInput
}

input ExperienceUpdateWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput!
  data: ExperienceUpdateWithoutHostDataInput!
}

input ExperienceUpsertWithoutCategoryInput {
  update: ExperienceUpdateWithoutCategoryDataInput!
  create: ExperienceCreateWithoutCategoryInput!
}

input ExperienceUpsertWithoutLocationInput {
  update: ExperienceUpdateWithoutLocationDataInput!
  create: ExperienceCreateWithoutLocationInput!
}

input ExperienceUpsertWithoutReviewsInput {
  update: ExperienceUpdateWithoutReviewsDataInput!
  create: ExperienceCreateWithoutReviewsInput!
}

input ExperienceUpsertWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput!
  update: ExperienceUpdateWithoutHostDataInput!
  create: ExperienceCreateWithoutHostInput!
}

input ExperienceWhereInput {
  """Logical AND on all given filters."""
  AND: [ExperienceWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExperienceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExperienceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  pricePerPerson: Int

  """All values that are not equal to given value."""
  pricePerPerson_not: Int

  """All values that are contained in given list."""
  pricePerPerson_in: [Int!]

  """All values that are not contained in given list."""
  pricePerPerson_not_in: [Int!]

  """All values less than the given value."""
  pricePerPerson_lt: Int

  """All values less than or equal the given value."""
  pricePerPerson_lte: Int

  """All values greater than the given value."""
  pricePerPerson_gt: Int

  """All values greater than or equal the given value."""
  pricePerPerson_gte: Int
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
  category: ExperienceCategoryWhereInput
  host: UserWhereInput
  location: LocationWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  preview: PictureWhereInput
}

input ExperienceWhereUniqueInput {
  id: ID
}

type GuestRequirements implements Node {
  id: ID!
  govIssuedId: Boolean!
  recommendationsFromOtherHosts: Boolean!
  guestTripInformation: Boolean!
  place: Place!
}

"""A connection to a list of items."""
type GuestRequirementsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GuestRequirementsEdge]!
  aggregate: AggregateGuestRequirements!
}

input GuestRequirementsCreateInput {
  id: ID
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
  place: PlaceCreateOneWithoutGuestRequirementsInput!
}

input GuestRequirementsCreateOneWithoutPlaceInput {
  create: GuestRequirementsCreateWithoutPlaceInput
  connect: GuestRequirementsWhereUniqueInput
}

input GuestRequirementsCreateWithoutPlaceInput {
  id: ID
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
}

"""An edge in a connection."""
type GuestRequirementsEdge {
  """The item at the end of the edge."""
  node: GuestRequirements!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GuestRequirementsOrderByInput {
  id_ASC
  id_DESC
  govIssuedId_ASC
  govIssuedId_DESC
  recommendationsFromOtherHosts_ASC
  recommendationsFromOtherHosts_DESC
  guestTripInformation_ASC
  guestTripInformation_DESC
}

type GuestRequirementsPreviousValues {
  id: ID!
  govIssuedId: Boolean!
  recommendationsFromOtherHosts: Boolean!
  guestTripInformation: Boolean!
}

type GuestRequirementsSubscriptionPayload {
  mutation: MutationType!
  node: GuestRequirements
  updatedFields: [String!]
  previousValues: GuestRequirementsPreviousValues
}

input GuestRequirementsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GuestRequirementsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GuestRequirementsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GuestRequirementsSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GuestRequirementsWhereInput
}

input GuestRequirementsUpdateInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
  place: PlaceUpdateOneRequiredWithoutGuestRequirementsInput
}

input GuestRequirementsUpdateManyMutationInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
}

input GuestRequirementsUpdateOneWithoutPlaceInput {
  create: GuestRequirementsCreateWithoutPlaceInput
  connect: GuestRequirementsWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GuestRequirementsUpdateWithoutPlaceDataInput
  upsert: GuestRequirementsUpsertWithoutPlaceInput
}

input GuestRequirementsUpdateWithoutPlaceDataInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
}

input GuestRequirementsUpsertWithoutPlaceInput {
  update: GuestRequirementsUpdateWithoutPlaceDataInput!
  create: GuestRequirementsCreateWithoutPlaceInput!
}

input GuestRequirementsWhereInput {
  """Logical AND on all given filters."""
  AND: [GuestRequirementsWhereInput!]

  """Logical OR on all given filters."""
  OR: [GuestRequirementsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GuestRequirementsWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  govIssuedId: Boolean

  """All values that are not equal to given value."""
  govIssuedId_not: Boolean
  recommendationsFromOtherHosts: Boolean

  """All values that are not equal to given value."""
  recommendationsFromOtherHosts_not: Boolean
  guestTripInformation: Boolean

  """All values that are not equal to given value."""
  guestTripInformation_not: Boolean
  place: PlaceWhereInput
}

input GuestRequirementsWhereUniqueInput {
  id: ID
}

type HouseRules implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

"""A connection to a list of items."""
type HouseRulesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [HouseRulesEdge]!
  aggregate: AggregateHouseRules!
}

input HouseRulesCreateInput {
  id: ID
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesCreateOneInput {
  create: HouseRulesCreateInput
  connect: HouseRulesWhereUniqueInput
}

"""An edge in a connection."""
type HouseRulesEdge {
  """The item at the end of the edge."""
  node: HouseRules!

  """A cursor for use in pagination."""
  cursor: String!
}

enum HouseRulesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  suitableForChildren_ASC
  suitableForChildren_DESC
  suitableForInfants_ASC
  suitableForInfants_DESC
  petsAllowed_ASC
  petsAllowed_DESC
  smokingAllowed_ASC
  smokingAllowed_DESC
  partiesAndEventsAllowed_ASC
  partiesAndEventsAllowed_DESC
  additionalRules_ASC
  additionalRules_DESC
}

type HouseRulesPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

type HouseRulesSubscriptionPayload {
  mutation: MutationType!
  node: HouseRules
  updatedFields: [String!]
  previousValues: HouseRulesPreviousValues
}

input HouseRulesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [HouseRulesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [HouseRulesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HouseRulesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: HouseRulesWhereInput
}

input HouseRulesUpdateDataInput {
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesUpdateInput {
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesUpdateManyMutationInput {
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesUpdateOneInput {
  create: HouseRulesCreateInput
  connect: HouseRulesWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: HouseRulesUpdateDataInput
  upsert: HouseRulesUpsertNestedInput
}

input HouseRulesUpsertNestedInput {
  update: HouseRulesUpdateDataInput!
  create: HouseRulesCreateInput!
}

input HouseRulesWhereInput {
  """Logical AND on all given filters."""
  AND: [HouseRulesWhereInput!]

  """Logical OR on all given filters."""
  OR: [HouseRulesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HouseRulesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  suitableForChildren: Boolean

  """All values that are not equal to given value."""
  suitableForChildren_not: Boolean
  suitableForInfants: Boolean

  """All values that are not equal to given value."""
  suitableForInfants_not: Boolean
  petsAllowed: Boolean

  """All values that are not equal to given value."""
  petsAllowed_not: Boolean
  smokingAllowed: Boolean

  """All values that are not equal to given value."""
  smokingAllowed_not: Boolean
  partiesAndEventsAllowed: Boolean

  """All values that are not equal to given value."""
  partiesAndEventsAllowed_not: Boolean
  additionalRules: String

  """All values that are not equal to given value."""
  additionalRules_not: String

  """All values that are contained in given list."""
  additionalRules_in: [String!]

  """All values that are not contained in given list."""
  additionalRules_not_in: [String!]

  """All values less than the given value."""
  additionalRules_lt: String

  """All values less than or equal the given value."""
  additionalRules_lte: String

  """All values greater than the given value."""
  additionalRules_gt: String

  """All values greater than or equal the given value."""
  additionalRules_gte: String

  """All values containing the given string."""
  additionalRules_contains: String

  """All values not containing the given string."""
  additionalRules_not_contains: String

  """All values starting with the given string."""
  additionalRules_starts_with: String

  """All values not starting with the given string."""
  additionalRules_not_starts_with: String

  """All values ending with the given string."""
  additionalRules_ends_with: String

  """All values not ending with the given string."""
  additionalRules_not_ends_with: String
}

input HouseRulesWhereUniqueInput {
  id: ID
}

type Location implements Node {
  id: ID!
  lat: Float!
  lng: Float!
  neighbourHood: Neighbourhood
  user: User
  place: Place
  address: String!
  directions: String!
  experience: Experience
  restaurant: Restaurant
}

"""A connection to a list of items."""
type LocationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  id: ID
  lat: Float!
  lng: Float!
  address: String!
  directions: String!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateManyWithoutNeighbourHoodInput {
  create: [LocationCreateWithoutNeighbourHoodInput!]
  connect: [LocationWhereUniqueInput!]
}

input LocationCreateOneWithoutExperienceInput {
  create: LocationCreateWithoutExperienceInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutPlaceInput {
  create: LocationCreateWithoutPlaceInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutRestaurantInput {
  create: LocationCreateWithoutRestaurantInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutUserInput {
  create: LocationCreateWithoutUserInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutExperienceInput {
  id: ID
  lat: Float!
  lng: Float!
  address: String!
  directions: String!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateWithoutNeighbourHoodInput {
  id: ID
  lat: Float!
  lng: Float!
  address: String!
  directions: String!
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateWithoutPlaceInput {
  id: ID
  lat: Float!
  lng: Float!
  address: String!
  directions: String!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateWithoutRestaurantInput {
  id: ID
  lat: Float!
  lng: Float!
  address: String!
  directions: String!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
}

input LocationCreateWithoutUserInput {
  id: ID
  lat: Float!
  lng: Float!
  address: String!
  directions: String!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  place: PlaceCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
  address_ASC
  address_DESC
  directions_ASC
  directions_DESC
}

type LocationPreviousValues {
  id: ID!
  lat: Float!
  lng: Float!
  address: String!
  directions: String!
}

input LocationScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lat: Float

  """All values that are not equal to given value."""
  lat_not: Float

  """All values that are contained in given list."""
  lat_in: [Float!]

  """All values that are not contained in given list."""
  lat_not_in: [Float!]

  """All values less than the given value."""
  lat_lt: Float

  """All values less than or equal the given value."""
  lat_lte: Float

  """All values greater than the given value."""
  lat_gt: Float

  """All values greater than or equal the given value."""
  lat_gte: Float
  lng: Float

  """All values that are not equal to given value."""
  lng_not: Float

  """All values that are contained in given list."""
  lng_in: [Float!]

  """All values that are not contained in given list."""
  lng_not_in: [Float!]

  """All values less than the given value."""
  lng_lt: Float

  """All values less than or equal the given value."""
  lng_lte: Float

  """All values greater than the given value."""
  lng_gt: Float

  """All values greater than or equal the given value."""
  lng_gte: Float
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  directions: String

  """All values that are not equal to given value."""
  directions_not: String

  """All values that are contained in given list."""
  directions_in: [String!]

  """All values that are not contained in given list."""
  directions_not_in: [String!]

  """All values less than the given value."""
  directions_lt: String

  """All values less than or equal the given value."""
  directions_lte: String

  """All values greater than the given value."""
  directions_gt: String

  """All values greater than or equal the given value."""
  directions_gte: String

  """All values containing the given string."""
  directions_contains: String

  """All values not containing the given string."""
  directions_not_contains: String

  """All values starting with the given string."""
  directions_starts_with: String

  """All values not starting with the given string."""
  directions_not_starts_with: String

  """All values ending with the given string."""
  directions_ends_with: String

  """All values not ending with the given string."""
  directions_not_ends_with: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateManyDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
}

input LocationUpdateManyMutationInput {
  lat: Float
  lng: Float
  address: String
  directions: String
}

input LocationUpdateManyWithoutNeighbourHoodInput {
  create: [LocationCreateWithoutNeighbourHoodInput!]
  connect: [LocationWhereUniqueInput!]
  set: [LocationWhereUniqueInput!]
  disconnect: [LocationWhereUniqueInput!]
  delete: [LocationWhereUniqueInput!]
  update: [LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput!]
  updateMany: [LocationUpdateManyWithWhereNestedInput!]
  deleteMany: [LocationScalarWhereInput!]
  upsert: [LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput!]
}

input LocationUpdateManyWithWhereNestedInput {
  where: LocationScalarWhereInput!
  data: LocationUpdateManyDataInput!
}

input LocationUpdateOneRequiredWithoutExperienceInput {
  create: LocationCreateWithoutExperienceInput
  connect: LocationWhereUniqueInput
  update: LocationUpdateWithoutExperienceDataInput
  upsert: LocationUpsertWithoutExperienceInput
}

input LocationUpdateOneRequiredWithoutPlaceInput {
  create: LocationCreateWithoutPlaceInput
  connect: LocationWhereUniqueInput
  update: LocationUpdateWithoutPlaceDataInput
  upsert: LocationUpsertWithoutPlaceInput
}

input LocationUpdateOneRequiredWithoutRestaurantInput {
  create: LocationCreateWithoutRestaurantInput
  connect: LocationWhereUniqueInput
  update: LocationUpdateWithoutRestaurantDataInput
  upsert: LocationUpsertWithoutRestaurantInput
}

input LocationUpdateOneWithoutUserInput {
  create: LocationCreateWithoutUserInput
  connect: LocationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateWithoutUserDataInput
  upsert: LocationUpsertWithoutUserInput
}

input LocationUpdateWithoutExperienceDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutNeighbourHoodDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutPlaceDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutRestaurantDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutUserDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  place: PlaceUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput!
  data: LocationUpdateWithoutNeighbourHoodDataInput!
}

input LocationUpsertWithoutExperienceInput {
  update: LocationUpdateWithoutExperienceDataInput!
  create: LocationCreateWithoutExperienceInput!
}

input LocationUpsertWithoutPlaceInput {
  update: LocationUpdateWithoutPlaceDataInput!
  create: LocationCreateWithoutPlaceInput!
}

input LocationUpsertWithoutRestaurantInput {
  update: LocationUpdateWithoutRestaurantDataInput!
  create: LocationCreateWithoutRestaurantInput!
}

input LocationUpsertWithoutUserInput {
  update: LocationUpdateWithoutUserDataInput!
  create: LocationCreateWithoutUserInput!
}

input LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput!
  update: LocationUpdateWithoutNeighbourHoodDataInput!
  create: LocationCreateWithoutNeighbourHoodInput!
}

input LocationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lat: Float

  """All values that are not equal to given value."""
  lat_not: Float

  """All values that are contained in given list."""
  lat_in: [Float!]

  """All values that are not contained in given list."""
  lat_not_in: [Float!]

  """All values less than the given value."""
  lat_lt: Float

  """All values less than or equal the given value."""
  lat_lte: Float

  """All values greater than the given value."""
  lat_gt: Float

  """All values greater than or equal the given value."""
  lat_gte: Float
  lng: Float

  """All values that are not equal to given value."""
  lng_not: Float

  """All values that are contained in given list."""
  lng_in: [Float!]

  """All values that are not contained in given list."""
  lng_not_in: [Float!]

  """All values less than the given value."""
  lng_lt: Float

  """All values less than or equal the given value."""
  lng_lte: Float

  """All values greater than the given value."""
  lng_gt: Float

  """All values greater than or equal the given value."""
  lng_gte: Float
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  directions: String

  """All values that are not equal to given value."""
  directions_not: String

  """All values that are contained in given list."""
  directions_in: [String!]

  """All values that are not contained in given list."""
  directions_not_in: [String!]

  """All values less than the given value."""
  directions_lt: String

  """All values less than or equal the given value."""
  directions_lte: String

  """All values greater than the given value."""
  directions_gt: String

  """All values greater than or equal the given value."""
  directions_gte: String

  """All values containing the given string."""
  directions_contains: String

  """All values not containing the given string."""
  directions_not_contains: String

  """All values starting with the given string."""
  directions_starts_with: String

  """All values not starting with the given string."""
  directions_not_starts_with: String

  """All values ending with the given string."""
  directions_ends_with: String

  """All values not ending with the given string."""
  directions_not_ends_with: String
  neighbourHood: NeighbourhoodWhereInput
  user: UserWhereInput
  place: PlaceWhereInput
  experience: ExperienceWhereInput
  restaurant: RestaurantWhereInput
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Message implements Node {
  id: ID!
  createdAt: DateTime!
  from: User!
  to: User!
  deliveredAt: DateTime!
  readAt: DateTime!
}

"""A connection to a list of items."""
type MessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  deliveredAt: DateTime!
  readAt: DateTime!
  from: UserCreateOneWithoutSentMessagesInput!
  to: UserCreateOneWithoutReceivedMessagesInput!
}

input MessageCreateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutFromInput {
  id: ID
  deliveredAt: DateTime!
  readAt: DateTime!
  to: UserCreateOneWithoutReceivedMessagesInput!
}

input MessageCreateWithoutToInput {
  id: ID
  deliveredAt: DateTime!
  readAt: DateTime!
  from: UserCreateOneWithoutSentMessagesInput!
}

"""An edge in a connection."""
type MessageEdge {
  """The item at the end of the edge."""
  node: Message!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  deliveredAt_ASC
  deliveredAt_DESC
  readAt_ASC
  readAt_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  deliveredAt: DateTime!
  readAt: DateTime!
}

input MessageScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  deliveredAt: DateTime

  """All values that are not equal to given value."""
  deliveredAt_not: DateTime

  """All values that are contained in given list."""
  deliveredAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deliveredAt_not_in: [DateTime!]

  """All values less than the given value."""
  deliveredAt_lt: DateTime

  """All values less than or equal the given value."""
  deliveredAt_lte: DateTime

  """All values greater than the given value."""
  deliveredAt_gt: DateTime

  """All values greater than or equal the given value."""
  deliveredAt_gte: DateTime
  readAt: DateTime

  """All values that are not equal to given value."""
  readAt_not: DateTime

  """All values that are contained in given list."""
  readAt_in: [DateTime!]

  """All values that are not contained in given list."""
  readAt_not_in: [DateTime!]

  """All values less than the given value."""
  readAt_lt: DateTime

  """All values less than or equal the given value."""
  readAt_lte: DateTime

  """All values greater than the given value."""
  readAt_gt: DateTime

  """All values greater than or equal the given value."""
  readAt_gte: DateTime
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateInput {
  deliveredAt: DateTime
  readAt: DateTime
  from: UserUpdateOneRequiredWithoutSentMessagesInput
  to: UserUpdateOneRequiredWithoutReceivedMessagesInput
}

input MessageUpdateManyDataInput {
  deliveredAt: DateTime
  readAt: DateTime
}

input MessageUpdateManyMutationInput {
  deliveredAt: DateTime
  readAt: DateTime
}

input MessageUpdateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutFromInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
  deleteMany: [MessageScalarWhereInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutFromInput!]
}

input MessageUpdateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutToInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
  deleteMany: [MessageScalarWhereInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutToInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutFromDataInput {
  deliveredAt: DateTime
  readAt: DateTime
  to: UserUpdateOneRequiredWithoutReceivedMessagesInput
}

input MessageUpdateWithoutToDataInput {
  deliveredAt: DateTime
  readAt: DateTime
  from: UserUpdateOneRequiredWithoutSentMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutFromDataInput!
}

input MessageUpdateWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutToDataInput!
}

input MessageUpsertWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutFromDataInput!
  create: MessageCreateWithoutFromInput!
}

input MessageUpsertWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutToDataInput!
  create: MessageCreateWithoutToInput!
}

input MessageWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  deliveredAt: DateTime

  """All values that are not equal to given value."""
  deliveredAt_not: DateTime

  """All values that are contained in given list."""
  deliveredAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deliveredAt_not_in: [DateTime!]

  """All values less than the given value."""
  deliveredAt_lt: DateTime

  """All values less than or equal the given value."""
  deliveredAt_lte: DateTime

  """All values greater than the given value."""
  deliveredAt_gt: DateTime

  """All values greater than or equal the given value."""
  deliveredAt_gte: DateTime
  readAt: DateTime

  """All values that are not equal to given value."""
  readAt_not: DateTime

  """All values that are contained in given list."""
  readAt_in: [DateTime!]

  """All values that are not contained in given list."""
  readAt_not_in: [DateTime!]

  """All values less than the given value."""
  readAt_lt: DateTime

  """All values less than or equal the given value."""
  readAt_lte: DateTime

  """All values greater than the given value."""
  readAt_gt: DateTime

  """All values greater than or equal the given value."""
  readAt_gte: DateTime
  from: UserWhereInput
  to: UserWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createPlace(data: PlaceCreateInput!): Place!
  createPricing(data: PricingCreateInput!): Pricing!
  createGuestRequirements(data: GuestRequirementsCreateInput!): GuestRequirements!
  createPolicies(data: PoliciesCreateInput!): Policies!
  createViews(data: ViewsCreateInput!): Views!
  createLocation(data: LocationCreateInput!): Location!
  createNeighbourhood(data: NeighbourhoodCreateInput!): Neighbourhood!
  createCity(data: CityCreateInput!): City!
  createExperience(data: ExperienceCreateInput!): Experience!
  createExperienceCategory(data: ExperienceCategoryCreateInput!): ExperienceCategory!
  createAmenities(data: AmenitiesCreateInput!): Amenities!
  createReview(data: ReviewCreateInput!): Review!
  createOrder(data: OrderCreateInput!): Order!
  createPayment(data: PaymentCreateInput!): Payment!
  createPaypalInformation(data: PaypalInformationCreateInput!): PaypalInformation!
  createPaytmInformation(data: PaytmInformationCreateInput!): PaytmInformation!
  createCreditCardInformation(data: CreditCardInformationCreateInput!): CreditCardInformation!
  createDebitCardInformation(data: DebitCardInformationCreateInput!): DebitCardInformation!
  createMessage(data: MessageCreateInput!): Message!
  createNotification(data: NotificationCreateInput!): Notification!
  createRestaurant(data: RestaurantCreateInput!): Restaurant!
  createHouseRules(data: HouseRulesCreateInput!): HouseRules!
  createPaymentAccount(data: PaymentAccountCreateInput!): PaymentAccount!
  createPicture(data: PictureCreateInput!): Picture!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updatePricing(data: PricingUpdateInput!, where: PricingWhereUniqueInput!): Pricing
  updateGuestRequirements(data: GuestRequirementsUpdateInput!, where: GuestRequirementsWhereUniqueInput!): GuestRequirements
  updatePolicies(data: PoliciesUpdateInput!, where: PoliciesWhereUniqueInput!): Policies
  updateViews(data: ViewsUpdateInput!, where: ViewsWhereUniqueInput!): Views
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateNeighbourhood(data: NeighbourhoodUpdateInput!, where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateExperience(data: ExperienceUpdateInput!, where: ExperienceWhereUniqueInput!): Experience
  updateExperienceCategory(data: ExperienceCategoryUpdateInput!, where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  updateAmenities(data: AmenitiesUpdateInput!, where: AmenitiesWhereUniqueInput!): Amenities
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updatePayment(data: PaymentUpdateInput!, where: PaymentWhereUniqueInput!): Payment
  updatePaypalInformation(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereUniqueInput!): PaypalInformation
  updatePaytmInformation(data: PaytmInformationUpdateInput!, where: PaytmInformationWhereUniqueInput!): PaytmInformation
  updateCreditCardInformation(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  updateDebitCardInformation(data: DebitCardInformationUpdateInput!, where: DebitCardInformationWhereUniqueInput!): DebitCardInformation
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateRestaurant(data: RestaurantUpdateInput!, where: RestaurantWhereUniqueInput!): Restaurant
  updateHouseRules(data: HouseRulesUpdateInput!, where: HouseRulesWhereUniqueInput!): HouseRules
  updatePaymentAccount(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereUniqueInput!): PaymentAccount
  updatePicture(data: PictureUpdateInput!, where: PictureWhereUniqueInput!): Picture
  deleteUser(where: UserWhereUniqueInput!): User
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deletePricing(where: PricingWhereUniqueInput!): Pricing
  deleteGuestRequirements(where: GuestRequirementsWhereUniqueInput!): GuestRequirements
  deletePolicies(where: PoliciesWhereUniqueInput!): Policies
  deleteViews(where: ViewsWhereUniqueInput!): Views
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteNeighbourhood(where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  deleteCity(where: CityWhereUniqueInput!): City
  deleteExperience(where: ExperienceWhereUniqueInput!): Experience
  deleteExperienceCategory(where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  deleteAmenities(where: AmenitiesWhereUniqueInput!): Amenities
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deletePayment(where: PaymentWhereUniqueInput!): Payment
  deletePaypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  deletePaytmInformation(where: PaytmInformationWhereUniqueInput!): PaytmInformation
  deleteCreditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  deleteDebitCardInformation(where: DebitCardInformationWhereUniqueInput!): DebitCardInformation
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteRestaurant(where: RestaurantWhereUniqueInput!): Restaurant
  deleteHouseRules(where: HouseRulesWhereUniqueInput!): HouseRules
  deletePaymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  deletePicture(where: PictureWhereUniqueInput!): Picture
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  upsertPricing(where: PricingWhereUniqueInput!, create: PricingCreateInput!, update: PricingUpdateInput!): Pricing!
  upsertGuestRequirements(where: GuestRequirementsWhereUniqueInput!, create: GuestRequirementsCreateInput!, update: GuestRequirementsUpdateInput!): GuestRequirements!
  upsertPolicies(where: PoliciesWhereUniqueInput!, create: PoliciesCreateInput!, update: PoliciesUpdateInput!): Policies!
  upsertViews(where: ViewsWhereUniqueInput!, create: ViewsCreateInput!, update: ViewsUpdateInput!): Views!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertNeighbourhood(where: NeighbourhoodWhereUniqueInput!, create: NeighbourhoodCreateInput!, update: NeighbourhoodUpdateInput!): Neighbourhood!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  upsertExperience(where: ExperienceWhereUniqueInput!, create: ExperienceCreateInput!, update: ExperienceUpdateInput!): Experience!
  upsertExperienceCategory(where: ExperienceCategoryWhereUniqueInput!, create: ExperienceCategoryCreateInput!, update: ExperienceCategoryUpdateInput!): ExperienceCategory!
  upsertAmenities(where: AmenitiesWhereUniqueInput!, create: AmenitiesCreateInput!, update: AmenitiesUpdateInput!): Amenities!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertPayment(where: PaymentWhereUniqueInput!, create: PaymentCreateInput!, update: PaymentUpdateInput!): Payment!
  upsertPaypalInformation(where: PaypalInformationWhereUniqueInput!, create: PaypalInformationCreateInput!, update: PaypalInformationUpdateInput!): PaypalInformation!
  upsertPaytmInformation(where: PaytmInformationWhereUniqueInput!, create: PaytmInformationCreateInput!, update: PaytmInformationUpdateInput!): PaytmInformation!
  upsertCreditCardInformation(where: CreditCardInformationWhereUniqueInput!, create: CreditCardInformationCreateInput!, update: CreditCardInformationUpdateInput!): CreditCardInformation!
  upsertDebitCardInformation(where: DebitCardInformationWhereUniqueInput!, create: DebitCardInformationCreateInput!, update: DebitCardInformationUpdateInput!): DebitCardInformation!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertRestaurant(where: RestaurantWhereUniqueInput!, create: RestaurantCreateInput!, update: RestaurantUpdateInput!): Restaurant!
  upsertHouseRules(where: HouseRulesWhereUniqueInput!, create: HouseRulesCreateInput!, update: HouseRulesUpdateInput!): HouseRules!
  upsertPaymentAccount(where: PaymentAccountWhereUniqueInput!, create: PaymentAccountCreateInput!, update: PaymentAccountUpdateInput!): PaymentAccount!
  upsertPicture(where: PictureWhereUniqueInput!, create: PictureCreateInput!, update: PictureUpdateInput!): Picture!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyPlaces(data: PlaceUpdateManyMutationInput!, where: PlaceWhereInput): BatchPayload!
  updateManyPricings(data: PricingUpdateManyMutationInput!, where: PricingWhereInput): BatchPayload!
  updateManyGuestRequirementses(data: GuestRequirementsUpdateManyMutationInput!, where: GuestRequirementsWhereInput): BatchPayload!
  updateManyPolicieses(data: PoliciesUpdateManyMutationInput!, where: PoliciesWhereInput): BatchPayload!
  updateManyViewses(data: ViewsUpdateManyMutationInput!, where: ViewsWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  updateManyNeighbourhoods(data: NeighbourhoodUpdateManyMutationInput!, where: NeighbourhoodWhereInput): BatchPayload!
  updateManyCities(data: CityUpdateManyMutationInput!, where: CityWhereInput): BatchPayload!
  updateManyExperiences(data: ExperienceUpdateManyMutationInput!, where: ExperienceWhereInput): BatchPayload!
  updateManyExperienceCategories(data: ExperienceCategoryUpdateManyMutationInput!, where: ExperienceCategoryWhereInput): BatchPayload!
  updateManyAmenitieses(data: AmenitiesUpdateManyMutationInput!, where: AmenitiesWhereInput): BatchPayload!
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  updateManyPayments(data: PaymentUpdateManyMutationInput!, where: PaymentWhereInput): BatchPayload!
  updateManyPaypalInformations(data: PaypalInformationUpdateManyMutationInput!, where: PaypalInformationWhereInput): BatchPayload!
  updateManyPaytmInformations(data: PaytmInformationUpdateManyMutationInput!, where: PaytmInformationWhereInput): BatchPayload!
  updateManyCreditCardInformations(data: CreditCardInformationUpdateManyMutationInput!, where: CreditCardInformationWhereInput): BatchPayload!
  updateManyDebitCardInformations(data: DebitCardInformationUpdateManyMutationInput!, where: DebitCardInformationWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateManyMutationInput!, where: NotificationWhereInput): BatchPayload!
  updateManyRestaurants(data: RestaurantUpdateManyMutationInput!, where: RestaurantWhereInput): BatchPayload!
  updateManyHouseRuleses(data: HouseRulesUpdateManyMutationInput!, where: HouseRulesWhereInput): BatchPayload!
  updateManyPaymentAccounts(data: PaymentAccountUpdateManyMutationInput!, where: PaymentAccountWhereInput): BatchPayload!
  updateManyPictures(data: PictureUpdateManyMutationInput!, where: PictureWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
  deleteManyPricings(where: PricingWhereInput): BatchPayload!
  deleteManyGuestRequirementses(where: GuestRequirementsWhereInput): BatchPayload!
  deleteManyPolicieses(where: PoliciesWhereInput): BatchPayload!
  deleteManyViewses(where: ViewsWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyNeighbourhoods(where: NeighbourhoodWhereInput): BatchPayload!
  deleteManyCities(where: CityWhereInput): BatchPayload!
  deleteManyExperiences(where: ExperienceWhereInput): BatchPayload!
  deleteManyExperienceCategories(where: ExperienceCategoryWhereInput): BatchPayload!
  deleteManyAmenitieses(where: AmenitiesWhereInput): BatchPayload!
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyPayments(where: PaymentWhereInput): BatchPayload!
  deleteManyPaypalInformations(where: PaypalInformationWhereInput): BatchPayload!
  deleteManyPaytmInformations(where: PaytmInformationWhereInput): BatchPayload!
  deleteManyCreditCardInformations(where: CreditCardInformationWhereInput): BatchPayload!
  deleteManyDebitCardInformations(where: DebitCardInformationWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyRestaurants(where: RestaurantWhereInput): BatchPayload!
  deleteManyHouseRuleses(where: HouseRulesWhereInput): BatchPayload!
  deleteManyPaymentAccounts(where: PaymentAccountWhereInput): BatchPayload!
  deleteManyPictures(where: PictureWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Neighbourhood implements Node {
  id: ID!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
  name: String!
  slug: String!
  homePreview: Picture
  city: City!
  featured: Boolean!
  popularity: Int!
}

"""A connection to a list of items."""
type NeighbourhoodConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NeighbourhoodEdge]!
  aggregate: AggregateNeighbourhood!
}

input NeighbourhoodCreateInput {
  id: ID
  name: String!
  slug: String!
  featured: Boolean!
  popularity: Int!
  locations: LocationCreateManyWithoutNeighbourHoodInput
  homePreview: PictureCreateOneInput
  city: CityCreateOneWithoutNeighbourhoodsInput!
}

input NeighbourhoodCreateManyWithoutCityInput {
  create: [NeighbourhoodCreateWithoutCityInput!]
  connect: [NeighbourhoodWhereUniqueInput!]
}

input NeighbourhoodCreateOneWithoutLocationsInput {
  create: NeighbourhoodCreateWithoutLocationsInput
  connect: NeighbourhoodWhereUniqueInput
}

input NeighbourhoodCreateWithoutCityInput {
  id: ID
  name: String!
  slug: String!
  featured: Boolean!
  popularity: Int!
  locations: LocationCreateManyWithoutNeighbourHoodInput
  homePreview: PictureCreateOneInput
}

input NeighbourhoodCreateWithoutLocationsInput {
  id: ID
  name: String!
  slug: String!
  featured: Boolean!
  popularity: Int!
  homePreview: PictureCreateOneInput
  city: CityCreateOneWithoutNeighbourhoodsInput!
}

"""An edge in a connection."""
type NeighbourhoodEdge {
  """The item at the end of the edge."""
  node: Neighbourhood!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NeighbourhoodOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  featured_ASC
  featured_DESC
  popularity_ASC
  popularity_DESC
}

type NeighbourhoodPreviousValues {
  id: ID!
  name: String!
  slug: String!
  featured: Boolean!
  popularity: Int!
}

input NeighbourhoodScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [NeighbourhoodScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [NeighbourhoodScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NeighbourhoodScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  featured: Boolean

  """All values that are not equal to given value."""
  featured_not: Boolean
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
}

type NeighbourhoodSubscriptionPayload {
  mutation: MutationType!
  node: Neighbourhood
  updatedFields: [String!]
  previousValues: NeighbourhoodPreviousValues
}

input NeighbourhoodSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NeighbourhoodSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NeighbourhoodSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NeighbourhoodSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NeighbourhoodWhereInput
}

input NeighbourhoodUpdateInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  locations: LocationUpdateManyWithoutNeighbourHoodInput
  homePreview: PictureUpdateOneInput
  city: CityUpdateOneRequiredWithoutNeighbourhoodsInput
}

input NeighbourhoodUpdateManyDataInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
}

input NeighbourhoodUpdateManyMutationInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
}

input NeighbourhoodUpdateManyWithoutCityInput {
  create: [NeighbourhoodCreateWithoutCityInput!]
  connect: [NeighbourhoodWhereUniqueInput!]
  set: [NeighbourhoodWhereUniqueInput!]
  disconnect: [NeighbourhoodWhereUniqueInput!]
  delete: [NeighbourhoodWhereUniqueInput!]
  update: [NeighbourhoodUpdateWithWhereUniqueWithoutCityInput!]
  updateMany: [NeighbourhoodUpdateManyWithWhereNestedInput!]
  deleteMany: [NeighbourhoodScalarWhereInput!]
  upsert: [NeighbourhoodUpsertWithWhereUniqueWithoutCityInput!]
}

input NeighbourhoodUpdateManyWithWhereNestedInput {
  where: NeighbourhoodScalarWhereInput!
  data: NeighbourhoodUpdateManyDataInput!
}

input NeighbourhoodUpdateOneWithoutLocationsInput {
  create: NeighbourhoodCreateWithoutLocationsInput
  connect: NeighbourhoodWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: NeighbourhoodUpdateWithoutLocationsDataInput
  upsert: NeighbourhoodUpsertWithoutLocationsInput
}

input NeighbourhoodUpdateWithoutCityDataInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  locations: LocationUpdateManyWithoutNeighbourHoodInput
  homePreview: PictureUpdateOneInput
}

input NeighbourhoodUpdateWithoutLocationsDataInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  homePreview: PictureUpdateOneInput
  city: CityUpdateOneRequiredWithoutNeighbourhoodsInput
}

input NeighbourhoodUpdateWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput!
  data: NeighbourhoodUpdateWithoutCityDataInput!
}

input NeighbourhoodUpsertWithoutLocationsInput {
  update: NeighbourhoodUpdateWithoutLocationsDataInput!
  create: NeighbourhoodCreateWithoutLocationsInput!
}

input NeighbourhoodUpsertWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput!
  update: NeighbourhoodUpdateWithoutCityDataInput!
  create: NeighbourhoodCreateWithoutCityInput!
}

input NeighbourhoodWhereInput {
  """Logical AND on all given filters."""
  AND: [NeighbourhoodWhereInput!]

  """Logical OR on all given filters."""
  OR: [NeighbourhoodWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NeighbourhoodWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  featured: Boolean

  """All values that are not equal to given value."""
  featured_not: Boolean
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
  locations_every: LocationWhereInput
  locations_some: LocationWhereInput
  locations_none: LocationWhereInput
  homePreview: PictureWhereInput
  city: CityWhereInput
}

input NeighbourhoodWhereUniqueInput {
  id: ID
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notification implements Node {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  user: User!
  link: String!
  readDate: DateTime!
}

enum NOTIFICATION_TYPE {
  OFFER
  INSTANT_BOOK
  RESPONSIVENESS
  NEW_AMENITIES
  HOUSE_RULES
}

"""A connection to a list of items."""
type NotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  id: ID
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
  user: UserCreateOneWithoutNotificationsInput!
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  id: ID
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

"""An edge in a connection."""
type NotificationEdge {
  """The item at the end of the edge."""
  node: Notification!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  link_ASC
  link_DESC
  readDate_ASC
  readDate_DESC
}

type NotificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

input NotificationScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: NOTIFICATION_TYPE

  """All values that are not equal to given value."""
  type_not: NOTIFICATION_TYPE

  """All values that are contained in given list."""
  type_in: [NOTIFICATION_TYPE!]

  """All values that are not contained in given list."""
  type_not_in: [NOTIFICATION_TYPE!]
  link: String

  """All values that are not equal to given value."""
  link_not: String

  """All values that are contained in given list."""
  link_in: [String!]

  """All values that are not contained in given list."""
  link_not_in: [String!]

  """All values less than the given value."""
  link_lt: String

  """All values less than or equal the given value."""
  link_lte: String

  """All values greater than the given value."""
  link_gt: String

  """All values greater than or equal the given value."""
  link_gte: String

  """All values containing the given string."""
  link_contains: String

  """All values not containing the given string."""
  link_not_contains: String

  """All values starting with the given string."""
  link_starts_with: String

  """All values not starting with the given string."""
  link_not_starts_with: String

  """All values ending with the given string."""
  link_ends_with: String

  """All values not ending with the given string."""
  link_not_ends_with: String
  readDate: DateTime

  """All values that are not equal to given value."""
  readDate_not: DateTime

  """All values that are contained in given list."""
  readDate_in: [DateTime!]

  """All values that are not contained in given list."""
  readDate_not_in: [DateTime!]

  """All values less than the given value."""
  readDate_lt: DateTime

  """All values less than or equal the given value."""
  readDate_lte: DateTime

  """All values greater than the given value."""
  readDate_gt: DateTime

  """All values greater than or equal the given value."""
  readDate_gte: DateTime
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
}

input NotificationUpdateInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
  user: UserUpdateOneRequiredWithoutNotificationsInput
}

input NotificationUpdateManyDataInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

input NotificationUpdateManyMutationInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
  set: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  delete: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [NotificationUpdateManyWithWhereNestedInput!]
  deleteMany: [NotificationScalarWhereInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
}

input NotificationUpdateManyWithWhereNestedInput {
  where: NotificationScalarWhereInput!
  data: NotificationUpdateManyDataInput!
}

input NotificationUpdateWithoutUserDataInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

input NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutUserDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutUserDataInput!
  create: NotificationCreateWithoutUserInput!
}

input NotificationWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: NOTIFICATION_TYPE

  """All values that are not equal to given value."""
  type_not: NOTIFICATION_TYPE

  """All values that are contained in given list."""
  type_in: [NOTIFICATION_TYPE!]

  """All values that are not contained in given list."""
  type_not_in: [NOTIFICATION_TYPE!]
  link: String

  """All values that are not equal to given value."""
  link_not: String

  """All values that are contained in given list."""
  link_in: [String!]

  """All values that are not contained in given list."""
  link_not_in: [String!]

  """All values less than the given value."""
  link_lt: String

  """All values less than or equal the given value."""
  link_lte: String

  """All values greater than the given value."""
  link_gt: String

  """All values greater than or equal the given value."""
  link_gte: String

  """All values containing the given string."""
  link_contains: String

  """All values not containing the given string."""
  link_not_contains: String

  """All values starting with the given string."""
  link_starts_with: String

  """All values not starting with the given string."""
  link_not_starts_with: String

  """All values ending with the given string."""
  link_ends_with: String

  """All values not ending with the given string."""
  link_not_ends_with: String
  readDate: DateTime

  """All values that are not equal to given value."""
  readDate_not: DateTime

  """All values that are contained in given list."""
  readDate_in: [DateTime!]

  """All values that are not contained in given list."""
  readDate_not_in: [DateTime!]

  """All values less than the given value."""
  readDate_lt: DateTime

  """All values less than or equal the given value."""
  readDate_lte: DateTime

  """All values greater than the given value."""
  readDate_gt: DateTime

  """All values greater than or equal the given value."""
  readDate_gte: DateTime
  user: UserWhereInput
}

input NotificationWhereUniqueInput {
  id: ID
}

type Order implements Node {
  id: ID!
  createdAt: DateTime!
  bookee: User!
  place: Place!
  startDate: DateTime!
  endDate: DateTime!
  payment: Payment
}

"""A connection to a list of items."""
type OrderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutOrdersInput!
  place: PlaceCreateOneWithoutOrdersInput!
  payment: PaymentCreateOneWithoutOrderInput
}

input OrderCreateManyWithoutBookeeInput {
  create: [OrderCreateWithoutBookeeInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateManyWithoutPlaceInput {
  create: [OrderCreateWithoutPlaceInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateOneWithoutPaymentInput {
  create: OrderCreateWithoutPaymentInput
  connect: OrderWhereUniqueInput
}

input OrderCreateWithoutBookeeInput {
  id: ID
  startDate: DateTime!
  endDate: DateTime!
  place: PlaceCreateOneWithoutOrdersInput!
  payment: PaymentCreateOneWithoutOrderInput
}

input OrderCreateWithoutPaymentInput {
  id: ID
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutOrdersInput!
  place: PlaceCreateOneWithoutOrdersInput!
}

input OrderCreateWithoutPlaceInput {
  id: ID
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutOrdersInput!
  payment: PaymentCreateOneWithoutOrderInput
}

"""An edge in a connection."""
type OrderEdge {
  """The item at the end of the edge."""
  node: Order!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
}

type OrderPreviousValues {
  id: ID!
  createdAt: DateTime!
  startDate: DateTime!
  endDate: DateTime!
}

input OrderScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  startDate: DateTime

  """All values that are not equal to given value."""
  startDate_not: DateTime

  """All values that are contained in given list."""
  startDate_in: [DateTime!]

  """All values that are not contained in given list."""
  startDate_not_in: [DateTime!]

  """All values less than the given value."""
  startDate_lt: DateTime

  """All values less than or equal the given value."""
  startDate_lte: DateTime

  """All values greater than the given value."""
  startDate_gt: DateTime

  """All values greater than or equal the given value."""
  startDate_gte: DateTime
  endDate: DateTime

  """All values that are not equal to given value."""
  endDate_not: DateTime

  """All values that are contained in given list."""
  endDate_in: [DateTime!]

  """All values that are not contained in given list."""
  endDate_not_in: [DateTime!]

  """All values less than the given value."""
  endDate_lt: DateTime

  """All values less than or equal the given value."""
  endDate_lte: DateTime

  """All values greater than the given value."""
  endDate_gt: DateTime

  """All values greater than or equal the given value."""
  endDate_gte: DateTime
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
}

input OrderUpdateInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneRequiredWithoutOrdersInput
  place: PlaceUpdateOneRequiredWithoutOrdersInput
  payment: PaymentUpdateOneWithoutOrderInput
}

input OrderUpdateManyDataInput {
  startDate: DateTime
  endDate: DateTime
}

input OrderUpdateManyMutationInput {
  startDate: DateTime
  endDate: DateTime
}

input OrderUpdateManyWithoutBookeeInput {
  create: [OrderCreateWithoutBookeeInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  delete: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutBookeeInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
  deleteMany: [OrderScalarWhereInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutBookeeInput!]
}

input OrderUpdateManyWithoutPlaceInput {
  create: [OrderCreateWithoutPlaceInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  delete: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutPlaceInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
  deleteMany: [OrderScalarWhereInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutPlaceInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateOneRequiredWithoutPaymentInput {
  create: OrderCreateWithoutPaymentInput
  connect: OrderWhereUniqueInput
  update: OrderUpdateWithoutPaymentDataInput
  upsert: OrderUpsertWithoutPaymentInput
}

input OrderUpdateWithoutBookeeDataInput {
  startDate: DateTime
  endDate: DateTime
  place: PlaceUpdateOneRequiredWithoutOrdersInput
  payment: PaymentUpdateOneWithoutOrderInput
}

input OrderUpdateWithoutPaymentDataInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneRequiredWithoutOrdersInput
  place: PlaceUpdateOneRequiredWithoutOrdersInput
}

input OrderUpdateWithoutPlaceDataInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneRequiredWithoutOrdersInput
  payment: PaymentUpdateOneWithoutOrderInput
}

input OrderUpdateWithWhereUniqueWithoutBookeeInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutBookeeDataInput!
}

input OrderUpdateWithWhereUniqueWithoutPlaceInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutPlaceDataInput!
}

input OrderUpsertWithoutPaymentInput {
  update: OrderUpdateWithoutPaymentDataInput!
  create: OrderCreateWithoutPaymentInput!
}

input OrderUpsertWithWhereUniqueWithoutBookeeInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutBookeeDataInput!
  create: OrderCreateWithoutBookeeInput!
}

input OrderUpsertWithWhereUniqueWithoutPlaceInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutPlaceDataInput!
  create: OrderCreateWithoutPlaceInput!
}

input OrderWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  startDate: DateTime

  """All values that are not equal to given value."""
  startDate_not: DateTime

  """All values that are contained in given list."""
  startDate_in: [DateTime!]

  """All values that are not contained in given list."""
  startDate_not_in: [DateTime!]

  """All values less than the given value."""
  startDate_lt: DateTime

  """All values less than or equal the given value."""
  startDate_lte: DateTime

  """All values greater than the given value."""
  startDate_gt: DateTime

  """All values greater than or equal the given value."""
  startDate_gte: DateTime
  endDate: DateTime

  """All values that are not equal to given value."""
  endDate_not: DateTime

  """All values that are contained in given list."""
  endDate_in: [DateTime!]

  """All values that are not contained in given list."""
  endDate_not_in: [DateTime!]

  """All values less than the given value."""
  endDate_lt: DateTime

  """All values less than or equal the given value."""
  endDate_lte: DateTime

  """All values greater than the given value."""
  endDate_gt: DateTime

  """All values greater than or equal the given value."""
  endDate_gte: DateTime
  bookee: UserWhereInput
  place: PlaceWhereInput
  payment: PaymentWhereInput
}

input OrderWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Payment implements Node {
  id: ID!
  createdAt: DateTime!
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  order: Order!
  paymentMethod: PaymentAccount!
}

enum PAYMENT_PROVIDER {
  PAYPAL
  PAYTM
  CREDIT_CARD
  DEBIT_CARD
}

type PaymentAccount implements Node {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
  user: User!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment!]
  paypal: PaypalInformation
  creditcard: CreditCardInformation
}

"""A connection to a list of items."""
type PaymentAccountConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentAccountEdge]!
  aggregate: AggregatePaymentAccount!
}

input PaymentAccountCreateInput {
  id: ID
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateManyWithoutUserInput {
  create: [PaymentAccountCreateWithoutUserInput!]
  connect: [PaymentAccountWhereUniqueInput!]
}

input PaymentAccountCreateOneInput {
  create: PaymentAccountCreateInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateWithoutCreditcardInput {
  id: ID
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaymentsInput {
  id: ID
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaypalInput {
  id: ID
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutUserInput {
  id: ID
  type: PAYMENT_PROVIDER
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

"""An edge in a connection."""
type PaymentAccountEdge {
  """The item at the end of the edge."""
  node: PaymentAccount!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentAccountOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
}

type PaymentAccountPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
}

input PaymentAccountScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentAccountScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentAccountScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentAccountScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: PAYMENT_PROVIDER

  """All values that are not equal to given value."""
  type_not: PAYMENT_PROVIDER

  """All values that are contained in given list."""
  type_in: [PAYMENT_PROVIDER!]

  """All values that are not contained in given list."""
  type_not_in: [PAYMENT_PROVIDER!]
}

type PaymentAccountSubscriptionPayload {
  mutation: MutationType!
  node: PaymentAccount
  updatedFields: [String!]
  previousValues: PaymentAccountPreviousValues
}

input PaymentAccountSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentAccountSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentAccountSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentAccountSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentAccountWhereInput
}

input PaymentAccountUpdateDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneRequiredWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneRequiredWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateManyDataInput {
  type: PAYMENT_PROVIDER
}

input PaymentAccountUpdateManyMutationInput {
  type: PAYMENT_PROVIDER
}

input PaymentAccountUpdateManyWithoutUserInput {
  create: [PaymentAccountCreateWithoutUserInput!]
  connect: [PaymentAccountWhereUniqueInput!]
  set: [PaymentAccountWhereUniqueInput!]
  disconnect: [PaymentAccountWhereUniqueInput!]
  delete: [PaymentAccountWhereUniqueInput!]
  update: [PaymentAccountUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [PaymentAccountUpdateManyWithWhereNestedInput!]
  deleteMany: [PaymentAccountScalarWhereInput!]
  upsert: [PaymentAccountUpsertWithWhereUniqueWithoutUserInput!]
}

input PaymentAccountUpdateManyWithWhereNestedInput {
  where: PaymentAccountScalarWhereInput!
  data: PaymentAccountUpdateManyDataInput!
}

input PaymentAccountUpdateOneInput {
  create: PaymentAccountCreateInput
  connect: PaymentAccountWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaymentAccountUpdateDataInput
  upsert: PaymentAccountUpsertNestedInput
}

input PaymentAccountUpdateOneRequiredInput {
  create: PaymentAccountCreateInput
  connect: PaymentAccountWhereUniqueInput
  update: PaymentAccountUpdateDataInput
  upsert: PaymentAccountUpsertNestedInput
}

input PaymentAccountUpdateOneRequiredWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  upsert: PaymentAccountUpsertWithoutPaymentsInput
}

input PaymentAccountUpdateOneRequiredWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  connect: PaymentAccountWhereUniqueInput
  update: PaymentAccountUpdateWithoutPaypalDataInput
  upsert: PaymentAccountUpsertWithoutPaypalInput
}

input PaymentAccountUpdateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  connect: PaymentAccountWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaymentAccountUpdateWithoutCreditcardDataInput
  upsert: PaymentAccountUpsertWithoutCreditcardInput
}

input PaymentAccountUpdateWithoutCreditcardDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneRequiredWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaymentsDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneRequiredWithoutPaymentAccountInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaypalDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneRequiredWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutUserDataInput {
  type: PAYMENT_PROVIDER
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput!
  data: PaymentAccountUpdateWithoutUserDataInput!
}

input PaymentAccountUpsertNestedInput {
  update: PaymentAccountUpdateDataInput!
  create: PaymentAccountCreateInput!
}

input PaymentAccountUpsertWithoutCreditcardInput {
  update: PaymentAccountUpdateWithoutCreditcardDataInput!
  create: PaymentAccountCreateWithoutCreditcardInput!
}

input PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput!
  create: PaymentAccountCreateWithoutPaymentsInput!
}

input PaymentAccountUpsertWithoutPaypalInput {
  update: PaymentAccountUpdateWithoutPaypalDataInput!
  create: PaymentAccountCreateWithoutPaypalInput!
}

input PaymentAccountUpsertWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput!
  update: PaymentAccountUpdateWithoutUserDataInput!
  create: PaymentAccountCreateWithoutUserInput!
}

input PaymentAccountWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentAccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentAccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentAccountWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: PAYMENT_PROVIDER

  """All values that are not equal to given value."""
  type_not: PAYMENT_PROVIDER

  """All values that are contained in given list."""
  type_in: [PAYMENT_PROVIDER!]

  """All values that are not contained in given list."""
  type_not_in: [PAYMENT_PROVIDER!]
  user: UserWhereInput
  payments_every: PaymentWhereInput
  payments_some: PaymentWhereInput
  payments_none: PaymentWhereInput
  paypal: PaypalInformationWhereInput
  creditcard: CreditCardInformationWhereInput
}

input PaymentAccountWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type PaymentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentEdge]!
  aggregate: AggregatePayment!
}

input PaymentCreateInput {
  id: ID
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  order: OrderCreateOneWithoutPaymentInput!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentCreateManyWithoutPaymentMethodInput {
  create: [PaymentCreateWithoutPaymentMethodInput!]
  connect: [PaymentWhereUniqueInput!]
}

input PaymentCreateOneWithoutOrderInput {
  create: PaymentCreateWithoutOrderInput
  connect: PaymentWhereUniqueInput
}

input PaymentCreateWithoutOrderInput {
  id: ID
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentCreateWithoutPaymentMethodInput {
  id: ID
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  order: OrderCreateOneWithoutPaymentInput!
}

"""An edge in a connection."""
type PaymentEdge {
  """The item at the end of the edge."""
  node: Payment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  serviceFee_ASC
  serviceFee_DESC
  placePrice_ASC
  placePrice_DESC
  totalPrice_ASC
  totalPrice_DESC
}

type PaymentPreviousValues {
  id: ID!
  createdAt: DateTime!
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
}

input PaymentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  serviceFee: Float

  """All values that are not equal to given value."""
  serviceFee_not: Float

  """All values that are contained in given list."""
  serviceFee_in: [Float!]

  """All values that are not contained in given list."""
  serviceFee_not_in: [Float!]

  """All values less than the given value."""
  serviceFee_lt: Float

  """All values less than or equal the given value."""
  serviceFee_lte: Float

  """All values greater than the given value."""
  serviceFee_gt: Float

  """All values greater than or equal the given value."""
  serviceFee_gte: Float
  placePrice: Float

  """All values that are not equal to given value."""
  placePrice_not: Float

  """All values that are contained in given list."""
  placePrice_in: [Float!]

  """All values that are not contained in given list."""
  placePrice_not_in: [Float!]

  """All values less than the given value."""
  placePrice_lt: Float

  """All values less than or equal the given value."""
  placePrice_lte: Float

  """All values greater than the given value."""
  placePrice_gt: Float

  """All values greater than or equal the given value."""
  placePrice_gte: Float
  totalPrice: Float

  """All values that are not equal to given value."""
  totalPrice_not: Float

  """All values that are contained in given list."""
  totalPrice_in: [Float!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [Float!]

  """All values less than the given value."""
  totalPrice_lt: Float

  """All values less than or equal the given value."""
  totalPrice_lte: Float

  """All values greater than the given value."""
  totalPrice_gt: Float

  """All values greater than or equal the given value."""
  totalPrice_gte: Float
}

type PaymentSubscriptionPayload {
  mutation: MutationType!
  node: Payment
  updatedFields: [String!]
  previousValues: PaymentPreviousValues
}

input PaymentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentWhereInput
}

input PaymentUpdateInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  order: OrderUpdateOneRequiredWithoutPaymentInput
  paymentMethod: PaymentAccountUpdateOneRequiredWithoutPaymentsInput
}

input PaymentUpdateManyDataInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
}

input PaymentUpdateManyMutationInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
}

input PaymentUpdateManyWithoutPaymentMethodInput {
  create: [PaymentCreateWithoutPaymentMethodInput!]
  connect: [PaymentWhereUniqueInput!]
  set: [PaymentWhereUniqueInput!]
  disconnect: [PaymentWhereUniqueInput!]
  delete: [PaymentWhereUniqueInput!]
  update: [PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput!]
  updateMany: [PaymentUpdateManyWithWhereNestedInput!]
  deleteMany: [PaymentScalarWhereInput!]
  upsert: [PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput!]
}

input PaymentUpdateManyWithWhereNestedInput {
  where: PaymentScalarWhereInput!
  data: PaymentUpdateManyDataInput!
}

input PaymentUpdateOneWithoutOrderInput {
  create: PaymentCreateWithoutOrderInput
  connect: PaymentWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaymentUpdateWithoutOrderDataInput
  upsert: PaymentUpsertWithoutOrderInput
}

input PaymentUpdateWithoutOrderDataInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  paymentMethod: PaymentAccountUpdateOneRequiredWithoutPaymentsInput
}

input PaymentUpdateWithoutPaymentMethodDataInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  order: OrderUpdateOneRequiredWithoutPaymentInput
}

input PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput!
  data: PaymentUpdateWithoutPaymentMethodDataInput!
}

input PaymentUpsertWithoutOrderInput {
  update: PaymentUpdateWithoutOrderDataInput!
  create: PaymentCreateWithoutOrderInput!
}

input PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput!
  update: PaymentUpdateWithoutPaymentMethodDataInput!
  create: PaymentCreateWithoutPaymentMethodInput!
}

input PaymentWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  serviceFee: Float

  """All values that are not equal to given value."""
  serviceFee_not: Float

  """All values that are contained in given list."""
  serviceFee_in: [Float!]

  """All values that are not contained in given list."""
  serviceFee_not_in: [Float!]

  """All values less than the given value."""
  serviceFee_lt: Float

  """All values less than or equal the given value."""
  serviceFee_lte: Float

  """All values greater than the given value."""
  serviceFee_gt: Float

  """All values greater than or equal the given value."""
  serviceFee_gte: Float
  placePrice: Float

  """All values that are not equal to given value."""
  placePrice_not: Float

  """All values that are contained in given list."""
  placePrice_in: [Float!]

  """All values that are not contained in given list."""
  placePrice_not_in: [Float!]

  """All values less than the given value."""
  placePrice_lt: Float

  """All values less than or equal the given value."""
  placePrice_lte: Float

  """All values greater than the given value."""
  placePrice_gt: Float

  """All values greater than or equal the given value."""
  placePrice_gte: Float
  totalPrice: Float

  """All values that are not equal to given value."""
  totalPrice_not: Float

  """All values that are contained in given list."""
  totalPrice_in: [Float!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [Float!]

  """All values less than the given value."""
  totalPrice_lt: Float

  """All values less than or equal the given value."""
  totalPrice_lte: Float

  """All values greater than the given value."""
  totalPrice_gt: Float

  """All values greater than or equal the given value."""
  totalPrice_gte: Float
  order: OrderWhereInput
  paymentMethod: PaymentAccountWhereInput
}

input PaymentWhereUniqueInput {
  id: ID
}

type PaypalInformation implements Node {
  id: ID!
  createdAt: DateTime!
  email: String!
  paymentAccount: PaymentAccount!
}

"""A connection to a list of items."""
type PaypalInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaypalInformationEdge]!
  aggregate: AggregatePaypalInformation!
}

input PaypalInformationCreateInput {
  id: ID
  email: String!
  paymentAccount: PaymentAccountCreateOneWithoutPaypalInput!
}

input PaypalInformationCreateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  connect: PaypalInformationWhereUniqueInput
}

input PaypalInformationCreateWithoutPaymentAccountInput {
  id: ID
  email: String!
}

"""An edge in a connection."""
type PaypalInformationEdge {
  """The item at the end of the edge."""
  node: PaypalInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaypalInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
}

type PaypalInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  email: String!
}

type PaypalInformationSubscriptionPayload {
  mutation: MutationType!
  node: PaypalInformation
  updatedFields: [String!]
  previousValues: PaypalInformationPreviousValues
}

input PaypalInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaypalInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaypalInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaypalInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaypalInformationWhereInput
}

input PaypalInformationUpdateInput {
  email: String
  paymentAccount: PaymentAccountUpdateOneRequiredWithoutPaypalInput
}

input PaypalInformationUpdateManyMutationInput {
  email: String
}

input PaypalInformationUpdateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  connect: PaypalInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput
  upsert: PaypalInformationUpsertWithoutPaymentAccountInput
}

input PaypalInformationUpdateWithoutPaymentAccountDataInput {
  email: String
}

input PaypalInformationUpsertWithoutPaymentAccountInput {
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput!
  create: PaypalInformationCreateWithoutPaymentAccountInput!
}

input PaypalInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [PaypalInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaypalInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaypalInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input PaypalInformationWhereUniqueInput {
  id: ID
}

type PaytmInformation implements Node {
  id: ID!
  createdAt: DateTime!
  phone: String!
  paymentAccount: PaymentAccount!
}

"""A connection to a list of items."""
type PaytmInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaytmInformationEdge]!
  aggregate: AggregatePaytmInformation!
}

input PaytmInformationCreateInput {
  id: ID
  phone: String!
  paymentAccount: PaymentAccountCreateOneInput!
}

"""An edge in a connection."""
type PaytmInformationEdge {
  """The item at the end of the edge."""
  node: PaytmInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaytmInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  phone_ASC
  phone_DESC
}

type PaytmInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  phone: String!
}

type PaytmInformationSubscriptionPayload {
  mutation: MutationType!
  node: PaytmInformation
  updatedFields: [String!]
  previousValues: PaytmInformationPreviousValues
}

input PaytmInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaytmInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaytmInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaytmInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaytmInformationWhereInput
}

input PaytmInformationUpdateInput {
  phone: String
  paymentAccount: PaymentAccountUpdateOneRequiredInput
}

input PaytmInformationUpdateManyMutationInput {
  phone: String
}

input PaytmInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [PaytmInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaytmInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaytmInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input PaytmInformationWhereUniqueInput {
  id: ID
}

type Picture implements Node {
  id: ID!
  url: String!
}

"""A connection to a list of items."""
type PictureConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PictureEdge]!
  aggregate: AggregatePicture!
}

input PictureCreateInput {
  id: ID
  url: String!
}

input PictureCreateManyInput {
  create: [PictureCreateInput!]
  connect: [PictureWhereUniqueInput!]
}

input PictureCreateOneInput {
  create: PictureCreateInput
  connect: PictureWhereUniqueInput
}

"""An edge in a connection."""
type PictureEdge {
  """The item at the end of the edge."""
  node: Picture!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PictureOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
}

type PicturePreviousValues {
  id: ID!
  url: String!
}

input PictureScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PictureScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PictureScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PictureScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

type PictureSubscriptionPayload {
  mutation: MutationType!
  node: Picture
  updatedFields: [String!]
  previousValues: PicturePreviousValues
}

input PictureSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PictureSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PictureSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PictureSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PictureWhereInput
}

input PictureUpdateDataInput {
  url: String
}

input PictureUpdateInput {
  url: String
}

input PictureUpdateManyDataInput {
  url: String
}

input PictureUpdateManyInput {
  create: [PictureCreateInput!]
  connect: [PictureWhereUniqueInput!]
  set: [PictureWhereUniqueInput!]
  disconnect: [PictureWhereUniqueInput!]
  delete: [PictureWhereUniqueInput!]
  update: [PictureUpdateWithWhereUniqueNestedInput!]
  updateMany: [PictureUpdateManyWithWhereNestedInput!]
  deleteMany: [PictureScalarWhereInput!]
  upsert: [PictureUpsertWithWhereUniqueNestedInput!]
}

input PictureUpdateManyMutationInput {
  url: String
}

input PictureUpdateManyWithWhereNestedInput {
  where: PictureScalarWhereInput!
  data: PictureUpdateManyDataInput!
}

input PictureUpdateOneInput {
  create: PictureCreateInput
  connect: PictureWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PictureUpdateDataInput
  upsert: PictureUpsertNestedInput
}

input PictureUpdateOneRequiredInput {
  create: PictureCreateInput
  connect: PictureWhereUniqueInput
  update: PictureUpdateDataInput
  upsert: PictureUpsertNestedInput
}

input PictureUpdateWithWhereUniqueNestedInput {
  where: PictureWhereUniqueInput!
  data: PictureUpdateDataInput!
}

input PictureUpsertNestedInput {
  update: PictureUpdateDataInput!
  create: PictureCreateInput!
}

input PictureUpsertWithWhereUniqueNestedInput {
  where: PictureWhereUniqueInput!
  update: PictureUpdateDataInput!
  create: PictureCreateInput!
}

input PictureWhereInput {
  """Logical AND on all given filters."""
  AND: [PictureWhereInput!]

  """Logical OR on all given filters."""
  OR: [PictureWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PictureWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

input PictureWhereUniqueInput {
  id: ID
}

type Place implements Node {
  id: ID!
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  amenities: Amenities!
  host: User!
  pricing: Pricing!
  location: Location!
  views: Views!
  guestRequirements: GuestRequirements
  policies: Policies
  houseRules: HouseRules
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  popularity: Int!
}

enum PLACE_SIZES {
  ENTIRE_HOUSE
  ENTIRE_APARTMENT
  ENTIRE_EARTH_HOUSE
  ENTIRE_CABIN
  ENTIRE_VILLA
  ENTIRE_PLACE
  ENTIRE_BOAT
  PRIVATE_ROOM
}

"""A connection to a list of items."""
type PlaceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  orders: OrderCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateManyWithoutHostInput {
  create: [PlaceCreateWithoutHostInput!]
  connect: [PlaceWhereUniqueInput!]
}

input PlaceCreateOneWithoutAmenitiesInput {
  create: PlaceCreateWithoutAmenitiesInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutGuestRequirementsInput {
  create: PlaceCreateWithoutGuestRequirementsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutLocationInput {
  create: PlaceCreateWithoutLocationInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutOrdersInput {
  create: PlaceCreateWithoutOrdersInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutPoliciesInput {
  create: PlaceCreateWithoutPoliciesInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutPricingInput {
  create: PlaceCreateWithoutPricingInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutReviewsInput {
  create: PlaceCreateWithoutReviewsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutViewsInput {
  create: PlaceCreateWithoutViewsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateWithoutAmenitiesInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  orders: OrderCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutGuestRequirementsInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  orders: OrderCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutHostInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  orders: OrderCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutLocationInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  orders: OrderCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutOrdersInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutPoliciesInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  orders: OrderCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutPricingInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  orders: OrderCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutReviewsInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  orders: OrderCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutViewsInput {
  id: ID
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  orders: OrderCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

"""An edge in a connection."""
type PlaceEdge {
  """The item at the end of the edge."""
  node: Place!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  size_ASC
  size_DESC
  shortDescription_ASC
  shortDescription_DESC
  description_ASC
  description_DESC
  slug_ASC
  slug_DESC
  maxGuests_ASC
  maxGuests_DESC
  numBedrooms_ASC
  numBedrooms_DESC
  numBeds_ASC
  numBeds_DESC
  numBaths_ASC
  numBaths_DESC
  popularity_ASC
  popularity_DESC
}

type PlacePreviousValues {
  id: ID!
  name: String!
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
}

input PlaceScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  size: PLACE_SIZES

  """All values that are not equal to given value."""
  size_not: PLACE_SIZES

  """All values that are contained in given list."""
  size_in: [PLACE_SIZES!]

  """All values that are not contained in given list."""
  size_not_in: [PLACE_SIZES!]
  shortDescription: String

  """All values that are not equal to given value."""
  shortDescription_not: String

  """All values that are contained in given list."""
  shortDescription_in: [String!]

  """All values that are not contained in given list."""
  shortDescription_not_in: [String!]

  """All values less than the given value."""
  shortDescription_lt: String

  """All values less than or equal the given value."""
  shortDescription_lte: String

  """All values greater than the given value."""
  shortDescription_gt: String

  """All values greater than or equal the given value."""
  shortDescription_gte: String

  """All values containing the given string."""
  shortDescription_contains: String

  """All values not containing the given string."""
  shortDescription_not_contains: String

  """All values starting with the given string."""
  shortDescription_starts_with: String

  """All values not starting with the given string."""
  shortDescription_not_starts_with: String

  """All values ending with the given string."""
  shortDescription_ends_with: String

  """All values not ending with the given string."""
  shortDescription_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  maxGuests: Int

  """All values that are not equal to given value."""
  maxGuests_not: Int

  """All values that are contained in given list."""
  maxGuests_in: [Int!]

  """All values that are not contained in given list."""
  maxGuests_not_in: [Int!]

  """All values less than the given value."""
  maxGuests_lt: Int

  """All values less than or equal the given value."""
  maxGuests_lte: Int

  """All values greater than the given value."""
  maxGuests_gt: Int

  """All values greater than or equal the given value."""
  maxGuests_gte: Int
  numBedrooms: Int

  """All values that are not equal to given value."""
  numBedrooms_not: Int

  """All values that are contained in given list."""
  numBedrooms_in: [Int!]

  """All values that are not contained in given list."""
  numBedrooms_not_in: [Int!]

  """All values less than the given value."""
  numBedrooms_lt: Int

  """All values less than or equal the given value."""
  numBedrooms_lte: Int

  """All values greater than the given value."""
  numBedrooms_gt: Int

  """All values greater than or equal the given value."""
  numBedrooms_gte: Int
  numBeds: Int

  """All values that are not equal to given value."""
  numBeds_not: Int

  """All values that are contained in given list."""
  numBeds_in: [Int!]

  """All values that are not contained in given list."""
  numBeds_not_in: [Int!]

  """All values less than the given value."""
  numBeds_lt: Int

  """All values less than or equal the given value."""
  numBeds_lte: Int

  """All values greater than the given value."""
  numBeds_gt: Int

  """All values greater than or equal the given value."""
  numBeds_gte: Int
  numBaths: Int

  """All values that are not equal to given value."""
  numBaths_not: Int

  """All values that are contained in given list."""
  numBaths_in: [Int!]

  """All values that are not contained in given list."""
  numBaths_not_in: [Int!]

  """All values less than the given value."""
  numBaths_lt: Int

  """All values less than or equal the given value."""
  numBaths_lte: Int

  """All values greater than the given value."""
  numBaths_gt: Int

  """All values greater than or equal the given value."""
  numBaths_gte: Int
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
}

input PlaceUpdateInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneRequiredWithoutPlaceInput
  host: UserUpdateOneRequiredWithoutOwnedPlacesInput
  pricing: PricingUpdateOneRequiredWithoutPlaceInput
  location: LocationUpdateOneRequiredWithoutPlaceInput
  views: ViewsUpdateOneRequiredWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  orders: OrderUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateManyDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
}

input PlaceUpdateManyMutationInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
}

input PlaceUpdateManyWithoutHostInput {
  create: [PlaceCreateWithoutHostInput!]
  connect: [PlaceWhereUniqueInput!]
  set: [PlaceWhereUniqueInput!]
  disconnect: [PlaceWhereUniqueInput!]
  delete: [PlaceWhereUniqueInput!]
  update: [PlaceUpdateWithWhereUniqueWithoutHostInput!]
  updateMany: [PlaceUpdateManyWithWhereNestedInput!]
  deleteMany: [PlaceScalarWhereInput!]
  upsert: [PlaceUpsertWithWhereUniqueWithoutHostInput!]
}

input PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput!
  data: PlaceUpdateManyDataInput!
}

input PlaceUpdateOneRequiredWithoutAmenitiesInput {
  create: PlaceCreateWithoutAmenitiesInput
  connect: PlaceWhereUniqueInput
  update: PlaceUpdateWithoutAmenitiesDataInput
  upsert: PlaceUpsertWithoutAmenitiesInput
}

input PlaceUpdateOneRequiredWithoutGuestRequirementsInput {
  create: PlaceCreateWithoutGuestRequirementsInput
  connect: PlaceWhereUniqueInput
  update: PlaceUpdateWithoutGuestRequirementsDataInput
  upsert: PlaceUpsertWithoutGuestRequirementsInput
}

input PlaceUpdateOneRequiredWithoutOrdersInput {
  create: PlaceCreateWithoutOrdersInput
  connect: PlaceWhereUniqueInput
  update: PlaceUpdateWithoutOrdersDataInput
  upsert: PlaceUpsertWithoutOrdersInput
}

input PlaceUpdateOneRequiredWithoutPoliciesInput {
  create: PlaceCreateWithoutPoliciesInput
  connect: PlaceWhereUniqueInput
  update: PlaceUpdateWithoutPoliciesDataInput
  upsert: PlaceUpsertWithoutPoliciesInput
}

input PlaceUpdateOneRequiredWithoutPricingInput {
  create: PlaceCreateWithoutPricingInput
  connect: PlaceWhereUniqueInput
  update: PlaceUpdateWithoutPricingDataInput
  upsert: PlaceUpsertWithoutPricingInput
}

input PlaceUpdateOneRequiredWithoutReviewsInput {
  create: PlaceCreateWithoutReviewsInput
  connect: PlaceWhereUniqueInput
  update: PlaceUpdateWithoutReviewsDataInput
  upsert: PlaceUpsertWithoutReviewsInput
}

input PlaceUpdateOneRequiredWithoutViewsInput {
  create: PlaceCreateWithoutViewsInput
  connect: PlaceWhereUniqueInput
  update: PlaceUpdateWithoutViewsDataInput
  upsert: PlaceUpsertWithoutViewsInput
}

input PlaceUpdateOneWithoutLocationInput {
  create: PlaceCreateWithoutLocationInput
  connect: PlaceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PlaceUpdateWithoutLocationDataInput
  upsert: PlaceUpsertWithoutLocationInput
}

input PlaceUpdateWithoutAmenitiesDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  host: UserUpdateOneRequiredWithoutOwnedPlacesInput
  pricing: PricingUpdateOneRequiredWithoutPlaceInput
  location: LocationUpdateOneRequiredWithoutPlaceInput
  views: ViewsUpdateOneRequiredWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  orders: OrderUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutGuestRequirementsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneRequiredWithoutPlaceInput
  host: UserUpdateOneRequiredWithoutOwnedPlacesInput
  pricing: PricingUpdateOneRequiredWithoutPlaceInput
  location: LocationUpdateOneRequiredWithoutPlaceInput
  views: ViewsUpdateOneRequiredWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  orders: OrderUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutHostDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneRequiredWithoutPlaceInput
  pricing: PricingUpdateOneRequiredWithoutPlaceInput
  location: LocationUpdateOneRequiredWithoutPlaceInput
  views: ViewsUpdateOneRequiredWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  orders: OrderUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutLocationDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneRequiredWithoutPlaceInput
  host: UserUpdateOneRequiredWithoutOwnedPlacesInput
  pricing: PricingUpdateOneRequiredWithoutPlaceInput
  views: ViewsUpdateOneRequiredWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  orders: OrderUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutOrdersDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneRequiredWithoutPlaceInput
  host: UserUpdateOneRequiredWithoutOwnedPlacesInput
  pricing: PricingUpdateOneRequiredWithoutPlaceInput
  location: LocationUpdateOneRequiredWithoutPlaceInput
  views: ViewsUpdateOneRequiredWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutPoliciesDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneRequiredWithoutPlaceInput
  host: UserUpdateOneRequiredWithoutOwnedPlacesInput
  pricing: PricingUpdateOneRequiredWithoutPlaceInput
  location: LocationUpdateOneRequiredWithoutPlaceInput
  views: ViewsUpdateOneRequiredWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  orders: OrderUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutPricingDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneRequiredWithoutPlaceInput
  host: UserUpdateOneRequiredWithoutOwnedPlacesInput
  location: LocationUpdateOneRequiredWithoutPlaceInput
  views: ViewsUpdateOneRequiredWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  orders: OrderUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutReviewsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  amenities: AmenitiesUpdateOneRequiredWithoutPlaceInput
  host: UserUpdateOneRequiredWithoutOwnedPlacesInput
  pricing: PricingUpdateOneRequiredWithoutPlaceInput
  location: LocationUpdateOneRequiredWithoutPlaceInput
  views: ViewsUpdateOneRequiredWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  orders: OrderUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutViewsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneRequiredWithoutPlaceInput
  host: UserUpdateOneRequiredWithoutOwnedPlacesInput
  pricing: PricingUpdateOneRequiredWithoutPlaceInput
  location: LocationUpdateOneRequiredWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  orders: OrderUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput!
  data: PlaceUpdateWithoutHostDataInput!
}

input PlaceUpsertWithoutAmenitiesInput {
  update: PlaceUpdateWithoutAmenitiesDataInput!
  create: PlaceCreateWithoutAmenitiesInput!
}

input PlaceUpsertWithoutGuestRequirementsInput {
  update: PlaceUpdateWithoutGuestRequirementsDataInput!
  create: PlaceCreateWithoutGuestRequirementsInput!
}

input PlaceUpsertWithoutLocationInput {
  update: PlaceUpdateWithoutLocationDataInput!
  create: PlaceCreateWithoutLocationInput!
}

input PlaceUpsertWithoutOrdersInput {
  update: PlaceUpdateWithoutOrdersDataInput!
  create: PlaceCreateWithoutOrdersInput!
}

input PlaceUpsertWithoutPoliciesInput {
  update: PlaceUpdateWithoutPoliciesDataInput!
  create: PlaceCreateWithoutPoliciesInput!
}

input PlaceUpsertWithoutPricingInput {
  update: PlaceUpdateWithoutPricingDataInput!
  create: PlaceCreateWithoutPricingInput!
}

input PlaceUpsertWithoutReviewsInput {
  update: PlaceUpdateWithoutReviewsDataInput!
  create: PlaceCreateWithoutReviewsInput!
}

input PlaceUpsertWithoutViewsInput {
  update: PlaceUpdateWithoutViewsDataInput!
  create: PlaceCreateWithoutViewsInput!
}

input PlaceUpsertWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput!
  update: PlaceUpdateWithoutHostDataInput!
  create: PlaceCreateWithoutHostInput!
}

input PlaceWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  size: PLACE_SIZES

  """All values that are not equal to given value."""
  size_not: PLACE_SIZES

  """All values that are contained in given list."""
  size_in: [PLACE_SIZES!]

  """All values that are not contained in given list."""
  size_not_in: [PLACE_SIZES!]
  shortDescription: String

  """All values that are not equal to given value."""
  shortDescription_not: String

  """All values that are contained in given list."""
  shortDescription_in: [String!]

  """All values that are not contained in given list."""
  shortDescription_not_in: [String!]

  """All values less than the given value."""
  shortDescription_lt: String

  """All values less than or equal the given value."""
  shortDescription_lte: String

  """All values greater than the given value."""
  shortDescription_gt: String

  """All values greater than or equal the given value."""
  shortDescription_gte: String

  """All values containing the given string."""
  shortDescription_contains: String

  """All values not containing the given string."""
  shortDescription_not_contains: String

  """All values starting with the given string."""
  shortDescription_starts_with: String

  """All values not starting with the given string."""
  shortDescription_not_starts_with: String

  """All values ending with the given string."""
  shortDescription_ends_with: String

  """All values not ending with the given string."""
  shortDescription_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  maxGuests: Int

  """All values that are not equal to given value."""
  maxGuests_not: Int

  """All values that are contained in given list."""
  maxGuests_in: [Int!]

  """All values that are not contained in given list."""
  maxGuests_not_in: [Int!]

  """All values less than the given value."""
  maxGuests_lt: Int

  """All values less than or equal the given value."""
  maxGuests_lte: Int

  """All values greater than the given value."""
  maxGuests_gt: Int

  """All values greater than or equal the given value."""
  maxGuests_gte: Int
  numBedrooms: Int

  """All values that are not equal to given value."""
  numBedrooms_not: Int

  """All values that are contained in given list."""
  numBedrooms_in: [Int!]

  """All values that are not contained in given list."""
  numBedrooms_not_in: [Int!]

  """All values less than the given value."""
  numBedrooms_lt: Int

  """All values less than or equal the given value."""
  numBedrooms_lte: Int

  """All values greater than the given value."""
  numBedrooms_gt: Int

  """All values greater than or equal the given value."""
  numBedrooms_gte: Int
  numBeds: Int

  """All values that are not equal to given value."""
  numBeds_not: Int

  """All values that are contained in given list."""
  numBeds_in: [Int!]

  """All values that are not contained in given list."""
  numBeds_not_in: [Int!]

  """All values less than the given value."""
  numBeds_lt: Int

  """All values less than or equal the given value."""
  numBeds_lte: Int

  """All values greater than the given value."""
  numBeds_gt: Int

  """All values greater than or equal the given value."""
  numBeds_gte: Int
  numBaths: Int

  """All values that are not equal to given value."""
  numBaths_not: Int

  """All values that are contained in given list."""
  numBaths_in: [Int!]

  """All values that are not contained in given list."""
  numBaths_not_in: [Int!]

  """All values less than the given value."""
  numBaths_lt: Int

  """All values less than or equal the given value."""
  numBaths_lte: Int

  """All values greater than the given value."""
  numBaths_gt: Int

  """All values greater than or equal the given value."""
  numBaths_gte: Int
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  amenities: AmenitiesWhereInput
  host: UserWhereInput
  pricing: PricingWhereInput
  location: LocationWhereInput
  views: ViewsWhereInput
  guestRequirements: GuestRequirementsWhereInput
  policies: PoliciesWhereInput
  houseRules: HouseRulesWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  pictures_every: PictureWhereInput
  pictures_some: PictureWhereInput
  pictures_none: PictureWhereInput
}

input PlaceWhereUniqueInput {
  id: ID
}

type Policies implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
  place: Place!
}

"""A connection to a list of items."""
type PoliciesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PoliciesEdge]!
  aggregate: AggregatePolicies!
}

input PoliciesCreateInput {
  id: ID
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
  place: PlaceCreateOneWithoutPoliciesInput!
}

input PoliciesCreateOneWithoutPlaceInput {
  create: PoliciesCreateWithoutPlaceInput
  connect: PoliciesWhereUniqueInput
}

input PoliciesCreateWithoutPlaceInput {
  id: ID
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
}

"""An edge in a connection."""
type PoliciesEdge {
  """The item at the end of the edge."""
  node: Policies!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PoliciesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  checkInStartTime_ASC
  checkInStartTime_DESC
  checkInEndTime_ASC
  checkInEndTime_DESC
  checkoutTime_ASC
  checkoutTime_DESC
}

type PoliciesPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
}

type PoliciesSubscriptionPayload {
  mutation: MutationType!
  node: Policies
  updatedFields: [String!]
  previousValues: PoliciesPreviousValues
}

input PoliciesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PoliciesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PoliciesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PoliciesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PoliciesWhereInput
}

input PoliciesUpdateInput {
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
  place: PlaceUpdateOneRequiredWithoutPoliciesInput
}

input PoliciesUpdateManyMutationInput {
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
}

input PoliciesUpdateOneWithoutPlaceInput {
  create: PoliciesCreateWithoutPlaceInput
  connect: PoliciesWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PoliciesUpdateWithoutPlaceDataInput
  upsert: PoliciesUpsertWithoutPlaceInput
}

input PoliciesUpdateWithoutPlaceDataInput {
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
}

input PoliciesUpsertWithoutPlaceInput {
  update: PoliciesUpdateWithoutPlaceDataInput!
  create: PoliciesCreateWithoutPlaceInput!
}

input PoliciesWhereInput {
  """Logical AND on all given filters."""
  AND: [PoliciesWhereInput!]

  """Logical OR on all given filters."""
  OR: [PoliciesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PoliciesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  checkInStartTime: Float

  """All values that are not equal to given value."""
  checkInStartTime_not: Float

  """All values that are contained in given list."""
  checkInStartTime_in: [Float!]

  """All values that are not contained in given list."""
  checkInStartTime_not_in: [Float!]

  """All values less than the given value."""
  checkInStartTime_lt: Float

  """All values less than or equal the given value."""
  checkInStartTime_lte: Float

  """All values greater than the given value."""
  checkInStartTime_gt: Float

  """All values greater than or equal the given value."""
  checkInStartTime_gte: Float
  checkInEndTime: Float

  """All values that are not equal to given value."""
  checkInEndTime_not: Float

  """All values that are contained in given list."""
  checkInEndTime_in: [Float!]

  """All values that are not contained in given list."""
  checkInEndTime_not_in: [Float!]

  """All values less than the given value."""
  checkInEndTime_lt: Float

  """All values less than or equal the given value."""
  checkInEndTime_lte: Float

  """All values greater than the given value."""
  checkInEndTime_gt: Float

  """All values greater than or equal the given value."""
  checkInEndTime_gte: Float
  checkoutTime: Float

  """All values that are not equal to given value."""
  checkoutTime_not: Float

  """All values that are contained in given list."""
  checkoutTime_in: [Float!]

  """All values that are not contained in given list."""
  checkoutTime_not_in: [Float!]

  """All values less than the given value."""
  checkoutTime_lt: Float

  """All values less than or equal the given value."""
  checkoutTime_lte: Float

  """All values greater than the given value."""
  checkoutTime_gt: Float

  """All values greater than or equal the given value."""
  checkoutTime_gte: Float
  place: PlaceWhereInput
}

input PoliciesWhereUniqueInput {
  id: ID
}

type Pricing implements Node {
  id: ID!
  place: Place!
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean!
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

"""A connection to a list of items."""
type PricingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PricingEdge]!
  aggregate: AggregatePricing!
}

input PricingCreateInput {
  id: ID
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
  place: PlaceCreateOneWithoutPricingInput!
}

input PricingCreateOneWithoutPlaceInput {
  create: PricingCreateWithoutPlaceInput
  connect: PricingWhereUniqueInput
}

input PricingCreateWithoutPlaceInput {
  id: ID
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

"""An edge in a connection."""
type PricingEdge {
  """The item at the end of the edge."""
  node: Pricing!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PricingOrderByInput {
  id_ASC
  id_DESC
  monthlyDiscount_ASC
  monthlyDiscount_DESC
  weeklyDiscount_ASC
  weeklyDiscount_DESC
  perNight_ASC
  perNight_DESC
  smartPricing_ASC
  smartPricing_DESC
  basePrice_ASC
  basePrice_DESC
  averageWeekly_ASC
  averageWeekly_DESC
  averageMonthly_ASC
  averageMonthly_DESC
  cleaningFee_ASC
  cleaningFee_DESC
  securityDeposit_ASC
  securityDeposit_DESC
  extraGuests_ASC
  extraGuests_DESC
  weekendPricing_ASC
  weekendPricing_DESC
  currency_ASC
  currency_DESC
}

type PricingPreviousValues {
  id: ID!
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean!
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

type PricingSubscriptionPayload {
  mutation: MutationType!
  node: Pricing
  updatedFields: [String!]
  previousValues: PricingPreviousValues
}

input PricingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PricingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PricingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PricingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PricingWhereInput
}

input PricingUpdateInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
  place: PlaceUpdateOneRequiredWithoutPricingInput
}

input PricingUpdateManyMutationInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

input PricingUpdateOneRequiredWithoutPlaceInput {
  create: PricingCreateWithoutPlaceInput
  connect: PricingWhereUniqueInput
  update: PricingUpdateWithoutPlaceDataInput
  upsert: PricingUpsertWithoutPlaceInput
}

input PricingUpdateWithoutPlaceDataInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

input PricingUpsertWithoutPlaceInput {
  update: PricingUpdateWithoutPlaceDataInput!
  create: PricingCreateWithoutPlaceInput!
}

input PricingWhereInput {
  """Logical AND on all given filters."""
  AND: [PricingWhereInput!]

  """Logical OR on all given filters."""
  OR: [PricingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PricingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  monthlyDiscount: Int

  """All values that are not equal to given value."""
  monthlyDiscount_not: Int

  """All values that are contained in given list."""
  monthlyDiscount_in: [Int!]

  """All values that are not contained in given list."""
  monthlyDiscount_not_in: [Int!]

  """All values less than the given value."""
  monthlyDiscount_lt: Int

  """All values less than or equal the given value."""
  monthlyDiscount_lte: Int

  """All values greater than the given value."""
  monthlyDiscount_gt: Int

  """All values greater than or equal the given value."""
  monthlyDiscount_gte: Int
  weeklyDiscount: Int

  """All values that are not equal to given value."""
  weeklyDiscount_not: Int

  """All values that are contained in given list."""
  weeklyDiscount_in: [Int!]

  """All values that are not contained in given list."""
  weeklyDiscount_not_in: [Int!]

  """All values less than the given value."""
  weeklyDiscount_lt: Int

  """All values less than or equal the given value."""
  weeklyDiscount_lte: Int

  """All values greater than the given value."""
  weeklyDiscount_gt: Int

  """All values greater than or equal the given value."""
  weeklyDiscount_gte: Int
  perNight: Int

  """All values that are not equal to given value."""
  perNight_not: Int

  """All values that are contained in given list."""
  perNight_in: [Int!]

  """All values that are not contained in given list."""
  perNight_not_in: [Int!]

  """All values less than the given value."""
  perNight_lt: Int

  """All values less than or equal the given value."""
  perNight_lte: Int

  """All values greater than the given value."""
  perNight_gt: Int

  """All values greater than or equal the given value."""
  perNight_gte: Int
  smartPricing: Boolean

  """All values that are not equal to given value."""
  smartPricing_not: Boolean
  basePrice: Int

  """All values that are not equal to given value."""
  basePrice_not: Int

  """All values that are contained in given list."""
  basePrice_in: [Int!]

  """All values that are not contained in given list."""
  basePrice_not_in: [Int!]

  """All values less than the given value."""
  basePrice_lt: Int

  """All values less than or equal the given value."""
  basePrice_lte: Int

  """All values greater than the given value."""
  basePrice_gt: Int

  """All values greater than or equal the given value."""
  basePrice_gte: Int
  averageWeekly: Int

  """All values that are not equal to given value."""
  averageWeekly_not: Int

  """All values that are contained in given list."""
  averageWeekly_in: [Int!]

  """All values that are not contained in given list."""
  averageWeekly_not_in: [Int!]

  """All values less than the given value."""
  averageWeekly_lt: Int

  """All values less than or equal the given value."""
  averageWeekly_lte: Int

  """All values greater than the given value."""
  averageWeekly_gt: Int

  """All values greater than or equal the given value."""
  averageWeekly_gte: Int
  averageMonthly: Int

  """All values that are not equal to given value."""
  averageMonthly_not: Int

  """All values that are contained in given list."""
  averageMonthly_in: [Int!]

  """All values that are not contained in given list."""
  averageMonthly_not_in: [Int!]

  """All values less than the given value."""
  averageMonthly_lt: Int

  """All values less than or equal the given value."""
  averageMonthly_lte: Int

  """All values greater than the given value."""
  averageMonthly_gt: Int

  """All values greater than or equal the given value."""
  averageMonthly_gte: Int
  cleaningFee: Int

  """All values that are not equal to given value."""
  cleaningFee_not: Int

  """All values that are contained in given list."""
  cleaningFee_in: [Int!]

  """All values that are not contained in given list."""
  cleaningFee_not_in: [Int!]

  """All values less than the given value."""
  cleaningFee_lt: Int

  """All values less than or equal the given value."""
  cleaningFee_lte: Int

  """All values greater than the given value."""
  cleaningFee_gt: Int

  """All values greater than or equal the given value."""
  cleaningFee_gte: Int
  securityDeposit: Int

  """All values that are not equal to given value."""
  securityDeposit_not: Int

  """All values that are contained in given list."""
  securityDeposit_in: [Int!]

  """All values that are not contained in given list."""
  securityDeposit_not_in: [Int!]

  """All values less than the given value."""
  securityDeposit_lt: Int

  """All values less than or equal the given value."""
  securityDeposit_lte: Int

  """All values greater than the given value."""
  securityDeposit_gt: Int

  """All values greater than or equal the given value."""
  securityDeposit_gte: Int
  extraGuests: Int

  """All values that are not equal to given value."""
  extraGuests_not: Int

  """All values that are contained in given list."""
  extraGuests_in: [Int!]

  """All values that are not contained in given list."""
  extraGuests_not_in: [Int!]

  """All values less than the given value."""
  extraGuests_lt: Int

  """All values less than or equal the given value."""
  extraGuests_lte: Int

  """All values greater than the given value."""
  extraGuests_gt: Int

  """All values greater than or equal the given value."""
  extraGuests_gte: Int
  weekendPricing: Int

  """All values that are not equal to given value."""
  weekendPricing_not: Int

  """All values that are contained in given list."""
  weekendPricing_in: [Int!]

  """All values that are not contained in given list."""
  weekendPricing_not_in: [Int!]

  """All values less than the given value."""
  weekendPricing_lt: Int

  """All values less than or equal the given value."""
  weekendPricing_lte: Int

  """All values greater than the given value."""
  weekendPricing_gt: Int

  """All values greater than or equal the given value."""
  weekendPricing_gte: Int
  currency: CURRENCY

  """All values that are not equal to given value."""
  currency_not: CURRENCY

  """All values that are contained in given list."""
  currency_in: [CURRENCY!]

  """All values that are not contained in given list."""
  currency_not_in: [CURRENCY!]
  place: PlaceWhereInput
}

input PricingWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  pricings(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pricing]!
  guestRequirementses(where: GuestRequirementsWhereInput, orderBy: GuestRequirementsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuestRequirements]!
  policieses(where: PoliciesWhereInput, orderBy: PoliciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Policies]!
  viewses(where: ViewsWhereInput, orderBy: ViewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Views]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  neighbourhoods(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Neighbourhood]!
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  experiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience]!
  experienceCategories(where: ExperienceCategoryWhereInput, orderBy: ExperienceCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ExperienceCategory]!
  amenitieses(where: AmenitiesWhereInput, orderBy: AmenitiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Amenities]!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment]!
  paypalInformations(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaypalInformation]!
  paytmInformations(where: PaytmInformationWhereInput, orderBy: PaytmInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaytmInformation]!
  creditCardInformations(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CreditCardInformation]!
  debitCardInformations(where: DebitCardInformationWhereInput, orderBy: DebitCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DebitCardInformation]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  restaurants(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant]!
  houseRuleses(where: HouseRulesWhereInput, orderBy: HouseRulesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HouseRules]!
  paymentAccounts(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount]!
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture]!
  user(where: UserWhereUniqueInput!): User
  place(where: PlaceWhereUniqueInput!): Place
  pricing(where: PricingWhereUniqueInput!): Pricing
  guestRequirements(where: GuestRequirementsWhereUniqueInput!): GuestRequirements
  policies(where: PoliciesWhereUniqueInput!): Policies
  views(where: ViewsWhereUniqueInput!): Views
  location(where: LocationWhereUniqueInput!): Location
  neighbourhood(where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  city(where: CityWhereUniqueInput!): City
  experience(where: ExperienceWhereUniqueInput!): Experience
  experienceCategory(where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  amenities(where: AmenitiesWhereUniqueInput!): Amenities
  review(where: ReviewWhereUniqueInput!): Review
  order(where: OrderWhereUniqueInput!): Order
  payment(where: PaymentWhereUniqueInput!): Payment
  paypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  paytmInformation(where: PaytmInformationWhereUniqueInput!): PaytmInformation
  creditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  debitCardInformation(where: DebitCardInformationWhereUniqueInput!): DebitCardInformation
  message(where: MessageWhereUniqueInput!): Message
  notification(where: NotificationWhereUniqueInput!): Notification
  restaurant(where: RestaurantWhereUniqueInput!): Restaurant
  houseRules(where: HouseRulesWhereUniqueInput!): HouseRules
  paymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  picture(where: PictureWhereUniqueInput!): Picture
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  pricingsConnection(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PricingConnection!
  guestRequirementsesConnection(where: GuestRequirementsWhereInput, orderBy: GuestRequirementsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuestRequirementsConnection!
  policiesesConnection(where: PoliciesWhereInput, orderBy: PoliciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PoliciesConnection!
  viewsesConnection(where: ViewsWhereInput, orderBy: ViewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ViewsConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  neighbourhoodsConnection(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NeighbourhoodConnection!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  experiencesConnection(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceConnection!
  experienceCategoriesConnection(where: ExperienceCategoryWhereInput, orderBy: ExperienceCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceCategoryConnection!
  amenitiesesConnection(where: AmenitiesWhereInput, orderBy: AmenitiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AmenitiesConnection!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  paymentsConnection(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentConnection!
  paypalInformationsConnection(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaypalInformationConnection!
  paytmInformationsConnection(where: PaytmInformationWhereInput, orderBy: PaytmInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaytmInformationConnection!
  creditCardInformationsConnection(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CreditCardInformationConnection!
  debitCardInformationsConnection(where: DebitCardInformationWhereInput, orderBy: DebitCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DebitCardInformationConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  restaurantsConnection(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RestaurantConnection!
  houseRulesesConnection(where: HouseRulesWhereInput, orderBy: HouseRulesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HouseRulesConnection!
  paymentAccountsConnection(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentAccountConnection!
  picturesConnection(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PictureConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Restaurant implements Node {
  id: ID!
  createdAt: DateTime!
  title: String!
  avgPricePerPerson: Int!
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  location: Location!
  isCurated: Boolean!
  slug: String!
  popularity: Int!
}

"""A connection to a list of items."""
type RestaurantConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RestaurantEdge]!
  aggregate: AggregateRestaurant!
}

input RestaurantCreateInput {
  id: ID
  title: String!
  avgPricePerPerson: Int!
  isCurated: Boolean
  slug: String!
  popularity: Int!
  pictures: PictureCreateManyInput
  location: LocationCreateOneWithoutRestaurantInput!
}

input RestaurantCreateOneWithoutLocationInput {
  create: RestaurantCreateWithoutLocationInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantCreateWithoutLocationInput {
  id: ID
  title: String!
  avgPricePerPerson: Int!
  isCurated: Boolean
  slug: String!
  popularity: Int!
  pictures: PictureCreateManyInput
}

"""An edge in a connection."""
type RestaurantEdge {
  """The item at the end of the edge."""
  node: Restaurant!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RestaurantOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  avgPricePerPerson_ASC
  avgPricePerPerson_DESC
  isCurated_ASC
  isCurated_DESC
  slug_ASC
  slug_DESC
  popularity_ASC
  popularity_DESC
}

type RestaurantPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  avgPricePerPerson: Int!
  isCurated: Boolean!
  slug: String!
  popularity: Int!
}

type RestaurantSubscriptionPayload {
  mutation: MutationType!
  node: Restaurant
  updatedFields: [String!]
  previousValues: RestaurantPreviousValues
}

input RestaurantSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RestaurantSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RestaurantSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RestaurantSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RestaurantWhereInput
}

input RestaurantUpdateInput {
  title: String
  avgPricePerPerson: Int
  isCurated: Boolean
  slug: String
  popularity: Int
  pictures: PictureUpdateManyInput
  location: LocationUpdateOneRequiredWithoutRestaurantInput
}

input RestaurantUpdateManyMutationInput {
  title: String
  avgPricePerPerson: Int
  isCurated: Boolean
  slug: String
  popularity: Int
}

input RestaurantUpdateOneWithoutLocationInput {
  create: RestaurantCreateWithoutLocationInput
  connect: RestaurantWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: RestaurantUpdateWithoutLocationDataInput
  upsert: RestaurantUpsertWithoutLocationInput
}

input RestaurantUpdateWithoutLocationDataInput {
  title: String
  avgPricePerPerson: Int
  isCurated: Boolean
  slug: String
  popularity: Int
  pictures: PictureUpdateManyInput
}

input RestaurantUpsertWithoutLocationInput {
  update: RestaurantUpdateWithoutLocationDataInput!
  create: RestaurantCreateWithoutLocationInput!
}

input RestaurantWhereInput {
  """Logical AND on all given filters."""
  AND: [RestaurantWhereInput!]

  """Logical OR on all given filters."""
  OR: [RestaurantWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RestaurantWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  avgPricePerPerson: Int

  """All values that are not equal to given value."""
  avgPricePerPerson_not: Int

  """All values that are contained in given list."""
  avgPricePerPerson_in: [Int!]

  """All values that are not contained in given list."""
  avgPricePerPerson_not_in: [Int!]

  """All values less than the given value."""
  avgPricePerPerson_lt: Int

  """All values less than or equal the given value."""
  avgPricePerPerson_lte: Int

  """All values greater than the given value."""
  avgPricePerPerson_gt: Int

  """All values greater than or equal the given value."""
  avgPricePerPerson_gte: Int
  isCurated: Boolean

  """All values that are not equal to given value."""
  isCurated_not: Boolean
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
  pictures_every: PictureWhereInput
  pictures_some: PictureWhereInput
  pictures_none: PictureWhereInput
  location: LocationWhereInput
}

input RestaurantWhereUniqueInput {
  id: ID
}

type Review implements Node {
  id: ID!
  createdAt: DateTime!
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  place: Place!
  experience: Experience
}

"""A connection to a list of items."""
type ReviewConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  id: ID
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  place: PlaceCreateOneWithoutReviewsInput!
  experience: ExperienceCreateOneWithoutReviewsInput
}

input ReviewCreateManyWithoutExperienceInput {
  create: [ReviewCreateWithoutExperienceInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutPlaceInput {
  create: [ReviewCreateWithoutPlaceInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutExperienceInput {
  id: ID
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  place: PlaceCreateOneWithoutReviewsInput!
}

input ReviewCreateWithoutPlaceInput {
  id: ID
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  experience: ExperienceCreateOneWithoutReviewsInput
}

"""An edge in a connection."""
type ReviewEdge {
  """The item at the end of the edge."""
  node: Review!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  stars_ASC
  stars_DESC
  accuracy_ASC
  accuracy_DESC
  location_ASC
  location_DESC
  checkIn_ASC
  checkIn_DESC
  value_ASC
  value_DESC
  cleanliness_ASC
  cleanliness_DESC
  communication_ASC
  communication_DESC
}

type ReviewPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
}

input ReviewScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  stars: Int

  """All values that are not equal to given value."""
  stars_not: Int

  """All values that are contained in given list."""
  stars_in: [Int!]

  """All values that are not contained in given list."""
  stars_not_in: [Int!]

  """All values less than the given value."""
  stars_lt: Int

  """All values less than or equal the given value."""
  stars_lte: Int

  """All values greater than the given value."""
  stars_gt: Int

  """All values greater than or equal the given value."""
  stars_gte: Int
  accuracy: Int

  """All values that are not equal to given value."""
  accuracy_not: Int

  """All values that are contained in given list."""
  accuracy_in: [Int!]

  """All values that are not contained in given list."""
  accuracy_not_in: [Int!]

  """All values less than the given value."""
  accuracy_lt: Int

  """All values less than or equal the given value."""
  accuracy_lte: Int

  """All values greater than the given value."""
  accuracy_gt: Int

  """All values greater than or equal the given value."""
  accuracy_gte: Int
  location: Int

  """All values that are not equal to given value."""
  location_not: Int

  """All values that are contained in given list."""
  location_in: [Int!]

  """All values that are not contained in given list."""
  location_not_in: [Int!]

  """All values less than the given value."""
  location_lt: Int

  """All values less than or equal the given value."""
  location_lte: Int

  """All values greater than the given value."""
  location_gt: Int

  """All values greater than or equal the given value."""
  location_gte: Int
  checkIn: Int

  """All values that are not equal to given value."""
  checkIn_not: Int

  """All values that are contained in given list."""
  checkIn_in: [Int!]

  """All values that are not contained in given list."""
  checkIn_not_in: [Int!]

  """All values less than the given value."""
  checkIn_lt: Int

  """All values less than or equal the given value."""
  checkIn_lte: Int

  """All values greater than the given value."""
  checkIn_gt: Int

  """All values greater than or equal the given value."""
  checkIn_gte: Int
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  cleanliness: Int

  """All values that are not equal to given value."""
  cleanliness_not: Int

  """All values that are contained in given list."""
  cleanliness_in: [Int!]

  """All values that are not contained in given list."""
  cleanliness_not_in: [Int!]

  """All values less than the given value."""
  cleanliness_lt: Int

  """All values less than or equal the given value."""
  cleanliness_lte: Int

  """All values greater than the given value."""
  cleanliness_gt: Int

  """All values greater than or equal the given value."""
  cleanliness_gte: Int
  communication: Int

  """All values that are not equal to given value."""
  communication_not: Int

  """All values that are contained in given list."""
  communication_in: [Int!]

  """All values that are not contained in given list."""
  communication_not_in: [Int!]

  """All values less than the given value."""
  communication_lt: Int

  """All values less than or equal the given value."""
  communication_lte: Int

  """All values greater than the given value."""
  communication_gt: Int

  """All values greater than or equal the given value."""
  communication_gte: Int
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
}

input ReviewUpdateInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceUpdateOneRequiredWithoutReviewsInput
  experience: ExperienceUpdateOneWithoutReviewsInput
}

input ReviewUpdateManyDataInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
}

input ReviewUpdateManyMutationInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
}

input ReviewUpdateManyWithoutExperienceInput {
  create: [ReviewCreateWithoutExperienceInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutExperienceInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
  deleteMany: [ReviewScalarWhereInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutExperienceInput!]
}

input ReviewUpdateManyWithoutPlaceInput {
  create: [ReviewCreateWithoutPlaceInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutPlaceInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
  deleteMany: [ReviewScalarWhereInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutPlaceInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateWithoutExperienceDataInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceUpdateOneRequiredWithoutReviewsInput
}

input ReviewUpdateWithoutPlaceDataInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  experience: ExperienceUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutExperienceDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutPlaceDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutExperienceDataInput!
  create: ReviewCreateWithoutExperienceInput!
}

input ReviewUpsertWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutPlaceDataInput!
  create: ReviewCreateWithoutPlaceInput!
}

input ReviewWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  stars: Int

  """All values that are not equal to given value."""
  stars_not: Int

  """All values that are contained in given list."""
  stars_in: [Int!]

  """All values that are not contained in given list."""
  stars_not_in: [Int!]

  """All values less than the given value."""
  stars_lt: Int

  """All values less than or equal the given value."""
  stars_lte: Int

  """All values greater than the given value."""
  stars_gt: Int

  """All values greater than or equal the given value."""
  stars_gte: Int
  accuracy: Int

  """All values that are not equal to given value."""
  accuracy_not: Int

  """All values that are contained in given list."""
  accuracy_in: [Int!]

  """All values that are not contained in given list."""
  accuracy_not_in: [Int!]

  """All values less than the given value."""
  accuracy_lt: Int

  """All values less than or equal the given value."""
  accuracy_lte: Int

  """All values greater than the given value."""
  accuracy_gt: Int

  """All values greater than or equal the given value."""
  accuracy_gte: Int
  location: Int

  """All values that are not equal to given value."""
  location_not: Int

  """All values that are contained in given list."""
  location_in: [Int!]

  """All values that are not contained in given list."""
  location_not_in: [Int!]

  """All values less than the given value."""
  location_lt: Int

  """All values less than or equal the given value."""
  location_lte: Int

  """All values greater than the given value."""
  location_gt: Int

  """All values greater than or equal the given value."""
  location_gte: Int
  checkIn: Int

  """All values that are not equal to given value."""
  checkIn_not: Int

  """All values that are contained in given list."""
  checkIn_in: [Int!]

  """All values that are not contained in given list."""
  checkIn_not_in: [Int!]

  """All values less than the given value."""
  checkIn_lt: Int

  """All values less than or equal the given value."""
  checkIn_lte: Int

  """All values greater than the given value."""
  checkIn_gt: Int

  """All values greater than or equal the given value."""
  checkIn_gte: Int
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  cleanliness: Int

  """All values that are not equal to given value."""
  cleanliness_not: Int

  """All values that are contained in given list."""
  cleanliness_in: [Int!]

  """All values that are not contained in given list."""
  cleanliness_not_in: [Int!]

  """All values less than the given value."""
  cleanliness_lt: Int

  """All values less than or equal the given value."""
  cleanliness_lte: Int

  """All values greater than the given value."""
  cleanliness_gt: Int

  """All values greater than or equal the given value."""
  cleanliness_gte: Int
  communication: Int

  """All values that are not equal to given value."""
  communication_not: Int

  """All values that are contained in given list."""
  communication_in: [Int!]

  """All values that are not contained in given list."""
  communication_not_in: [Int!]

  """All values less than the given value."""
  communication_lt: Int

  """All values less than or equal the given value."""
  communication_lte: Int

  """All values greater than the given value."""
  communication_gt: Int

  """All values greater than or equal the given value."""
  communication_gte: Int
  place: PlaceWhereInput
  experience: ExperienceWhereInput
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
  pricing(where: PricingSubscriptionWhereInput): PricingSubscriptionPayload
  guestRequirements(where: GuestRequirementsSubscriptionWhereInput): GuestRequirementsSubscriptionPayload
  policies(where: PoliciesSubscriptionWhereInput): PoliciesSubscriptionPayload
  views(where: ViewsSubscriptionWhereInput): ViewsSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  neighbourhood(where: NeighbourhoodSubscriptionWhereInput): NeighbourhoodSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  experience(where: ExperienceSubscriptionWhereInput): ExperienceSubscriptionPayload
  experienceCategory(where: ExperienceCategorySubscriptionWhereInput): ExperienceCategorySubscriptionPayload
  amenities(where: AmenitiesSubscriptionWhereInput): AmenitiesSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  payment(where: PaymentSubscriptionWhereInput): PaymentSubscriptionPayload
  paypalInformation(where: PaypalInformationSubscriptionWhereInput): PaypalInformationSubscriptionPayload
  paytmInformation(where: PaytmInformationSubscriptionWhereInput): PaytmInformationSubscriptionPayload
  creditCardInformation(where: CreditCardInformationSubscriptionWhereInput): CreditCardInformationSubscriptionPayload
  debitCardInformation(where: DebitCardInformationSubscriptionWhereInput): DebitCardInformationSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  restaurant(where: RestaurantSubscriptionWhereInput): RestaurantSubscriptionPayload
  houseRules(where: HouseRulesSubscriptionWhereInput): HouseRulesSubscriptionPayload
  paymentAccount(where: PaymentAccountSubscriptionWhereInput): PaymentAccountSubscriptionPayload
  picture(where: PictureSubscriptionWhereInput): PictureSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean!
  ownedPlaces(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place!]
  location: Location
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  paymentAccount(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount!]
  sentMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  receivedMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  profilePicture: Picture
  hostingExperiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience!]
  accountType: UserType
  uid: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String!
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateOneWithoutHostingExperiencesInput {
  create: UserCreateWithoutHostingExperiencesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLocationInput {
  create: UserCreateWithoutLocationInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedPlacesInput {
  create: UserCreateWithoutOwnedPlacesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPaymentAccountInput {
  create: UserCreateWithoutPaymentAccountInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReceivedMessagesInput {
  create: UserCreateWithoutReceivedMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutHostingExperiencesInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String!
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
}

input UserCreateWithoutLocationInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String!
  ownedPlaces: PlaceCreateManyWithoutHostInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutNotificationsInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String!
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutOrdersInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String!
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutOwnedPlacesInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String!
  location: LocationCreateOneWithoutUserInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutPaymentAccountInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String!
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  orders: OrderCreateManyWithoutBookeeInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutReceivedMessagesInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String!
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutSentMessagesInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String!
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  displayName_ASC
  displayName_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  responseRate_ASC
  responseRate_DESC
  responseTime_ASC
  responseTime_DESC
  isSuperHost_ASC
  isSuperHost_DESC
  accountType_ASC
  accountType_DESC
  uid_ASC
  uid_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean!
  accountType: UserType
  uid: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

enum UserType {
  ADMIN
  SELLER
  CONSUMER
}

input UserUpdateInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateManyMutationInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
}

input UserUpdateOneRequiredWithoutHostingExperiencesInput {
  create: UserCreateWithoutHostingExperiencesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutHostingExperiencesDataInput
  upsert: UserUpsertWithoutHostingExperiencesInput
}

input UserUpdateOneRequiredWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
}

input UserUpdateOneRequiredWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
}

input UserUpdateOneRequiredWithoutOwnedPlacesInput {
  create: UserCreateWithoutOwnedPlacesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutOwnedPlacesDataInput
  upsert: UserUpsertWithoutOwnedPlacesInput
}

input UserUpdateOneRequiredWithoutPaymentAccountInput {
  create: UserCreateWithoutPaymentAccountInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutPaymentAccountDataInput
  upsert: UserUpsertWithoutPaymentAccountInput
}

input UserUpdateOneRequiredWithoutReceivedMessagesInput {
  create: UserCreateWithoutReceivedMessagesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutReceivedMessagesDataInput
  upsert: UserUpsertWithoutReceivedMessagesInput
}

input UserUpdateOneRequiredWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutSentMessagesDataInput
  upsert: UserUpsertWithoutSentMessagesInput
}

input UserUpdateOneWithoutLocationInput {
  create: UserCreateWithoutLocationInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutLocationDataInput
  upsert: UserUpsertWithoutLocationInput
}

input UserUpdateWithoutHostingExperiencesDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
}

input UserUpdateWithoutLocationDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutNotificationsDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutOrdersDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutOwnedPlacesDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
  location: LocationUpdateOneWithoutUserInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutPaymentAccountDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  orders: OrderUpdateManyWithoutBookeeInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutReceivedMessagesDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutSentMessagesDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  accountType: UserType
  uid: String
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpsertWithoutHostingExperiencesInput {
  update: UserUpdateWithoutHostingExperiencesDataInput!
  create: UserCreateWithoutHostingExperiencesInput!
}

input UserUpsertWithoutLocationInput {
  update: UserUpdateWithoutLocationDataInput!
  create: UserCreateWithoutLocationInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserUpsertWithoutOwnedPlacesInput {
  update: UserUpdateWithoutOwnedPlacesDataInput!
  create: UserCreateWithoutOwnedPlacesInput!
}

input UserUpsertWithoutPaymentAccountInput {
  update: UserUpdateWithoutPaymentAccountDataInput!
  create: UserCreateWithoutPaymentAccountInput!
}

input UserUpsertWithoutReceivedMessagesInput {
  update: UserUpdateWithoutReceivedMessagesDataInput!
  create: UserCreateWithoutReceivedMessagesInput!
}

input UserUpsertWithoutSentMessagesInput {
  update: UserUpdateWithoutSentMessagesDataInput!
  create: UserCreateWithoutSentMessagesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  displayName: String

  """All values that are not equal to given value."""
  displayName_not: String

  """All values that are contained in given list."""
  displayName_in: [String!]

  """All values that are not contained in given list."""
  displayName_not_in: [String!]

  """All values less than the given value."""
  displayName_lt: String

  """All values less than or equal the given value."""
  displayName_lte: String

  """All values greater than the given value."""
  displayName_gt: String

  """All values greater than or equal the given value."""
  displayName_gte: String

  """All values containing the given string."""
  displayName_contains: String

  """All values not containing the given string."""
  displayName_not_contains: String

  """All values starting with the given string."""
  displayName_starts_with: String

  """All values not starting with the given string."""
  displayName_not_starts_with: String

  """All values ending with the given string."""
  displayName_ends_with: String

  """All values not ending with the given string."""
  displayName_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  responseRate: Float

  """All values that are not equal to given value."""
  responseRate_not: Float

  """All values that are contained in given list."""
  responseRate_in: [Float!]

  """All values that are not contained in given list."""
  responseRate_not_in: [Float!]

  """All values less than the given value."""
  responseRate_lt: Float

  """All values less than or equal the given value."""
  responseRate_lte: Float

  """All values greater than the given value."""
  responseRate_gt: Float

  """All values greater than or equal the given value."""
  responseRate_gte: Float
  responseTime: Int

  """All values that are not equal to given value."""
  responseTime_not: Int

  """All values that are contained in given list."""
  responseTime_in: [Int!]

  """All values that are not contained in given list."""
  responseTime_not_in: [Int!]

  """All values less than the given value."""
  responseTime_lt: Int

  """All values less than or equal the given value."""
  responseTime_lte: Int

  """All values greater than the given value."""
  responseTime_gt: Int

  """All values greater than or equal the given value."""
  responseTime_gte: Int
  isSuperHost: Boolean

  """All values that are not equal to given value."""
  isSuperHost_not: Boolean
  accountType: UserType

  """All values that are not equal to given value."""
  accountType_not: UserType

  """All values that are contained in given list."""
  accountType_in: [UserType!]

  """All values that are not contained in given list."""
  accountType_not_in: [UserType!]
  uid: String

  """All values that are not equal to given value."""
  uid_not: String

  """All values that are contained in given list."""
  uid_in: [String!]

  """All values that are not contained in given list."""
  uid_not_in: [String!]

  """All values less than the given value."""
  uid_lt: String

  """All values less than or equal the given value."""
  uid_lte: String

  """All values greater than the given value."""
  uid_gt: String

  """All values greater than or equal the given value."""
  uid_gte: String

  """All values containing the given string."""
  uid_contains: String

  """All values not containing the given string."""
  uid_not_contains: String

  """All values starting with the given string."""
  uid_starts_with: String

  """All values not starting with the given string."""
  uid_not_starts_with: String

  """All values ending with the given string."""
  uid_ends_with: String

  """All values not ending with the given string."""
  uid_not_ends_with: String
  ownedPlaces_every: PlaceWhereInput
  ownedPlaces_some: PlaceWhereInput
  ownedPlaces_none: PlaceWhereInput
  location: LocationWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  paymentAccount_every: PaymentAccountWhereInput
  paymentAccount_some: PaymentAccountWhereInput
  paymentAccount_none: PaymentAccountWhereInput
  sentMessages_every: MessageWhereInput
  sentMessages_some: MessageWhereInput
  sentMessages_none: MessageWhereInput
  receivedMessages_every: MessageWhereInput
  receivedMessages_some: MessageWhereInput
  receivedMessages_none: MessageWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  profilePicture: PictureWhereInput
  hostingExperiences_every: ExperienceWhereInput
  hostingExperiences_some: ExperienceWhereInput
  hostingExperiences_none: ExperienceWhereInput
}

input UserWhereUniqueInput {
  id: ID
  uid: String
}

type Views implements Node {
  id: ID!
  lastWeek: Int!
  place: Place!
}

"""A connection to a list of items."""
type ViewsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ViewsEdge]!
  aggregate: AggregateViews!
}

input ViewsCreateInput {
  id: ID
  lastWeek: Int!
  place: PlaceCreateOneWithoutViewsInput!
}

input ViewsCreateOneWithoutPlaceInput {
  create: ViewsCreateWithoutPlaceInput
  connect: ViewsWhereUniqueInput
}

input ViewsCreateWithoutPlaceInput {
  id: ID
  lastWeek: Int!
}

"""An edge in a connection."""
type ViewsEdge {
  """The item at the end of the edge."""
  node: Views!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ViewsOrderByInput {
  id_ASC
  id_DESC
  lastWeek_ASC
  lastWeek_DESC
}

type ViewsPreviousValues {
  id: ID!
  lastWeek: Int!
}

type ViewsSubscriptionPayload {
  mutation: MutationType!
  node: Views
  updatedFields: [String!]
  previousValues: ViewsPreviousValues
}

input ViewsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ViewsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ViewsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ViewsSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ViewsWhereInput
}

input ViewsUpdateInput {
  lastWeek: Int
  place: PlaceUpdateOneRequiredWithoutViewsInput
}

input ViewsUpdateManyMutationInput {
  lastWeek: Int
}

input ViewsUpdateOneRequiredWithoutPlaceInput {
  create: ViewsCreateWithoutPlaceInput
  connect: ViewsWhereUniqueInput
  update: ViewsUpdateWithoutPlaceDataInput
  upsert: ViewsUpsertWithoutPlaceInput
}

input ViewsUpdateWithoutPlaceDataInput {
  lastWeek: Int
}

input ViewsUpsertWithoutPlaceInput {
  update: ViewsUpdateWithoutPlaceDataInput!
  create: ViewsCreateWithoutPlaceInput!
}

input ViewsWhereInput {
  """Logical AND on all given filters."""
  AND: [ViewsWhereInput!]

  """Logical OR on all given filters."""
  OR: [ViewsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ViewsWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lastWeek: Int

  """All values that are not equal to given value."""
  lastWeek_not: Int

  """All values that are contained in given list."""
  lastWeek_in: [Int!]

  """All values that are not contained in given list."""
  lastWeek_not_in: [Int!]

  """All values less than the given value."""
  lastWeek_lt: Int

  """All values less than or equal the given value."""
  lastWeek_lte: Int

  """All values greater than the given value."""
  lastWeek_gt: Int

  """All values greater than or equal the given value."""
  lastWeek_gte: Int
  place: PlaceWhereInput
}

input ViewsWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AmenitiesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'elevator_ASC' |
  'elevator_DESC' |
  'petsAllowed_ASC' |
  'petsAllowed_DESC' |
  'internet_ASC' |
  'internet_DESC' |
  'kitchen_ASC' |
  'kitchen_DESC' |
  'wirelessInternet_ASC' |
  'wirelessInternet_DESC' |
  'familyKidFriendly_ASC' |
  'familyKidFriendly_DESC' |
  'freeParkingOnPremises_ASC' |
  'freeParkingOnPremises_DESC' |
  'hotTub_ASC' |
  'hotTub_DESC' |
  'pool_ASC' |
  'pool_DESC' |
  'smokingAllowed_ASC' |
  'smokingAllowed_DESC' |
  'wheelchairAccessible_ASC' |
  'wheelchairAccessible_DESC' |
  'breakfast_ASC' |
  'breakfast_DESC' |
  'cableTv_ASC' |
  'cableTv_DESC' |
  'suitableForEvents_ASC' |
  'suitableForEvents_DESC' |
  'dryer_ASC' |
  'dryer_DESC' |
  'washer_ASC' |
  'washer_DESC' |
  'indoorFireplace_ASC' |
  'indoorFireplace_DESC' |
  'tv_ASC' |
  'tv_DESC' |
  'heating_ASC' |
  'heating_DESC' |
  'hangers_ASC' |
  'hangers_DESC' |
  'iron_ASC' |
  'iron_DESC' |
  'hairDryer_ASC' |
  'hairDryer_DESC' |
  'doorman_ASC' |
  'doorman_DESC' |
  'paidParkingOffPremises_ASC' |
  'paidParkingOffPremises_DESC' |
  'freeParkingOnStreet_ASC' |
  'freeParkingOnStreet_DESC' |
  'gym_ASC' |
  'gym_DESC' |
  'airConditioning_ASC' |
  'airConditioning_DESC' |
  'shampoo_ASC' |
  'shampoo_DESC' |
  'essentials_ASC' |
  'essentials_DESC' |
  'laptopFriendlyWorkspace_ASC' |
  'laptopFriendlyWorkspace_DESC' |
  'privateEntrance_ASC' |
  'privateEntrance_DESC' |
  'buzzerWirelessIntercom_ASC' |
  'buzzerWirelessIntercom_DESC' |
  'babyBath_ASC' |
  'babyBath_DESC' |
  'babyMonitor_ASC' |
  'babyMonitor_DESC' |
  'babysitterRecommendations_ASC' |
  'babysitterRecommendations_DESC' |
  'bathtub_ASC' |
  'bathtub_DESC' |
  'changingTable_ASC' |
  'changingTable_DESC' |
  'childrensBooksAndToys_ASC' |
  'childrensBooksAndToys_DESC' |
  'childrensDinnerware_ASC' |
  'childrensDinnerware_DESC' |
  'crib_ASC' |
  'crib_DESC'

export type CityOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC'

export type CreditCardInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'cardNumber_ASC' |
  'cardNumber_DESC' |
  'expiresOnMonth_ASC' |
  'expiresOnMonth_DESC' |
  'expiresOnYear_ASC' |
  'expiresOnYear_DESC' |
  'securityCode_ASC' |
  'securityCode_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'country_ASC' |
  'country_DESC'

export type CURRENCY =   'CAD' |
  'INR' |
  'CHF' |
  'EUR' |
  'JPY' |
  'USD' |
  'ZAR'

export type DebitCardInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'cardNumber_ASC' |
  'cardNumber_DESC' |
  'expiresOnMonth_ASC' |
  'expiresOnMonth_DESC' |
  'expiresOnYear_ASC' |
  'expiresOnYear_DESC' |
  'securityCode_ASC' |
  'securityCode_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'country_ASC' |
  'country_DESC'

export type ExperienceCategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'mainColor_ASC' |
  'mainColor_DESC' |
  'name_ASC' |
  'name_DESC'

export type ExperienceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'pricePerPerson_ASC' |
  'pricePerPerson_DESC' |
  'popularity_ASC' |
  'popularity_DESC'

export type GuestRequirementsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'govIssuedId_ASC' |
  'govIssuedId_DESC' |
  'recommendationsFromOtherHosts_ASC' |
  'recommendationsFromOtherHosts_DESC' |
  'guestTripInformation_ASC' |
  'guestTripInformation_DESC'

export type HouseRulesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'suitableForChildren_ASC' |
  'suitableForChildren_DESC' |
  'suitableForInfants_ASC' |
  'suitableForInfants_DESC' |
  'petsAllowed_ASC' |
  'petsAllowed_DESC' |
  'smokingAllowed_ASC' |
  'smokingAllowed_DESC' |
  'partiesAndEventsAllowed_ASC' |
  'partiesAndEventsAllowed_DESC' |
  'additionalRules_ASC' |
  'additionalRules_DESC'

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'lng_ASC' |
  'lng_DESC' |
  'address_ASC' |
  'address_DESC' |
  'directions_ASC' |
  'directions_DESC'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'deliveredAt_ASC' |
  'deliveredAt_DESC' |
  'readAt_ASC' |
  'readAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NeighbourhoodOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'featured_ASC' |
  'featured_DESC' |
  'popularity_ASC' |
  'popularity_DESC'

export type NOTIFICATION_TYPE =   'OFFER' |
  'INSTANT_BOOK' |
  'RESPONSIVENESS' |
  'NEW_AMENITIES' |
  'HOUSE_RULES'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'link_ASC' |
  'link_DESC' |
  'readDate_ASC' |
  'readDate_DESC'

export type OrderOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'startDate_ASC' |
  'startDate_DESC' |
  'endDate_ASC' |
  'endDate_DESC'

export type PAYMENT_PROVIDER =   'PAYPAL' |
  'PAYTM' |
  'CREDIT_CARD' |
  'DEBIT_CARD'

export type PaymentAccountOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'type_ASC' |
  'type_DESC'

export type PaymentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'serviceFee_ASC' |
  'serviceFee_DESC' |
  'placePrice_ASC' |
  'placePrice_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC'

export type PaypalInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'email_ASC' |
  'email_DESC'

export type PaytmInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'phone_ASC' |
  'phone_DESC'

export type PictureOrderByInput =   'id_ASC' |
  'id_DESC' |
  'url_ASC' |
  'url_DESC'

export type PLACE_SIZES =   'ENTIRE_HOUSE' |
  'ENTIRE_APARTMENT' |
  'ENTIRE_EARTH_HOUSE' |
  'ENTIRE_CABIN' |
  'ENTIRE_VILLA' |
  'ENTIRE_PLACE' |
  'ENTIRE_BOAT' |
  'PRIVATE_ROOM'

export type PlaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'size_ASC' |
  'size_DESC' |
  'shortDescription_ASC' |
  'shortDescription_DESC' |
  'description_ASC' |
  'description_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'maxGuests_ASC' |
  'maxGuests_DESC' |
  'numBedrooms_ASC' |
  'numBedrooms_DESC' |
  'numBeds_ASC' |
  'numBeds_DESC' |
  'numBaths_ASC' |
  'numBaths_DESC' |
  'popularity_ASC' |
  'popularity_DESC'

export type PoliciesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'checkInStartTime_ASC' |
  'checkInStartTime_DESC' |
  'checkInEndTime_ASC' |
  'checkInEndTime_DESC' |
  'checkoutTime_ASC' |
  'checkoutTime_DESC'

export type PricingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'monthlyDiscount_ASC' |
  'monthlyDiscount_DESC' |
  'weeklyDiscount_ASC' |
  'weeklyDiscount_DESC' |
  'perNight_ASC' |
  'perNight_DESC' |
  'smartPricing_ASC' |
  'smartPricing_DESC' |
  'basePrice_ASC' |
  'basePrice_DESC' |
  'averageWeekly_ASC' |
  'averageWeekly_DESC' |
  'averageMonthly_ASC' |
  'averageMonthly_DESC' |
  'cleaningFee_ASC' |
  'cleaningFee_DESC' |
  'securityDeposit_ASC' |
  'securityDeposit_DESC' |
  'extraGuests_ASC' |
  'extraGuests_DESC' |
  'weekendPricing_ASC' |
  'weekendPricing_DESC' |
  'currency_ASC' |
  'currency_DESC'

export type RestaurantOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'avgPricePerPerson_ASC' |
  'avgPricePerPerson_DESC' |
  'isCurated_ASC' |
  'isCurated_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'popularity_ASC' |
  'popularity_DESC'

export type ReviewOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'text_ASC' |
  'text_DESC' |
  'stars_ASC' |
  'stars_DESC' |
  'accuracy_ASC' |
  'accuracy_DESC' |
  'location_ASC' |
  'location_DESC' |
  'checkIn_ASC' |
  'checkIn_DESC' |
  'value_ASC' |
  'value_DESC' |
  'cleanliness_ASC' |
  'cleanliness_DESC' |
  'communication_ASC' |
  'communication_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'responseRate_ASC' |
  'responseRate_DESC' |
  'responseTime_ASC' |
  'responseTime_DESC' |
  'isSuperHost_ASC' |
  'isSuperHost_DESC' |
  'accountType_ASC' |
  'accountType_DESC' |
  'uid_ASC' |
  'uid_DESC'

export type UserType =   'ADMIN' |
  'SELLER' |
  'CONSUMER'

export type ViewsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'lastWeek_ASC' |
  'lastWeek_DESC'

export interface AmenitiesCreateInput {
  id?: ID_Input | null
  elevator?: Boolean | null
  petsAllowed?: Boolean | null
  internet?: Boolean | null
  kitchen?: Boolean | null
  wirelessInternet?: Boolean | null
  familyKidFriendly?: Boolean | null
  freeParkingOnPremises?: Boolean | null
  hotTub?: Boolean | null
  pool?: Boolean | null
  smokingAllowed?: Boolean | null
  wheelchairAccessible?: Boolean | null
  breakfast?: Boolean | null
  cableTv?: Boolean | null
  suitableForEvents?: Boolean | null
  dryer?: Boolean | null
  washer?: Boolean | null
  indoorFireplace?: Boolean | null
  tv?: Boolean | null
  heating?: Boolean | null
  hangers?: Boolean | null
  iron?: Boolean | null
  hairDryer?: Boolean | null
  doorman?: Boolean | null
  paidParkingOffPremises?: Boolean | null
  freeParkingOnStreet?: Boolean | null
  gym?: Boolean | null
  airConditioning?: Boolean | null
  shampoo?: Boolean | null
  essentials?: Boolean | null
  laptopFriendlyWorkspace?: Boolean | null
  privateEntrance?: Boolean | null
  buzzerWirelessIntercom?: Boolean | null
  babyBath?: Boolean | null
  babyMonitor?: Boolean | null
  babysitterRecommendations?: Boolean | null
  bathtub?: Boolean | null
  changingTable?: Boolean | null
  childrensBooksAndToys?: Boolean | null
  childrensDinnerware?: Boolean | null
  crib?: Boolean | null
  place: PlaceCreateOneWithoutAmenitiesInput
}

export interface AmenitiesCreateOneWithoutPlaceInput {
  create?: AmenitiesCreateWithoutPlaceInput | null
  connect?: AmenitiesWhereUniqueInput | null
}

export interface AmenitiesCreateWithoutPlaceInput {
  id?: ID_Input | null
  elevator?: Boolean | null
  petsAllowed?: Boolean | null
  internet?: Boolean | null
  kitchen?: Boolean | null
  wirelessInternet?: Boolean | null
  familyKidFriendly?: Boolean | null
  freeParkingOnPremises?: Boolean | null
  hotTub?: Boolean | null
  pool?: Boolean | null
  smokingAllowed?: Boolean | null
  wheelchairAccessible?: Boolean | null
  breakfast?: Boolean | null
  cableTv?: Boolean | null
  suitableForEvents?: Boolean | null
  dryer?: Boolean | null
  washer?: Boolean | null
  indoorFireplace?: Boolean | null
  tv?: Boolean | null
  heating?: Boolean | null
  hangers?: Boolean | null
  iron?: Boolean | null
  hairDryer?: Boolean | null
  doorman?: Boolean | null
  paidParkingOffPremises?: Boolean | null
  freeParkingOnStreet?: Boolean | null
  gym?: Boolean | null
  airConditioning?: Boolean | null
  shampoo?: Boolean | null
  essentials?: Boolean | null
  laptopFriendlyWorkspace?: Boolean | null
  privateEntrance?: Boolean | null
  buzzerWirelessIntercom?: Boolean | null
  babyBath?: Boolean | null
  babyMonitor?: Boolean | null
  babysitterRecommendations?: Boolean | null
  bathtub?: Boolean | null
  changingTable?: Boolean | null
  childrensBooksAndToys?: Boolean | null
  childrensDinnerware?: Boolean | null
  crib?: Boolean | null
}

export interface AmenitiesSubscriptionWhereInput {
  AND?: AmenitiesSubscriptionWhereInput[] | AmenitiesSubscriptionWhereInput | null
  OR?: AmenitiesSubscriptionWhereInput[] | AmenitiesSubscriptionWhereInput | null
  NOT?: AmenitiesSubscriptionWhereInput[] | AmenitiesSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AmenitiesWhereInput | null
}

export interface AmenitiesUpdateInput {
  elevator?: Boolean | null
  petsAllowed?: Boolean | null
  internet?: Boolean | null
  kitchen?: Boolean | null
  wirelessInternet?: Boolean | null
  familyKidFriendly?: Boolean | null
  freeParkingOnPremises?: Boolean | null
  hotTub?: Boolean | null
  pool?: Boolean | null
  smokingAllowed?: Boolean | null
  wheelchairAccessible?: Boolean | null
  breakfast?: Boolean | null
  cableTv?: Boolean | null
  suitableForEvents?: Boolean | null
  dryer?: Boolean | null
  washer?: Boolean | null
  indoorFireplace?: Boolean | null
  tv?: Boolean | null
  heating?: Boolean | null
  hangers?: Boolean | null
  iron?: Boolean | null
  hairDryer?: Boolean | null
  doorman?: Boolean | null
  paidParkingOffPremises?: Boolean | null
  freeParkingOnStreet?: Boolean | null
  gym?: Boolean | null
  airConditioning?: Boolean | null
  shampoo?: Boolean | null
  essentials?: Boolean | null
  laptopFriendlyWorkspace?: Boolean | null
  privateEntrance?: Boolean | null
  buzzerWirelessIntercom?: Boolean | null
  babyBath?: Boolean | null
  babyMonitor?: Boolean | null
  babysitterRecommendations?: Boolean | null
  bathtub?: Boolean | null
  changingTable?: Boolean | null
  childrensBooksAndToys?: Boolean | null
  childrensDinnerware?: Boolean | null
  crib?: Boolean | null
  place?: PlaceUpdateOneRequiredWithoutAmenitiesInput | null
}

export interface AmenitiesUpdateManyMutationInput {
  elevator?: Boolean | null
  petsAllowed?: Boolean | null
  internet?: Boolean | null
  kitchen?: Boolean | null
  wirelessInternet?: Boolean | null
  familyKidFriendly?: Boolean | null
  freeParkingOnPremises?: Boolean | null
  hotTub?: Boolean | null
  pool?: Boolean | null
  smokingAllowed?: Boolean | null
  wheelchairAccessible?: Boolean | null
  breakfast?: Boolean | null
  cableTv?: Boolean | null
  suitableForEvents?: Boolean | null
  dryer?: Boolean | null
  washer?: Boolean | null
  indoorFireplace?: Boolean | null
  tv?: Boolean | null
  heating?: Boolean | null
  hangers?: Boolean | null
  iron?: Boolean | null
  hairDryer?: Boolean | null
  doorman?: Boolean | null
  paidParkingOffPremises?: Boolean | null
  freeParkingOnStreet?: Boolean | null
  gym?: Boolean | null
  airConditioning?: Boolean | null
  shampoo?: Boolean | null
  essentials?: Boolean | null
  laptopFriendlyWorkspace?: Boolean | null
  privateEntrance?: Boolean | null
  buzzerWirelessIntercom?: Boolean | null
  babyBath?: Boolean | null
  babyMonitor?: Boolean | null
  babysitterRecommendations?: Boolean | null
  bathtub?: Boolean | null
  changingTable?: Boolean | null
  childrensBooksAndToys?: Boolean | null
  childrensDinnerware?: Boolean | null
  crib?: Boolean | null
}

export interface AmenitiesUpdateOneRequiredWithoutPlaceInput {
  create?: AmenitiesCreateWithoutPlaceInput | null
  connect?: AmenitiesWhereUniqueInput | null
  update?: AmenitiesUpdateWithoutPlaceDataInput | null
  upsert?: AmenitiesUpsertWithoutPlaceInput | null
}

export interface AmenitiesUpdateWithoutPlaceDataInput {
  elevator?: Boolean | null
  petsAllowed?: Boolean | null
  internet?: Boolean | null
  kitchen?: Boolean | null
  wirelessInternet?: Boolean | null
  familyKidFriendly?: Boolean | null
  freeParkingOnPremises?: Boolean | null
  hotTub?: Boolean | null
  pool?: Boolean | null
  smokingAllowed?: Boolean | null
  wheelchairAccessible?: Boolean | null
  breakfast?: Boolean | null
  cableTv?: Boolean | null
  suitableForEvents?: Boolean | null
  dryer?: Boolean | null
  washer?: Boolean | null
  indoorFireplace?: Boolean | null
  tv?: Boolean | null
  heating?: Boolean | null
  hangers?: Boolean | null
  iron?: Boolean | null
  hairDryer?: Boolean | null
  doorman?: Boolean | null
  paidParkingOffPremises?: Boolean | null
  freeParkingOnStreet?: Boolean | null
  gym?: Boolean | null
  airConditioning?: Boolean | null
  shampoo?: Boolean | null
  essentials?: Boolean | null
  laptopFriendlyWorkspace?: Boolean | null
  privateEntrance?: Boolean | null
  buzzerWirelessIntercom?: Boolean | null
  babyBath?: Boolean | null
  babyMonitor?: Boolean | null
  babysitterRecommendations?: Boolean | null
  bathtub?: Boolean | null
  changingTable?: Boolean | null
  childrensBooksAndToys?: Boolean | null
  childrensDinnerware?: Boolean | null
  crib?: Boolean | null
}

export interface AmenitiesUpsertWithoutPlaceInput {
  update: AmenitiesUpdateWithoutPlaceDataInput
  create: AmenitiesCreateWithoutPlaceInput
}

export interface AmenitiesWhereInput {
  AND?: AmenitiesWhereInput[] | AmenitiesWhereInput | null
  OR?: AmenitiesWhereInput[] | AmenitiesWhereInput | null
  NOT?: AmenitiesWhereInput[] | AmenitiesWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  elevator?: Boolean | null
  elevator_not?: Boolean | null
  petsAllowed?: Boolean | null
  petsAllowed_not?: Boolean | null
  internet?: Boolean | null
  internet_not?: Boolean | null
  kitchen?: Boolean | null
  kitchen_not?: Boolean | null
  wirelessInternet?: Boolean | null
  wirelessInternet_not?: Boolean | null
  familyKidFriendly?: Boolean | null
  familyKidFriendly_not?: Boolean | null
  freeParkingOnPremises?: Boolean | null
  freeParkingOnPremises_not?: Boolean | null
  hotTub?: Boolean | null
  hotTub_not?: Boolean | null
  pool?: Boolean | null
  pool_not?: Boolean | null
  smokingAllowed?: Boolean | null
  smokingAllowed_not?: Boolean | null
  wheelchairAccessible?: Boolean | null
  wheelchairAccessible_not?: Boolean | null
  breakfast?: Boolean | null
  breakfast_not?: Boolean | null
  cableTv?: Boolean | null
  cableTv_not?: Boolean | null
  suitableForEvents?: Boolean | null
  suitableForEvents_not?: Boolean | null
  dryer?: Boolean | null
  dryer_not?: Boolean | null
  washer?: Boolean | null
  washer_not?: Boolean | null
  indoorFireplace?: Boolean | null
  indoorFireplace_not?: Boolean | null
  tv?: Boolean | null
  tv_not?: Boolean | null
  heating?: Boolean | null
  heating_not?: Boolean | null
  hangers?: Boolean | null
  hangers_not?: Boolean | null
  iron?: Boolean | null
  iron_not?: Boolean | null
  hairDryer?: Boolean | null
  hairDryer_not?: Boolean | null
  doorman?: Boolean | null
  doorman_not?: Boolean | null
  paidParkingOffPremises?: Boolean | null
  paidParkingOffPremises_not?: Boolean | null
  freeParkingOnStreet?: Boolean | null
  freeParkingOnStreet_not?: Boolean | null
  gym?: Boolean | null
  gym_not?: Boolean | null
  airConditioning?: Boolean | null
  airConditioning_not?: Boolean | null
  shampoo?: Boolean | null
  shampoo_not?: Boolean | null
  essentials?: Boolean | null
  essentials_not?: Boolean | null
  laptopFriendlyWorkspace?: Boolean | null
  laptopFriendlyWorkspace_not?: Boolean | null
  privateEntrance?: Boolean | null
  privateEntrance_not?: Boolean | null
  buzzerWirelessIntercom?: Boolean | null
  buzzerWirelessIntercom_not?: Boolean | null
  babyBath?: Boolean | null
  babyBath_not?: Boolean | null
  babyMonitor?: Boolean | null
  babyMonitor_not?: Boolean | null
  babysitterRecommendations?: Boolean | null
  babysitterRecommendations_not?: Boolean | null
  bathtub?: Boolean | null
  bathtub_not?: Boolean | null
  changingTable?: Boolean | null
  changingTable_not?: Boolean | null
  childrensBooksAndToys?: Boolean | null
  childrensBooksAndToys_not?: Boolean | null
  childrensDinnerware?: Boolean | null
  childrensDinnerware_not?: Boolean | null
  crib?: Boolean | null
  crib_not?: Boolean | null
  place?: PlaceWhereInput | null
}

export interface AmenitiesWhereUniqueInput {
  id?: ID_Input | null
}

export interface CityCreateInput {
  id?: ID_Input | null
  name: String
  neighbourhoods?: NeighbourhoodCreateManyWithoutCityInput | null
}

export interface CityCreateOneWithoutNeighbourhoodsInput {
  create?: CityCreateWithoutNeighbourhoodsInput | null
  connect?: CityWhereUniqueInput | null
}

export interface CityCreateWithoutNeighbourhoodsInput {
  id?: ID_Input | null
  name: String
}

export interface CitySubscriptionWhereInput {
  AND?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput | null
  OR?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput | null
  NOT?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CityWhereInput | null
}

export interface CityUpdateInput {
  name?: String | null
  neighbourhoods?: NeighbourhoodUpdateManyWithoutCityInput | null
}

export interface CityUpdateManyMutationInput {
  name?: String | null
}

export interface CityUpdateOneRequiredWithoutNeighbourhoodsInput {
  create?: CityCreateWithoutNeighbourhoodsInput | null
  connect?: CityWhereUniqueInput | null
  update?: CityUpdateWithoutNeighbourhoodsDataInput | null
  upsert?: CityUpsertWithoutNeighbourhoodsInput | null
}

export interface CityUpdateWithoutNeighbourhoodsDataInput {
  name?: String | null
}

export interface CityUpsertWithoutNeighbourhoodsInput {
  update: CityUpdateWithoutNeighbourhoodsDataInput
  create: CityCreateWithoutNeighbourhoodsInput
}

export interface CityWhereInput {
  AND?: CityWhereInput[] | CityWhereInput | null
  OR?: CityWhereInput[] | CityWhereInput | null
  NOT?: CityWhereInput[] | CityWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  neighbourhoods_every?: NeighbourhoodWhereInput | null
  neighbourhoods_some?: NeighbourhoodWhereInput | null
  neighbourhoods_none?: NeighbourhoodWhereInput | null
}

export interface CityWhereUniqueInput {
  id?: ID_Input | null
}

export interface CreditCardInformationCreateInput {
  id?: ID_Input | null
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccountCreateOneWithoutCreditcardInput | null
}

export interface CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create?: CreditCardInformationCreateWithoutPaymentAccountInput | null
  connect?: CreditCardInformationWhereUniqueInput | null
}

export interface CreditCardInformationCreateWithoutPaymentAccountInput {
  id?: ID_Input | null
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

export interface CreditCardInformationSubscriptionWhereInput {
  AND?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput | null
  OR?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput | null
  NOT?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CreditCardInformationWhereInput | null
}

export interface CreditCardInformationUpdateInput {
  cardNumber?: String | null
  expiresOnMonth?: Int | null
  expiresOnYear?: Int | null
  securityCode?: String | null
  firstName?: String | null
  lastName?: String | null
  postalCode?: String | null
  country?: String | null
  paymentAccount?: PaymentAccountUpdateOneWithoutCreditcardInput | null
}

export interface CreditCardInformationUpdateManyMutationInput {
  cardNumber?: String | null
  expiresOnMonth?: Int | null
  expiresOnYear?: Int | null
  securityCode?: String | null
  firstName?: String | null
  lastName?: String | null
  postalCode?: String | null
  country?: String | null
}

export interface CreditCardInformationUpdateOneWithoutPaymentAccountInput {
  create?: CreditCardInformationCreateWithoutPaymentAccountInput | null
  connect?: CreditCardInformationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: CreditCardInformationUpdateWithoutPaymentAccountDataInput | null
  upsert?: CreditCardInformationUpsertWithoutPaymentAccountInput | null
}

export interface CreditCardInformationUpdateWithoutPaymentAccountDataInput {
  cardNumber?: String | null
  expiresOnMonth?: Int | null
  expiresOnYear?: Int | null
  securityCode?: String | null
  firstName?: String | null
  lastName?: String | null
  postalCode?: String | null
  country?: String | null
}

export interface CreditCardInformationUpsertWithoutPaymentAccountInput {
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  create: CreditCardInformationCreateWithoutPaymentAccountInput
}

export interface CreditCardInformationWhereInput {
  AND?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput | null
  OR?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput | null
  NOT?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  cardNumber?: String | null
  cardNumber_not?: String | null
  cardNumber_in?: String[] | String | null
  cardNumber_not_in?: String[] | String | null
  cardNumber_lt?: String | null
  cardNumber_lte?: String | null
  cardNumber_gt?: String | null
  cardNumber_gte?: String | null
  cardNumber_contains?: String | null
  cardNumber_not_contains?: String | null
  cardNumber_starts_with?: String | null
  cardNumber_not_starts_with?: String | null
  cardNumber_ends_with?: String | null
  cardNumber_not_ends_with?: String | null
  expiresOnMonth?: Int | null
  expiresOnMonth_not?: Int | null
  expiresOnMonth_in?: Int[] | Int | null
  expiresOnMonth_not_in?: Int[] | Int | null
  expiresOnMonth_lt?: Int | null
  expiresOnMonth_lte?: Int | null
  expiresOnMonth_gt?: Int | null
  expiresOnMonth_gte?: Int | null
  expiresOnYear?: Int | null
  expiresOnYear_not?: Int | null
  expiresOnYear_in?: Int[] | Int | null
  expiresOnYear_not_in?: Int[] | Int | null
  expiresOnYear_lt?: Int | null
  expiresOnYear_lte?: Int | null
  expiresOnYear_gt?: Int | null
  expiresOnYear_gte?: Int | null
  securityCode?: String | null
  securityCode_not?: String | null
  securityCode_in?: String[] | String | null
  securityCode_not_in?: String[] | String | null
  securityCode_lt?: String | null
  securityCode_lte?: String | null
  securityCode_gt?: String | null
  securityCode_gte?: String | null
  securityCode_contains?: String | null
  securityCode_not_contains?: String | null
  securityCode_starts_with?: String | null
  securityCode_not_starts_with?: String | null
  securityCode_ends_with?: String | null
  securityCode_not_ends_with?: String | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  postalCode?: String | null
  postalCode_not?: String | null
  postalCode_in?: String[] | String | null
  postalCode_not_in?: String[] | String | null
  postalCode_lt?: String | null
  postalCode_lte?: String | null
  postalCode_gt?: String | null
  postalCode_gte?: String | null
  postalCode_contains?: String | null
  postalCode_not_contains?: String | null
  postalCode_starts_with?: String | null
  postalCode_not_starts_with?: String | null
  postalCode_ends_with?: String | null
  postalCode_not_ends_with?: String | null
  country?: String | null
  country_not?: String | null
  country_in?: String[] | String | null
  country_not_in?: String[] | String | null
  country_lt?: String | null
  country_lte?: String | null
  country_gt?: String | null
  country_gte?: String | null
  country_contains?: String | null
  country_not_contains?: String | null
  country_starts_with?: String | null
  country_not_starts_with?: String | null
  country_ends_with?: String | null
  country_not_ends_with?: String | null
  paymentAccount?: PaymentAccountWhereInput | null
}

export interface CreditCardInformationWhereUniqueInput {
  id?: ID_Input | null
}

export interface DebitCardInformationCreateInput {
  id?: ID_Input | null
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccountCreateOneInput | null
}

export interface DebitCardInformationSubscriptionWhereInput {
  AND?: DebitCardInformationSubscriptionWhereInput[] | DebitCardInformationSubscriptionWhereInput | null
  OR?: DebitCardInformationSubscriptionWhereInput[] | DebitCardInformationSubscriptionWhereInput | null
  NOT?: DebitCardInformationSubscriptionWhereInput[] | DebitCardInformationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DebitCardInformationWhereInput | null
}

export interface DebitCardInformationUpdateInput {
  cardNumber?: String | null
  expiresOnMonth?: Int | null
  expiresOnYear?: Int | null
  securityCode?: String | null
  firstName?: String | null
  lastName?: String | null
  postalCode?: String | null
  country?: String | null
  paymentAccount?: PaymentAccountUpdateOneInput | null
}

export interface DebitCardInformationUpdateManyMutationInput {
  cardNumber?: String | null
  expiresOnMonth?: Int | null
  expiresOnYear?: Int | null
  securityCode?: String | null
  firstName?: String | null
  lastName?: String | null
  postalCode?: String | null
  country?: String | null
}

export interface DebitCardInformationWhereInput {
  AND?: DebitCardInformationWhereInput[] | DebitCardInformationWhereInput | null
  OR?: DebitCardInformationWhereInput[] | DebitCardInformationWhereInput | null
  NOT?: DebitCardInformationWhereInput[] | DebitCardInformationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  cardNumber?: String | null
  cardNumber_not?: String | null
  cardNumber_in?: String[] | String | null
  cardNumber_not_in?: String[] | String | null
  cardNumber_lt?: String | null
  cardNumber_lte?: String | null
  cardNumber_gt?: String | null
  cardNumber_gte?: String | null
  cardNumber_contains?: String | null
  cardNumber_not_contains?: String | null
  cardNumber_starts_with?: String | null
  cardNumber_not_starts_with?: String | null
  cardNumber_ends_with?: String | null
  cardNumber_not_ends_with?: String | null
  expiresOnMonth?: Int | null
  expiresOnMonth_not?: Int | null
  expiresOnMonth_in?: Int[] | Int | null
  expiresOnMonth_not_in?: Int[] | Int | null
  expiresOnMonth_lt?: Int | null
  expiresOnMonth_lte?: Int | null
  expiresOnMonth_gt?: Int | null
  expiresOnMonth_gte?: Int | null
  expiresOnYear?: Int | null
  expiresOnYear_not?: Int | null
  expiresOnYear_in?: Int[] | Int | null
  expiresOnYear_not_in?: Int[] | Int | null
  expiresOnYear_lt?: Int | null
  expiresOnYear_lte?: Int | null
  expiresOnYear_gt?: Int | null
  expiresOnYear_gte?: Int | null
  securityCode?: String | null
  securityCode_not?: String | null
  securityCode_in?: String[] | String | null
  securityCode_not_in?: String[] | String | null
  securityCode_lt?: String | null
  securityCode_lte?: String | null
  securityCode_gt?: String | null
  securityCode_gte?: String | null
  securityCode_contains?: String | null
  securityCode_not_contains?: String | null
  securityCode_starts_with?: String | null
  securityCode_not_starts_with?: String | null
  securityCode_ends_with?: String | null
  securityCode_not_ends_with?: String | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  postalCode?: String | null
  postalCode_not?: String | null
  postalCode_in?: String[] | String | null
  postalCode_not_in?: String[] | String | null
  postalCode_lt?: String | null
  postalCode_lte?: String | null
  postalCode_gt?: String | null
  postalCode_gte?: String | null
  postalCode_contains?: String | null
  postalCode_not_contains?: String | null
  postalCode_starts_with?: String | null
  postalCode_not_starts_with?: String | null
  postalCode_ends_with?: String | null
  postalCode_not_ends_with?: String | null
  country?: String | null
  country_not?: String | null
  country_in?: String[] | String | null
  country_not_in?: String[] | String | null
  country_lt?: String | null
  country_lte?: String | null
  country_gt?: String | null
  country_gte?: String | null
  country_contains?: String | null
  country_not_contains?: String | null
  country_starts_with?: String | null
  country_not_starts_with?: String | null
  country_ends_with?: String | null
  country_not_ends_with?: String | null
  paymentAccount?: PaymentAccountWhereInput | null
}

export interface DebitCardInformationWhereUniqueInput {
  id?: ID_Input | null
}

export interface ExperienceCategoryCreateInput {
  id?: ID_Input | null
  mainColor?: String | null
  name: String
  experience?: ExperienceCreateOneWithoutCategoryInput | null
}

export interface ExperienceCategoryCreateOneWithoutExperienceInput {
  create?: ExperienceCategoryCreateWithoutExperienceInput | null
  connect?: ExperienceCategoryWhereUniqueInput | null
}

export interface ExperienceCategoryCreateWithoutExperienceInput {
  id?: ID_Input | null
  mainColor?: String | null
  name: String
}

export interface ExperienceCategorySubscriptionWhereInput {
  AND?: ExperienceCategorySubscriptionWhereInput[] | ExperienceCategorySubscriptionWhereInput | null
  OR?: ExperienceCategorySubscriptionWhereInput[] | ExperienceCategorySubscriptionWhereInput | null
  NOT?: ExperienceCategorySubscriptionWhereInput[] | ExperienceCategorySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ExperienceCategoryWhereInput | null
}

export interface ExperienceCategoryUpdateInput {
  mainColor?: String | null
  name?: String | null
  experience?: ExperienceUpdateOneWithoutCategoryInput | null
}

export interface ExperienceCategoryUpdateManyMutationInput {
  mainColor?: String | null
  name?: String | null
}

export interface ExperienceCategoryUpdateOneWithoutExperienceInput {
  create?: ExperienceCategoryCreateWithoutExperienceInput | null
  connect?: ExperienceCategoryWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ExperienceCategoryUpdateWithoutExperienceDataInput | null
  upsert?: ExperienceCategoryUpsertWithoutExperienceInput | null
}

export interface ExperienceCategoryUpdateWithoutExperienceDataInput {
  mainColor?: String | null
  name?: String | null
}

export interface ExperienceCategoryUpsertWithoutExperienceInput {
  update: ExperienceCategoryUpdateWithoutExperienceDataInput
  create: ExperienceCategoryCreateWithoutExperienceInput
}

export interface ExperienceCategoryWhereInput {
  AND?: ExperienceCategoryWhereInput[] | ExperienceCategoryWhereInput | null
  OR?: ExperienceCategoryWhereInput[] | ExperienceCategoryWhereInput | null
  NOT?: ExperienceCategoryWhereInput[] | ExperienceCategoryWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  mainColor?: String | null
  mainColor_not?: String | null
  mainColor_in?: String[] | String | null
  mainColor_not_in?: String[] | String | null
  mainColor_lt?: String | null
  mainColor_lte?: String | null
  mainColor_gt?: String | null
  mainColor_gte?: String | null
  mainColor_contains?: String | null
  mainColor_not_contains?: String | null
  mainColor_starts_with?: String | null
  mainColor_not_starts_with?: String | null
  mainColor_ends_with?: String | null
  mainColor_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  experience?: ExperienceWhereInput | null
}

export interface ExperienceCategoryWhereUniqueInput {
  id?: ID_Input | null
}

export interface ExperienceCreateInput {
  id?: ID_Input | null
  title: String
  pricePerPerson: Int
  popularity: Int
  category?: ExperienceCategoryCreateOneWithoutExperienceInput | null
  host: UserCreateOneWithoutHostingExperiencesInput
  location: LocationCreateOneWithoutExperienceInput
  reviews?: ReviewCreateManyWithoutExperienceInput | null
  preview: PictureCreateOneInput
}

export interface ExperienceCreateManyWithoutHostInput {
  create?: ExperienceCreateWithoutHostInput[] | ExperienceCreateWithoutHostInput | null
  connect?: ExperienceWhereUniqueInput[] | ExperienceWhereUniqueInput | null
}

export interface ExperienceCreateOneWithoutCategoryInput {
  create?: ExperienceCreateWithoutCategoryInput | null
  connect?: ExperienceWhereUniqueInput | null
}

export interface ExperienceCreateOneWithoutLocationInput {
  create?: ExperienceCreateWithoutLocationInput | null
  connect?: ExperienceWhereUniqueInput | null
}

export interface ExperienceCreateOneWithoutReviewsInput {
  create?: ExperienceCreateWithoutReviewsInput | null
  connect?: ExperienceWhereUniqueInput | null
}

export interface ExperienceCreateWithoutCategoryInput {
  id?: ID_Input | null
  title: String
  pricePerPerson: Int
  popularity: Int
  host: UserCreateOneWithoutHostingExperiencesInput
  location: LocationCreateOneWithoutExperienceInput
  reviews?: ReviewCreateManyWithoutExperienceInput | null
  preview: PictureCreateOneInput
}

export interface ExperienceCreateWithoutHostInput {
  id?: ID_Input | null
  title: String
  pricePerPerson: Int
  popularity: Int
  category?: ExperienceCategoryCreateOneWithoutExperienceInput | null
  location: LocationCreateOneWithoutExperienceInput
  reviews?: ReviewCreateManyWithoutExperienceInput | null
  preview: PictureCreateOneInput
}

export interface ExperienceCreateWithoutLocationInput {
  id?: ID_Input | null
  title: String
  pricePerPerson: Int
  popularity: Int
  category?: ExperienceCategoryCreateOneWithoutExperienceInput | null
  host: UserCreateOneWithoutHostingExperiencesInput
  reviews?: ReviewCreateManyWithoutExperienceInput | null
  preview: PictureCreateOneInput
}

export interface ExperienceCreateWithoutReviewsInput {
  id?: ID_Input | null
  title: String
  pricePerPerson: Int
  popularity: Int
  category?: ExperienceCategoryCreateOneWithoutExperienceInput | null
  host: UserCreateOneWithoutHostingExperiencesInput
  location: LocationCreateOneWithoutExperienceInput
  preview: PictureCreateOneInput
}

export interface ExperienceScalarWhereInput {
  AND?: ExperienceScalarWhereInput[] | ExperienceScalarWhereInput | null
  OR?: ExperienceScalarWhereInput[] | ExperienceScalarWhereInput | null
  NOT?: ExperienceScalarWhereInput[] | ExperienceScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  pricePerPerson?: Int | null
  pricePerPerson_not?: Int | null
  pricePerPerson_in?: Int[] | Int | null
  pricePerPerson_not_in?: Int[] | Int | null
  pricePerPerson_lt?: Int | null
  pricePerPerson_lte?: Int | null
  pricePerPerson_gt?: Int | null
  pricePerPerson_gte?: Int | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: Int[] | Int | null
  popularity_not_in?: Int[] | Int | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
}

export interface ExperienceSubscriptionWhereInput {
  AND?: ExperienceSubscriptionWhereInput[] | ExperienceSubscriptionWhereInput | null
  OR?: ExperienceSubscriptionWhereInput[] | ExperienceSubscriptionWhereInput | null
  NOT?: ExperienceSubscriptionWhereInput[] | ExperienceSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ExperienceWhereInput | null
}

export interface ExperienceUpdateInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
  category?: ExperienceCategoryUpdateOneWithoutExperienceInput | null
  host?: UserUpdateOneRequiredWithoutHostingExperiencesInput | null
  location?: LocationUpdateOneRequiredWithoutExperienceInput | null
  reviews?: ReviewUpdateManyWithoutExperienceInput | null
  preview?: PictureUpdateOneRequiredInput | null
}

export interface ExperienceUpdateManyDataInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
}

export interface ExperienceUpdateManyMutationInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
}

export interface ExperienceUpdateManyWithoutHostInput {
  create?: ExperienceCreateWithoutHostInput[] | ExperienceCreateWithoutHostInput | null
  connect?: ExperienceWhereUniqueInput[] | ExperienceWhereUniqueInput | null
  set?: ExperienceWhereUniqueInput[] | ExperienceWhereUniqueInput | null
  disconnect?: ExperienceWhereUniqueInput[] | ExperienceWhereUniqueInput | null
  delete?: ExperienceWhereUniqueInput[] | ExperienceWhereUniqueInput | null
  update?: ExperienceUpdateWithWhereUniqueWithoutHostInput[] | ExperienceUpdateWithWhereUniqueWithoutHostInput | null
  updateMany?: ExperienceUpdateManyWithWhereNestedInput[] | ExperienceUpdateManyWithWhereNestedInput | null
  deleteMany?: ExperienceScalarWhereInput[] | ExperienceScalarWhereInput | null
  upsert?: ExperienceUpsertWithWhereUniqueWithoutHostInput[] | ExperienceUpsertWithWhereUniqueWithoutHostInput | null
}

export interface ExperienceUpdateManyWithWhereNestedInput {
  where: ExperienceScalarWhereInput
  data: ExperienceUpdateManyDataInput
}

export interface ExperienceUpdateOneWithoutCategoryInput {
  create?: ExperienceCreateWithoutCategoryInput | null
  connect?: ExperienceWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ExperienceUpdateWithoutCategoryDataInput | null
  upsert?: ExperienceUpsertWithoutCategoryInput | null
}

export interface ExperienceUpdateOneWithoutLocationInput {
  create?: ExperienceCreateWithoutLocationInput | null
  connect?: ExperienceWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ExperienceUpdateWithoutLocationDataInput | null
  upsert?: ExperienceUpsertWithoutLocationInput | null
}

export interface ExperienceUpdateOneWithoutReviewsInput {
  create?: ExperienceCreateWithoutReviewsInput | null
  connect?: ExperienceWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ExperienceUpdateWithoutReviewsDataInput | null
  upsert?: ExperienceUpsertWithoutReviewsInput | null
}

export interface ExperienceUpdateWithoutCategoryDataInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
  host?: UserUpdateOneRequiredWithoutHostingExperiencesInput | null
  location?: LocationUpdateOneRequiredWithoutExperienceInput | null
  reviews?: ReviewUpdateManyWithoutExperienceInput | null
  preview?: PictureUpdateOneRequiredInput | null
}

export interface ExperienceUpdateWithoutHostDataInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
  category?: ExperienceCategoryUpdateOneWithoutExperienceInput | null
  location?: LocationUpdateOneRequiredWithoutExperienceInput | null
  reviews?: ReviewUpdateManyWithoutExperienceInput | null
  preview?: PictureUpdateOneRequiredInput | null
}

export interface ExperienceUpdateWithoutLocationDataInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
  category?: ExperienceCategoryUpdateOneWithoutExperienceInput | null
  host?: UserUpdateOneRequiredWithoutHostingExperiencesInput | null
  reviews?: ReviewUpdateManyWithoutExperienceInput | null
  preview?: PictureUpdateOneRequiredInput | null
}

export interface ExperienceUpdateWithoutReviewsDataInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
  category?: ExperienceCategoryUpdateOneWithoutExperienceInput | null
  host?: UserUpdateOneRequiredWithoutHostingExperiencesInput | null
  location?: LocationUpdateOneRequiredWithoutExperienceInput | null
  preview?: PictureUpdateOneRequiredInput | null
}

export interface ExperienceUpdateWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput
  data: ExperienceUpdateWithoutHostDataInput
}

export interface ExperienceUpsertWithoutCategoryInput {
  update: ExperienceUpdateWithoutCategoryDataInput
  create: ExperienceCreateWithoutCategoryInput
}

export interface ExperienceUpsertWithoutLocationInput {
  update: ExperienceUpdateWithoutLocationDataInput
  create: ExperienceCreateWithoutLocationInput
}

export interface ExperienceUpsertWithoutReviewsInput {
  update: ExperienceUpdateWithoutReviewsDataInput
  create: ExperienceCreateWithoutReviewsInput
}

export interface ExperienceUpsertWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput
  update: ExperienceUpdateWithoutHostDataInput
  create: ExperienceCreateWithoutHostInput
}

export interface ExperienceWhereInput {
  AND?: ExperienceWhereInput[] | ExperienceWhereInput | null
  OR?: ExperienceWhereInput[] | ExperienceWhereInput | null
  NOT?: ExperienceWhereInput[] | ExperienceWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  pricePerPerson?: Int | null
  pricePerPerson_not?: Int | null
  pricePerPerson_in?: Int[] | Int | null
  pricePerPerson_not_in?: Int[] | Int | null
  pricePerPerson_lt?: Int | null
  pricePerPerson_lte?: Int | null
  pricePerPerson_gt?: Int | null
  pricePerPerson_gte?: Int | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: Int[] | Int | null
  popularity_not_in?: Int[] | Int | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
  category?: ExperienceCategoryWhereInput | null
  host?: UserWhereInput | null
  location?: LocationWhereInput | null
  reviews_every?: ReviewWhereInput | null
  reviews_some?: ReviewWhereInput | null
  reviews_none?: ReviewWhereInput | null
  preview?: PictureWhereInput | null
}

export interface ExperienceWhereUniqueInput {
  id?: ID_Input | null
}

export interface GuestRequirementsCreateInput {
  id?: ID_Input | null
  govIssuedId?: Boolean | null
  recommendationsFromOtherHosts?: Boolean | null
  guestTripInformation?: Boolean | null
  place: PlaceCreateOneWithoutGuestRequirementsInput
}

export interface GuestRequirementsCreateOneWithoutPlaceInput {
  create?: GuestRequirementsCreateWithoutPlaceInput | null
  connect?: GuestRequirementsWhereUniqueInput | null
}

export interface GuestRequirementsCreateWithoutPlaceInput {
  id?: ID_Input | null
  govIssuedId?: Boolean | null
  recommendationsFromOtherHosts?: Boolean | null
  guestTripInformation?: Boolean | null
}

export interface GuestRequirementsSubscriptionWhereInput {
  AND?: GuestRequirementsSubscriptionWhereInput[] | GuestRequirementsSubscriptionWhereInput | null
  OR?: GuestRequirementsSubscriptionWhereInput[] | GuestRequirementsSubscriptionWhereInput | null
  NOT?: GuestRequirementsSubscriptionWhereInput[] | GuestRequirementsSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: GuestRequirementsWhereInput | null
}

export interface GuestRequirementsUpdateInput {
  govIssuedId?: Boolean | null
  recommendationsFromOtherHosts?: Boolean | null
  guestTripInformation?: Boolean | null
  place?: PlaceUpdateOneRequiredWithoutGuestRequirementsInput | null
}

export interface GuestRequirementsUpdateManyMutationInput {
  govIssuedId?: Boolean | null
  recommendationsFromOtherHosts?: Boolean | null
  guestTripInformation?: Boolean | null
}

export interface GuestRequirementsUpdateOneWithoutPlaceInput {
  create?: GuestRequirementsCreateWithoutPlaceInput | null
  connect?: GuestRequirementsWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: GuestRequirementsUpdateWithoutPlaceDataInput | null
  upsert?: GuestRequirementsUpsertWithoutPlaceInput | null
}

export interface GuestRequirementsUpdateWithoutPlaceDataInput {
  govIssuedId?: Boolean | null
  recommendationsFromOtherHosts?: Boolean | null
  guestTripInformation?: Boolean | null
}

export interface GuestRequirementsUpsertWithoutPlaceInput {
  update: GuestRequirementsUpdateWithoutPlaceDataInput
  create: GuestRequirementsCreateWithoutPlaceInput
}

export interface GuestRequirementsWhereInput {
  AND?: GuestRequirementsWhereInput[] | GuestRequirementsWhereInput | null
  OR?: GuestRequirementsWhereInput[] | GuestRequirementsWhereInput | null
  NOT?: GuestRequirementsWhereInput[] | GuestRequirementsWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  govIssuedId?: Boolean | null
  govIssuedId_not?: Boolean | null
  recommendationsFromOtherHosts?: Boolean | null
  recommendationsFromOtherHosts_not?: Boolean | null
  guestTripInformation?: Boolean | null
  guestTripInformation_not?: Boolean | null
  place?: PlaceWhereInput | null
}

export interface GuestRequirementsWhereUniqueInput {
  id?: ID_Input | null
}

export interface HouseRulesCreateInput {
  id?: ID_Input | null
  suitableForChildren?: Boolean | null
  suitableForInfants?: Boolean | null
  petsAllowed?: Boolean | null
  smokingAllowed?: Boolean | null
  partiesAndEventsAllowed?: Boolean | null
  additionalRules?: String | null
}

export interface HouseRulesCreateOneInput {
  create?: HouseRulesCreateInput | null
  connect?: HouseRulesWhereUniqueInput | null
}

export interface HouseRulesSubscriptionWhereInput {
  AND?: HouseRulesSubscriptionWhereInput[] | HouseRulesSubscriptionWhereInput | null
  OR?: HouseRulesSubscriptionWhereInput[] | HouseRulesSubscriptionWhereInput | null
  NOT?: HouseRulesSubscriptionWhereInput[] | HouseRulesSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: HouseRulesWhereInput | null
}

export interface HouseRulesUpdateDataInput {
  suitableForChildren?: Boolean | null
  suitableForInfants?: Boolean | null
  petsAllowed?: Boolean | null
  smokingAllowed?: Boolean | null
  partiesAndEventsAllowed?: Boolean | null
  additionalRules?: String | null
}

export interface HouseRulesUpdateInput {
  suitableForChildren?: Boolean | null
  suitableForInfants?: Boolean | null
  petsAllowed?: Boolean | null
  smokingAllowed?: Boolean | null
  partiesAndEventsAllowed?: Boolean | null
  additionalRules?: String | null
}

export interface HouseRulesUpdateManyMutationInput {
  suitableForChildren?: Boolean | null
  suitableForInfants?: Boolean | null
  petsAllowed?: Boolean | null
  smokingAllowed?: Boolean | null
  partiesAndEventsAllowed?: Boolean | null
  additionalRules?: String | null
}

export interface HouseRulesUpdateOneInput {
  create?: HouseRulesCreateInput | null
  connect?: HouseRulesWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: HouseRulesUpdateDataInput | null
  upsert?: HouseRulesUpsertNestedInput | null
}

export interface HouseRulesUpsertNestedInput {
  update: HouseRulesUpdateDataInput
  create: HouseRulesCreateInput
}

export interface HouseRulesWhereInput {
  AND?: HouseRulesWhereInput[] | HouseRulesWhereInput | null
  OR?: HouseRulesWhereInput[] | HouseRulesWhereInput | null
  NOT?: HouseRulesWhereInput[] | HouseRulesWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  suitableForChildren?: Boolean | null
  suitableForChildren_not?: Boolean | null
  suitableForInfants?: Boolean | null
  suitableForInfants_not?: Boolean | null
  petsAllowed?: Boolean | null
  petsAllowed_not?: Boolean | null
  smokingAllowed?: Boolean | null
  smokingAllowed_not?: Boolean | null
  partiesAndEventsAllowed?: Boolean | null
  partiesAndEventsAllowed_not?: Boolean | null
  additionalRules?: String | null
  additionalRules_not?: String | null
  additionalRules_in?: String[] | String | null
  additionalRules_not_in?: String[] | String | null
  additionalRules_lt?: String | null
  additionalRules_lte?: String | null
  additionalRules_gt?: String | null
  additionalRules_gte?: String | null
  additionalRules_contains?: String | null
  additionalRules_not_contains?: String | null
  additionalRules_starts_with?: String | null
  additionalRules_not_starts_with?: String | null
  additionalRules_ends_with?: String | null
  additionalRules_not_ends_with?: String | null
}

export interface HouseRulesWhereUniqueInput {
  id?: ID_Input | null
}

export interface LocationCreateInput {
  id?: ID_Input | null
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput | null
  user?: UserCreateOneWithoutLocationInput | null
  place?: PlaceCreateOneWithoutLocationInput | null
  experience?: ExperienceCreateOneWithoutLocationInput | null
  restaurant?: RestaurantCreateOneWithoutLocationInput | null
}

export interface LocationCreateManyWithoutNeighbourHoodInput {
  create?: LocationCreateWithoutNeighbourHoodInput[] | LocationCreateWithoutNeighbourHoodInput | null
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput | null
}

export interface LocationCreateOneWithoutExperienceInput {
  create?: LocationCreateWithoutExperienceInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationCreateOneWithoutPlaceInput {
  create?: LocationCreateWithoutPlaceInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationCreateOneWithoutRestaurantInput {
  create?: LocationCreateWithoutRestaurantInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationCreateOneWithoutUserInput {
  create?: LocationCreateWithoutUserInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationCreateWithoutExperienceInput {
  id?: ID_Input | null
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput | null
  user?: UserCreateOneWithoutLocationInput | null
  place?: PlaceCreateOneWithoutLocationInput | null
  restaurant?: RestaurantCreateOneWithoutLocationInput | null
}

export interface LocationCreateWithoutNeighbourHoodInput {
  id?: ID_Input | null
  lat: Float
  lng: Float
  address: String
  directions: String
  user?: UserCreateOneWithoutLocationInput | null
  place?: PlaceCreateOneWithoutLocationInput | null
  experience?: ExperienceCreateOneWithoutLocationInput | null
  restaurant?: RestaurantCreateOneWithoutLocationInput | null
}

export interface LocationCreateWithoutPlaceInput {
  id?: ID_Input | null
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput | null
  user?: UserCreateOneWithoutLocationInput | null
  experience?: ExperienceCreateOneWithoutLocationInput | null
  restaurant?: RestaurantCreateOneWithoutLocationInput | null
}

export interface LocationCreateWithoutRestaurantInput {
  id?: ID_Input | null
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput | null
  user?: UserCreateOneWithoutLocationInput | null
  place?: PlaceCreateOneWithoutLocationInput | null
  experience?: ExperienceCreateOneWithoutLocationInput | null
}

export interface LocationCreateWithoutUserInput {
  id?: ID_Input | null
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput | null
  place?: PlaceCreateOneWithoutLocationInput | null
  experience?: ExperienceCreateOneWithoutLocationInput | null
  restaurant?: RestaurantCreateOneWithoutLocationInput | null
}

export interface LocationScalarWhereInput {
  AND?: LocationScalarWhereInput[] | LocationScalarWhereInput | null
  OR?: LocationScalarWhereInput[] | LocationScalarWhereInput | null
  NOT?: LocationScalarWhereInput[] | LocationScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  lat?: Float | null
  lat_not?: Float | null
  lat_in?: Float[] | Float | null
  lat_not_in?: Float[] | Float | null
  lat_lt?: Float | null
  lat_lte?: Float | null
  lat_gt?: Float | null
  lat_gte?: Float | null
  lng?: Float | null
  lng_not?: Float | null
  lng_in?: Float[] | Float | null
  lng_not_in?: Float[] | Float | null
  lng_lt?: Float | null
  lng_lte?: Float | null
  lng_gt?: Float | null
  lng_gte?: Float | null
  address?: String | null
  address_not?: String | null
  address_in?: String[] | String | null
  address_not_in?: String[] | String | null
  address_lt?: String | null
  address_lte?: String | null
  address_gt?: String | null
  address_gte?: String | null
  address_contains?: String | null
  address_not_contains?: String | null
  address_starts_with?: String | null
  address_not_starts_with?: String | null
  address_ends_with?: String | null
  address_not_ends_with?: String | null
  directions?: String | null
  directions_not?: String | null
  directions_in?: String[] | String | null
  directions_not_in?: String[] | String | null
  directions_lt?: String | null
  directions_lte?: String | null
  directions_gt?: String | null
  directions_gte?: String | null
  directions_contains?: String | null
  directions_not_contains?: String | null
  directions_starts_with?: String | null
  directions_not_starts_with?: String | null
  directions_ends_with?: String | null
  directions_not_ends_with?: String | null
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LocationWhereInput | null
}

export interface LocationUpdateInput {
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput | null
  user?: UserUpdateOneWithoutLocationInput | null
  place?: PlaceUpdateOneWithoutLocationInput | null
  experience?: ExperienceUpdateOneWithoutLocationInput | null
  restaurant?: RestaurantUpdateOneWithoutLocationInput | null
}

export interface LocationUpdateManyDataInput {
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
}

export interface LocationUpdateManyMutationInput {
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
}

export interface LocationUpdateManyWithoutNeighbourHoodInput {
  create?: LocationCreateWithoutNeighbourHoodInput[] | LocationCreateWithoutNeighbourHoodInput | null
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput | null
  set?: LocationWhereUniqueInput[] | LocationWhereUniqueInput | null
  disconnect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput | null
  delete?: LocationWhereUniqueInput[] | LocationWhereUniqueInput | null
  update?: LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput[] | LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput | null
  updateMany?: LocationUpdateManyWithWhereNestedInput[] | LocationUpdateManyWithWhereNestedInput | null
  deleteMany?: LocationScalarWhereInput[] | LocationScalarWhereInput | null
  upsert?: LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput[] | LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput | null
}

export interface LocationUpdateManyWithWhereNestedInput {
  where: LocationScalarWhereInput
  data: LocationUpdateManyDataInput
}

export interface LocationUpdateOneRequiredWithoutExperienceInput {
  create?: LocationCreateWithoutExperienceInput | null
  connect?: LocationWhereUniqueInput | null
  update?: LocationUpdateWithoutExperienceDataInput | null
  upsert?: LocationUpsertWithoutExperienceInput | null
}

export interface LocationUpdateOneRequiredWithoutPlaceInput {
  create?: LocationCreateWithoutPlaceInput | null
  connect?: LocationWhereUniqueInput | null
  update?: LocationUpdateWithoutPlaceDataInput | null
  upsert?: LocationUpsertWithoutPlaceInput | null
}

export interface LocationUpdateOneRequiredWithoutRestaurantInput {
  create?: LocationCreateWithoutRestaurantInput | null
  connect?: LocationWhereUniqueInput | null
  update?: LocationUpdateWithoutRestaurantDataInput | null
  upsert?: LocationUpsertWithoutRestaurantInput | null
}

export interface LocationUpdateOneWithoutUserInput {
  create?: LocationCreateWithoutUserInput | null
  connect?: LocationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: LocationUpdateWithoutUserDataInput | null
  upsert?: LocationUpsertWithoutUserInput | null
}

export interface LocationUpdateWithoutExperienceDataInput {
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput | null
  user?: UserUpdateOneWithoutLocationInput | null
  place?: PlaceUpdateOneWithoutLocationInput | null
  restaurant?: RestaurantUpdateOneWithoutLocationInput | null
}

export interface LocationUpdateWithoutNeighbourHoodDataInput {
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
  user?: UserUpdateOneWithoutLocationInput | null
  place?: PlaceUpdateOneWithoutLocationInput | null
  experience?: ExperienceUpdateOneWithoutLocationInput | null
  restaurant?: RestaurantUpdateOneWithoutLocationInput | null
}

export interface LocationUpdateWithoutPlaceDataInput {
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput | null
  user?: UserUpdateOneWithoutLocationInput | null
  experience?: ExperienceUpdateOneWithoutLocationInput | null
  restaurant?: RestaurantUpdateOneWithoutLocationInput | null
}

export interface LocationUpdateWithoutRestaurantDataInput {
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput | null
  user?: UserUpdateOneWithoutLocationInput | null
  place?: PlaceUpdateOneWithoutLocationInput | null
  experience?: ExperienceUpdateOneWithoutLocationInput | null
}

export interface LocationUpdateWithoutUserDataInput {
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput | null
  place?: PlaceUpdateOneWithoutLocationInput | null
  experience?: ExperienceUpdateOneWithoutLocationInput | null
  restaurant?: RestaurantUpdateOneWithoutLocationInput | null
}

export interface LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput
  data: LocationUpdateWithoutNeighbourHoodDataInput
}

export interface LocationUpsertWithoutExperienceInput {
  update: LocationUpdateWithoutExperienceDataInput
  create: LocationCreateWithoutExperienceInput
}

export interface LocationUpsertWithoutPlaceInput {
  update: LocationUpdateWithoutPlaceDataInput
  create: LocationCreateWithoutPlaceInput
}

export interface LocationUpsertWithoutRestaurantInput {
  update: LocationUpdateWithoutRestaurantDataInput
  create: LocationCreateWithoutRestaurantInput
}

export interface LocationUpsertWithoutUserInput {
  update: LocationUpdateWithoutUserDataInput
  create: LocationCreateWithoutUserInput
}

export interface LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput
  update: LocationUpdateWithoutNeighbourHoodDataInput
  create: LocationCreateWithoutNeighbourHoodInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput | null
  OR?: LocationWhereInput[] | LocationWhereInput | null
  NOT?: LocationWhereInput[] | LocationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  lat?: Float | null
  lat_not?: Float | null
  lat_in?: Float[] | Float | null
  lat_not_in?: Float[] | Float | null
  lat_lt?: Float | null
  lat_lte?: Float | null
  lat_gt?: Float | null
  lat_gte?: Float | null
  lng?: Float | null
  lng_not?: Float | null
  lng_in?: Float[] | Float | null
  lng_not_in?: Float[] | Float | null
  lng_lt?: Float | null
  lng_lte?: Float | null
  lng_gt?: Float | null
  lng_gte?: Float | null
  address?: String | null
  address_not?: String | null
  address_in?: String[] | String | null
  address_not_in?: String[] | String | null
  address_lt?: String | null
  address_lte?: String | null
  address_gt?: String | null
  address_gte?: String | null
  address_contains?: String | null
  address_not_contains?: String | null
  address_starts_with?: String | null
  address_not_starts_with?: String | null
  address_ends_with?: String | null
  address_not_ends_with?: String | null
  directions?: String | null
  directions_not?: String | null
  directions_in?: String[] | String | null
  directions_not_in?: String[] | String | null
  directions_lt?: String | null
  directions_lte?: String | null
  directions_gt?: String | null
  directions_gte?: String | null
  directions_contains?: String | null
  directions_not_contains?: String | null
  directions_starts_with?: String | null
  directions_not_starts_with?: String | null
  directions_ends_with?: String | null
  directions_not_ends_with?: String | null
  neighbourHood?: NeighbourhoodWhereInput | null
  user?: UserWhereInput | null
  place?: PlaceWhereInput | null
  experience?: ExperienceWhereInput | null
  restaurant?: RestaurantWhereInput | null
}

export interface LocationWhereUniqueInput {
  id?: ID_Input | null
}

export interface MessageCreateInput {
  id?: ID_Input | null
  deliveredAt: DateTime
  readAt: DateTime
  from: UserCreateOneWithoutSentMessagesInput
  to: UserCreateOneWithoutReceivedMessagesInput
}

export interface MessageCreateManyWithoutFromInput {
  create?: MessageCreateWithoutFromInput[] | MessageCreateWithoutFromInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
}

export interface MessageCreateManyWithoutToInput {
  create?: MessageCreateWithoutToInput[] | MessageCreateWithoutToInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
}

export interface MessageCreateWithoutFromInput {
  id?: ID_Input | null
  deliveredAt: DateTime
  readAt: DateTime
  to: UserCreateOneWithoutReceivedMessagesInput
}

export interface MessageCreateWithoutToInput {
  id?: ID_Input | null
  deliveredAt: DateTime
  readAt: DateTime
  from: UserCreateOneWithoutSentMessagesInput
}

export interface MessageScalarWhereInput {
  AND?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  OR?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  NOT?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  deliveredAt?: DateTime | null
  deliveredAt_not?: DateTime | null
  deliveredAt_in?: DateTime[] | DateTime | null
  deliveredAt_not_in?: DateTime[] | DateTime | null
  deliveredAt_lt?: DateTime | null
  deliveredAt_lte?: DateTime | null
  deliveredAt_gt?: DateTime | null
  deliveredAt_gte?: DateTime | null
  readAt?: DateTime | null
  readAt_not?: DateTime | null
  readAt_in?: DateTime[] | DateTime | null
  readAt_not_in?: DateTime[] | DateTime | null
  readAt_lt?: DateTime | null
  readAt_lte?: DateTime | null
  readAt_gt?: DateTime | null
  readAt_gte?: DateTime | null
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MessageWhereInput | null
}

export interface MessageUpdateInput {
  deliveredAt?: DateTime | null
  readAt?: DateTime | null
  from?: UserUpdateOneRequiredWithoutSentMessagesInput | null
  to?: UserUpdateOneRequiredWithoutReceivedMessagesInput | null
}

export interface MessageUpdateManyDataInput {
  deliveredAt?: DateTime | null
  readAt?: DateTime | null
}

export interface MessageUpdateManyMutationInput {
  deliveredAt?: DateTime | null
  readAt?: DateTime | null
}

export interface MessageUpdateManyWithoutFromInput {
  create?: MessageCreateWithoutFromInput[] | MessageCreateWithoutFromInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  set?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  update?: MessageUpdateWithWhereUniqueWithoutFromInput[] | MessageUpdateWithWhereUniqueWithoutFromInput | null
  updateMany?: MessageUpdateManyWithWhereNestedInput[] | MessageUpdateManyWithWhereNestedInput | null
  deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  upsert?: MessageUpsertWithWhereUniqueWithoutFromInput[] | MessageUpsertWithWhereUniqueWithoutFromInput | null
}

export interface MessageUpdateManyWithoutToInput {
  create?: MessageCreateWithoutToInput[] | MessageCreateWithoutToInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  set?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  update?: MessageUpdateWithWhereUniqueWithoutToInput[] | MessageUpdateWithWhereUniqueWithoutToInput | null
  updateMany?: MessageUpdateManyWithWhereNestedInput[] | MessageUpdateManyWithWhereNestedInput | null
  deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  upsert?: MessageUpsertWithWhereUniqueWithoutToInput[] | MessageUpsertWithWhereUniqueWithoutToInput | null
}

export interface MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput
  data: MessageUpdateManyDataInput
}

export interface MessageUpdateWithoutFromDataInput {
  deliveredAt?: DateTime | null
  readAt?: DateTime | null
  to?: UserUpdateOneRequiredWithoutReceivedMessagesInput | null
}

export interface MessageUpdateWithoutToDataInput {
  deliveredAt?: DateTime | null
  readAt?: DateTime | null
  from?: UserUpdateOneRequiredWithoutSentMessagesInput | null
}

export interface MessageUpdateWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutFromDataInput
}

export interface MessageUpdateWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutToDataInput
}

export interface MessageUpsertWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutFromDataInput
  create: MessageCreateWithoutFromInput
}

export interface MessageUpsertWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutToDataInput
  create: MessageCreateWithoutToInput
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput | null
  OR?: MessageWhereInput[] | MessageWhereInput | null
  NOT?: MessageWhereInput[] | MessageWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  deliveredAt?: DateTime | null
  deliveredAt_not?: DateTime | null
  deliveredAt_in?: DateTime[] | DateTime | null
  deliveredAt_not_in?: DateTime[] | DateTime | null
  deliveredAt_lt?: DateTime | null
  deliveredAt_lte?: DateTime | null
  deliveredAt_gt?: DateTime | null
  deliveredAt_gte?: DateTime | null
  readAt?: DateTime | null
  readAt_not?: DateTime | null
  readAt_in?: DateTime[] | DateTime | null
  readAt_not_in?: DateTime[] | DateTime | null
  readAt_lt?: DateTime | null
  readAt_lte?: DateTime | null
  readAt_gt?: DateTime | null
  readAt_gte?: DateTime | null
  from?: UserWhereInput | null
  to?: UserWhereInput | null
}

export interface MessageWhereUniqueInput {
  id?: ID_Input | null
}

export interface NeighbourhoodCreateInput {
  id?: ID_Input | null
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  locations?: LocationCreateManyWithoutNeighbourHoodInput | null
  homePreview?: PictureCreateOneInput | null
  city: CityCreateOneWithoutNeighbourhoodsInput
}

export interface NeighbourhoodCreateManyWithoutCityInput {
  create?: NeighbourhoodCreateWithoutCityInput[] | NeighbourhoodCreateWithoutCityInput | null
  connect?: NeighbourhoodWhereUniqueInput[] | NeighbourhoodWhereUniqueInput | null
}

export interface NeighbourhoodCreateOneWithoutLocationsInput {
  create?: NeighbourhoodCreateWithoutLocationsInput | null
  connect?: NeighbourhoodWhereUniqueInput | null
}

export interface NeighbourhoodCreateWithoutCityInput {
  id?: ID_Input | null
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  locations?: LocationCreateManyWithoutNeighbourHoodInput | null
  homePreview?: PictureCreateOneInput | null
}

export interface NeighbourhoodCreateWithoutLocationsInput {
  id?: ID_Input | null
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  homePreview?: PictureCreateOneInput | null
  city: CityCreateOneWithoutNeighbourhoodsInput
}

export interface NeighbourhoodScalarWhereInput {
  AND?: NeighbourhoodScalarWhereInput[] | NeighbourhoodScalarWhereInput | null
  OR?: NeighbourhoodScalarWhereInput[] | NeighbourhoodScalarWhereInput | null
  NOT?: NeighbourhoodScalarWhereInput[] | NeighbourhoodScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  featured?: Boolean | null
  featured_not?: Boolean | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: Int[] | Int | null
  popularity_not_in?: Int[] | Int | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
}

export interface NeighbourhoodSubscriptionWhereInput {
  AND?: NeighbourhoodSubscriptionWhereInput[] | NeighbourhoodSubscriptionWhereInput | null
  OR?: NeighbourhoodSubscriptionWhereInput[] | NeighbourhoodSubscriptionWhereInput | null
  NOT?: NeighbourhoodSubscriptionWhereInput[] | NeighbourhoodSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: NeighbourhoodWhereInput | null
}

export interface NeighbourhoodUpdateInput {
  name?: String | null
  slug?: String | null
  featured?: Boolean | null
  popularity?: Int | null
  locations?: LocationUpdateManyWithoutNeighbourHoodInput | null
  homePreview?: PictureUpdateOneInput | null
  city?: CityUpdateOneRequiredWithoutNeighbourhoodsInput | null
}

export interface NeighbourhoodUpdateManyDataInput {
  name?: String | null
  slug?: String | null
  featured?: Boolean | null
  popularity?: Int | null
}

export interface NeighbourhoodUpdateManyMutationInput {
  name?: String | null
  slug?: String | null
  featured?: Boolean | null
  popularity?: Int | null
}

export interface NeighbourhoodUpdateManyWithoutCityInput {
  create?: NeighbourhoodCreateWithoutCityInput[] | NeighbourhoodCreateWithoutCityInput | null
  connect?: NeighbourhoodWhereUniqueInput[] | NeighbourhoodWhereUniqueInput | null
  set?: NeighbourhoodWhereUniqueInput[] | NeighbourhoodWhereUniqueInput | null
  disconnect?: NeighbourhoodWhereUniqueInput[] | NeighbourhoodWhereUniqueInput | null
  delete?: NeighbourhoodWhereUniqueInput[] | NeighbourhoodWhereUniqueInput | null
  update?: NeighbourhoodUpdateWithWhereUniqueWithoutCityInput[] | NeighbourhoodUpdateWithWhereUniqueWithoutCityInput | null
  updateMany?: NeighbourhoodUpdateManyWithWhereNestedInput[] | NeighbourhoodUpdateManyWithWhereNestedInput | null
  deleteMany?: NeighbourhoodScalarWhereInput[] | NeighbourhoodScalarWhereInput | null
  upsert?: NeighbourhoodUpsertWithWhereUniqueWithoutCityInput[] | NeighbourhoodUpsertWithWhereUniqueWithoutCityInput | null
}

export interface NeighbourhoodUpdateManyWithWhereNestedInput {
  where: NeighbourhoodScalarWhereInput
  data: NeighbourhoodUpdateManyDataInput
}

export interface NeighbourhoodUpdateOneWithoutLocationsInput {
  create?: NeighbourhoodCreateWithoutLocationsInput | null
  connect?: NeighbourhoodWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: NeighbourhoodUpdateWithoutLocationsDataInput | null
  upsert?: NeighbourhoodUpsertWithoutLocationsInput | null
}

export interface NeighbourhoodUpdateWithoutCityDataInput {
  name?: String | null
  slug?: String | null
  featured?: Boolean | null
  popularity?: Int | null
  locations?: LocationUpdateManyWithoutNeighbourHoodInput | null
  homePreview?: PictureUpdateOneInput | null
}

export interface NeighbourhoodUpdateWithoutLocationsDataInput {
  name?: String | null
  slug?: String | null
  featured?: Boolean | null
  popularity?: Int | null
  homePreview?: PictureUpdateOneInput | null
  city?: CityUpdateOneRequiredWithoutNeighbourhoodsInput | null
}

export interface NeighbourhoodUpdateWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput
  data: NeighbourhoodUpdateWithoutCityDataInput
}

export interface NeighbourhoodUpsertWithoutLocationsInput {
  update: NeighbourhoodUpdateWithoutLocationsDataInput
  create: NeighbourhoodCreateWithoutLocationsInput
}

export interface NeighbourhoodUpsertWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput
  update: NeighbourhoodUpdateWithoutCityDataInput
  create: NeighbourhoodCreateWithoutCityInput
}

export interface NeighbourhoodWhereInput {
  AND?: NeighbourhoodWhereInput[] | NeighbourhoodWhereInput | null
  OR?: NeighbourhoodWhereInput[] | NeighbourhoodWhereInput | null
  NOT?: NeighbourhoodWhereInput[] | NeighbourhoodWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  featured?: Boolean | null
  featured_not?: Boolean | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: Int[] | Int | null
  popularity_not_in?: Int[] | Int | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
  locations_every?: LocationWhereInput | null
  locations_some?: LocationWhereInput | null
  locations_none?: LocationWhereInput | null
  homePreview?: PictureWhereInput | null
  city?: CityWhereInput | null
}

export interface NeighbourhoodWhereUniqueInput {
  id?: ID_Input | null
}

export interface NotificationCreateInput {
  id?: ID_Input | null
  type?: NOTIFICATION_TYPE | null
  link: String
  readDate: DateTime
  user: UserCreateOneWithoutNotificationsInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput | null
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput | null
}

export interface NotificationCreateWithoutUserInput {
  id?: ID_Input | null
  type?: NOTIFICATION_TYPE | null
  link: String
  readDate: DateTime
}

export interface NotificationScalarWhereInput {
  AND?: NotificationScalarWhereInput[] | NotificationScalarWhereInput | null
  OR?: NotificationScalarWhereInput[] | NotificationScalarWhereInput | null
  NOT?: NotificationScalarWhereInput[] | NotificationScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  type?: NOTIFICATION_TYPE | null
  type_not?: NOTIFICATION_TYPE | null
  type_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE | null
  type_not_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE | null
  link?: String | null
  link_not?: String | null
  link_in?: String[] | String | null
  link_not_in?: String[] | String | null
  link_lt?: String | null
  link_lte?: String | null
  link_gt?: String | null
  link_gte?: String | null
  link_contains?: String | null
  link_not_contains?: String | null
  link_starts_with?: String | null
  link_not_starts_with?: String | null
  link_ends_with?: String | null
  link_not_ends_with?: String | null
  readDate?: DateTime | null
  readDate_not?: DateTime | null
  readDate_in?: DateTime[] | DateTime | null
  readDate_not_in?: DateTime[] | DateTime | null
  readDate_lt?: DateTime | null
  readDate_lte?: DateTime | null
  readDate_gt?: DateTime | null
  readDate_gte?: DateTime | null
}

export interface NotificationSubscriptionWhereInput {
  AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput | null
  OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput | null
  NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: NotificationWhereInput | null
}

export interface NotificationUpdateInput {
  type?: NOTIFICATION_TYPE | null
  link?: String | null
  readDate?: DateTime | null
  user?: UserUpdateOneRequiredWithoutNotificationsInput | null
}

export interface NotificationUpdateManyDataInput {
  type?: NOTIFICATION_TYPE | null
  link?: String | null
  readDate?: DateTime | null
}

export interface NotificationUpdateManyMutationInput {
  type?: NOTIFICATION_TYPE | null
  link?: String | null
  readDate?: DateTime | null
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput | null
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput | null
  set?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput | null
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput | null
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput | null
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: NotificationUpdateManyWithWhereNestedInput[] | NotificationUpdateManyWithWhereNestedInput | null
  deleteMany?: NotificationScalarWhereInput[] | NotificationScalarWhereInput | null
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput | null
}

export interface NotificationUpdateManyWithWhereNestedInput {
  where: NotificationScalarWhereInput
  data: NotificationUpdateManyDataInput
}

export interface NotificationUpdateWithoutUserDataInput {
  type?: NOTIFICATION_TYPE | null
  link?: String | null
  readDate?: DateTime | null
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput | null
  OR?: NotificationWhereInput[] | NotificationWhereInput | null
  NOT?: NotificationWhereInput[] | NotificationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  type?: NOTIFICATION_TYPE | null
  type_not?: NOTIFICATION_TYPE | null
  type_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE | null
  type_not_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE | null
  link?: String | null
  link_not?: String | null
  link_in?: String[] | String | null
  link_not_in?: String[] | String | null
  link_lt?: String | null
  link_lte?: String | null
  link_gt?: String | null
  link_gte?: String | null
  link_contains?: String | null
  link_not_contains?: String | null
  link_starts_with?: String | null
  link_not_starts_with?: String | null
  link_ends_with?: String | null
  link_not_ends_with?: String | null
  readDate?: DateTime | null
  readDate_not?: DateTime | null
  readDate_in?: DateTime[] | DateTime | null
  readDate_not_in?: DateTime[] | DateTime | null
  readDate_lt?: DateTime | null
  readDate_lte?: DateTime | null
  readDate_gt?: DateTime | null
  readDate_gte?: DateTime | null
  user?: UserWhereInput | null
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input | null
}

export interface OrderCreateInput {
  id?: ID_Input | null
  startDate: DateTime
  endDate: DateTime
  bookee: UserCreateOneWithoutOrdersInput
  place: PlaceCreateOneWithoutOrdersInput
  payment?: PaymentCreateOneWithoutOrderInput | null
}

export interface OrderCreateManyWithoutBookeeInput {
  create?: OrderCreateWithoutBookeeInput[] | OrderCreateWithoutBookeeInput | null
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
}

export interface OrderCreateManyWithoutPlaceInput {
  create?: OrderCreateWithoutPlaceInput[] | OrderCreateWithoutPlaceInput | null
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
}

export interface OrderCreateOneWithoutPaymentInput {
  create?: OrderCreateWithoutPaymentInput | null
  connect?: OrderWhereUniqueInput | null
}

export interface OrderCreateWithoutBookeeInput {
  id?: ID_Input | null
  startDate: DateTime
  endDate: DateTime
  place: PlaceCreateOneWithoutOrdersInput
  payment?: PaymentCreateOneWithoutOrderInput | null
}

export interface OrderCreateWithoutPaymentInput {
  id?: ID_Input | null
  startDate: DateTime
  endDate: DateTime
  bookee: UserCreateOneWithoutOrdersInput
  place: PlaceCreateOneWithoutOrdersInput
}

export interface OrderCreateWithoutPlaceInput {
  id?: ID_Input | null
  startDate: DateTime
  endDate: DateTime
  bookee: UserCreateOneWithoutOrdersInput
  payment?: PaymentCreateOneWithoutOrderInput | null
}

export interface OrderScalarWhereInput {
  AND?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  OR?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  NOT?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  startDate?: DateTime | null
  startDate_not?: DateTime | null
  startDate_in?: DateTime[] | DateTime | null
  startDate_not_in?: DateTime[] | DateTime | null
  startDate_lt?: DateTime | null
  startDate_lte?: DateTime | null
  startDate_gt?: DateTime | null
  startDate_gte?: DateTime | null
  endDate?: DateTime | null
  endDate_not?: DateTime | null
  endDate_in?: DateTime[] | DateTime | null
  endDate_not_in?: DateTime[] | DateTime | null
  endDate_lt?: DateTime | null
  endDate_lte?: DateTime | null
  endDate_gt?: DateTime | null
  endDate_gte?: DateTime | null
}

export interface OrderSubscriptionWhereInput {
  AND?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput | null
  OR?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput | null
  NOT?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: OrderWhereInput | null
}

export interface OrderUpdateInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
  bookee?: UserUpdateOneRequiredWithoutOrdersInput | null
  place?: PlaceUpdateOneRequiredWithoutOrdersInput | null
  payment?: PaymentUpdateOneWithoutOrderInput | null
}

export interface OrderUpdateManyDataInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
}

export interface OrderUpdateManyMutationInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
}

export interface OrderUpdateManyWithoutBookeeInput {
  create?: OrderCreateWithoutBookeeInput[] | OrderCreateWithoutBookeeInput | null
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  set?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  disconnect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  delete?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  update?: OrderUpdateWithWhereUniqueWithoutBookeeInput[] | OrderUpdateWithWhereUniqueWithoutBookeeInput | null
  updateMany?: OrderUpdateManyWithWhereNestedInput[] | OrderUpdateManyWithWhereNestedInput | null
  deleteMany?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  upsert?: OrderUpsertWithWhereUniqueWithoutBookeeInput[] | OrderUpsertWithWhereUniqueWithoutBookeeInput | null
}

export interface OrderUpdateManyWithoutPlaceInput {
  create?: OrderCreateWithoutPlaceInput[] | OrderCreateWithoutPlaceInput | null
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  set?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  disconnect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  delete?: OrderWhereUniqueInput[] | OrderWhereUniqueInput | null
  update?: OrderUpdateWithWhereUniqueWithoutPlaceInput[] | OrderUpdateWithWhereUniqueWithoutPlaceInput | null
  updateMany?: OrderUpdateManyWithWhereNestedInput[] | OrderUpdateManyWithWhereNestedInput | null
  deleteMany?: OrderScalarWhereInput[] | OrderScalarWhereInput | null
  upsert?: OrderUpsertWithWhereUniqueWithoutPlaceInput[] | OrderUpsertWithWhereUniqueWithoutPlaceInput | null
}

export interface OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput
  data: OrderUpdateManyDataInput
}

export interface OrderUpdateOneRequiredWithoutPaymentInput {
  create?: OrderCreateWithoutPaymentInput | null
  connect?: OrderWhereUniqueInput | null
  update?: OrderUpdateWithoutPaymentDataInput | null
  upsert?: OrderUpsertWithoutPaymentInput | null
}

export interface OrderUpdateWithoutBookeeDataInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
  place?: PlaceUpdateOneRequiredWithoutOrdersInput | null
  payment?: PaymentUpdateOneWithoutOrderInput | null
}

export interface OrderUpdateWithoutPaymentDataInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
  bookee?: UserUpdateOneRequiredWithoutOrdersInput | null
  place?: PlaceUpdateOneRequiredWithoutOrdersInput | null
}

export interface OrderUpdateWithoutPlaceDataInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
  bookee?: UserUpdateOneRequiredWithoutOrdersInput | null
  payment?: PaymentUpdateOneWithoutOrderInput | null
}

export interface OrderUpdateWithWhereUniqueWithoutBookeeInput {
  where: OrderWhereUniqueInput
  data: OrderUpdateWithoutBookeeDataInput
}

export interface OrderUpdateWithWhereUniqueWithoutPlaceInput {
  where: OrderWhereUniqueInput
  data: OrderUpdateWithoutPlaceDataInput
}

export interface OrderUpsertWithoutPaymentInput {
  update: OrderUpdateWithoutPaymentDataInput
  create: OrderCreateWithoutPaymentInput
}

export interface OrderUpsertWithWhereUniqueWithoutBookeeInput {
  where: OrderWhereUniqueInput
  update: OrderUpdateWithoutBookeeDataInput
  create: OrderCreateWithoutBookeeInput
}

export interface OrderUpsertWithWhereUniqueWithoutPlaceInput {
  where: OrderWhereUniqueInput
  update: OrderUpdateWithoutPlaceDataInput
  create: OrderCreateWithoutPlaceInput
}

export interface OrderWhereInput {
  AND?: OrderWhereInput[] | OrderWhereInput | null
  OR?: OrderWhereInput[] | OrderWhereInput | null
  NOT?: OrderWhereInput[] | OrderWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  startDate?: DateTime | null
  startDate_not?: DateTime | null
  startDate_in?: DateTime[] | DateTime | null
  startDate_not_in?: DateTime[] | DateTime | null
  startDate_lt?: DateTime | null
  startDate_lte?: DateTime | null
  startDate_gt?: DateTime | null
  startDate_gte?: DateTime | null
  endDate?: DateTime | null
  endDate_not?: DateTime | null
  endDate_in?: DateTime[] | DateTime | null
  endDate_not_in?: DateTime[] | DateTime | null
  endDate_lt?: DateTime | null
  endDate_lte?: DateTime | null
  endDate_gt?: DateTime | null
  endDate_gte?: DateTime | null
  bookee?: UserWhereInput | null
  place?: PlaceWhereInput | null
  payment?: PaymentWhereInput | null
}

export interface OrderWhereUniqueInput {
  id?: ID_Input | null
}

export interface PaymentAccountCreateInput {
  id?: ID_Input | null
  type?: PAYMENT_PROVIDER | null
  user: UserCreateOneWithoutPaymentAccountInput
  payments?: PaymentCreateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput | null
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountCreateManyWithoutUserInput {
  create?: PaymentAccountCreateWithoutUserInput[] | PaymentAccountCreateWithoutUserInput | null
  connect?: PaymentAccountWhereUniqueInput[] | PaymentAccountWhereUniqueInput | null
}

export interface PaymentAccountCreateOneInput {
  create?: PaymentAccountCreateInput | null
  connect?: PaymentAccountWhereUniqueInput | null
}

export interface PaymentAccountCreateOneWithoutCreditcardInput {
  create?: PaymentAccountCreateWithoutCreditcardInput | null
  connect?: PaymentAccountWhereUniqueInput | null
}

export interface PaymentAccountCreateOneWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput | null
  connect?: PaymentAccountWhereUniqueInput | null
}

export interface PaymentAccountCreateOneWithoutPaypalInput {
  create?: PaymentAccountCreateWithoutPaypalInput | null
  connect?: PaymentAccountWhereUniqueInput | null
}

export interface PaymentAccountCreateWithoutCreditcardInput {
  id?: ID_Input | null
  type?: PAYMENT_PROVIDER | null
  user: UserCreateOneWithoutPaymentAccountInput
  payments?: PaymentCreateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountCreateWithoutPaymentsInput {
  id?: ID_Input | null
  type?: PAYMENT_PROVIDER | null
  user: UserCreateOneWithoutPaymentAccountInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput | null
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountCreateWithoutPaypalInput {
  id?: ID_Input | null
  type?: PAYMENT_PROVIDER | null
  user: UserCreateOneWithoutPaymentAccountInput
  payments?: PaymentCreateManyWithoutPaymentMethodInput | null
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountCreateWithoutUserInput {
  id?: ID_Input | null
  type?: PAYMENT_PROVIDER | null
  payments?: PaymentCreateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput | null
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountScalarWhereInput {
  AND?: PaymentAccountScalarWhereInput[] | PaymentAccountScalarWhereInput | null
  OR?: PaymentAccountScalarWhereInput[] | PaymentAccountScalarWhereInput | null
  NOT?: PaymentAccountScalarWhereInput[] | PaymentAccountScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  type?: PAYMENT_PROVIDER | null
  type_not?: PAYMENT_PROVIDER | null
  type_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER | null
  type_not_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER | null
}

export interface PaymentAccountSubscriptionWhereInput {
  AND?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput | null
  OR?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput | null
  NOT?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PaymentAccountWhereInput | null
}

export interface PaymentAccountUpdateDataInput {
  type?: PAYMENT_PROVIDER | null
  user?: UserUpdateOneRequiredWithoutPaymentAccountInput | null
  payments?: PaymentUpdateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput | null
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountUpdateInput {
  type?: PAYMENT_PROVIDER | null
  user?: UserUpdateOneRequiredWithoutPaymentAccountInput | null
  payments?: PaymentUpdateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput | null
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountUpdateManyDataInput {
  type?: PAYMENT_PROVIDER | null
}

export interface PaymentAccountUpdateManyMutationInput {
  type?: PAYMENT_PROVIDER | null
}

export interface PaymentAccountUpdateManyWithoutUserInput {
  create?: PaymentAccountCreateWithoutUserInput[] | PaymentAccountCreateWithoutUserInput | null
  connect?: PaymentAccountWhereUniqueInput[] | PaymentAccountWhereUniqueInput | null
  set?: PaymentAccountWhereUniqueInput[] | PaymentAccountWhereUniqueInput | null
  disconnect?: PaymentAccountWhereUniqueInput[] | PaymentAccountWhereUniqueInput | null
  delete?: PaymentAccountWhereUniqueInput[] | PaymentAccountWhereUniqueInput | null
  update?: PaymentAccountUpdateWithWhereUniqueWithoutUserInput[] | PaymentAccountUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: PaymentAccountUpdateManyWithWhereNestedInput[] | PaymentAccountUpdateManyWithWhereNestedInput | null
  deleteMany?: PaymentAccountScalarWhereInput[] | PaymentAccountScalarWhereInput | null
  upsert?: PaymentAccountUpsertWithWhereUniqueWithoutUserInput[] | PaymentAccountUpsertWithWhereUniqueWithoutUserInput | null
}

export interface PaymentAccountUpdateManyWithWhereNestedInput {
  where: PaymentAccountScalarWhereInput
  data: PaymentAccountUpdateManyDataInput
}

export interface PaymentAccountUpdateOneInput {
  create?: PaymentAccountCreateInput | null
  connect?: PaymentAccountWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PaymentAccountUpdateDataInput | null
  upsert?: PaymentAccountUpsertNestedInput | null
}

export interface PaymentAccountUpdateOneRequiredInput {
  create?: PaymentAccountCreateInput | null
  connect?: PaymentAccountWhereUniqueInput | null
  update?: PaymentAccountUpdateDataInput | null
  upsert?: PaymentAccountUpsertNestedInput | null
}

export interface PaymentAccountUpdateOneRequiredWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput | null
  connect?: PaymentAccountWhereUniqueInput | null
  update?: PaymentAccountUpdateWithoutPaymentsDataInput | null
  upsert?: PaymentAccountUpsertWithoutPaymentsInput | null
}

export interface PaymentAccountUpdateOneRequiredWithoutPaypalInput {
  create?: PaymentAccountCreateWithoutPaypalInput | null
  connect?: PaymentAccountWhereUniqueInput | null
  update?: PaymentAccountUpdateWithoutPaypalDataInput | null
  upsert?: PaymentAccountUpsertWithoutPaypalInput | null
}

export interface PaymentAccountUpdateOneWithoutCreditcardInput {
  create?: PaymentAccountCreateWithoutCreditcardInput | null
  connect?: PaymentAccountWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PaymentAccountUpdateWithoutCreditcardDataInput | null
  upsert?: PaymentAccountUpsertWithoutCreditcardInput | null
}

export interface PaymentAccountUpdateWithoutCreditcardDataInput {
  type?: PAYMENT_PROVIDER | null
  user?: UserUpdateOneRequiredWithoutPaymentAccountInput | null
  payments?: PaymentUpdateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountUpdateWithoutPaymentsDataInput {
  type?: PAYMENT_PROVIDER | null
  user?: UserUpdateOneRequiredWithoutPaymentAccountInput | null
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput | null
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountUpdateWithoutPaypalDataInput {
  type?: PAYMENT_PROVIDER | null
  user?: UserUpdateOneRequiredWithoutPaymentAccountInput | null
  payments?: PaymentUpdateManyWithoutPaymentMethodInput | null
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountUpdateWithoutUserDataInput {
  type?: PAYMENT_PROVIDER | null
  payments?: PaymentUpdateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput | null
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput | null
}

export interface PaymentAccountUpdateWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput
  data: PaymentAccountUpdateWithoutUserDataInput
}

export interface PaymentAccountUpsertNestedInput {
  update: PaymentAccountUpdateDataInput
  create: PaymentAccountCreateInput
}

export interface PaymentAccountUpsertWithoutCreditcardInput {
  update: PaymentAccountUpdateWithoutCreditcardDataInput
  create: PaymentAccountCreateWithoutCreditcardInput
}

export interface PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  create: PaymentAccountCreateWithoutPaymentsInput
}

export interface PaymentAccountUpsertWithoutPaypalInput {
  update: PaymentAccountUpdateWithoutPaypalDataInput
  create: PaymentAccountCreateWithoutPaypalInput
}

export interface PaymentAccountUpsertWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput
  update: PaymentAccountUpdateWithoutUserDataInput
  create: PaymentAccountCreateWithoutUserInput
}

export interface PaymentAccountWhereInput {
  AND?: PaymentAccountWhereInput[] | PaymentAccountWhereInput | null
  OR?: PaymentAccountWhereInput[] | PaymentAccountWhereInput | null
  NOT?: PaymentAccountWhereInput[] | PaymentAccountWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  type?: PAYMENT_PROVIDER | null
  type_not?: PAYMENT_PROVIDER | null
  type_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER | null
  type_not_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER | null
  user?: UserWhereInput | null
  payments_every?: PaymentWhereInput | null
  payments_some?: PaymentWhereInput | null
  payments_none?: PaymentWhereInput | null
  paypal?: PaypalInformationWhereInput | null
  creditcard?: CreditCardInformationWhereInput | null
}

export interface PaymentAccountWhereUniqueInput {
  id?: ID_Input | null
}

export interface PaymentCreateInput {
  id?: ID_Input | null
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  order: OrderCreateOneWithoutPaymentInput
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput
}

export interface PaymentCreateManyWithoutPaymentMethodInput {
  create?: PaymentCreateWithoutPaymentMethodInput[] | PaymentCreateWithoutPaymentMethodInput | null
  connect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput | null
}

export interface PaymentCreateOneWithoutOrderInput {
  create?: PaymentCreateWithoutOrderInput | null
  connect?: PaymentWhereUniqueInput | null
}

export interface PaymentCreateWithoutOrderInput {
  id?: ID_Input | null
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput
}

export interface PaymentCreateWithoutPaymentMethodInput {
  id?: ID_Input | null
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  order: OrderCreateOneWithoutPaymentInput
}

export interface PaymentScalarWhereInput {
  AND?: PaymentScalarWhereInput[] | PaymentScalarWhereInput | null
  OR?: PaymentScalarWhereInput[] | PaymentScalarWhereInput | null
  NOT?: PaymentScalarWhereInput[] | PaymentScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  serviceFee?: Float | null
  serviceFee_not?: Float | null
  serviceFee_in?: Float[] | Float | null
  serviceFee_not_in?: Float[] | Float | null
  serviceFee_lt?: Float | null
  serviceFee_lte?: Float | null
  serviceFee_gt?: Float | null
  serviceFee_gte?: Float | null
  placePrice?: Float | null
  placePrice_not?: Float | null
  placePrice_in?: Float[] | Float | null
  placePrice_not_in?: Float[] | Float | null
  placePrice_lt?: Float | null
  placePrice_lte?: Float | null
  placePrice_gt?: Float | null
  placePrice_gte?: Float | null
  totalPrice?: Float | null
  totalPrice_not?: Float | null
  totalPrice_in?: Float[] | Float | null
  totalPrice_not_in?: Float[] | Float | null
  totalPrice_lt?: Float | null
  totalPrice_lte?: Float | null
  totalPrice_gt?: Float | null
  totalPrice_gte?: Float | null
}

export interface PaymentSubscriptionWhereInput {
  AND?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput | null
  OR?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput | null
  NOT?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PaymentWhereInput | null
}

export interface PaymentUpdateInput {
  serviceFee?: Float | null
  placePrice?: Float | null
  totalPrice?: Float | null
  order?: OrderUpdateOneRequiredWithoutPaymentInput | null
  paymentMethod?: PaymentAccountUpdateOneRequiredWithoutPaymentsInput | null
}

export interface PaymentUpdateManyDataInput {
  serviceFee?: Float | null
  placePrice?: Float | null
  totalPrice?: Float | null
}

export interface PaymentUpdateManyMutationInput {
  serviceFee?: Float | null
  placePrice?: Float | null
  totalPrice?: Float | null
}

export interface PaymentUpdateManyWithoutPaymentMethodInput {
  create?: PaymentCreateWithoutPaymentMethodInput[] | PaymentCreateWithoutPaymentMethodInput | null
  connect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput | null
  set?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput | null
  disconnect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput | null
  delete?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput | null
  update?: PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput[] | PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput | null
  updateMany?: PaymentUpdateManyWithWhereNestedInput[] | PaymentUpdateManyWithWhereNestedInput | null
  deleteMany?: PaymentScalarWhereInput[] | PaymentScalarWhereInput | null
  upsert?: PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput[] | PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput | null
}

export interface PaymentUpdateManyWithWhereNestedInput {
  where: PaymentScalarWhereInput
  data: PaymentUpdateManyDataInput
}

export interface PaymentUpdateOneWithoutOrderInput {
  create?: PaymentCreateWithoutOrderInput | null
  connect?: PaymentWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PaymentUpdateWithoutOrderDataInput | null
  upsert?: PaymentUpsertWithoutOrderInput | null
}

export interface PaymentUpdateWithoutOrderDataInput {
  serviceFee?: Float | null
  placePrice?: Float | null
  totalPrice?: Float | null
  paymentMethod?: PaymentAccountUpdateOneRequiredWithoutPaymentsInput | null
}

export interface PaymentUpdateWithoutPaymentMethodDataInput {
  serviceFee?: Float | null
  placePrice?: Float | null
  totalPrice?: Float | null
  order?: OrderUpdateOneRequiredWithoutPaymentInput | null
}

export interface PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput
  data: PaymentUpdateWithoutPaymentMethodDataInput
}

export interface PaymentUpsertWithoutOrderInput {
  update: PaymentUpdateWithoutOrderDataInput
  create: PaymentCreateWithoutOrderInput
}

export interface PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput
  update: PaymentUpdateWithoutPaymentMethodDataInput
  create: PaymentCreateWithoutPaymentMethodInput
}

export interface PaymentWhereInput {
  AND?: PaymentWhereInput[] | PaymentWhereInput | null
  OR?: PaymentWhereInput[] | PaymentWhereInput | null
  NOT?: PaymentWhereInput[] | PaymentWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  serviceFee?: Float | null
  serviceFee_not?: Float | null
  serviceFee_in?: Float[] | Float | null
  serviceFee_not_in?: Float[] | Float | null
  serviceFee_lt?: Float | null
  serviceFee_lte?: Float | null
  serviceFee_gt?: Float | null
  serviceFee_gte?: Float | null
  placePrice?: Float | null
  placePrice_not?: Float | null
  placePrice_in?: Float[] | Float | null
  placePrice_not_in?: Float[] | Float | null
  placePrice_lt?: Float | null
  placePrice_lte?: Float | null
  placePrice_gt?: Float | null
  placePrice_gte?: Float | null
  totalPrice?: Float | null
  totalPrice_not?: Float | null
  totalPrice_in?: Float[] | Float | null
  totalPrice_not_in?: Float[] | Float | null
  totalPrice_lt?: Float | null
  totalPrice_lte?: Float | null
  totalPrice_gt?: Float | null
  totalPrice_gte?: Float | null
  order?: OrderWhereInput | null
  paymentMethod?: PaymentAccountWhereInput | null
}

export interface PaymentWhereUniqueInput {
  id?: ID_Input | null
}

export interface PaypalInformationCreateInput {
  id?: ID_Input | null
  email: String
  paymentAccount: PaymentAccountCreateOneWithoutPaypalInput
}

export interface PaypalInformationCreateOneWithoutPaymentAccountInput {
  create?: PaypalInformationCreateWithoutPaymentAccountInput | null
  connect?: PaypalInformationWhereUniqueInput | null
}

export interface PaypalInformationCreateWithoutPaymentAccountInput {
  id?: ID_Input | null
  email: String
}

export interface PaypalInformationSubscriptionWhereInput {
  AND?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput | null
  OR?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput | null
  NOT?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PaypalInformationWhereInput | null
}

export interface PaypalInformationUpdateInput {
  email?: String | null
  paymentAccount?: PaymentAccountUpdateOneRequiredWithoutPaypalInput | null
}

export interface PaypalInformationUpdateManyMutationInput {
  email?: String | null
}

export interface PaypalInformationUpdateOneWithoutPaymentAccountInput {
  create?: PaypalInformationCreateWithoutPaymentAccountInput | null
  connect?: PaypalInformationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PaypalInformationUpdateWithoutPaymentAccountDataInput | null
  upsert?: PaypalInformationUpsertWithoutPaymentAccountInput | null
}

export interface PaypalInformationUpdateWithoutPaymentAccountDataInput {
  email?: String | null
}

export interface PaypalInformationUpsertWithoutPaymentAccountInput {
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput
  create: PaypalInformationCreateWithoutPaymentAccountInput
}

export interface PaypalInformationWhereInput {
  AND?: PaypalInformationWhereInput[] | PaypalInformationWhereInput | null
  OR?: PaypalInformationWhereInput[] | PaypalInformationWhereInput | null
  NOT?: PaypalInformationWhereInput[] | PaypalInformationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  paymentAccount?: PaymentAccountWhereInput | null
}

export interface PaypalInformationWhereUniqueInput {
  id?: ID_Input | null
}

export interface PaytmInformationCreateInput {
  id?: ID_Input | null
  phone: String
  paymentAccount: PaymentAccountCreateOneInput
}

export interface PaytmInformationSubscriptionWhereInput {
  AND?: PaytmInformationSubscriptionWhereInput[] | PaytmInformationSubscriptionWhereInput | null
  OR?: PaytmInformationSubscriptionWhereInput[] | PaytmInformationSubscriptionWhereInput | null
  NOT?: PaytmInformationSubscriptionWhereInput[] | PaytmInformationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PaytmInformationWhereInput | null
}

export interface PaytmInformationUpdateInput {
  phone?: String | null
  paymentAccount?: PaymentAccountUpdateOneRequiredInput | null
}

export interface PaytmInformationUpdateManyMutationInput {
  phone?: String | null
}

export interface PaytmInformationWhereInput {
  AND?: PaytmInformationWhereInput[] | PaytmInformationWhereInput | null
  OR?: PaytmInformationWhereInput[] | PaytmInformationWhereInput | null
  NOT?: PaytmInformationWhereInput[] | PaytmInformationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  paymentAccount?: PaymentAccountWhereInput | null
}

export interface PaytmInformationWhereUniqueInput {
  id?: ID_Input | null
}

export interface PictureCreateInput {
  id?: ID_Input | null
  url: String
}

export interface PictureCreateManyInput {
  create?: PictureCreateInput[] | PictureCreateInput | null
  connect?: PictureWhereUniqueInput[] | PictureWhereUniqueInput | null
}

export interface PictureCreateOneInput {
  create?: PictureCreateInput | null
  connect?: PictureWhereUniqueInput | null
}

export interface PictureScalarWhereInput {
  AND?: PictureScalarWhereInput[] | PictureScalarWhereInput | null
  OR?: PictureScalarWhereInput[] | PictureScalarWhereInput | null
  NOT?: PictureScalarWhereInput[] | PictureScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
}

export interface PictureSubscriptionWhereInput {
  AND?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput | null
  OR?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput | null
  NOT?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PictureWhereInput | null
}

export interface PictureUpdateDataInput {
  url?: String | null
}

export interface PictureUpdateInput {
  url?: String | null
}

export interface PictureUpdateManyDataInput {
  url?: String | null
}

export interface PictureUpdateManyInput {
  create?: PictureCreateInput[] | PictureCreateInput | null
  connect?: PictureWhereUniqueInput[] | PictureWhereUniqueInput | null
  set?: PictureWhereUniqueInput[] | PictureWhereUniqueInput | null
  disconnect?: PictureWhereUniqueInput[] | PictureWhereUniqueInput | null
  delete?: PictureWhereUniqueInput[] | PictureWhereUniqueInput | null
  update?: PictureUpdateWithWhereUniqueNestedInput[] | PictureUpdateWithWhereUniqueNestedInput | null
  updateMany?: PictureUpdateManyWithWhereNestedInput[] | PictureUpdateManyWithWhereNestedInput | null
  deleteMany?: PictureScalarWhereInput[] | PictureScalarWhereInput | null
  upsert?: PictureUpsertWithWhereUniqueNestedInput[] | PictureUpsertWithWhereUniqueNestedInput | null
}

export interface PictureUpdateManyMutationInput {
  url?: String | null
}

export interface PictureUpdateManyWithWhereNestedInput {
  where: PictureScalarWhereInput
  data: PictureUpdateManyDataInput
}

export interface PictureUpdateOneInput {
  create?: PictureCreateInput | null
  connect?: PictureWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PictureUpdateDataInput | null
  upsert?: PictureUpsertNestedInput | null
}

export interface PictureUpdateOneRequiredInput {
  create?: PictureCreateInput | null
  connect?: PictureWhereUniqueInput | null
  update?: PictureUpdateDataInput | null
  upsert?: PictureUpsertNestedInput | null
}

export interface PictureUpdateWithWhereUniqueNestedInput {
  where: PictureWhereUniqueInput
  data: PictureUpdateDataInput
}

export interface PictureUpsertNestedInput {
  update: PictureUpdateDataInput
  create: PictureCreateInput
}

export interface PictureUpsertWithWhereUniqueNestedInput {
  where: PictureWhereUniqueInput
  update: PictureUpdateDataInput
  create: PictureCreateInput
}

export interface PictureWhereInput {
  AND?: PictureWhereInput[] | PictureWhereInput | null
  OR?: PictureWhereInput[] | PictureWhereInput | null
  NOT?: PictureWhereInput[] | PictureWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
}

export interface PictureWhereUniqueInput {
  id?: ID_Input | null
}

export interface PlaceCreateInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput | null
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput | null
  policies?: PoliciesCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  orders?: OrderCreateManyWithoutPlaceInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceCreateManyWithoutHostInput {
  create?: PlaceCreateWithoutHostInput[] | PlaceCreateWithoutHostInput | null
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput | null
}

export interface PlaceCreateOneWithoutAmenitiesInput {
  create?: PlaceCreateWithoutAmenitiesInput | null
  connect?: PlaceWhereUniqueInput | null
}

export interface PlaceCreateOneWithoutGuestRequirementsInput {
  create?: PlaceCreateWithoutGuestRequirementsInput | null
  connect?: PlaceWhereUniqueInput | null
}

export interface PlaceCreateOneWithoutLocationInput {
  create?: PlaceCreateWithoutLocationInput | null
  connect?: PlaceWhereUniqueInput | null
}

export interface PlaceCreateOneWithoutOrdersInput {
  create?: PlaceCreateWithoutOrdersInput | null
  connect?: PlaceWhereUniqueInput | null
}

export interface PlaceCreateOneWithoutPoliciesInput {
  create?: PlaceCreateWithoutPoliciesInput | null
  connect?: PlaceWhereUniqueInput | null
}

export interface PlaceCreateOneWithoutPricingInput {
  create?: PlaceCreateWithoutPricingInput | null
  connect?: PlaceWhereUniqueInput | null
}

export interface PlaceCreateOneWithoutReviewsInput {
  create?: PlaceCreateWithoutReviewsInput | null
  connect?: PlaceWhereUniqueInput | null
}

export interface PlaceCreateOneWithoutViewsInput {
  create?: PlaceCreateWithoutViewsInput | null
  connect?: PlaceWhereUniqueInput | null
}

export interface PlaceCreateWithoutAmenitiesInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput | null
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput | null
  policies?: PoliciesCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  orders?: OrderCreateManyWithoutPlaceInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceCreateWithoutGuestRequirementsInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput | null
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  orders?: OrderCreateManyWithoutPlaceInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceCreateWithoutHostInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput | null
  amenities: AmenitiesCreateOneWithoutPlaceInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput | null
  policies?: PoliciesCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  orders?: OrderCreateManyWithoutPlaceInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceCreateWithoutLocationInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput | null
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput | null
  policies?: PoliciesCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  orders?: OrderCreateManyWithoutPlaceInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceCreateWithoutOrdersInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput | null
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput | null
  policies?: PoliciesCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceCreateWithoutPoliciesInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput | null
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  orders?: OrderCreateManyWithoutPlaceInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceCreateWithoutPricingInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput | null
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput | null
  policies?: PoliciesCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  orders?: OrderCreateManyWithoutPlaceInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceCreateWithoutReviewsInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput | null
  policies?: PoliciesCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  orders?: OrderCreateManyWithoutPlaceInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceCreateWithoutViewsInput {
  id?: ID_Input | null
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput | null
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput | null
  policies?: PoliciesCreateOneWithoutPlaceInput | null
  houseRules?: HouseRulesCreateOneInput | null
  orders?: OrderCreateManyWithoutPlaceInput | null
  pictures?: PictureCreateManyInput | null
}

export interface PlaceScalarWhereInput {
  AND?: PlaceScalarWhereInput[] | PlaceScalarWhereInput | null
  OR?: PlaceScalarWhereInput[] | PlaceScalarWhereInput | null
  NOT?: PlaceScalarWhereInput[] | PlaceScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  size?: PLACE_SIZES | null
  size_not?: PLACE_SIZES | null
  size_in?: PLACE_SIZES[] | PLACE_SIZES | null
  size_not_in?: PLACE_SIZES[] | PLACE_SIZES | null
  shortDescription?: String | null
  shortDescription_not?: String | null
  shortDescription_in?: String[] | String | null
  shortDescription_not_in?: String[] | String | null
  shortDescription_lt?: String | null
  shortDescription_lte?: String | null
  shortDescription_gt?: String | null
  shortDescription_gte?: String | null
  shortDescription_contains?: String | null
  shortDescription_not_contains?: String | null
  shortDescription_starts_with?: String | null
  shortDescription_not_starts_with?: String | null
  shortDescription_ends_with?: String | null
  shortDescription_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  maxGuests?: Int | null
  maxGuests_not?: Int | null
  maxGuests_in?: Int[] | Int | null
  maxGuests_not_in?: Int[] | Int | null
  maxGuests_lt?: Int | null
  maxGuests_lte?: Int | null
  maxGuests_gt?: Int | null
  maxGuests_gte?: Int | null
  numBedrooms?: Int | null
  numBedrooms_not?: Int | null
  numBedrooms_in?: Int[] | Int | null
  numBedrooms_not_in?: Int[] | Int | null
  numBedrooms_lt?: Int | null
  numBedrooms_lte?: Int | null
  numBedrooms_gt?: Int | null
  numBedrooms_gte?: Int | null
  numBeds?: Int | null
  numBeds_not?: Int | null
  numBeds_in?: Int[] | Int | null
  numBeds_not_in?: Int[] | Int | null
  numBeds_lt?: Int | null
  numBeds_lte?: Int | null
  numBeds_gt?: Int | null
  numBeds_gte?: Int | null
  numBaths?: Int | null
  numBaths_not?: Int | null
  numBaths_in?: Int[] | Int | null
  numBaths_not_in?: Int[] | Int | null
  numBaths_lt?: Int | null
  numBaths_lte?: Int | null
  numBaths_gt?: Int | null
  numBaths_gte?: Int | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: Int[] | Int | null
  popularity_not_in?: Int[] | Int | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
}

export interface PlaceSubscriptionWhereInput {
  AND?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput | null
  OR?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput | null
  NOT?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PlaceWhereInput | null
}

export interface PlaceUpdateInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  reviews?: ReviewUpdateManyWithoutPlaceInput | null
  amenities?: AmenitiesUpdateOneRequiredWithoutPlaceInput | null
  host?: UserUpdateOneRequiredWithoutOwnedPlacesInput | null
  pricing?: PricingUpdateOneRequiredWithoutPlaceInput | null
  location?: LocationUpdateOneRequiredWithoutPlaceInput | null
  views?: ViewsUpdateOneRequiredWithoutPlaceInput | null
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput | null
  policies?: PoliciesUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  orders?: OrderUpdateManyWithoutPlaceInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateManyDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
}

export interface PlaceUpdateManyMutationInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
}

export interface PlaceUpdateManyWithoutHostInput {
  create?: PlaceCreateWithoutHostInput[] | PlaceCreateWithoutHostInput | null
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput | null
  set?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput | null
  disconnect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput | null
  delete?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput | null
  update?: PlaceUpdateWithWhereUniqueWithoutHostInput[] | PlaceUpdateWithWhereUniqueWithoutHostInput | null
  updateMany?: PlaceUpdateManyWithWhereNestedInput[] | PlaceUpdateManyWithWhereNestedInput | null
  deleteMany?: PlaceScalarWhereInput[] | PlaceScalarWhereInput | null
  upsert?: PlaceUpsertWithWhereUniqueWithoutHostInput[] | PlaceUpsertWithWhereUniqueWithoutHostInput | null
}

export interface PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput
  data: PlaceUpdateManyDataInput
}

export interface PlaceUpdateOneRequiredWithoutAmenitiesInput {
  create?: PlaceCreateWithoutAmenitiesInput | null
  connect?: PlaceWhereUniqueInput | null
  update?: PlaceUpdateWithoutAmenitiesDataInput | null
  upsert?: PlaceUpsertWithoutAmenitiesInput | null
}

export interface PlaceUpdateOneRequiredWithoutGuestRequirementsInput {
  create?: PlaceCreateWithoutGuestRequirementsInput | null
  connect?: PlaceWhereUniqueInput | null
  update?: PlaceUpdateWithoutGuestRequirementsDataInput | null
  upsert?: PlaceUpsertWithoutGuestRequirementsInput | null
}

export interface PlaceUpdateOneRequiredWithoutOrdersInput {
  create?: PlaceCreateWithoutOrdersInput | null
  connect?: PlaceWhereUniqueInput | null
  update?: PlaceUpdateWithoutOrdersDataInput | null
  upsert?: PlaceUpsertWithoutOrdersInput | null
}

export interface PlaceUpdateOneRequiredWithoutPoliciesInput {
  create?: PlaceCreateWithoutPoliciesInput | null
  connect?: PlaceWhereUniqueInput | null
  update?: PlaceUpdateWithoutPoliciesDataInput | null
  upsert?: PlaceUpsertWithoutPoliciesInput | null
}

export interface PlaceUpdateOneRequiredWithoutPricingInput {
  create?: PlaceCreateWithoutPricingInput | null
  connect?: PlaceWhereUniqueInput | null
  update?: PlaceUpdateWithoutPricingDataInput | null
  upsert?: PlaceUpsertWithoutPricingInput | null
}

export interface PlaceUpdateOneRequiredWithoutReviewsInput {
  create?: PlaceCreateWithoutReviewsInput | null
  connect?: PlaceWhereUniqueInput | null
  update?: PlaceUpdateWithoutReviewsDataInput | null
  upsert?: PlaceUpsertWithoutReviewsInput | null
}

export interface PlaceUpdateOneRequiredWithoutViewsInput {
  create?: PlaceCreateWithoutViewsInput | null
  connect?: PlaceWhereUniqueInput | null
  update?: PlaceUpdateWithoutViewsDataInput | null
  upsert?: PlaceUpsertWithoutViewsInput | null
}

export interface PlaceUpdateOneWithoutLocationInput {
  create?: PlaceCreateWithoutLocationInput | null
  connect?: PlaceWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PlaceUpdateWithoutLocationDataInput | null
  upsert?: PlaceUpsertWithoutLocationInput | null
}

export interface PlaceUpdateWithoutAmenitiesDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  reviews?: ReviewUpdateManyWithoutPlaceInput | null
  host?: UserUpdateOneRequiredWithoutOwnedPlacesInput | null
  pricing?: PricingUpdateOneRequiredWithoutPlaceInput | null
  location?: LocationUpdateOneRequiredWithoutPlaceInput | null
  views?: ViewsUpdateOneRequiredWithoutPlaceInput | null
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput | null
  policies?: PoliciesUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  orders?: OrderUpdateManyWithoutPlaceInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateWithoutGuestRequirementsDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  reviews?: ReviewUpdateManyWithoutPlaceInput | null
  amenities?: AmenitiesUpdateOneRequiredWithoutPlaceInput | null
  host?: UserUpdateOneRequiredWithoutOwnedPlacesInput | null
  pricing?: PricingUpdateOneRequiredWithoutPlaceInput | null
  location?: LocationUpdateOneRequiredWithoutPlaceInput | null
  views?: ViewsUpdateOneRequiredWithoutPlaceInput | null
  policies?: PoliciesUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  orders?: OrderUpdateManyWithoutPlaceInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateWithoutHostDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  reviews?: ReviewUpdateManyWithoutPlaceInput | null
  amenities?: AmenitiesUpdateOneRequiredWithoutPlaceInput | null
  pricing?: PricingUpdateOneRequiredWithoutPlaceInput | null
  location?: LocationUpdateOneRequiredWithoutPlaceInput | null
  views?: ViewsUpdateOneRequiredWithoutPlaceInput | null
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput | null
  policies?: PoliciesUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  orders?: OrderUpdateManyWithoutPlaceInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateWithoutLocationDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  reviews?: ReviewUpdateManyWithoutPlaceInput | null
  amenities?: AmenitiesUpdateOneRequiredWithoutPlaceInput | null
  host?: UserUpdateOneRequiredWithoutOwnedPlacesInput | null
  pricing?: PricingUpdateOneRequiredWithoutPlaceInput | null
  views?: ViewsUpdateOneRequiredWithoutPlaceInput | null
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput | null
  policies?: PoliciesUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  orders?: OrderUpdateManyWithoutPlaceInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateWithoutOrdersDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  reviews?: ReviewUpdateManyWithoutPlaceInput | null
  amenities?: AmenitiesUpdateOneRequiredWithoutPlaceInput | null
  host?: UserUpdateOneRequiredWithoutOwnedPlacesInput | null
  pricing?: PricingUpdateOneRequiredWithoutPlaceInput | null
  location?: LocationUpdateOneRequiredWithoutPlaceInput | null
  views?: ViewsUpdateOneRequiredWithoutPlaceInput | null
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput | null
  policies?: PoliciesUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateWithoutPoliciesDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  reviews?: ReviewUpdateManyWithoutPlaceInput | null
  amenities?: AmenitiesUpdateOneRequiredWithoutPlaceInput | null
  host?: UserUpdateOneRequiredWithoutOwnedPlacesInput | null
  pricing?: PricingUpdateOneRequiredWithoutPlaceInput | null
  location?: LocationUpdateOneRequiredWithoutPlaceInput | null
  views?: ViewsUpdateOneRequiredWithoutPlaceInput | null
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  orders?: OrderUpdateManyWithoutPlaceInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateWithoutPricingDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  reviews?: ReviewUpdateManyWithoutPlaceInput | null
  amenities?: AmenitiesUpdateOneRequiredWithoutPlaceInput | null
  host?: UserUpdateOneRequiredWithoutOwnedPlacesInput | null
  location?: LocationUpdateOneRequiredWithoutPlaceInput | null
  views?: ViewsUpdateOneRequiredWithoutPlaceInput | null
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput | null
  policies?: PoliciesUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  orders?: OrderUpdateManyWithoutPlaceInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateWithoutReviewsDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  amenities?: AmenitiesUpdateOneRequiredWithoutPlaceInput | null
  host?: UserUpdateOneRequiredWithoutOwnedPlacesInput | null
  pricing?: PricingUpdateOneRequiredWithoutPlaceInput | null
  location?: LocationUpdateOneRequiredWithoutPlaceInput | null
  views?: ViewsUpdateOneRequiredWithoutPlaceInput | null
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput | null
  policies?: PoliciesUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  orders?: OrderUpdateManyWithoutPlaceInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateWithoutViewsDataInput {
  name?: String | null
  size?: PLACE_SIZES | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numBedrooms?: Int | null
  numBeds?: Int | null
  numBaths?: Int | null
  popularity?: Int | null
  reviews?: ReviewUpdateManyWithoutPlaceInput | null
  amenities?: AmenitiesUpdateOneRequiredWithoutPlaceInput | null
  host?: UserUpdateOneRequiredWithoutOwnedPlacesInput | null
  pricing?: PricingUpdateOneRequiredWithoutPlaceInput | null
  location?: LocationUpdateOneRequiredWithoutPlaceInput | null
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput | null
  policies?: PoliciesUpdateOneWithoutPlaceInput | null
  houseRules?: HouseRulesUpdateOneInput | null
  orders?: OrderUpdateManyWithoutPlaceInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface PlaceUpdateWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput
  data: PlaceUpdateWithoutHostDataInput
}

export interface PlaceUpsertWithoutAmenitiesInput {
  update: PlaceUpdateWithoutAmenitiesDataInput
  create: PlaceCreateWithoutAmenitiesInput
}

export interface PlaceUpsertWithoutGuestRequirementsInput {
  update: PlaceUpdateWithoutGuestRequirementsDataInput
  create: PlaceCreateWithoutGuestRequirementsInput
}

export interface PlaceUpsertWithoutLocationInput {
  update: PlaceUpdateWithoutLocationDataInput
  create: PlaceCreateWithoutLocationInput
}

export interface PlaceUpsertWithoutOrdersInput {
  update: PlaceUpdateWithoutOrdersDataInput
  create: PlaceCreateWithoutOrdersInput
}

export interface PlaceUpsertWithoutPoliciesInput {
  update: PlaceUpdateWithoutPoliciesDataInput
  create: PlaceCreateWithoutPoliciesInput
}

export interface PlaceUpsertWithoutPricingInput {
  update: PlaceUpdateWithoutPricingDataInput
  create: PlaceCreateWithoutPricingInput
}

export interface PlaceUpsertWithoutReviewsInput {
  update: PlaceUpdateWithoutReviewsDataInput
  create: PlaceCreateWithoutReviewsInput
}

export interface PlaceUpsertWithoutViewsInput {
  update: PlaceUpdateWithoutViewsDataInput
  create: PlaceCreateWithoutViewsInput
}

export interface PlaceUpsertWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput
  update: PlaceUpdateWithoutHostDataInput
  create: PlaceCreateWithoutHostInput
}

export interface PlaceWhereInput {
  AND?: PlaceWhereInput[] | PlaceWhereInput | null
  OR?: PlaceWhereInput[] | PlaceWhereInput | null
  NOT?: PlaceWhereInput[] | PlaceWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  size?: PLACE_SIZES | null
  size_not?: PLACE_SIZES | null
  size_in?: PLACE_SIZES[] | PLACE_SIZES | null
  size_not_in?: PLACE_SIZES[] | PLACE_SIZES | null
  shortDescription?: String | null
  shortDescription_not?: String | null
  shortDescription_in?: String[] | String | null
  shortDescription_not_in?: String[] | String | null
  shortDescription_lt?: String | null
  shortDescription_lte?: String | null
  shortDescription_gt?: String | null
  shortDescription_gte?: String | null
  shortDescription_contains?: String | null
  shortDescription_not_contains?: String | null
  shortDescription_starts_with?: String | null
  shortDescription_not_starts_with?: String | null
  shortDescription_ends_with?: String | null
  shortDescription_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  maxGuests?: Int | null
  maxGuests_not?: Int | null
  maxGuests_in?: Int[] | Int | null
  maxGuests_not_in?: Int[] | Int | null
  maxGuests_lt?: Int | null
  maxGuests_lte?: Int | null
  maxGuests_gt?: Int | null
  maxGuests_gte?: Int | null
  numBedrooms?: Int | null
  numBedrooms_not?: Int | null
  numBedrooms_in?: Int[] | Int | null
  numBedrooms_not_in?: Int[] | Int | null
  numBedrooms_lt?: Int | null
  numBedrooms_lte?: Int | null
  numBedrooms_gt?: Int | null
  numBedrooms_gte?: Int | null
  numBeds?: Int | null
  numBeds_not?: Int | null
  numBeds_in?: Int[] | Int | null
  numBeds_not_in?: Int[] | Int | null
  numBeds_lt?: Int | null
  numBeds_lte?: Int | null
  numBeds_gt?: Int | null
  numBeds_gte?: Int | null
  numBaths?: Int | null
  numBaths_not?: Int | null
  numBaths_in?: Int[] | Int | null
  numBaths_not_in?: Int[] | Int | null
  numBaths_lt?: Int | null
  numBaths_lte?: Int | null
  numBaths_gt?: Int | null
  numBaths_gte?: Int | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: Int[] | Int | null
  popularity_not_in?: Int[] | Int | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
  reviews_every?: ReviewWhereInput | null
  reviews_some?: ReviewWhereInput | null
  reviews_none?: ReviewWhereInput | null
  amenities?: AmenitiesWhereInput | null
  host?: UserWhereInput | null
  pricing?: PricingWhereInput | null
  location?: LocationWhereInput | null
  views?: ViewsWhereInput | null
  guestRequirements?: GuestRequirementsWhereInput | null
  policies?: PoliciesWhereInput | null
  houseRules?: HouseRulesWhereInput | null
  orders_every?: OrderWhereInput | null
  orders_some?: OrderWhereInput | null
  orders_none?: OrderWhereInput | null
  pictures_every?: PictureWhereInput | null
  pictures_some?: PictureWhereInput | null
  pictures_none?: PictureWhereInput | null
}

export interface PlaceWhereUniqueInput {
  id?: ID_Input | null
}

export interface PoliciesCreateInput {
  id?: ID_Input | null
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
  place: PlaceCreateOneWithoutPoliciesInput
}

export interface PoliciesCreateOneWithoutPlaceInput {
  create?: PoliciesCreateWithoutPlaceInput | null
  connect?: PoliciesWhereUniqueInput | null
}

export interface PoliciesCreateWithoutPlaceInput {
  id?: ID_Input | null
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
}

export interface PoliciesSubscriptionWhereInput {
  AND?: PoliciesSubscriptionWhereInput[] | PoliciesSubscriptionWhereInput | null
  OR?: PoliciesSubscriptionWhereInput[] | PoliciesSubscriptionWhereInput | null
  NOT?: PoliciesSubscriptionWhereInput[] | PoliciesSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PoliciesWhereInput | null
}

export interface PoliciesUpdateInput {
  checkInStartTime?: Float | null
  checkInEndTime?: Float | null
  checkoutTime?: Float | null
  place?: PlaceUpdateOneRequiredWithoutPoliciesInput | null
}

export interface PoliciesUpdateManyMutationInput {
  checkInStartTime?: Float | null
  checkInEndTime?: Float | null
  checkoutTime?: Float | null
}

export interface PoliciesUpdateOneWithoutPlaceInput {
  create?: PoliciesCreateWithoutPlaceInput | null
  connect?: PoliciesWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PoliciesUpdateWithoutPlaceDataInput | null
  upsert?: PoliciesUpsertWithoutPlaceInput | null
}

export interface PoliciesUpdateWithoutPlaceDataInput {
  checkInStartTime?: Float | null
  checkInEndTime?: Float | null
  checkoutTime?: Float | null
}

export interface PoliciesUpsertWithoutPlaceInput {
  update: PoliciesUpdateWithoutPlaceDataInput
  create: PoliciesCreateWithoutPlaceInput
}

export interface PoliciesWhereInput {
  AND?: PoliciesWhereInput[] | PoliciesWhereInput | null
  OR?: PoliciesWhereInput[] | PoliciesWhereInput | null
  NOT?: PoliciesWhereInput[] | PoliciesWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  checkInStartTime?: Float | null
  checkInStartTime_not?: Float | null
  checkInStartTime_in?: Float[] | Float | null
  checkInStartTime_not_in?: Float[] | Float | null
  checkInStartTime_lt?: Float | null
  checkInStartTime_lte?: Float | null
  checkInStartTime_gt?: Float | null
  checkInStartTime_gte?: Float | null
  checkInEndTime?: Float | null
  checkInEndTime_not?: Float | null
  checkInEndTime_in?: Float[] | Float | null
  checkInEndTime_not_in?: Float[] | Float | null
  checkInEndTime_lt?: Float | null
  checkInEndTime_lte?: Float | null
  checkInEndTime_gt?: Float | null
  checkInEndTime_gte?: Float | null
  checkoutTime?: Float | null
  checkoutTime_not?: Float | null
  checkoutTime_in?: Float[] | Float | null
  checkoutTime_not_in?: Float[] | Float | null
  checkoutTime_lt?: Float | null
  checkoutTime_lte?: Float | null
  checkoutTime_gt?: Float | null
  checkoutTime_gte?: Float | null
  place?: PlaceWhereInput | null
}

export interface PoliciesWhereUniqueInput {
  id?: ID_Input | null
}

export interface PricingCreateInput {
  id?: ID_Input | null
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  perNight: Int
  smartPricing?: Boolean | null
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee?: Int | null
  securityDeposit?: Int | null
  extraGuests?: Int | null
  weekendPricing?: Int | null
  currency?: CURRENCY | null
  place: PlaceCreateOneWithoutPricingInput
}

export interface PricingCreateOneWithoutPlaceInput {
  create?: PricingCreateWithoutPlaceInput | null
  connect?: PricingWhereUniqueInput | null
}

export interface PricingCreateWithoutPlaceInput {
  id?: ID_Input | null
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  perNight: Int
  smartPricing?: Boolean | null
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee?: Int | null
  securityDeposit?: Int | null
  extraGuests?: Int | null
  weekendPricing?: Int | null
  currency?: CURRENCY | null
}

export interface PricingSubscriptionWhereInput {
  AND?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput | null
  OR?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput | null
  NOT?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PricingWhereInput | null
}

export interface PricingUpdateInput {
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  perNight?: Int | null
  smartPricing?: Boolean | null
  basePrice?: Int | null
  averageWeekly?: Int | null
  averageMonthly?: Int | null
  cleaningFee?: Int | null
  securityDeposit?: Int | null
  extraGuests?: Int | null
  weekendPricing?: Int | null
  currency?: CURRENCY | null
  place?: PlaceUpdateOneRequiredWithoutPricingInput | null
}

export interface PricingUpdateManyMutationInput {
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  perNight?: Int | null
  smartPricing?: Boolean | null
  basePrice?: Int | null
  averageWeekly?: Int | null
  averageMonthly?: Int | null
  cleaningFee?: Int | null
  securityDeposit?: Int | null
  extraGuests?: Int | null
  weekendPricing?: Int | null
  currency?: CURRENCY | null
}

export interface PricingUpdateOneRequiredWithoutPlaceInput {
  create?: PricingCreateWithoutPlaceInput | null
  connect?: PricingWhereUniqueInput | null
  update?: PricingUpdateWithoutPlaceDataInput | null
  upsert?: PricingUpsertWithoutPlaceInput | null
}

export interface PricingUpdateWithoutPlaceDataInput {
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  perNight?: Int | null
  smartPricing?: Boolean | null
  basePrice?: Int | null
  averageWeekly?: Int | null
  averageMonthly?: Int | null
  cleaningFee?: Int | null
  securityDeposit?: Int | null
  extraGuests?: Int | null
  weekendPricing?: Int | null
  currency?: CURRENCY | null
}

export interface PricingUpsertWithoutPlaceInput {
  update: PricingUpdateWithoutPlaceDataInput
  create: PricingCreateWithoutPlaceInput
}

export interface PricingWhereInput {
  AND?: PricingWhereInput[] | PricingWhereInput | null
  OR?: PricingWhereInput[] | PricingWhereInput | null
  NOT?: PricingWhereInput[] | PricingWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  monthlyDiscount?: Int | null
  monthlyDiscount_not?: Int | null
  monthlyDiscount_in?: Int[] | Int | null
  monthlyDiscount_not_in?: Int[] | Int | null
  monthlyDiscount_lt?: Int | null
  monthlyDiscount_lte?: Int | null
  monthlyDiscount_gt?: Int | null
  monthlyDiscount_gte?: Int | null
  weeklyDiscount?: Int | null
  weeklyDiscount_not?: Int | null
  weeklyDiscount_in?: Int[] | Int | null
  weeklyDiscount_not_in?: Int[] | Int | null
  weeklyDiscount_lt?: Int | null
  weeklyDiscount_lte?: Int | null
  weeklyDiscount_gt?: Int | null
  weeklyDiscount_gte?: Int | null
  perNight?: Int | null
  perNight_not?: Int | null
  perNight_in?: Int[] | Int | null
  perNight_not_in?: Int[] | Int | null
  perNight_lt?: Int | null
  perNight_lte?: Int | null
  perNight_gt?: Int | null
  perNight_gte?: Int | null
  smartPricing?: Boolean | null
  smartPricing_not?: Boolean | null
  basePrice?: Int | null
  basePrice_not?: Int | null
  basePrice_in?: Int[] | Int | null
  basePrice_not_in?: Int[] | Int | null
  basePrice_lt?: Int | null
  basePrice_lte?: Int | null
  basePrice_gt?: Int | null
  basePrice_gte?: Int | null
  averageWeekly?: Int | null
  averageWeekly_not?: Int | null
  averageWeekly_in?: Int[] | Int | null
  averageWeekly_not_in?: Int[] | Int | null
  averageWeekly_lt?: Int | null
  averageWeekly_lte?: Int | null
  averageWeekly_gt?: Int | null
  averageWeekly_gte?: Int | null
  averageMonthly?: Int | null
  averageMonthly_not?: Int | null
  averageMonthly_in?: Int[] | Int | null
  averageMonthly_not_in?: Int[] | Int | null
  averageMonthly_lt?: Int | null
  averageMonthly_lte?: Int | null
  averageMonthly_gt?: Int | null
  averageMonthly_gte?: Int | null
  cleaningFee?: Int | null
  cleaningFee_not?: Int | null
  cleaningFee_in?: Int[] | Int | null
  cleaningFee_not_in?: Int[] | Int | null
  cleaningFee_lt?: Int | null
  cleaningFee_lte?: Int | null
  cleaningFee_gt?: Int | null
  cleaningFee_gte?: Int | null
  securityDeposit?: Int | null
  securityDeposit_not?: Int | null
  securityDeposit_in?: Int[] | Int | null
  securityDeposit_not_in?: Int[] | Int | null
  securityDeposit_lt?: Int | null
  securityDeposit_lte?: Int | null
  securityDeposit_gt?: Int | null
  securityDeposit_gte?: Int | null
  extraGuests?: Int | null
  extraGuests_not?: Int | null
  extraGuests_in?: Int[] | Int | null
  extraGuests_not_in?: Int[] | Int | null
  extraGuests_lt?: Int | null
  extraGuests_lte?: Int | null
  extraGuests_gt?: Int | null
  extraGuests_gte?: Int | null
  weekendPricing?: Int | null
  weekendPricing_not?: Int | null
  weekendPricing_in?: Int[] | Int | null
  weekendPricing_not_in?: Int[] | Int | null
  weekendPricing_lt?: Int | null
  weekendPricing_lte?: Int | null
  weekendPricing_gt?: Int | null
  weekendPricing_gte?: Int | null
  currency?: CURRENCY | null
  currency_not?: CURRENCY | null
  currency_in?: CURRENCY[] | CURRENCY | null
  currency_not_in?: CURRENCY[] | CURRENCY | null
  place?: PlaceWhereInput | null
}

export interface PricingWhereUniqueInput {
  id?: ID_Input | null
}

export interface RestaurantCreateInput {
  id?: ID_Input | null
  title: String
  avgPricePerPerson: Int
  isCurated?: Boolean | null
  slug: String
  popularity: Int
  pictures?: PictureCreateManyInput | null
  location: LocationCreateOneWithoutRestaurantInput
}

export interface RestaurantCreateOneWithoutLocationInput {
  create?: RestaurantCreateWithoutLocationInput | null
  connect?: RestaurantWhereUniqueInput | null
}

export interface RestaurantCreateWithoutLocationInput {
  id?: ID_Input | null
  title: String
  avgPricePerPerson: Int
  isCurated?: Boolean | null
  slug: String
  popularity: Int
  pictures?: PictureCreateManyInput | null
}

export interface RestaurantSubscriptionWhereInput {
  AND?: RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput | null
  OR?: RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput | null
  NOT?: RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RestaurantWhereInput | null
}

export interface RestaurantUpdateInput {
  title?: String | null
  avgPricePerPerson?: Int | null
  isCurated?: Boolean | null
  slug?: String | null
  popularity?: Int | null
  pictures?: PictureUpdateManyInput | null
  location?: LocationUpdateOneRequiredWithoutRestaurantInput | null
}

export interface RestaurantUpdateManyMutationInput {
  title?: String | null
  avgPricePerPerson?: Int | null
  isCurated?: Boolean | null
  slug?: String | null
  popularity?: Int | null
}

export interface RestaurantUpdateOneWithoutLocationInput {
  create?: RestaurantCreateWithoutLocationInput | null
  connect?: RestaurantWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: RestaurantUpdateWithoutLocationDataInput | null
  upsert?: RestaurantUpsertWithoutLocationInput | null
}

export interface RestaurantUpdateWithoutLocationDataInput {
  title?: String | null
  avgPricePerPerson?: Int | null
  isCurated?: Boolean | null
  slug?: String | null
  popularity?: Int | null
  pictures?: PictureUpdateManyInput | null
}

export interface RestaurantUpsertWithoutLocationInput {
  update: RestaurantUpdateWithoutLocationDataInput
  create: RestaurantCreateWithoutLocationInput
}

export interface RestaurantWhereInput {
  AND?: RestaurantWhereInput[] | RestaurantWhereInput | null
  OR?: RestaurantWhereInput[] | RestaurantWhereInput | null
  NOT?: RestaurantWhereInput[] | RestaurantWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  avgPricePerPerson?: Int | null
  avgPricePerPerson_not?: Int | null
  avgPricePerPerson_in?: Int[] | Int | null
  avgPricePerPerson_not_in?: Int[] | Int | null
  avgPricePerPerson_lt?: Int | null
  avgPricePerPerson_lte?: Int | null
  avgPricePerPerson_gt?: Int | null
  avgPricePerPerson_gte?: Int | null
  isCurated?: Boolean | null
  isCurated_not?: Boolean | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: Int[] | Int | null
  popularity_not_in?: Int[] | Int | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
  pictures_every?: PictureWhereInput | null
  pictures_some?: PictureWhereInput | null
  pictures_none?: PictureWhereInput | null
  location?: LocationWhereInput | null
}

export interface RestaurantWhereUniqueInput {
  id?: ID_Input | null
}

export interface ReviewCreateInput {
  id?: ID_Input | null
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceCreateOneWithoutReviewsInput
  experience?: ExperienceCreateOneWithoutReviewsInput | null
}

export interface ReviewCreateManyWithoutExperienceInput {
  create?: ReviewCreateWithoutExperienceInput[] | ReviewCreateWithoutExperienceInput | null
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
}

export interface ReviewCreateManyWithoutPlaceInput {
  create?: ReviewCreateWithoutPlaceInput[] | ReviewCreateWithoutPlaceInput | null
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
}

export interface ReviewCreateWithoutExperienceInput {
  id?: ID_Input | null
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceCreateOneWithoutReviewsInput
}

export interface ReviewCreateWithoutPlaceInput {
  id?: ID_Input | null
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  experience?: ExperienceCreateOneWithoutReviewsInput | null
}

export interface ReviewScalarWhereInput {
  AND?: ReviewScalarWhereInput[] | ReviewScalarWhereInput | null
  OR?: ReviewScalarWhereInput[] | ReviewScalarWhereInput | null
  NOT?: ReviewScalarWhereInput[] | ReviewScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  stars?: Int | null
  stars_not?: Int | null
  stars_in?: Int[] | Int | null
  stars_not_in?: Int[] | Int | null
  stars_lt?: Int | null
  stars_lte?: Int | null
  stars_gt?: Int | null
  stars_gte?: Int | null
  accuracy?: Int | null
  accuracy_not?: Int | null
  accuracy_in?: Int[] | Int | null
  accuracy_not_in?: Int[] | Int | null
  accuracy_lt?: Int | null
  accuracy_lte?: Int | null
  accuracy_gt?: Int | null
  accuracy_gte?: Int | null
  location?: Int | null
  location_not?: Int | null
  location_in?: Int[] | Int | null
  location_not_in?: Int[] | Int | null
  location_lt?: Int | null
  location_lte?: Int | null
  location_gt?: Int | null
  location_gte?: Int | null
  checkIn?: Int | null
  checkIn_not?: Int | null
  checkIn_in?: Int[] | Int | null
  checkIn_not_in?: Int[] | Int | null
  checkIn_lt?: Int | null
  checkIn_lte?: Int | null
  checkIn_gt?: Int | null
  checkIn_gte?: Int | null
  value?: Int | null
  value_not?: Int | null
  value_in?: Int[] | Int | null
  value_not_in?: Int[] | Int | null
  value_lt?: Int | null
  value_lte?: Int | null
  value_gt?: Int | null
  value_gte?: Int | null
  cleanliness?: Int | null
  cleanliness_not?: Int | null
  cleanliness_in?: Int[] | Int | null
  cleanliness_not_in?: Int[] | Int | null
  cleanliness_lt?: Int | null
  cleanliness_lte?: Int | null
  cleanliness_gt?: Int | null
  cleanliness_gte?: Int | null
  communication?: Int | null
  communication_not?: Int | null
  communication_in?: Int[] | Int | null
  communication_not_in?: Int[] | Int | null
  communication_lt?: Int | null
  communication_lte?: Int | null
  communication_gt?: Int | null
  communication_gte?: Int | null
}

export interface ReviewSubscriptionWhereInput {
  AND?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput | null
  OR?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput | null
  NOT?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ReviewWhereInput | null
}

export interface ReviewUpdateInput {
  text?: String | null
  stars?: Int | null
  accuracy?: Int | null
  location?: Int | null
  checkIn?: Int | null
  value?: Int | null
  cleanliness?: Int | null
  communication?: Int | null
  place?: PlaceUpdateOneRequiredWithoutReviewsInput | null
  experience?: ExperienceUpdateOneWithoutReviewsInput | null
}

export interface ReviewUpdateManyDataInput {
  text?: String | null
  stars?: Int | null
  accuracy?: Int | null
  location?: Int | null
  checkIn?: Int | null
  value?: Int | null
  cleanliness?: Int | null
  communication?: Int | null
}

export interface ReviewUpdateManyMutationInput {
  text?: String | null
  stars?: Int | null
  accuracy?: Int | null
  location?: Int | null
  checkIn?: Int | null
  value?: Int | null
  cleanliness?: Int | null
  communication?: Int | null
}

export interface ReviewUpdateManyWithoutExperienceInput {
  create?: ReviewCreateWithoutExperienceInput[] | ReviewCreateWithoutExperienceInput | null
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
  set?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
  update?: ReviewUpdateWithWhereUniqueWithoutExperienceInput[] | ReviewUpdateWithWhereUniqueWithoutExperienceInput | null
  updateMany?: ReviewUpdateManyWithWhereNestedInput[] | ReviewUpdateManyWithWhereNestedInput | null
  deleteMany?: ReviewScalarWhereInput[] | ReviewScalarWhereInput | null
  upsert?: ReviewUpsertWithWhereUniqueWithoutExperienceInput[] | ReviewUpsertWithWhereUniqueWithoutExperienceInput | null
}

export interface ReviewUpdateManyWithoutPlaceInput {
  create?: ReviewCreateWithoutPlaceInput[] | ReviewCreateWithoutPlaceInput | null
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
  set?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput | null
  update?: ReviewUpdateWithWhereUniqueWithoutPlaceInput[] | ReviewUpdateWithWhereUniqueWithoutPlaceInput | null
  updateMany?: ReviewUpdateManyWithWhereNestedInput[] | ReviewUpdateManyWithWhereNestedInput | null
  deleteMany?: ReviewScalarWhereInput[] | ReviewScalarWhereInput | null
  upsert?: ReviewUpsertWithWhereUniqueWithoutPlaceInput[] | ReviewUpsertWithWhereUniqueWithoutPlaceInput | null
}

export interface ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput
  data: ReviewUpdateManyDataInput
}

export interface ReviewUpdateWithoutExperienceDataInput {
  text?: String | null
  stars?: Int | null
  accuracy?: Int | null
  location?: Int | null
  checkIn?: Int | null
  value?: Int | null
  cleanliness?: Int | null
  communication?: Int | null
  place?: PlaceUpdateOneRequiredWithoutReviewsInput | null
}

export interface ReviewUpdateWithoutPlaceDataInput {
  text?: String | null
  stars?: Int | null
  accuracy?: Int | null
  location?: Int | null
  checkIn?: Int | null
  value?: Int | null
  cleanliness?: Int | null
  communication?: Int | null
  experience?: ExperienceUpdateOneWithoutReviewsInput | null
}

export interface ReviewUpdateWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateWithoutExperienceDataInput
}

export interface ReviewUpdateWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateWithoutPlaceDataInput
}

export interface ReviewUpsertWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateWithoutExperienceDataInput
  create: ReviewCreateWithoutExperienceInput
}

export interface ReviewUpsertWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateWithoutPlaceDataInput
  create: ReviewCreateWithoutPlaceInput
}

export interface ReviewWhereInput {
  AND?: ReviewWhereInput[] | ReviewWhereInput | null
  OR?: ReviewWhereInput[] | ReviewWhereInput | null
  NOT?: ReviewWhereInput[] | ReviewWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  stars?: Int | null
  stars_not?: Int | null
  stars_in?: Int[] | Int | null
  stars_not_in?: Int[] | Int | null
  stars_lt?: Int | null
  stars_lte?: Int | null
  stars_gt?: Int | null
  stars_gte?: Int | null
  accuracy?: Int | null
  accuracy_not?: Int | null
  accuracy_in?: Int[] | Int | null
  accuracy_not_in?: Int[] | Int | null
  accuracy_lt?: Int | null
  accuracy_lte?: Int | null
  accuracy_gt?: Int | null
  accuracy_gte?: Int | null
  location?: Int | null
  location_not?: Int | null
  location_in?: Int[] | Int | null
  location_not_in?: Int[] | Int | null
  location_lt?: Int | null
  location_lte?: Int | null
  location_gt?: Int | null
  location_gte?: Int | null
  checkIn?: Int | null
  checkIn_not?: Int | null
  checkIn_in?: Int[] | Int | null
  checkIn_not_in?: Int[] | Int | null
  checkIn_lt?: Int | null
  checkIn_lte?: Int | null
  checkIn_gt?: Int | null
  checkIn_gte?: Int | null
  value?: Int | null
  value_not?: Int | null
  value_in?: Int[] | Int | null
  value_not_in?: Int[] | Int | null
  value_lt?: Int | null
  value_lte?: Int | null
  value_gt?: Int | null
  value_gte?: Int | null
  cleanliness?: Int | null
  cleanliness_not?: Int | null
  cleanliness_in?: Int[] | Int | null
  cleanliness_not_in?: Int[] | Int | null
  cleanliness_lt?: Int | null
  cleanliness_lte?: Int | null
  cleanliness_gt?: Int | null
  cleanliness_gte?: Int | null
  communication?: Int | null
  communication_not?: Int | null
  communication_in?: Int[] | Int | null
  communication_not_in?: Int[] | Int | null
  communication_lt?: Int | null
  communication_lte?: Int | null
  communication_gt?: Int | null
  communication_gte?: Int | null
  place?: PlaceWhereInput | null
  experience?: ExperienceWhereInput | null
}

export interface ReviewWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid: String
  ownedPlaces?: PlaceCreateManyWithoutHostInput | null
  location?: LocationCreateOneWithoutUserInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  hostingExperiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateOneWithoutHostingExperiencesInput {
  create?: UserCreateWithoutHostingExperiencesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutLocationInput {
  create?: UserCreateWithoutLocationInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutOwnedPlacesInput {
  create?: UserCreateWithoutOwnedPlacesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutPaymentAccountInput {
  create?: UserCreateWithoutPaymentAccountInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutReceivedMessagesInput {
  create?: UserCreateWithoutReceivedMessagesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutSentMessagesInput {
  create?: UserCreateWithoutSentMessagesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutHostingExperiencesInput {
  id?: ID_Input | null
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid: String
  ownedPlaces?: PlaceCreateManyWithoutHostInput | null
  location?: LocationCreateOneWithoutUserInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
}

export interface UserCreateWithoutLocationInput {
  id?: ID_Input | null
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid: String
  ownedPlaces?: PlaceCreateManyWithoutHostInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  hostingExperiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutNotificationsInput {
  id?: ID_Input | null
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid: String
  ownedPlaces?: PlaceCreateManyWithoutHostInput | null
  location?: LocationCreateOneWithoutUserInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  profilePicture?: PictureCreateOneInput | null
  hostingExperiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutOrdersInput {
  id?: ID_Input | null
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid: String
  ownedPlaces?: PlaceCreateManyWithoutHostInput | null
  location?: LocationCreateOneWithoutUserInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  hostingExperiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutOwnedPlacesInput {
  id?: ID_Input | null
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid: String
  location?: LocationCreateOneWithoutUserInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  hostingExperiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutPaymentAccountInput {
  id?: ID_Input | null
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid: String
  ownedPlaces?: PlaceCreateManyWithoutHostInput | null
  location?: LocationCreateOneWithoutUserInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  hostingExperiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutReceivedMessagesInput {
  id?: ID_Input | null
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid: String
  ownedPlaces?: PlaceCreateManyWithoutHostInput | null
  location?: LocationCreateOneWithoutUserInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  hostingExperiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutSentMessagesInput {
  id?: ID_Input | null
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid: String
  ownedPlaces?: PlaceCreateManyWithoutHostInput | null
  location?: LocationCreateOneWithoutUserInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  hostingExperiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
  ownedPlaces?: PlaceUpdateManyWithoutHostInput | null
  location?: LocationUpdateOneWithoutUserInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateManyMutationInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
}

export interface UserUpdateOneRequiredWithoutHostingExperiencesInput {
  create?: UserCreateWithoutHostingExperiencesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutHostingExperiencesDataInput | null
  upsert?: UserUpsertWithoutHostingExperiencesInput | null
}

export interface UserUpdateOneRequiredWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutNotificationsDataInput | null
  upsert?: UserUpsertWithoutNotificationsInput | null
}

export interface UserUpdateOneRequiredWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutOrdersDataInput | null
  upsert?: UserUpsertWithoutOrdersInput | null
}

export interface UserUpdateOneRequiredWithoutOwnedPlacesInput {
  create?: UserCreateWithoutOwnedPlacesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutOwnedPlacesDataInput | null
  upsert?: UserUpsertWithoutOwnedPlacesInput | null
}

export interface UserUpdateOneRequiredWithoutPaymentAccountInput {
  create?: UserCreateWithoutPaymentAccountInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutPaymentAccountDataInput | null
  upsert?: UserUpsertWithoutPaymentAccountInput | null
}

export interface UserUpdateOneRequiredWithoutReceivedMessagesInput {
  create?: UserCreateWithoutReceivedMessagesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutReceivedMessagesDataInput | null
  upsert?: UserUpsertWithoutReceivedMessagesInput | null
}

export interface UserUpdateOneRequiredWithoutSentMessagesInput {
  create?: UserCreateWithoutSentMessagesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutSentMessagesDataInput | null
  upsert?: UserUpsertWithoutSentMessagesInput | null
}

export interface UserUpdateOneWithoutLocationInput {
  create?: UserCreateWithoutLocationInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutLocationDataInput | null
  upsert?: UserUpsertWithoutLocationInput | null
}

export interface UserUpdateWithoutHostingExperiencesDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
  ownedPlaces?: PlaceUpdateManyWithoutHostInput | null
  location?: LocationUpdateOneWithoutUserInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
}

export interface UserUpdateWithoutLocationDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
  ownedPlaces?: PlaceUpdateManyWithoutHostInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutNotificationsDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
  ownedPlaces?: PlaceUpdateManyWithoutHostInput | null
  location?: LocationUpdateOneWithoutUserInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  profilePicture?: PictureUpdateOneInput | null
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutOrdersDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
  ownedPlaces?: PlaceUpdateManyWithoutHostInput | null
  location?: LocationUpdateOneWithoutUserInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutOwnedPlacesDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
  location?: LocationUpdateOneWithoutUserInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutPaymentAccountDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
  ownedPlaces?: PlaceUpdateManyWithoutHostInput | null
  location?: LocationUpdateOneWithoutUserInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutReceivedMessagesDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
  ownedPlaces?: PlaceUpdateManyWithoutHostInput | null
  location?: LocationUpdateOneWithoutUserInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutSentMessagesDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost?: Boolean | null
  accountType?: UserType | null
  uid?: String | null
  ownedPlaces?: PlaceUpdateManyWithoutHostInput | null
  location?: LocationUpdateOneWithoutUserInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpsertWithoutHostingExperiencesInput {
  update: UserUpdateWithoutHostingExperiencesDataInput
  create: UserCreateWithoutHostingExperiencesInput
}

export interface UserUpsertWithoutLocationInput {
  update: UserUpdateWithoutLocationDataInput
  create: UserCreateWithoutLocationInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput
  create: UserCreateWithoutOrdersInput
}

export interface UserUpsertWithoutOwnedPlacesInput {
  update: UserUpdateWithoutOwnedPlacesDataInput
  create: UserCreateWithoutOwnedPlacesInput
}

export interface UserUpsertWithoutPaymentAccountInput {
  update: UserUpdateWithoutPaymentAccountDataInput
  create: UserCreateWithoutPaymentAccountInput
}

export interface UserUpsertWithoutReceivedMessagesInput {
  update: UserUpdateWithoutReceivedMessagesDataInput
  create: UserCreateWithoutReceivedMessagesInput
}

export interface UserUpsertWithoutSentMessagesInput {
  update: UserUpdateWithoutSentMessagesDataInput
  create: UserCreateWithoutSentMessagesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  displayName?: String | null
  displayName_not?: String | null
  displayName_in?: String[] | String | null
  displayName_not_in?: String[] | String | null
  displayName_lt?: String | null
  displayName_lte?: String | null
  displayName_gt?: String | null
  displayName_gte?: String | null
  displayName_contains?: String | null
  displayName_not_contains?: String | null
  displayName_starts_with?: String | null
  displayName_not_starts_with?: String | null
  displayName_ends_with?: String | null
  displayName_not_ends_with?: String | null
  phoneNumber?: String | null
  phoneNumber_not?: String | null
  phoneNumber_in?: String[] | String | null
  phoneNumber_not_in?: String[] | String | null
  phoneNumber_lt?: String | null
  phoneNumber_lte?: String | null
  phoneNumber_gt?: String | null
  phoneNumber_gte?: String | null
  phoneNumber_contains?: String | null
  phoneNumber_not_contains?: String | null
  phoneNumber_starts_with?: String | null
  phoneNumber_not_starts_with?: String | null
  phoneNumber_ends_with?: String | null
  phoneNumber_not_ends_with?: String | null
  responseRate?: Float | null
  responseRate_not?: Float | null
  responseRate_in?: Float[] | Float | null
  responseRate_not_in?: Float[] | Float | null
  responseRate_lt?: Float | null
  responseRate_lte?: Float | null
  responseRate_gt?: Float | null
  responseRate_gte?: Float | null
  responseTime?: Int | null
  responseTime_not?: Int | null
  responseTime_in?: Int[] | Int | null
  responseTime_not_in?: Int[] | Int | null
  responseTime_lt?: Int | null
  responseTime_lte?: Int | null
  responseTime_gt?: Int | null
  responseTime_gte?: Int | null
  isSuperHost?: Boolean | null
  isSuperHost_not?: Boolean | null
  accountType?: UserType | null
  accountType_not?: UserType | null
  accountType_in?: UserType[] | UserType | null
  accountType_not_in?: UserType[] | UserType | null
  uid?: String | null
  uid_not?: String | null
  uid_in?: String[] | String | null
  uid_not_in?: String[] | String | null
  uid_lt?: String | null
  uid_lte?: String | null
  uid_gt?: String | null
  uid_gte?: String | null
  uid_contains?: String | null
  uid_not_contains?: String | null
  uid_starts_with?: String | null
  uid_not_starts_with?: String | null
  uid_ends_with?: String | null
  uid_not_ends_with?: String | null
  ownedPlaces_every?: PlaceWhereInput | null
  ownedPlaces_some?: PlaceWhereInput | null
  ownedPlaces_none?: PlaceWhereInput | null
  location?: LocationWhereInput | null
  orders_every?: OrderWhereInput | null
  orders_some?: OrderWhereInput | null
  orders_none?: OrderWhereInput | null
  paymentAccount_every?: PaymentAccountWhereInput | null
  paymentAccount_some?: PaymentAccountWhereInput | null
  paymentAccount_none?: PaymentAccountWhereInput | null
  sentMessages_every?: MessageWhereInput | null
  sentMessages_some?: MessageWhereInput | null
  sentMessages_none?: MessageWhereInput | null
  receivedMessages_every?: MessageWhereInput | null
  receivedMessages_some?: MessageWhereInput | null
  receivedMessages_none?: MessageWhereInput | null
  notifications_every?: NotificationWhereInput | null
  notifications_some?: NotificationWhereInput | null
  notifications_none?: NotificationWhereInput | null
  profilePicture?: PictureWhereInput | null
  hostingExperiences_every?: ExperienceWhereInput | null
  hostingExperiences_some?: ExperienceWhereInput | null
  hostingExperiences_none?: ExperienceWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  uid?: String | null
}

export interface ViewsCreateInput {
  id?: ID_Input | null
  lastWeek: Int
  place: PlaceCreateOneWithoutViewsInput
}

export interface ViewsCreateOneWithoutPlaceInput {
  create?: ViewsCreateWithoutPlaceInput | null
  connect?: ViewsWhereUniqueInput | null
}

export interface ViewsCreateWithoutPlaceInput {
  id?: ID_Input | null
  lastWeek: Int
}

export interface ViewsSubscriptionWhereInput {
  AND?: ViewsSubscriptionWhereInput[] | ViewsSubscriptionWhereInput | null
  OR?: ViewsSubscriptionWhereInput[] | ViewsSubscriptionWhereInput | null
  NOT?: ViewsSubscriptionWhereInput[] | ViewsSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ViewsWhereInput | null
}

export interface ViewsUpdateInput {
  lastWeek?: Int | null
  place?: PlaceUpdateOneRequiredWithoutViewsInput | null
}

export interface ViewsUpdateManyMutationInput {
  lastWeek?: Int | null
}

export interface ViewsUpdateOneRequiredWithoutPlaceInput {
  create?: ViewsCreateWithoutPlaceInput | null
  connect?: ViewsWhereUniqueInput | null
  update?: ViewsUpdateWithoutPlaceDataInput | null
  upsert?: ViewsUpsertWithoutPlaceInput | null
}

export interface ViewsUpdateWithoutPlaceDataInput {
  lastWeek?: Int | null
}

export interface ViewsUpsertWithoutPlaceInput {
  update: ViewsUpdateWithoutPlaceDataInput
  create: ViewsCreateWithoutPlaceInput
}

export interface ViewsWhereInput {
  AND?: ViewsWhereInput[] | ViewsWhereInput | null
  OR?: ViewsWhereInput[] | ViewsWhereInput | null
  NOT?: ViewsWhereInput[] | ViewsWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  lastWeek?: Int | null
  lastWeek_not?: Int | null
  lastWeek_in?: Int[] | Int | null
  lastWeek_not_in?: Int[] | Int | null
  lastWeek_lt?: Int | null
  lastWeek_lte?: Int | null
  lastWeek_gt?: Int | null
  lastWeek_gte?: Int | null
  place?: PlaceWhereInput | null
}

export interface ViewsWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateAmenities {
  count: Int
}

export interface AggregateCity {
  count: Int
}

export interface AggregateCreditCardInformation {
  count: Int
}

export interface AggregateDebitCardInformation {
  count: Int
}

export interface AggregateExperience {
  count: Int
}

export interface AggregateExperienceCategory {
  count: Int
}

export interface AggregateGuestRequirements {
  count: Int
}

export interface AggregateHouseRules {
  count: Int
}

export interface AggregateLocation {
  count: Int
}

export interface AggregateMessage {
  count: Int
}

export interface AggregateNeighbourhood {
  count: Int
}

export interface AggregateNotification {
  count: Int
}

export interface AggregateOrder {
  count: Int
}

export interface AggregatePayment {
  count: Int
}

export interface AggregatePaymentAccount {
  count: Int
}

export interface AggregatePaypalInformation {
  count: Int
}

export interface AggregatePaytmInformation {
  count: Int
}

export interface AggregatePicture {
  count: Int
}

export interface AggregatePlace {
  count: Int
}

export interface AggregatePolicies {
  count: Int
}

export interface AggregatePricing {
  count: Int
}

export interface AggregateRestaurant {
  count: Int
}

export interface AggregateReview {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AggregateViews {
  count: Int
}

export interface Amenities extends Node {
  id: ID_Output
  place: Place
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

/*
 * A connection to a list of items.

 */
export interface AmenitiesConnection {
  pageInfo: PageInfo
  edges: Array<AmenitiesEdge | null>
  aggregate: AggregateAmenities
}

/*
 * An edge in a connection.

 */
export interface AmenitiesEdge {
  node: Amenities
  cursor: String
}

export interface AmenitiesPreviousValues {
  id: ID_Output
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

export interface AmenitiesSubscriptionPayload {
  mutation: MutationType
  node?: Amenities | null
  updatedFields?: Array<String> | null
  previousValues?: AmenitiesPreviousValues | null
}

export interface BatchPayload {
  count: Long
}

export interface City extends Node {
  id: ID_Output
  name: String
  neighbourhoods?: Array<Neighbourhood> | null
}

/*
 * A connection to a list of items.

 */
export interface CityConnection {
  pageInfo: PageInfo
  edges: Array<CityEdge | null>
  aggregate: AggregateCity
}

/*
 * An edge in a connection.

 */
export interface CityEdge {
  node: City
  cursor: String
}

export interface CityPreviousValues {
  id: ID_Output
  name: String
}

export interface CitySubscriptionPayload {
  mutation: MutationType
  node?: City | null
  updatedFields?: Array<String> | null
  previousValues?: CityPreviousValues | null
}

export interface CreditCardInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccount | null
}

/*
 * A connection to a list of items.

 */
export interface CreditCardInformationConnection {
  pageInfo: PageInfo
  edges: Array<CreditCardInformationEdge | null>
  aggregate: AggregateCreditCardInformation
}

/*
 * An edge in a connection.

 */
export interface CreditCardInformationEdge {
  node: CreditCardInformation
  cursor: String
}

export interface CreditCardInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

export interface CreditCardInformationSubscriptionPayload {
  mutation: MutationType
  node?: CreditCardInformation | null
  updatedFields?: Array<String> | null
  previousValues?: CreditCardInformationPreviousValues | null
}

export interface DebitCardInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccount | null
}

/*
 * A connection to a list of items.

 */
export interface DebitCardInformationConnection {
  pageInfo: PageInfo
  edges: Array<DebitCardInformationEdge | null>
  aggregate: AggregateDebitCardInformation
}

/*
 * An edge in a connection.

 */
export interface DebitCardInformationEdge {
  node: DebitCardInformation
  cursor: String
}

export interface DebitCardInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

export interface DebitCardInformationSubscriptionPayload {
  mutation: MutationType
  node?: DebitCardInformation | null
  updatedFields?: Array<String> | null
  previousValues?: DebitCardInformationPreviousValues | null
}

export interface Experience extends Node {
  id: ID_Output
  category?: ExperienceCategory | null
  title: String
  host: User
  location: Location
  pricePerPerson: Int
  reviews?: Array<Review> | null
  preview: Picture
  popularity: Int
}

export interface ExperienceCategory extends Node {
  id: ID_Output
  mainColor: String
  name: String
  experience?: Experience | null
}

/*
 * A connection to a list of items.

 */
export interface ExperienceCategoryConnection {
  pageInfo: PageInfo
  edges: Array<ExperienceCategoryEdge | null>
  aggregate: AggregateExperienceCategory
}

/*
 * An edge in a connection.

 */
export interface ExperienceCategoryEdge {
  node: ExperienceCategory
  cursor: String
}

export interface ExperienceCategoryPreviousValues {
  id: ID_Output
  mainColor: String
  name: String
}

export interface ExperienceCategorySubscriptionPayload {
  mutation: MutationType
  node?: ExperienceCategory | null
  updatedFields?: Array<String> | null
  previousValues?: ExperienceCategoryPreviousValues | null
}

/*
 * A connection to a list of items.

 */
export interface ExperienceConnection {
  pageInfo: PageInfo
  edges: Array<ExperienceEdge | null>
  aggregate: AggregateExperience
}

/*
 * An edge in a connection.

 */
export interface ExperienceEdge {
  node: Experience
  cursor: String
}

export interface ExperiencePreviousValues {
  id: ID_Output
  title: String
  pricePerPerson: Int
  popularity: Int
}

export interface ExperienceSubscriptionPayload {
  mutation: MutationType
  node?: Experience | null
  updatedFields?: Array<String> | null
  previousValues?: ExperiencePreviousValues | null
}

export interface GuestRequirements extends Node {
  id: ID_Output
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
  place: Place
}

/*
 * A connection to a list of items.

 */
export interface GuestRequirementsConnection {
  pageInfo: PageInfo
  edges: Array<GuestRequirementsEdge | null>
  aggregate: AggregateGuestRequirements
}

/*
 * An edge in a connection.

 */
export interface GuestRequirementsEdge {
  node: GuestRequirements
  cursor: String
}

export interface GuestRequirementsPreviousValues {
  id: ID_Output
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
}

export interface GuestRequirementsSubscriptionPayload {
  mutation: MutationType
  node?: GuestRequirements | null
  updatedFields?: Array<String> | null
  previousValues?: GuestRequirementsPreviousValues | null
}

export interface HouseRules extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  suitableForChildren?: Boolean | null
  suitableForInfants?: Boolean | null
  petsAllowed?: Boolean | null
  smokingAllowed?: Boolean | null
  partiesAndEventsAllowed?: Boolean | null
  additionalRules?: String | null
}

/*
 * A connection to a list of items.

 */
export interface HouseRulesConnection {
  pageInfo: PageInfo
  edges: Array<HouseRulesEdge | null>
  aggregate: AggregateHouseRules
}

/*
 * An edge in a connection.

 */
export interface HouseRulesEdge {
  node: HouseRules
  cursor: String
}

export interface HouseRulesPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  suitableForChildren?: Boolean | null
  suitableForInfants?: Boolean | null
  petsAllowed?: Boolean | null
  smokingAllowed?: Boolean | null
  partiesAndEventsAllowed?: Boolean | null
  additionalRules?: String | null
}

export interface HouseRulesSubscriptionPayload {
  mutation: MutationType
  node?: HouseRules | null
  updatedFields?: Array<String> | null
  previousValues?: HouseRulesPreviousValues | null
}

export interface Location extends Node {
  id: ID_Output
  lat: Float
  lng: Float
  neighbourHood?: Neighbourhood | null
  user?: User | null
  place?: Place | null
  address: String
  directions: String
  experience?: Experience | null
  restaurant?: Restaurant | null
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: Array<LocationEdge | null>
  aggregate: AggregateLocation
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface LocationPreviousValues {
  id: ID_Output
  lat: Float
  lng: Float
  address: String
  directions: String
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location | null
  updatedFields?: Array<String> | null
  previousValues?: LocationPreviousValues | null
}

export interface Message extends Node {
  id: ID_Output
  createdAt: DateTime
  from: User
  to: User
  deliveredAt: DateTime
  readAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: Array<MessageEdge | null>
  aggregate: AggregateMessage
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

export interface MessagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  deliveredAt: DateTime
  readAt: DateTime
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message | null
  updatedFields?: Array<String> | null
  previousValues?: MessagePreviousValues | null
}

export interface Neighbourhood extends Node {
  id: ID_Output
  locations?: Array<Location> | null
  name: String
  slug: String
  homePreview?: Picture | null
  city: City
  featured: Boolean
  popularity: Int
}

/*
 * A connection to a list of items.

 */
export interface NeighbourhoodConnection {
  pageInfo: PageInfo
  edges: Array<NeighbourhoodEdge | null>
  aggregate: AggregateNeighbourhood
}

/*
 * An edge in a connection.

 */
export interface NeighbourhoodEdge {
  node: Neighbourhood
  cursor: String
}

export interface NeighbourhoodPreviousValues {
  id: ID_Output
  name: String
  slug: String
  featured: Boolean
  popularity: Int
}

export interface NeighbourhoodSubscriptionPayload {
  mutation: MutationType
  node?: Neighbourhood | null
  updatedFields?: Array<String> | null
  previousValues?: NeighbourhoodPreviousValues | null
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  type?: NOTIFICATION_TYPE | null
  user: User
  link: String
  readDate: DateTime
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: Array<NotificationEdge | null>
  aggregate: AggregateNotification
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface NotificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  type?: NOTIFICATION_TYPE | null
  link: String
  readDate: DateTime
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification | null
  updatedFields?: Array<String> | null
  previousValues?: NotificationPreviousValues | null
}

export interface Order extends Node {
  id: ID_Output
  createdAt: DateTime
  bookee: User
  place: Place
  startDate: DateTime
  endDate: DateTime
  payment?: Payment | null
}

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo: PageInfo
  edges: Array<OrderEdge | null>
  aggregate: AggregateOrder
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order
  cursor: String
}

export interface OrderPreviousValues {
  id: ID_Output
  createdAt: DateTime
  startDate: DateTime
  endDate: DateTime
}

export interface OrderSubscriptionPayload {
  mutation: MutationType
  node?: Order | null
  updatedFields?: Array<String> | null
  previousValues?: OrderPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Payment extends Node {
  id: ID_Output
  createdAt: DateTime
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  order: Order
  paymentMethod: PaymentAccount
}

export interface PaymentAccount extends Node {
  id: ID_Output
  createdAt: DateTime
  type?: PAYMENT_PROVIDER | null
  user: User
  payments?: Array<Payment> | null
  paypal?: PaypalInformation | null
  creditcard?: CreditCardInformation | null
}

/*
 * A connection to a list of items.

 */
export interface PaymentAccountConnection {
  pageInfo: PageInfo
  edges: Array<PaymentAccountEdge | null>
  aggregate: AggregatePaymentAccount
}

/*
 * An edge in a connection.

 */
export interface PaymentAccountEdge {
  node: PaymentAccount
  cursor: String
}

export interface PaymentAccountPreviousValues {
  id: ID_Output
  createdAt: DateTime
  type?: PAYMENT_PROVIDER | null
}

export interface PaymentAccountSubscriptionPayload {
  mutation: MutationType
  node?: PaymentAccount | null
  updatedFields?: Array<String> | null
  previousValues?: PaymentAccountPreviousValues | null
}

/*
 * A connection to a list of items.

 */
export interface PaymentConnection {
  pageInfo: PageInfo
  edges: Array<PaymentEdge | null>
  aggregate: AggregatePayment
}

/*
 * An edge in a connection.

 */
export interface PaymentEdge {
  node: Payment
  cursor: String
}

export interface PaymentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
}

export interface PaymentSubscriptionPayload {
  mutation: MutationType
  node?: Payment | null
  updatedFields?: Array<String> | null
  previousValues?: PaymentPreviousValues | null
}

export interface PaypalInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  email: String
  paymentAccount: PaymentAccount
}

/*
 * A connection to a list of items.

 */
export interface PaypalInformationConnection {
  pageInfo: PageInfo
  edges: Array<PaypalInformationEdge | null>
  aggregate: AggregatePaypalInformation
}

/*
 * An edge in a connection.

 */
export interface PaypalInformationEdge {
  node: PaypalInformation
  cursor: String
}

export interface PaypalInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  email: String
}

export interface PaypalInformationSubscriptionPayload {
  mutation: MutationType
  node?: PaypalInformation | null
  updatedFields?: Array<String> | null
  previousValues?: PaypalInformationPreviousValues | null
}

export interface PaytmInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  phone: String
  paymentAccount: PaymentAccount
}

/*
 * A connection to a list of items.

 */
export interface PaytmInformationConnection {
  pageInfo: PageInfo
  edges: Array<PaytmInformationEdge | null>
  aggregate: AggregatePaytmInformation
}

/*
 * An edge in a connection.

 */
export interface PaytmInformationEdge {
  node: PaytmInformation
  cursor: String
}

export interface PaytmInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  phone: String
}

export interface PaytmInformationSubscriptionPayload {
  mutation: MutationType
  node?: PaytmInformation | null
  updatedFields?: Array<String> | null
  previousValues?: PaytmInformationPreviousValues | null
}

export interface Picture extends Node {
  id: ID_Output
  url: String
}

/*
 * A connection to a list of items.

 */
export interface PictureConnection {
  pageInfo: PageInfo
  edges: Array<PictureEdge | null>
  aggregate: AggregatePicture
}

/*
 * An edge in a connection.

 */
export interface PictureEdge {
  node: Picture
  cursor: String
}

export interface PicturePreviousValues {
  id: ID_Output
  url: String
}

export interface PictureSubscriptionPayload {
  mutation: MutationType
  node?: Picture | null
  updatedFields?: Array<String> | null
  previousValues?: PicturePreviousValues | null
}

export interface Place extends Node {
  id: ID_Output
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews?: Array<Review> | null
  amenities: Amenities
  host: User
  pricing: Pricing
  location: Location
  views: Views
  guestRequirements?: GuestRequirements | null
  policies?: Policies | null
  houseRules?: HouseRules | null
  orders?: Array<Order> | null
  pictures?: Array<Picture> | null
  popularity: Int
}

/*
 * A connection to a list of items.

 */
export interface PlaceConnection {
  pageInfo: PageInfo
  edges: Array<PlaceEdge | null>
  aggregate: AggregatePlace
}

/*
 * An edge in a connection.

 */
export interface PlaceEdge {
  node: Place
  cursor: String
}

export interface PlacePreviousValues {
  id: ID_Output
  name: String
  size?: PLACE_SIZES | null
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
}

export interface PlaceSubscriptionPayload {
  mutation: MutationType
  node?: Place | null
  updatedFields?: Array<String> | null
  previousValues?: PlacePreviousValues | null
}

export interface Policies extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
  place: Place
}

/*
 * A connection to a list of items.

 */
export interface PoliciesConnection {
  pageInfo: PageInfo
  edges: Array<PoliciesEdge | null>
  aggregate: AggregatePolicies
}

/*
 * An edge in a connection.

 */
export interface PoliciesEdge {
  node: Policies
  cursor: String
}

export interface PoliciesPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
}

export interface PoliciesSubscriptionPayload {
  mutation: MutationType
  node?: Policies | null
  updatedFields?: Array<String> | null
  previousValues?: PoliciesPreviousValues | null
}

export interface Pricing extends Node {
  id: ID_Output
  place: Place
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee?: Int | null
  securityDeposit?: Int | null
  extraGuests?: Int | null
  weekendPricing?: Int | null
  currency?: CURRENCY | null
}

/*
 * A connection to a list of items.

 */
export interface PricingConnection {
  pageInfo: PageInfo
  edges: Array<PricingEdge | null>
  aggregate: AggregatePricing
}

/*
 * An edge in a connection.

 */
export interface PricingEdge {
  node: Pricing
  cursor: String
}

export interface PricingPreviousValues {
  id: ID_Output
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee?: Int | null
  securityDeposit?: Int | null
  extraGuests?: Int | null
  weekendPricing?: Int | null
  currency?: CURRENCY | null
}

export interface PricingSubscriptionPayload {
  mutation: MutationType
  node?: Pricing | null
  updatedFields?: Array<String> | null
  previousValues?: PricingPreviousValues | null
}

export interface Restaurant extends Node {
  id: ID_Output
  createdAt: DateTime
  title: String
  avgPricePerPerson: Int
  pictures?: Array<Picture> | null
  location: Location
  isCurated: Boolean
  slug: String
  popularity: Int
}

/*
 * A connection to a list of items.

 */
export interface RestaurantConnection {
  pageInfo: PageInfo
  edges: Array<RestaurantEdge | null>
  aggregate: AggregateRestaurant
}

/*
 * An edge in a connection.

 */
export interface RestaurantEdge {
  node: Restaurant
  cursor: String
}

export interface RestaurantPreviousValues {
  id: ID_Output
  createdAt: DateTime
  title: String
  avgPricePerPerson: Int
  isCurated: Boolean
  slug: String
  popularity: Int
}

export interface RestaurantSubscriptionPayload {
  mutation: MutationType
  node?: Restaurant | null
  updatedFields?: Array<String> | null
  previousValues?: RestaurantPreviousValues | null
}

export interface Review extends Node {
  id: ID_Output
  createdAt: DateTime
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: Place
  experience?: Experience | null
}

/*
 * A connection to a list of items.

 */
export interface ReviewConnection {
  pageInfo: PageInfo
  edges: Array<ReviewEdge | null>
  aggregate: AggregateReview
}

/*
 * An edge in a connection.

 */
export interface ReviewEdge {
  node: Review
  cursor: String
}

export interface ReviewPreviousValues {
  id: ID_Output
  createdAt: DateTime
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
}

export interface ReviewSubscriptionPayload {
  mutation: MutationType
  node?: Review | null
  updatedFields?: Array<String> | null
  previousValues?: ReviewPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost: Boolean
  ownedPlaces?: Array<Place> | null
  location?: Location | null
  orders?: Array<Order> | null
  paymentAccount?: Array<PaymentAccount> | null
  sentMessages?: Array<Message> | null
  receivedMessages?: Array<Message> | null
  notifications?: Array<Notification> | null
  profilePicture?: Picture | null
  hostingExperiences?: Array<Experience> | null
  accountType?: UserType | null
  uid: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  displayName: String
  phoneNumber: String
  responseRate?: Float | null
  responseTime?: Int | null
  isSuperHost: Boolean
  accountType?: UserType | null
  uid: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

export interface Views extends Node {
  id: ID_Output
  lastWeek: Int
  place: Place
}

/*
 * A connection to a list of items.

 */
export interface ViewsConnection {
  pageInfo: PageInfo
  edges: Array<ViewsEdge | null>
  aggregate: AggregateViews
}

/*
 * An edge in a connection.

 */
export interface ViewsEdge {
  node: Views
  cursor: String
}

export interface ViewsPreviousValues {
  id: ID_Output
  lastWeek: Int
}

export interface ViewsSubscriptionPayload {
  mutation: MutationType
  node?: Views | null
  updatedFields?: Array<String> | null
  previousValues?: ViewsPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string