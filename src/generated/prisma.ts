import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = undefined | null>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    neighbourhoods: <T = undefined | null>(args: { where?: NeighbourhoodWhereInput | null, orderBy?: NeighbourhoodOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    cities: <T = undefined | null>(args: { where?: CityWhereInput | null, orderBy?: CityOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    experiences: <T = undefined | null>(args: { where?: ExperienceWhereInput | null, orderBy?: ExperienceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    payments: <T = undefined | null>(args: { where?: PaymentWhereInput | null, orderBy?: PaymentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paymentAccounts: <T = undefined | null>(args: { where?: PaymentAccountWhereInput | null, orderBy?: PaymentAccountOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    messages: <T = undefined | null>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    notifications: <T = undefined | null>(args: { where?: NotificationWhereInput | null, orderBy?: NotificationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    restaurants: <T = undefined | null>(args: { where?: RestaurantWhereInput | null, orderBy?: RestaurantOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    menuItems: <T = undefined | null>(args: { where?: MenuItemWhereInput | null, orderBy?: MenuItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paypalInformations: <T = undefined | null>(args: { where?: PaypalInformationWhereInput | null, orderBy?: PaypalInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    policieses: <T = undefined | null>(args: { where?: PoliciesWhereInput | null, orderBy?: PoliciesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    creditCardInformations: <T = undefined | null>(args: { where?: CreditCardInformationWhereInput | null, orderBy?: CreditCardInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    locations: <T = undefined | null>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    reviews: <T = undefined | null>(args: { where?: ReviewWhereInput | null, orderBy?: ReviewOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    orders: <T = undefined | null>(args: { where?: OrderWhereInput | null, orderBy?: OrderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    experienceCategories: <T = undefined | null>(args: { where?: ExperienceCategoryWhereInput | null, orderBy?: ExperienceCategoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paytmInformations: <T = undefined | null>(args: { where?: PaytmInformationWhereInput | null, orderBy?: PaytmInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    debitCardInformations: <T = undefined | null>(args: { where?: DebitCardInformationWhereInput | null, orderBy?: DebitCardInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pricings: <T = undefined | null>(args: { where?: PricingWhereInput | null, orderBy?: PricingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pictures: <T = undefined | null>(args: { where?: PictureWhereInput | null, orderBy?: PictureOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    neighbourhood: <T = Neighbourhood | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    city: <T = City | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    experience: <T = Experience | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    payment: <T = Payment | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paymentAccount: <T = PaymentAccount | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    message: <T = Message | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    notification: <T = Notification | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    restaurant: <T = Restaurant | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    menuItem: <T = MenuItem | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paypalInformation: <T = PaypalInformation | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    policies: <T = Policies | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    creditCardInformation: <T = CreditCardInformation | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    location: <T = Location | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    review: <T = Review | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    order: <T = Order | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    experienceCategory: <T = ExperienceCategory | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paytmInformation: <T = PaytmInformation | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    debitCardInformation: <T = DebitCardInformation | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pricing: <T = Pricing | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    picture: <T = Picture | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = undefined | null>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    neighbourhoodsConnection: <T = undefined | null>(args: { where?: NeighbourhoodWhereInput | null, orderBy?: NeighbourhoodOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    citiesConnection: <T = undefined | null>(args: { where?: CityWhereInput | null, orderBy?: CityOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    experiencesConnection: <T = undefined | null>(args: { where?: ExperienceWhereInput | null, orderBy?: ExperienceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paymentsConnection: <T = undefined | null>(args: { where?: PaymentWhereInput | null, orderBy?: PaymentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paymentAccountsConnection: <T = undefined | null>(args: { where?: PaymentAccountWhereInput | null, orderBy?: PaymentAccountOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    messagesConnection: <T = undefined | null>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    notificationsConnection: <T = undefined | null>(args: { where?: NotificationWhereInput | null, orderBy?: NotificationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    restaurantsConnection: <T = undefined | null>(args: { where?: RestaurantWhereInput | null, orderBy?: RestaurantOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    menuItemsConnection: <T = undefined | null>(args: { where?: MenuItemWhereInput | null, orderBy?: MenuItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paypalInformationsConnection: <T = undefined | null>(args: { where?: PaypalInformationWhereInput | null, orderBy?: PaypalInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    policiesesConnection: <T = undefined | null>(args: { where?: PoliciesWhereInput | null, orderBy?: PoliciesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    creditCardInformationsConnection: <T = undefined | null>(args: { where?: CreditCardInformationWhereInput | null, orderBy?: CreditCardInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    locationsConnection: <T = undefined | null>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    reviewsConnection: <T = undefined | null>(args: { where?: ReviewWhereInput | null, orderBy?: ReviewOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    ordersConnection: <T = undefined | null>(args: { where?: OrderWhereInput | null, orderBy?: OrderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    experienceCategoriesConnection: <T = undefined | null>(args: { where?: ExperienceCategoryWhereInput | null, orderBy?: ExperienceCategoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    paytmInformationsConnection: <T = undefined | null>(args: { where?: PaytmInformationWhereInput | null, orderBy?: PaytmInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    debitCardInformationsConnection: <T = undefined | null>(args: { where?: DebitCardInformationWhereInput | null, orderBy?: DebitCardInformationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pricingsConnection: <T = undefined | null>(args: { where?: PricingWhereInput | null, orderBy?: PricingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    picturesConnection: <T = undefined | null>(args: { where?: PictureWhereInput | null, orderBy?: PictureOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    node: <T = Node | null>(args: { id?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createNeighbourhood: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createCity: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createExperience: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createPayment: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createPaymentAccount: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createMessage: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createNotification: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createRestaurant: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createMenuItem: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createPaypalInformation: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createPolicies: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createCreditCardInformation: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createLocation: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createReview: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createOrder: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createExperienceCategory: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createPaytmInformation: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createDebitCardInformation: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createPricing: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    createPicture: <T = undefined | null>(args: { data?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNeighbourhood: <T = Neighbourhood | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCity: <T = City | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateExperience: <T = Experience | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePayment: <T = Payment | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePaymentAccount: <T = PaymentAccount | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMessage: <T = Message | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNotification: <T = Notification | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateRestaurant: <T = Restaurant | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMenuItem: <T = MenuItem | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePaypalInformation: <T = PaypalInformation | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePolicies: <T = Policies | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCreditCardInformation: <T = CreditCardInformation | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLocation: <T = Location | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateReview: <T = Review | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateOrder: <T = Order | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateExperienceCategory: <T = ExperienceCategory | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePaytmInformation: <T = PaytmInformation | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateDebitCardInformation: <T = DebitCardInformation | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePricing: <T = Pricing | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePicture: <T = Picture | null>(args: { data?: undefined | null, where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNeighbourhood: <T = Neighbourhood | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCity: <T = City | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteExperience: <T = Experience | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePayment: <T = Payment | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePaymentAccount: <T = PaymentAccount | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMessage: <T = Message | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNotification: <T = Notification | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRestaurant: <T = Restaurant | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMenuItem: <T = MenuItem | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePaypalInformation: <T = PaypalInformation | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePolicies: <T = Policies | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCreditCardInformation: <T = CreditCardInformation | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLocation: <T = Location | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteReview: <T = Review | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteOrder: <T = Order | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteExperienceCategory: <T = ExperienceCategory | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePaytmInformation: <T = PaytmInformation | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteDebitCardInformation: <T = DebitCardInformation | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePricing: <T = Pricing | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePicture: <T = Picture | null>(args: { where?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertNeighbourhood: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertCity: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertExperience: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPayment: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPaymentAccount: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertMessage: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertNotification: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertRestaurant: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertMenuItem: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPaypalInformation: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPolicies: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertCreditCardInformation: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertLocation: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertReview: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertOrder: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertExperienceCategory: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPaytmInformation: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertDebitCardInformation: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPricing: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPicture: <T = undefined | null>(args: { where?: undefined | null, create?: undefined | null, update?: undefined | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyUsers: <T = undefined | null>(args: { data?: undefined | null, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyNeighbourhoods: <T = undefined | null>(args: { data?: undefined | null, where?: NeighbourhoodWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyCities: <T = undefined | null>(args: { data?: undefined | null, where?: CityWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyExperiences: <T = undefined | null>(args: { data?: undefined | null, where?: ExperienceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPayments: <T = undefined | null>(args: { data?: undefined | null, where?: PaymentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPaymentAccounts: <T = undefined | null>(args: { data?: undefined | null, where?: PaymentAccountWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyMessages: <T = undefined | null>(args: { data?: undefined | null, where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyNotifications: <T = undefined | null>(args: { data?: undefined | null, where?: NotificationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyRestaurants: <T = undefined | null>(args: { data?: undefined | null, where?: RestaurantWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyMenuItems: <T = undefined | null>(args: { data?: undefined | null, where?: MenuItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPaypalInformations: <T = undefined | null>(args: { data?: undefined | null, where?: PaypalInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPolicieses: <T = undefined | null>(args: { data?: undefined | null, where?: PoliciesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyCreditCardInformations: <T = undefined | null>(args: { data?: undefined | null, where?: CreditCardInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyLocations: <T = undefined | null>(args: { data?: undefined | null, where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyReviews: <T = undefined | null>(args: { data?: undefined | null, where?: ReviewWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyOrders: <T = undefined | null>(args: { data?: undefined | null, where?: OrderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyExperienceCategories: <T = undefined | null>(args: { data?: undefined | null, where?: ExperienceCategoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPaytmInformations: <T = undefined | null>(args: { data?: undefined | null, where?: PaytmInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyDebitCardInformations: <T = undefined | null>(args: { data?: undefined | null, where?: DebitCardInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPricings: <T = undefined | null>(args: { data?: undefined | null, where?: PricingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPictures: <T = undefined | null>(args: { data?: undefined | null, where?: PictureWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyUsers: <T = undefined | null>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyNeighbourhoods: <T = undefined | null>(args: { where?: NeighbourhoodWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyCities: <T = undefined | null>(args: { where?: CityWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyExperiences: <T = undefined | null>(args: { where?: ExperienceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPayments: <T = undefined | null>(args: { where?: PaymentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPaymentAccounts: <T = undefined | null>(args: { where?: PaymentAccountWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyMessages: <T = undefined | null>(args: { where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyNotifications: <T = undefined | null>(args: { where?: NotificationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyRestaurants: <T = undefined | null>(args: { where?: RestaurantWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyMenuItems: <T = undefined | null>(args: { where?: MenuItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPaypalInformations: <T = undefined | null>(args: { where?: PaypalInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPolicieses: <T = undefined | null>(args: { where?: PoliciesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyCreditCardInformations: <T = undefined | null>(args: { where?: CreditCardInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyLocations: <T = undefined | null>(args: { where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyReviews: <T = undefined | null>(args: { where?: ReviewWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyOrders: <T = undefined | null>(args: { where?: OrderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyExperienceCategories: <T = undefined | null>(args: { where?: ExperienceCategoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPaytmInformations: <T = undefined | null>(args: { where?: PaytmInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyDebitCardInformations: <T = undefined | null>(args: { where?: DebitCardInformationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPricings: <T = undefined | null>(args: { where?: PricingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPictures: <T = undefined | null>(args: { where?: PictureWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    neighbourhood: <T = NeighbourhoodSubscriptionPayload | null>(args: { where?: NeighbourhoodSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    city: <T = CitySubscriptionPayload | null>(args: { where?: CitySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    experience: <T = ExperienceSubscriptionPayload | null>(args: { where?: ExperienceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    payment: <T = PaymentSubscriptionPayload | null>(args: { where?: PaymentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    paymentAccount: <T = PaymentAccountSubscriptionPayload | null>(args: { where?: PaymentAccountSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    restaurant: <T = RestaurantSubscriptionPayload | null>(args: { where?: RestaurantSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    menuItem: <T = MenuItemSubscriptionPayload | null>(args: { where?: MenuItemSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    paypalInformation: <T = PaypalInformationSubscriptionPayload | null>(args: { where?: PaypalInformationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    policies: <T = PoliciesSubscriptionPayload | null>(args: { where?: PoliciesSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    creditCardInformation: <T = CreditCardInformationSubscriptionPayload | null>(args: { where?: CreditCardInformationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    review: <T = ReviewSubscriptionPayload | null>(args: { where?: ReviewSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    order: <T = OrderSubscriptionPayload | null>(args: { where?: OrderSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    experienceCategory: <T = ExperienceCategorySubscriptionPayload | null>(args: { where?: ExperienceCategorySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    paytmInformation: <T = PaytmInformationSubscriptionPayload | null>(args: { where?: PaytmInformationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    debitCardInformation: <T = DebitCardInformationSubscriptionPayload | null>(args: { where?: DebitCardInformationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pricing: <T = PricingSubscriptionPayload | null>(args: { where?: PricingSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    picture: <T = PictureSubscriptionPayload | null>(args: { where?: PictureSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Neighbourhood: (where?: NeighbourhoodWhereInput) => Promise<boolean>
  City: (where?: CityWhereInput) => Promise<boolean>
  Experience: (where?: ExperienceWhereInput) => Promise<boolean>
  Payment: (where?: PaymentWhereInput) => Promise<boolean>
  PaymentAccount: (where?: PaymentAccountWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Restaurant: (where?: RestaurantWhereInput) => Promise<boolean>
  MenuItem: (where?: MenuItemWhereInput) => Promise<boolean>
  PaypalInformation: (where?: PaypalInformationWhereInput) => Promise<boolean>
  Policies: (where?: PoliciesWhereInput) => Promise<boolean>
  CreditCardInformation: (where?: CreditCardInformationWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Review: (where?: ReviewWhereInput) => Promise<boolean>
  Order: (where?: OrderWhereInput) => Promise<boolean>
  ExperienceCategory: (where?: ExperienceCategoryWhereInput) => Promise<boolean>
  PaytmInformation: (where?: PaytmInformationWhereInput) => Promise<boolean>
  DebitCardInformation: (where?: DebitCardInformationWhereInput) => Promise<boolean>
  Pricing: (where?: PricingWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateCity {
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

type AggregateLocation {
  count: Int!
}

type AggregateMenuItem {
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
}

input CreditCardInformationCreateOneInput {
  create: CreditCardInformationCreateInput
  connect: CreditCardInformationWhereUniqueInput
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

input CreditCardInformationUpdateDataInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
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

input CreditCardInformationUpdateOneInput {
  create: CreditCardInformationCreateInput
  connect: CreditCardInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CreditCardInformationUpdateDataInput
  upsert: CreditCardInformationUpsertNestedInput
}

input CreditCardInformationUpsertNestedInput {
  update: CreditCardInformationUpdateDataInput!
  create: CreditCardInformationCreateInput!
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
}

input CreditCardInformationWhereUniqueInput {
  id: ID
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
}

input DebitCardInformationCreateOneInput {
  create: DebitCardInformationCreateInput
  connect: DebitCardInformationWhereUniqueInput
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

input DebitCardInformationUpdateDataInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
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

input DebitCardInformationUpdateOneInput {
  create: DebitCardInformationCreateInput
  connect: DebitCardInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DebitCardInformationUpdateDataInput
  upsert: DebitCardInformationUpsertNestedInput
}

input DebitCardInformationUpsertNestedInput {
  update: DebitCardInformationUpdateDataInput!
  create: DebitCardInformationCreateInput!
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
}

input ExperienceCategoryCreateOneInput {
  create: ExperienceCategoryCreateInput
  connect: ExperienceCategoryWhereUniqueInput
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

input ExperienceCategoryUpdateDataInput {
  mainColor: String
  name: String
}

input ExperienceCategoryUpdateInput {
  mainColor: String
  name: String
}

input ExperienceCategoryUpdateManyMutationInput {
  mainColor: String
  name: String
}

input ExperienceCategoryUpdateOneInput {
  create: ExperienceCategoryCreateInput
  connect: ExperienceCategoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceCategoryUpdateDataInput
  upsert: ExperienceCategoryUpsertNestedInput
}

input ExperienceCategoryUpsertNestedInput {
  update: ExperienceCategoryUpdateDataInput!
  create: ExperienceCategoryCreateInput!
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
  category: ExperienceCategoryCreateOneInput
  host: UserCreateOneWithoutExperiencesInput!
  location: LocationCreateOneInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateManyWithoutHostInput {
  create: [ExperienceCreateWithoutHostInput!]
  connect: [ExperienceWhereUniqueInput!]
}

input ExperienceCreateOneWithoutReviewsInput {
  create: ExperienceCreateWithoutReviewsInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateWithoutHostInput {
  id: ID
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneInput
  location: LocationCreateOneInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateWithoutReviewsInput {
  id: ID
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneInput
  host: UserCreateOneWithoutExperiencesInput!
  location: LocationCreateOneInput!
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
  category: ExperienceCategoryUpdateOneInput
  host: UserUpdateOneRequiredWithoutExperiencesInput
  location: LocationUpdateOneRequiredInput
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

input ExperienceUpdateOneWithoutReviewsInput {
  create: ExperienceCreateWithoutReviewsInput
  connect: ExperienceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceUpdateWithoutReviewsDataInput
  upsert: ExperienceUpsertWithoutReviewsInput
}

input ExperienceUpdateWithoutHostDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneInput
  location: LocationUpdateOneRequiredInput
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneRequiredInput
}

input ExperienceUpdateWithoutReviewsDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneInput
  host: UserUpdateOneRequiredWithoutExperiencesInput
  location: LocationUpdateOneRequiredInput
  preview: PictureUpdateOneRequiredInput
}

input ExperienceUpdateWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput!
  data: ExperienceUpdateWithoutHostDataInput!
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

type Location implements Node {
  title: String
  id: ID!
  lat: Float!
  lng: Float!
  neighbourHood: Neighbourhood
  address: String!
  directions: String!
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
  title: String
  id: ID
  lat: Float!
  lng: Float!
  address: String!
  directions: String!
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
}

input LocationCreateManyInput {
  create: [LocationCreateInput!]
  connect: [LocationWhereUniqueInput!]
}

input LocationCreateManyWithoutNeighbourHoodInput {
  create: [LocationCreateWithoutNeighbourHoodInput!]
  connect: [LocationWhereUniqueInput!]
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutNeighbourHoodInput {
  title: String
  id: ID
  lat: Float!
  lng: Float!
  address: String!
  directions: String!
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  title_ASC
  title_DESC
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
  title: String
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

input LocationUpdateDataInput {
  title: String
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
}

input LocationUpdateInput {
  title: String
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
}

input LocationUpdateManyDataInput {
  title: String
  lat: Float
  lng: Float
  address: String
  directions: String
}

input LocationUpdateManyInput {
  create: [LocationCreateInput!]
  connect: [LocationWhereUniqueInput!]
  set: [LocationWhereUniqueInput!]
  disconnect: [LocationWhereUniqueInput!]
  delete: [LocationWhereUniqueInput!]
  update: [LocationUpdateWithWhereUniqueNestedInput!]
  updateMany: [LocationUpdateManyWithWhereNestedInput!]
  deleteMany: [LocationScalarWhereInput!]
  upsert: [LocationUpsertWithWhereUniqueNestedInput!]
}

input LocationUpdateManyMutationInput {
  title: String
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

input LocationUpdateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
}

input LocationUpdateOneRequiredInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
}

input LocationUpdateWithoutNeighbourHoodDataInput {
  title: String
  lat: Float
  lng: Float
  address: String
  directions: String
}

input LocationUpdateWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput!
  data: LocationUpdateDataInput!
}

input LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput!
  data: LocationUpdateWithoutNeighbourHoodDataInput!
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationUpsertWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput!
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
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
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type MenuItem implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  shortDescription: String!
  title: String!
  description: String!
  pricing: Pricing!
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

"""A connection to a list of items."""
type MenuItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MenuItemEdge]!
  aggregate: AggregateMenuItem!
}

input MenuItemCreateInput {
  id: ID
  shortDescription: String!
  title: String!
  description: String!
  pricing: PricingCreateOneInput!
  pictures: PictureCreateManyInput
  reviews: ReviewCreateManyInput
}

input MenuItemCreateManyInput {
  create: [MenuItemCreateInput!]
  connect: [MenuItemWhereUniqueInput!]
}

"""An edge in a connection."""
type MenuItemEdge {
  """The item at the end of the edge."""
  node: MenuItem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MenuItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  shortDescription_ASC
  shortDescription_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
}

type MenuItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  shortDescription: String!
  title: String!
  description: String!
}

input MenuItemScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuItemScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuItemScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuItemScalarWhereInput!]
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
}

type MenuItemSubscriptionPayload {
  mutation: MutationType!
  node: MenuItem
  updatedFields: [String!]
  previousValues: MenuItemPreviousValues
}

input MenuItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuItemSubscriptionWhereInput!]

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
  node: MenuItemWhereInput
}

input MenuItemUpdateDataInput {
  shortDescription: String
  title: String
  description: String
  pricing: PricingUpdateOneRequiredInput
  pictures: PictureUpdateManyInput
  reviews: ReviewUpdateManyInput
}

input MenuItemUpdateInput {
  shortDescription: String
  title: String
  description: String
  pricing: PricingUpdateOneRequiredInput
  pictures: PictureUpdateManyInput
  reviews: ReviewUpdateManyInput
}

input MenuItemUpdateManyDataInput {
  shortDescription: String
  title: String
  description: String
}

input MenuItemUpdateManyInput {
  create: [MenuItemCreateInput!]
  connect: [MenuItemWhereUniqueInput!]
  set: [MenuItemWhereUniqueInput!]
  disconnect: [MenuItemWhereUniqueInput!]
  delete: [MenuItemWhereUniqueInput!]
  update: [MenuItemUpdateWithWhereUniqueNestedInput!]
  updateMany: [MenuItemUpdateManyWithWhereNestedInput!]
  deleteMany: [MenuItemScalarWhereInput!]
  upsert: [MenuItemUpsertWithWhereUniqueNestedInput!]
}

input MenuItemUpdateManyMutationInput {
  shortDescription: String
  title: String
  description: String
}

input MenuItemUpdateManyWithWhereNestedInput {
  where: MenuItemScalarWhereInput!
  data: MenuItemUpdateManyDataInput!
}

input MenuItemUpdateWithWhereUniqueNestedInput {
  where: MenuItemWhereUniqueInput!
  data: MenuItemUpdateDataInput!
}

input MenuItemUpsertWithWhereUniqueNestedInput {
  where: MenuItemWhereUniqueInput!
  update: MenuItemUpdateDataInput!
  create: MenuItemCreateInput!
}

input MenuItemWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuItemWhereInput!]
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
  pricing: PricingWhereInput
  pictures_every: PictureWhereInput
  pictures_some: PictureWhereInput
  pictures_none: PictureWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
}

input MenuItemWhereUniqueInput {
  id: ID
}

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
  createNeighbourhood(data: NeighbourhoodCreateInput!): Neighbourhood!
  createCity(data: CityCreateInput!): City!
  createExperience(data: ExperienceCreateInput!): Experience!
  createPayment(data: PaymentCreateInput!): Payment!
  createPaymentAccount(data: PaymentAccountCreateInput!): PaymentAccount!
  createMessage(data: MessageCreateInput!): Message!
  createNotification(data: NotificationCreateInput!): Notification!
  createRestaurant(data: RestaurantCreateInput!): Restaurant!
  createMenuItem(data: MenuItemCreateInput!): MenuItem!
  createPaypalInformation(data: PaypalInformationCreateInput!): PaypalInformation!
  createPolicies(data: PoliciesCreateInput!): Policies!
  createCreditCardInformation(data: CreditCardInformationCreateInput!): CreditCardInformation!
  createLocation(data: LocationCreateInput!): Location!
  createReview(data: ReviewCreateInput!): Review!
  createOrder(data: OrderCreateInput!): Order!
  createExperienceCategory(data: ExperienceCategoryCreateInput!): ExperienceCategory!
  createPaytmInformation(data: PaytmInformationCreateInput!): PaytmInformation!
  createDebitCardInformation(data: DebitCardInformationCreateInput!): DebitCardInformation!
  createPricing(data: PricingCreateInput!): Pricing!
  createPicture(data: PictureCreateInput!): Picture!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateNeighbourhood(data: NeighbourhoodUpdateInput!, where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateExperience(data: ExperienceUpdateInput!, where: ExperienceWhereUniqueInput!): Experience
  updatePayment(data: PaymentUpdateInput!, where: PaymentWhereUniqueInput!): Payment
  updatePaymentAccount(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereUniqueInput!): PaymentAccount
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateRestaurant(data: RestaurantUpdateInput!, where: RestaurantWhereUniqueInput!): Restaurant
  updateMenuItem(data: MenuItemUpdateInput!, where: MenuItemWhereUniqueInput!): MenuItem
  updatePaypalInformation(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereUniqueInput!): PaypalInformation
  updatePolicies(data: PoliciesUpdateInput!, where: PoliciesWhereUniqueInput!): Policies
  updateCreditCardInformation(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateExperienceCategory(data: ExperienceCategoryUpdateInput!, where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  updatePaytmInformation(data: PaytmInformationUpdateInput!, where: PaytmInformationWhereUniqueInput!): PaytmInformation
  updateDebitCardInformation(data: DebitCardInformationUpdateInput!, where: DebitCardInformationWhereUniqueInput!): DebitCardInformation
  updatePricing(data: PricingUpdateInput!, where: PricingWhereUniqueInput!): Pricing
  updatePicture(data: PictureUpdateInput!, where: PictureWhereUniqueInput!): Picture
  deleteUser(where: UserWhereUniqueInput!): User
  deleteNeighbourhood(where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  deleteCity(where: CityWhereUniqueInput!): City
  deleteExperience(where: ExperienceWhereUniqueInput!): Experience
  deletePayment(where: PaymentWhereUniqueInput!): Payment
  deletePaymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteRestaurant(where: RestaurantWhereUniqueInput!): Restaurant
  deleteMenuItem(where: MenuItemWhereUniqueInput!): MenuItem
  deletePaypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  deletePolicies(where: PoliciesWhereUniqueInput!): Policies
  deleteCreditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteExperienceCategory(where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  deletePaytmInformation(where: PaytmInformationWhereUniqueInput!): PaytmInformation
  deleteDebitCardInformation(where: DebitCardInformationWhereUniqueInput!): DebitCardInformation
  deletePricing(where: PricingWhereUniqueInput!): Pricing
  deletePicture(where: PictureWhereUniqueInput!): Picture
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertNeighbourhood(where: NeighbourhoodWhereUniqueInput!, create: NeighbourhoodCreateInput!, update: NeighbourhoodUpdateInput!): Neighbourhood!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  upsertExperience(where: ExperienceWhereUniqueInput!, create: ExperienceCreateInput!, update: ExperienceUpdateInput!): Experience!
  upsertPayment(where: PaymentWhereUniqueInput!, create: PaymentCreateInput!, update: PaymentUpdateInput!): Payment!
  upsertPaymentAccount(where: PaymentAccountWhereUniqueInput!, create: PaymentAccountCreateInput!, update: PaymentAccountUpdateInput!): PaymentAccount!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertRestaurant(where: RestaurantWhereUniqueInput!, create: RestaurantCreateInput!, update: RestaurantUpdateInput!): Restaurant!
  upsertMenuItem(where: MenuItemWhereUniqueInput!, create: MenuItemCreateInput!, update: MenuItemUpdateInput!): MenuItem!
  upsertPaypalInformation(where: PaypalInformationWhereUniqueInput!, create: PaypalInformationCreateInput!, update: PaypalInformationUpdateInput!): PaypalInformation!
  upsertPolicies(where: PoliciesWhereUniqueInput!, create: PoliciesCreateInput!, update: PoliciesUpdateInput!): Policies!
  upsertCreditCardInformation(where: CreditCardInformationWhereUniqueInput!, create: CreditCardInformationCreateInput!, update: CreditCardInformationUpdateInput!): CreditCardInformation!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertExperienceCategory(where: ExperienceCategoryWhereUniqueInput!, create: ExperienceCategoryCreateInput!, update: ExperienceCategoryUpdateInput!): ExperienceCategory!
  upsertPaytmInformation(where: PaytmInformationWhereUniqueInput!, create: PaytmInformationCreateInput!, update: PaytmInformationUpdateInput!): PaytmInformation!
  upsertDebitCardInformation(where: DebitCardInformationWhereUniqueInput!, create: DebitCardInformationCreateInput!, update: DebitCardInformationUpdateInput!): DebitCardInformation!
  upsertPricing(where: PricingWhereUniqueInput!, create: PricingCreateInput!, update: PricingUpdateInput!): Pricing!
  upsertPicture(where: PictureWhereUniqueInput!, create: PictureCreateInput!, update: PictureUpdateInput!): Picture!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyNeighbourhoods(data: NeighbourhoodUpdateManyMutationInput!, where: NeighbourhoodWhereInput): BatchPayload!
  updateManyCities(data: CityUpdateManyMutationInput!, where: CityWhereInput): BatchPayload!
  updateManyExperiences(data: ExperienceUpdateManyMutationInput!, where: ExperienceWhereInput): BatchPayload!
  updateManyPayments(data: PaymentUpdateManyMutationInput!, where: PaymentWhereInput): BatchPayload!
  updateManyPaymentAccounts(data: PaymentAccountUpdateManyMutationInput!, where: PaymentAccountWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateManyMutationInput!, where: NotificationWhereInput): BatchPayload!
  updateManyRestaurants(data: RestaurantUpdateManyMutationInput!, where: RestaurantWhereInput): BatchPayload!
  updateManyMenuItems(data: MenuItemUpdateManyMutationInput!, where: MenuItemWhereInput): BatchPayload!
  updateManyPaypalInformations(data: PaypalInformationUpdateManyMutationInput!, where: PaypalInformationWhereInput): BatchPayload!
  updateManyPolicieses(data: PoliciesUpdateManyMutationInput!, where: PoliciesWhereInput): BatchPayload!
  updateManyCreditCardInformations(data: CreditCardInformationUpdateManyMutationInput!, where: CreditCardInformationWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  updateManyExperienceCategories(data: ExperienceCategoryUpdateManyMutationInput!, where: ExperienceCategoryWhereInput): BatchPayload!
  updateManyPaytmInformations(data: PaytmInformationUpdateManyMutationInput!, where: PaytmInformationWhereInput): BatchPayload!
  updateManyDebitCardInformations(data: DebitCardInformationUpdateManyMutationInput!, where: DebitCardInformationWhereInput): BatchPayload!
  updateManyPricings(data: PricingUpdateManyMutationInput!, where: PricingWhereInput): BatchPayload!
  updateManyPictures(data: PictureUpdateManyMutationInput!, where: PictureWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyNeighbourhoods(where: NeighbourhoodWhereInput): BatchPayload!
  deleteManyCities(where: CityWhereInput): BatchPayload!
  deleteManyExperiences(where: ExperienceWhereInput): BatchPayload!
  deleteManyPayments(where: PaymentWhereInput): BatchPayload!
  deleteManyPaymentAccounts(where: PaymentAccountWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyRestaurants(where: RestaurantWhereInput): BatchPayload!
  deleteManyMenuItems(where: MenuItemWhereInput): BatchPayload!
  deleteManyPaypalInformations(where: PaypalInformationWhereInput): BatchPayload!
  deleteManyPolicieses(where: PoliciesWhereInput): BatchPayload!
  deleteManyCreditCardInformations(where: CreditCardInformationWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyExperienceCategories(where: ExperienceCategoryWhereInput): BatchPayload!
  deleteManyPaytmInformations(where: PaytmInformationWhereInput): BatchPayload!
  deleteManyDebitCardInformations(where: DebitCardInformationWhereInput): BatchPayload!
  deleteManyPricings(where: PricingWhereInput): BatchPayload!
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
  restaurant: Restaurant!
  startDate: DateTime!
  endDate: DateTime!
  payment: Payment!
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
  restaurant: RestaurantCreateOneWithoutOrdersInput!
  payment: PaymentCreateOneWithoutOrderInput!
}

input OrderCreateManyWithoutBookeeInput {
  create: [OrderCreateWithoutBookeeInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateManyWithoutRestaurantInput {
  create: [OrderCreateWithoutRestaurantInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateOneInput {
  create: OrderCreateInput
  connect: OrderWhereUniqueInput
}

input OrderCreateOneWithoutPaymentInput {
  create: OrderCreateWithoutPaymentInput
  connect: OrderWhereUniqueInput
}

input OrderCreateWithoutBookeeInput {
  id: ID
  startDate: DateTime!
  endDate: DateTime!
  restaurant: RestaurantCreateOneWithoutOrdersInput!
  payment: PaymentCreateOneWithoutOrderInput!
}

input OrderCreateWithoutPaymentInput {
  id: ID
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutOrdersInput!
  restaurant: RestaurantCreateOneWithoutOrdersInput!
}

input OrderCreateWithoutRestaurantInput {
  id: ID
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutOrdersInput!
  payment: PaymentCreateOneWithoutOrderInput!
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

input OrderUpdateDataInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneRequiredWithoutOrdersInput
  restaurant: RestaurantUpdateOneRequiredWithoutOrdersInput
  payment: PaymentUpdateOneRequiredWithoutOrderInput
}

input OrderUpdateInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneRequiredWithoutOrdersInput
  restaurant: RestaurantUpdateOneRequiredWithoutOrdersInput
  payment: PaymentUpdateOneRequiredWithoutOrderInput
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

input OrderUpdateManyWithoutRestaurantInput {
  create: [OrderCreateWithoutRestaurantInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  delete: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutRestaurantInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
  deleteMany: [OrderScalarWhereInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutRestaurantInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateOneRequiredInput {
  create: OrderCreateInput
  connect: OrderWhereUniqueInput
  update: OrderUpdateDataInput
  upsert: OrderUpsertNestedInput
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
  restaurant: RestaurantUpdateOneRequiredWithoutOrdersInput
  payment: PaymentUpdateOneRequiredWithoutOrderInput
}

input OrderUpdateWithoutPaymentDataInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneRequiredWithoutOrdersInput
  restaurant: RestaurantUpdateOneRequiredWithoutOrdersInput
}

input OrderUpdateWithoutRestaurantDataInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneRequiredWithoutOrdersInput
  payment: PaymentUpdateOneRequiredWithoutOrderInput
}

input OrderUpdateWithWhereUniqueWithoutBookeeInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutBookeeDataInput!
}

input OrderUpdateWithWhereUniqueWithoutRestaurantInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutRestaurantDataInput!
}

input OrderUpsertNestedInput {
  update: OrderUpdateDataInput!
  create: OrderCreateInput!
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

input OrderUpsertWithWhereUniqueWithoutRestaurantInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutRestaurantDataInput!
  create: OrderCreateWithoutRestaurantInput!
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
  restaurant: RestaurantWhereInput
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
  restaurantPrice: Float!
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
  paytm: PaytmInformation
  creditcard: CreditCardInformation
  debitcard: DebitCardInformation
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
  paypal: PaypalInformationCreateOneInput
  paytm: PaytmInformationCreateOneInput
  creditcard: CreditCardInformationCreateOneInput
  debitcard: DebitCardInformationCreateOneInput
}

input PaymentAccountCreateManyWithoutUserInput {
  create: [PaymentAccountCreateWithoutUserInput!]
  connect: [PaymentAccountWhereUniqueInput!]
}

input PaymentAccountCreateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateWithoutPaymentsInput {
  id: ID
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  paypal: PaypalInformationCreateOneInput
  paytm: PaytmInformationCreateOneInput
  creditcard: CreditCardInformationCreateOneInput
  debitcard: DebitCardInformationCreateOneInput
}

input PaymentAccountCreateWithoutUserInput {
  id: ID
  type: PAYMENT_PROVIDER
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneInput
  paytm: PaytmInformationCreateOneInput
  creditcard: CreditCardInformationCreateOneInput
  debitcard: DebitCardInformationCreateOneInput
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

input PaymentAccountUpdateInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneRequiredWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneInput
  paytm: PaytmInformationUpdateOneInput
  creditcard: CreditCardInformationUpdateOneInput
  debitcard: DebitCardInformationUpdateOneInput
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

input PaymentAccountUpdateOneRequiredWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  upsert: PaymentAccountUpsertWithoutPaymentsInput
}

input PaymentAccountUpdateWithoutPaymentsDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneRequiredWithoutPaymentAccountInput
  paypal: PaypalInformationUpdateOneInput
  paytm: PaytmInformationUpdateOneInput
  creditcard: CreditCardInformationUpdateOneInput
  debitcard: DebitCardInformationUpdateOneInput
}

input PaymentAccountUpdateWithoutUserDataInput {
  type: PAYMENT_PROVIDER
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneInput
  paytm: PaytmInformationUpdateOneInput
  creditcard: CreditCardInformationUpdateOneInput
  debitcard: DebitCardInformationUpdateOneInput
}

input PaymentAccountUpdateWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput!
  data: PaymentAccountUpdateWithoutUserDataInput!
}

input PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput!
  create: PaymentAccountCreateWithoutPaymentsInput!
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
  paytm: PaytmInformationWhereInput
  creditcard: CreditCardInformationWhereInput
  debitcard: DebitCardInformationWhereInput
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
  restaurantPrice: Float!
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
  restaurantPrice: Float!
  totalPrice: Float!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentCreateWithoutPaymentMethodInput {
  id: ID
  serviceFee: Float!
  restaurantPrice: Float!
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
  restaurantPrice_ASC
  restaurantPrice_DESC
  totalPrice_ASC
  totalPrice_DESC
}

type PaymentPreviousValues {
  id: ID!
  createdAt: DateTime!
  serviceFee: Float!
  restaurantPrice: Float!
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
  restaurantPrice: Float

  """All values that are not equal to given value."""
  restaurantPrice_not: Float

  """All values that are contained in given list."""
  restaurantPrice_in: [Float!]

  """All values that are not contained in given list."""
  restaurantPrice_not_in: [Float!]

  """All values less than the given value."""
  restaurantPrice_lt: Float

  """All values less than or equal the given value."""
  restaurantPrice_lte: Float

  """All values greater than the given value."""
  restaurantPrice_gt: Float

  """All values greater than or equal the given value."""
  restaurantPrice_gte: Float
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
  restaurantPrice: Float
  totalPrice: Float
  order: OrderUpdateOneRequiredWithoutPaymentInput
  paymentMethod: PaymentAccountUpdateOneRequiredWithoutPaymentsInput
}

input PaymentUpdateManyDataInput {
  serviceFee: Float
  restaurantPrice: Float
  totalPrice: Float
}

input PaymentUpdateManyMutationInput {
  serviceFee: Float
  restaurantPrice: Float
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

input PaymentUpdateOneRequiredWithoutOrderInput {
  create: PaymentCreateWithoutOrderInput
  connect: PaymentWhereUniqueInput
  update: PaymentUpdateWithoutOrderDataInput
  upsert: PaymentUpsertWithoutOrderInput
}

input PaymentUpdateWithoutOrderDataInput {
  serviceFee: Float
  restaurantPrice: Float
  totalPrice: Float
  paymentMethod: PaymentAccountUpdateOneRequiredWithoutPaymentsInput
}

input PaymentUpdateWithoutPaymentMethodDataInput {
  serviceFee: Float
  restaurantPrice: Float
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
  restaurantPrice: Float

  """All values that are not equal to given value."""
  restaurantPrice_not: Float

  """All values that are contained in given list."""
  restaurantPrice_in: [Float!]

  """All values that are not contained in given list."""
  restaurantPrice_not_in: [Float!]

  """All values less than the given value."""
  restaurantPrice_lt: Float

  """All values less than or equal the given value."""
  restaurantPrice_lte: Float

  """All values greater than the given value."""
  restaurantPrice_gt: Float

  """All values greater than or equal the given value."""
  restaurantPrice_gte: Float
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
}

input PaypalInformationCreateOneInput {
  create: PaypalInformationCreateInput
  connect: PaypalInformationWhereUniqueInput
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

input PaypalInformationUpdateDataInput {
  email: String
}

input PaypalInformationUpdateInput {
  email: String
}

input PaypalInformationUpdateManyMutationInput {
  email: String
}

input PaypalInformationUpdateOneInput {
  create: PaypalInformationCreateInput
  connect: PaypalInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaypalInformationUpdateDataInput
  upsert: PaypalInformationUpsertNestedInput
}

input PaypalInformationUpsertNestedInput {
  update: PaypalInformationUpdateDataInput!
  create: PaypalInformationCreateInput!
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
}

input PaypalInformationWhereUniqueInput {
  id: ID
}

type PaytmInformation implements Node {
  id: ID!
  createdAt: DateTime!
  phone: String!
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
}

input PaytmInformationCreateOneInput {
  create: PaytmInformationCreateInput
  connect: PaytmInformationWhereUniqueInput
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

input PaytmInformationUpdateDataInput {
  phone: String
}

input PaytmInformationUpdateInput {
  phone: String
}

input PaytmInformationUpdateManyMutationInput {
  phone: String
}

input PaytmInformationUpdateOneInput {
  create: PaytmInformationCreateInput
  connect: PaytmInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaytmInformationUpdateDataInput
  upsert: PaytmInformationUpsertNestedInput
}

input PaytmInformationUpsertNestedInput {
  update: PaytmInformationUpdateDataInput!
  create: PaytmInformationCreateInput!
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

type Policies implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  openingTime: Float!
  closingTime: Float!
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
  openingTime: Float!
  closingTime: Float!
}

input PoliciesCreateOneInput {
  create: PoliciesCreateInput
  connect: PoliciesWhereUniqueInput
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
  openingTime_ASC
  openingTime_DESC
  closingTime_ASC
  closingTime_DESC
}

type PoliciesPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  openingTime: Float!
  closingTime: Float!
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

input PoliciesUpdateDataInput {
  openingTime: Float
  closingTime: Float
}

input PoliciesUpdateInput {
  openingTime: Float
  closingTime: Float
}

input PoliciesUpdateManyMutationInput {
  openingTime: Float
  closingTime: Float
}

input PoliciesUpdateOneInput {
  create: PoliciesCreateInput
  connect: PoliciesWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PoliciesUpdateDataInput
  upsert: PoliciesUpsertNestedInput
}

input PoliciesUpsertNestedInput {
  update: PoliciesUpdateDataInput!
  create: PoliciesCreateInput!
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
  openingTime: Float

  """All values that are not equal to given value."""
  openingTime_not: Float

  """All values that are contained in given list."""
  openingTime_in: [Float!]

  """All values that are not contained in given list."""
  openingTime_not_in: [Float!]

  """All values less than the given value."""
  openingTime_lt: Float

  """All values less than or equal the given value."""
  openingTime_lte: Float

  """All values greater than the given value."""
  openingTime_gt: Float

  """All values greater than or equal the given value."""
  openingTime_gte: Float
  closingTime: Float

  """All values that are not equal to given value."""
  closingTime_not: Float

  """All values that are contained in given list."""
  closingTime_in: [Float!]

  """All values that are not contained in given list."""
  closingTime_not_in: [Float!]

  """All values less than the given value."""
  closingTime_lt: Float

  """All values less than or equal the given value."""
  closingTime_lte: Float

  """All values greater than the given value."""
  closingTime_gt: Float

  """All values greater than or equal the given value."""
  closingTime_gte: Float
}

input PoliciesWhereUniqueInput {
  id: ID
}

type Pricing implements Node {
  id: ID!
  monthlyDiscount: Int
  weeklyDiscount: Int
  price: Int!
  smartPricing: Boolean!
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  weekendPricing: Int
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
  price: Int!
  smartPricing: Boolean
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  weekendPricing: Int
}

input PricingCreateOneInput {
  create: PricingCreateInput
  connect: PricingWhereUniqueInput
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
  price_ASC
  price_DESC
  smartPricing_ASC
  smartPricing_DESC
  basePrice_ASC
  basePrice_DESC
  averageWeekly_ASC
  averageWeekly_DESC
  averageMonthly_ASC
  averageMonthly_DESC
  weekendPricing_ASC
  weekendPricing_DESC
}

type PricingPreviousValues {
  id: ID!
  monthlyDiscount: Int
  weeklyDiscount: Int
  price: Int!
  smartPricing: Boolean!
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  weekendPricing: Int
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

input PricingUpdateDataInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  price: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  weekendPricing: Int
}

input PricingUpdateInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  price: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  weekendPricing: Int
}

input PricingUpdateManyMutationInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  price: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  weekendPricing: Int
}

input PricingUpdateOneRequiredInput {
  create: PricingCreateInput
  connect: PricingWhereUniqueInput
  update: PricingUpdateDataInput
  upsert: PricingUpsertNestedInput
}

input PricingUpsertNestedInput {
  update: PricingUpdateDataInput!
  create: PricingCreateInput!
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
  price: Int

  """All values that are not equal to given value."""
  price_not: Int

  """All values that are contained in given list."""
  price_in: [Int!]

  """All values that are not contained in given list."""
  price_not_in: [Int!]

  """All values less than the given value."""
  price_lt: Int

  """All values less than or equal the given value."""
  price_lte: Int

  """All values greater than the given value."""
  price_gt: Int

  """All values greater than or equal the given value."""
  price_gte: Int
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
}

input PricingWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  neighbourhoods(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Neighbourhood]!
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  experiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience]!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment]!
  paymentAccounts(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  restaurants(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant]!
  menuItems(where: MenuItemWhereInput, orderBy: MenuItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MenuItem]!
  paypalInformations(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaypalInformation]!
  policieses(where: PoliciesWhereInput, orderBy: PoliciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Policies]!
  creditCardInformations(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CreditCardInformation]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  experienceCategories(where: ExperienceCategoryWhereInput, orderBy: ExperienceCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ExperienceCategory]!
  paytmInformations(where: PaytmInformationWhereInput, orderBy: PaytmInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaytmInformation]!
  debitCardInformations(where: DebitCardInformationWhereInput, orderBy: DebitCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DebitCardInformation]!
  pricings(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pricing]!
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture]!
  user(where: UserWhereUniqueInput!): User
  neighbourhood(where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  city(where: CityWhereUniqueInput!): City
  experience(where: ExperienceWhereUniqueInput!): Experience
  payment(where: PaymentWhereUniqueInput!): Payment
  paymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  message(where: MessageWhereUniqueInput!): Message
  notification(where: NotificationWhereUniqueInput!): Notification
  restaurant(where: RestaurantWhereUniqueInput!): Restaurant
  menuItem(where: MenuItemWhereUniqueInput!): MenuItem
  paypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  policies(where: PoliciesWhereUniqueInput!): Policies
  creditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  location(where: LocationWhereUniqueInput!): Location
  review(where: ReviewWhereUniqueInput!): Review
  order(where: OrderWhereUniqueInput!): Order
  experienceCategory(where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  paytmInformation(where: PaytmInformationWhereUniqueInput!): PaytmInformation
  debitCardInformation(where: DebitCardInformationWhereUniqueInput!): DebitCardInformation
  pricing(where: PricingWhereUniqueInput!): Pricing
  picture(where: PictureWhereUniqueInput!): Picture
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  neighbourhoodsConnection(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NeighbourhoodConnection!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  experiencesConnection(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceConnection!
  paymentsConnection(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentConnection!
  paymentAccountsConnection(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentAccountConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  restaurantsConnection(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RestaurantConnection!
  menuItemsConnection(where: MenuItemWhereInput, orderBy: MenuItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MenuItemConnection!
  paypalInformationsConnection(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaypalInformationConnection!
  policiesesConnection(where: PoliciesWhereInput, orderBy: PoliciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PoliciesConnection!
  creditCardInformationsConnection(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CreditCardInformationConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  experienceCategoriesConnection(where: ExperienceCategoryWhereInput, orderBy: ExperienceCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceCategoryConnection!
  paytmInformationsConnection(where: PaytmInformationWhereInput, orderBy: PaytmInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaytmInformationConnection!
  debitCardInformationsConnection(where: DebitCardInformationWhereInput, orderBy: DebitCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DebitCardInformationConnection!
  pricingsConnection(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PricingConnection!
  picturesConnection(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PictureConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Restaurant implements Node {
  id: ID!
  name: String!
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numRatings: Int!
  avgRating: Float
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  location: Location
  policies: Policies
  menu(where: MenuItemWhereInput, orderBy: MenuItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MenuItem!]
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  popularity: Int!
  avgPricePerPerson: Int!
  isCurated: Boolean!
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
  name: String!
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numRatings: Int!
  avgRating: Float
  popularity: Int!
  avgPricePerPerson: Int!
  isCurated: Boolean
  reviews: ReviewCreateManyInput
  location: LocationCreateOneInput
  policies: PoliciesCreateOneInput
  menu: MenuItemCreateManyInput
  orders: OrderCreateManyWithoutRestaurantInput
  pictures: PictureCreateManyInput
}

input RestaurantCreateManyInput {
  create: [RestaurantCreateInput!]
  connect: [RestaurantWhereUniqueInput!]
}

input RestaurantCreateOneWithoutOrdersInput {
  create: RestaurantCreateWithoutOrdersInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantCreateWithoutOrdersInput {
  id: ID
  name: String!
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numRatings: Int!
  avgRating: Float
  popularity: Int!
  avgPricePerPerson: Int!
  isCurated: Boolean
  reviews: ReviewCreateManyInput
  location: LocationCreateOneInput
  policies: PoliciesCreateOneInput
  menu: MenuItemCreateManyInput
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
  name_ASC
  name_DESC
  shortDescription_ASC
  shortDescription_DESC
  description_ASC
  description_DESC
  slug_ASC
  slug_DESC
  maxGuests_ASC
  maxGuests_DESC
  numRatings_ASC
  numRatings_DESC
  avgRating_ASC
  avgRating_DESC
  popularity_ASC
  popularity_DESC
  avgPricePerPerson_ASC
  avgPricePerPerson_DESC
  isCurated_ASC
  isCurated_DESC
}

type RestaurantPreviousValues {
  id: ID!
  name: String!
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numRatings: Int!
  avgRating: Float
  popularity: Int!
  avgPricePerPerson: Int!
  isCurated: Boolean!
}

input RestaurantScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [RestaurantScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [RestaurantScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RestaurantScalarWhereInput!]
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
  numRatings: Int

  """All values that are not equal to given value."""
  numRatings_not: Int

  """All values that are contained in given list."""
  numRatings_in: [Int!]

  """All values that are not contained in given list."""
  numRatings_not_in: [Int!]

  """All values less than the given value."""
  numRatings_lt: Int

  """All values less than or equal the given value."""
  numRatings_lte: Int

  """All values greater than the given value."""
  numRatings_gt: Int

  """All values greater than or equal the given value."""
  numRatings_gte: Int
  avgRating: Float

  """All values that are not equal to given value."""
  avgRating_not: Float

  """All values that are contained in given list."""
  avgRating_in: [Float!]

  """All values that are not contained in given list."""
  avgRating_not_in: [Float!]

  """All values less than the given value."""
  avgRating_lt: Float

  """All values less than or equal the given value."""
  avgRating_lte: Float

  """All values greater than the given value."""
  avgRating_gt: Float

  """All values greater than or equal the given value."""
  avgRating_gte: Float
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

input RestaurantUpdateDataInput {
  name: String
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numRatings: Int
  avgRating: Float
  popularity: Int
  avgPricePerPerson: Int
  isCurated: Boolean
  reviews: ReviewUpdateManyInput
  location: LocationUpdateOneInput
  policies: PoliciesUpdateOneInput
  menu: MenuItemUpdateManyInput
  orders: OrderUpdateManyWithoutRestaurantInput
  pictures: PictureUpdateManyInput
}

input RestaurantUpdateInput {
  name: String
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numRatings: Int
  avgRating: Float
  popularity: Int
  avgPricePerPerson: Int
  isCurated: Boolean
  reviews: ReviewUpdateManyInput
  location: LocationUpdateOneInput
  policies: PoliciesUpdateOneInput
  menu: MenuItemUpdateManyInput
  orders: OrderUpdateManyWithoutRestaurantInput
  pictures: PictureUpdateManyInput
}

input RestaurantUpdateManyDataInput {
  name: String
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numRatings: Int
  avgRating: Float
  popularity: Int
  avgPricePerPerson: Int
  isCurated: Boolean
}

input RestaurantUpdateManyInput {
  create: [RestaurantCreateInput!]
  connect: [RestaurantWhereUniqueInput!]
  set: [RestaurantWhereUniqueInput!]
  disconnect: [RestaurantWhereUniqueInput!]
  delete: [RestaurantWhereUniqueInput!]
  update: [RestaurantUpdateWithWhereUniqueNestedInput!]
  updateMany: [RestaurantUpdateManyWithWhereNestedInput!]
  deleteMany: [RestaurantScalarWhereInput!]
  upsert: [RestaurantUpsertWithWhereUniqueNestedInput!]
}

input RestaurantUpdateManyMutationInput {
  name: String
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numRatings: Int
  avgRating: Float
  popularity: Int
  avgPricePerPerson: Int
  isCurated: Boolean
}

input RestaurantUpdateManyWithWhereNestedInput {
  where: RestaurantScalarWhereInput!
  data: RestaurantUpdateManyDataInput!
}

input RestaurantUpdateOneRequiredWithoutOrdersInput {
  create: RestaurantCreateWithoutOrdersInput
  connect: RestaurantWhereUniqueInput
  update: RestaurantUpdateWithoutOrdersDataInput
  upsert: RestaurantUpsertWithoutOrdersInput
}

input RestaurantUpdateWithoutOrdersDataInput {
  name: String
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numRatings: Int
  avgRating: Float
  popularity: Int
  avgPricePerPerson: Int
  isCurated: Boolean
  reviews: ReviewUpdateManyInput
  location: LocationUpdateOneInput
  policies: PoliciesUpdateOneInput
  menu: MenuItemUpdateManyInput
  pictures: PictureUpdateManyInput
}

input RestaurantUpdateWithWhereUniqueNestedInput {
  where: RestaurantWhereUniqueInput!
  data: RestaurantUpdateDataInput!
}

input RestaurantUpsertWithoutOrdersInput {
  update: RestaurantUpdateWithoutOrdersDataInput!
  create: RestaurantCreateWithoutOrdersInput!
}

input RestaurantUpsertWithWhereUniqueNestedInput {
  where: RestaurantWhereUniqueInput!
  update: RestaurantUpdateDataInput!
  create: RestaurantCreateInput!
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
  numRatings: Int

  """All values that are not equal to given value."""
  numRatings_not: Int

  """All values that are contained in given list."""
  numRatings_in: [Int!]

  """All values that are not contained in given list."""
  numRatings_not_in: [Int!]

  """All values less than the given value."""
  numRatings_lt: Int

  """All values less than or equal the given value."""
  numRatings_lte: Int

  """All values greater than the given value."""
  numRatings_gt: Int

  """All values greater than or equal the given value."""
  numRatings_gte: Int
  avgRating: Float

  """All values that are not equal to given value."""
  avgRating_not: Float

  """All values that are contained in given list."""
  avgRating_in: [Float!]

  """All values that are not contained in given list."""
  avgRating_not_in: [Float!]

  """All values less than the given value."""
  avgRating_lt: Float

  """All values less than or equal the given value."""
  avgRating_lte: Float

  """All values greater than the given value."""
  avgRating_gt: Float

  """All values greater than or equal the given value."""
  avgRating_gte: Float
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
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  location: LocationWhereInput
  policies: PoliciesWhereInput
  menu_every: MenuItemWhereInput
  menu_some: MenuItemWhereInput
  menu_none: MenuItemWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  pictures_every: PictureWhereInput
  pictures_some: PictureWhereInput
  pictures_none: PictureWhereInput
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
  order: Order!
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
  order: OrderCreateOneInput!
  experience: ExperienceCreateOneWithoutReviewsInput
}

input ReviewCreateManyInput {
  create: [ReviewCreateInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutExperienceInput {
  create: [ReviewCreateWithoutExperienceInput!]
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
  order: OrderCreateOneInput!
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

input ReviewUpdateDataInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  order: OrderUpdateOneRequiredInput
  experience: ExperienceUpdateOneWithoutReviewsInput
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
  order: OrderUpdateOneRequiredInput
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

input ReviewUpdateManyInput {
  create: [ReviewCreateInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueNestedInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
  deleteMany: [ReviewScalarWhereInput!]
  upsert: [ReviewUpsertWithWhereUniqueNestedInput!]
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
  order: OrderUpdateOneRequiredInput
}

input ReviewUpdateWithWhereUniqueNestedInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutExperienceDataInput!
}

input ReviewUpsertWithWhereUniqueNestedInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateDataInput!
  create: ReviewCreateInput!
}

input ReviewUpsertWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutExperienceDataInput!
  create: ReviewCreateWithoutExperienceInput!
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
  order: OrderWhereInput
  experience: ExperienceWhereInput
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  neighbourhood(where: NeighbourhoodSubscriptionWhereInput): NeighbourhoodSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  experience(where: ExperienceSubscriptionWhereInput): ExperienceSubscriptionPayload
  payment(where: PaymentSubscriptionWhereInput): PaymentSubscriptionPayload
  paymentAccount(where: PaymentAccountSubscriptionWhereInput): PaymentAccountSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  restaurant(where: RestaurantSubscriptionWhereInput): RestaurantSubscriptionPayload
  menuItem(where: MenuItemSubscriptionWhereInput): MenuItemSubscriptionPayload
  paypalInformation(where: PaypalInformationSubscriptionWhereInput): PaypalInformationSubscriptionPayload
  policies(where: PoliciesSubscriptionWhereInput): PoliciesSubscriptionPayload
  creditCardInformation(where: CreditCardInformationSubscriptionWhereInput): CreditCardInformationSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  experienceCategory(where: ExperienceCategorySubscriptionWhereInput): ExperienceCategorySubscriptionPayload
  paytmInformation(where: PaytmInformationSubscriptionWhereInput): PaytmInformationSubscriptionPayload
  debitCardInformation(where: DebitCardInformationSubscriptionWhereInput): DebitCardInformationSubscriptionPayload
  pricing(where: PricingSubscriptionWhereInput): PricingSubscriptionPayload
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
  ownedRestaurant(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant!]
  location(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  paymentAccount(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount!]
  sentMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  receivedMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  profilePicture: Picture
  experiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience!]
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
  accountType: UserType
  uid: String!
  ownedRestaurant: RestaurantCreateManyInput
  location: LocationCreateManyInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  experiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateOneWithoutExperiencesInput {
  create: UserCreateWithoutExperiencesInput
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

input UserCreateWithoutExperiencesInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String!
  ownedRestaurant: RestaurantCreateManyInput
  location: LocationCreateManyInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
}

input UserCreateWithoutNotificationsInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String!
  ownedRestaurant: RestaurantCreateManyInput
  location: LocationCreateManyInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  profilePicture: PictureCreateOneInput
  experiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutOrdersInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String!
  ownedRestaurant: RestaurantCreateManyInput
  location: LocationCreateManyInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  experiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutPaymentAccountInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String!
  ownedRestaurant: RestaurantCreateManyInput
  location: LocationCreateManyInput
  orders: OrderCreateManyWithoutBookeeInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  experiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutReceivedMessagesInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String!
  ownedRestaurant: RestaurantCreateManyInput
  location: LocationCreateManyInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  experiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutSentMessagesInput {
  id: ID
  displayName: String!
  phoneNumber: String!
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String!
  ownedRestaurant: RestaurantCreateManyInput
  location: LocationCreateManyInput
  orders: OrderCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  experiences: ExperienceCreateManyWithoutHostInput
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
  accountType: UserType
  uid: String
  ownedRestaurant: RestaurantUpdateManyInput
  location: LocationUpdateManyInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  experiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateManyMutationInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String
}

input UserUpdateOneRequiredWithoutExperiencesInput {
  create: UserCreateWithoutExperiencesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutExperiencesDataInput
  upsert: UserUpsertWithoutExperiencesInput
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

input UserUpdateWithoutExperiencesDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String
  ownedRestaurant: RestaurantUpdateManyInput
  location: LocationUpdateManyInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
}

input UserUpdateWithoutNotificationsDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String
  ownedRestaurant: RestaurantUpdateManyInput
  location: LocationUpdateManyInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  profilePicture: PictureUpdateOneInput
  experiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutOrdersDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String
  ownedRestaurant: RestaurantUpdateManyInput
  location: LocationUpdateManyInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  experiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutPaymentAccountDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String
  ownedRestaurant: RestaurantUpdateManyInput
  location: LocationUpdateManyInput
  orders: OrderUpdateManyWithoutBookeeInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  experiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutReceivedMessagesDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String
  ownedRestaurant: RestaurantUpdateManyInput
  location: LocationUpdateManyInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  experiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutSentMessagesDataInput {
  displayName: String
  phoneNumber: String
  responseRate: Float
  responseTime: Int
  accountType: UserType
  uid: String
  ownedRestaurant: RestaurantUpdateManyInput
  location: LocationUpdateManyInput
  orders: OrderUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  experiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpsertWithoutExperiencesInput {
  update: UserUpdateWithoutExperiencesDataInput!
  create: UserCreateWithoutExperiencesInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
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
  ownedRestaurant_every: RestaurantWhereInput
  ownedRestaurant_some: RestaurantWhereInput
  ownedRestaurant_none: RestaurantWhereInput
  location_every: LocationWhereInput
  location_some: LocationWhereInput
  location_none: LocationWhereInput
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
  experiences_every: ExperienceWhereInput
  experiences_some: ExperienceWhereInput
  experiences_none: ExperienceWhereInput
}

input UserWhereUniqueInput {
  id: ID
  uid: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

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

export type LocationOrderByInput =   'title_ASC' |
  'title_DESC' |
  'id_ASC' |
  'id_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'lng_ASC' |
  'lng_DESC' |
  'address_ASC' |
  'address_DESC' |
  'directions_ASC' |
  'directions_DESC'

export type MenuItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'shortDescription_ASC' |
  'shortDescription_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC'

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
  'restaurantPrice_ASC' |
  'restaurantPrice_DESC' |
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

export type PoliciesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'openingTime_ASC' |
  'openingTime_DESC' |
  'closingTime_ASC' |
  'closingTime_DESC'

export type PricingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'monthlyDiscount_ASC' |
  'monthlyDiscount_DESC' |
  'weeklyDiscount_ASC' |
  'weeklyDiscount_DESC' |
  'price_ASC' |
  'price_DESC' |
  'smartPricing_ASC' |
  'smartPricing_DESC' |
  'basePrice_ASC' |
  'basePrice_DESC' |
  'averageWeekly_ASC' |
  'averageWeekly_DESC' |
  'averageMonthly_ASC' |
  'averageMonthly_DESC' |
  'weekendPricing_ASC' |
  'weekendPricing_DESC'

export type RestaurantOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'shortDescription_ASC' |
  'shortDescription_DESC' |
  'description_ASC' |
  'description_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'maxGuests_ASC' |
  'maxGuests_DESC' |
  'numRatings_ASC' |
  'numRatings_DESC' |
  'avgRating_ASC' |
  'avgRating_DESC' |
  'popularity_ASC' |
  'popularity_DESC' |
  'avgPricePerPerson_ASC' |
  'avgPricePerPerson_DESC' |
  'isCurated_ASC' |
  'isCurated_DESC'

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
  'accountType_ASC' |
  'accountType_DESC' |
  'uid_ASC' |
  'uid_DESC'

export type UserType =   'ADMIN' |
  'SELLER' |
  'CONSUMER'

export interface CityCreateInput {
  id?: ID_Input | null
  name?: undefined | null
  neighbourhoods?: NeighbourhoodCreateManyWithoutCityInput | null
}

export interface CityCreateOneWithoutNeighbourhoodsInput {
  create?: CityCreateWithoutNeighbourhoodsInput | null
  connect?: CityWhereUniqueInput | null
}

export interface CityCreateWithoutNeighbourhoodsInput {
  id?: ID_Input | null
  name?: undefined | null
}

export interface CitySubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
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
  update?: undefined | null
  create?: undefined | null
}

export interface CityWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  name_in?: undefined | null
  name_not_in?: undefined | null
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
  cardNumber?: undefined | null
  expiresOnMonth?: undefined | null
  expiresOnYear?: undefined | null
  securityCode?: undefined | null
  firstName?: undefined | null
  lastName?: undefined | null
  postalCode?: undefined | null
  country?: undefined | null
}

export interface CreditCardInformationCreateOneInput {
  create?: CreditCardInformationCreateInput | null
  connect?: CreditCardInformationWhereUniqueInput | null
}

export interface CreditCardInformationSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: CreditCardInformationWhereInput | null
}

export interface CreditCardInformationUpdateDataInput {
  cardNumber?: String | null
  expiresOnMonth?: Int | null
  expiresOnYear?: Int | null
  securityCode?: String | null
  firstName?: String | null
  lastName?: String | null
  postalCode?: String | null
  country?: String | null
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

export interface CreditCardInformationUpdateOneInput {
  create?: CreditCardInformationCreateInput | null
  connect?: CreditCardInformationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: CreditCardInformationUpdateDataInput | null
  upsert?: CreditCardInformationUpsertNestedInput | null
}

export interface CreditCardInformationUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface CreditCardInformationWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  cardNumber?: String | null
  cardNumber_not?: String | null
  cardNumber_in?: undefined | null
  cardNumber_not_in?: undefined | null
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
  expiresOnMonth_in?: undefined | null
  expiresOnMonth_not_in?: undefined | null
  expiresOnMonth_lt?: Int | null
  expiresOnMonth_lte?: Int | null
  expiresOnMonth_gt?: Int | null
  expiresOnMonth_gte?: Int | null
  expiresOnYear?: Int | null
  expiresOnYear_not?: Int | null
  expiresOnYear_in?: undefined | null
  expiresOnYear_not_in?: undefined | null
  expiresOnYear_lt?: Int | null
  expiresOnYear_lte?: Int | null
  expiresOnYear_gt?: Int | null
  expiresOnYear_gte?: Int | null
  securityCode?: String | null
  securityCode_not?: String | null
  securityCode_in?: undefined | null
  securityCode_not_in?: undefined | null
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
  firstName_in?: undefined | null
  firstName_not_in?: undefined | null
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
  lastName_in?: undefined | null
  lastName_not_in?: undefined | null
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
  postalCode_in?: undefined | null
  postalCode_not_in?: undefined | null
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
  country_in?: undefined | null
  country_not_in?: undefined | null
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
}

export interface CreditCardInformationWhereUniqueInput {
  id?: ID_Input | null
}

export interface DebitCardInformationCreateInput {
  id?: ID_Input | null
  cardNumber?: undefined | null
  expiresOnMonth?: undefined | null
  expiresOnYear?: undefined | null
  securityCode?: undefined | null
  firstName?: undefined | null
  lastName?: undefined | null
  postalCode?: undefined | null
  country?: undefined | null
}

export interface DebitCardInformationCreateOneInput {
  create?: DebitCardInformationCreateInput | null
  connect?: DebitCardInformationWhereUniqueInput | null
}

export interface DebitCardInformationSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: DebitCardInformationWhereInput | null
}

export interface DebitCardInformationUpdateDataInput {
  cardNumber?: String | null
  expiresOnMonth?: Int | null
  expiresOnYear?: Int | null
  securityCode?: String | null
  firstName?: String | null
  lastName?: String | null
  postalCode?: String | null
  country?: String | null
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

export interface DebitCardInformationUpdateOneInput {
  create?: DebitCardInformationCreateInput | null
  connect?: DebitCardInformationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: DebitCardInformationUpdateDataInput | null
  upsert?: DebitCardInformationUpsertNestedInput | null
}

export interface DebitCardInformationUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface DebitCardInformationWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  cardNumber?: String | null
  cardNumber_not?: String | null
  cardNumber_in?: undefined | null
  cardNumber_not_in?: undefined | null
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
  expiresOnMonth_in?: undefined | null
  expiresOnMonth_not_in?: undefined | null
  expiresOnMonth_lt?: Int | null
  expiresOnMonth_lte?: Int | null
  expiresOnMonth_gt?: Int | null
  expiresOnMonth_gte?: Int | null
  expiresOnYear?: Int | null
  expiresOnYear_not?: Int | null
  expiresOnYear_in?: undefined | null
  expiresOnYear_not_in?: undefined | null
  expiresOnYear_lt?: Int | null
  expiresOnYear_lte?: Int | null
  expiresOnYear_gt?: Int | null
  expiresOnYear_gte?: Int | null
  securityCode?: String | null
  securityCode_not?: String | null
  securityCode_in?: undefined | null
  securityCode_not_in?: undefined | null
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
  firstName_in?: undefined | null
  firstName_not_in?: undefined | null
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
  lastName_in?: undefined | null
  lastName_not_in?: undefined | null
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
  postalCode_in?: undefined | null
  postalCode_not_in?: undefined | null
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
  country_in?: undefined | null
  country_not_in?: undefined | null
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
}

export interface DebitCardInformationWhereUniqueInput {
  id?: ID_Input | null
}

export interface ExperienceCategoryCreateInput {
  id?: ID_Input | null
  mainColor?: String | null
  name?: undefined | null
}

export interface ExperienceCategoryCreateOneInput {
  create?: ExperienceCategoryCreateInput | null
  connect?: ExperienceCategoryWhereUniqueInput | null
}

export interface ExperienceCategorySubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: ExperienceCategoryWhereInput | null
}

export interface ExperienceCategoryUpdateDataInput {
  mainColor?: String | null
  name?: String | null
}

export interface ExperienceCategoryUpdateInput {
  mainColor?: String | null
  name?: String | null
}

export interface ExperienceCategoryUpdateManyMutationInput {
  mainColor?: String | null
  name?: String | null
}

export interface ExperienceCategoryUpdateOneInput {
  create?: ExperienceCategoryCreateInput | null
  connect?: ExperienceCategoryWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ExperienceCategoryUpdateDataInput | null
  upsert?: ExperienceCategoryUpsertNestedInput | null
}

export interface ExperienceCategoryUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface ExperienceCategoryWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  mainColor_in?: undefined | null
  mainColor_not_in?: undefined | null
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
  name_in?: undefined | null
  name_not_in?: undefined | null
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
}

export interface ExperienceCategoryWhereUniqueInput {
  id?: ID_Input | null
}

export interface ExperienceCreateInput {
  id?: ID_Input | null
  title?: undefined | null
  pricePerPerson?: undefined | null
  popularity?: undefined | null
  category?: ExperienceCategoryCreateOneInput | null
  host?: undefined | null
  location?: undefined | null
  reviews?: ReviewCreateManyWithoutExperienceInput | null
  preview?: undefined | null
}

export interface ExperienceCreateManyWithoutHostInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface ExperienceCreateOneWithoutReviewsInput {
  create?: ExperienceCreateWithoutReviewsInput | null
  connect?: ExperienceWhereUniqueInput | null
}

export interface ExperienceCreateWithoutHostInput {
  id?: ID_Input | null
  title?: undefined | null
  pricePerPerson?: undefined | null
  popularity?: undefined | null
  category?: ExperienceCategoryCreateOneInput | null
  location?: undefined | null
  reviews?: ReviewCreateManyWithoutExperienceInput | null
  preview?: undefined | null
}

export interface ExperienceCreateWithoutReviewsInput {
  id?: ID_Input | null
  title?: undefined | null
  pricePerPerson?: undefined | null
  popularity?: undefined | null
  category?: ExperienceCategoryCreateOneInput | null
  host?: undefined | null
  location?: undefined | null
  preview?: undefined | null
}

export interface ExperienceScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  title_in?: undefined | null
  title_not_in?: undefined | null
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
  pricePerPerson_in?: undefined | null
  pricePerPerson_not_in?: undefined | null
  pricePerPerson_lt?: Int | null
  pricePerPerson_lte?: Int | null
  pricePerPerson_gt?: Int | null
  pricePerPerson_gte?: Int | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: undefined | null
  popularity_not_in?: undefined | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
}

export interface ExperienceSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: ExperienceWhereInput | null
}

export interface ExperienceUpdateInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
  category?: ExperienceCategoryUpdateOneInput | null
  host?: UserUpdateOneRequiredWithoutExperiencesInput | null
  location?: LocationUpdateOneRequiredInput | null
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
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface ExperienceUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface ExperienceUpdateOneWithoutReviewsInput {
  create?: ExperienceCreateWithoutReviewsInput | null
  connect?: ExperienceWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ExperienceUpdateWithoutReviewsDataInput | null
  upsert?: ExperienceUpsertWithoutReviewsInput | null
}

export interface ExperienceUpdateWithoutHostDataInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
  category?: ExperienceCategoryUpdateOneInput | null
  location?: LocationUpdateOneRequiredInput | null
  reviews?: ReviewUpdateManyWithoutExperienceInput | null
  preview?: PictureUpdateOneRequiredInput | null
}

export interface ExperienceUpdateWithoutReviewsDataInput {
  title?: String | null
  pricePerPerson?: Int | null
  popularity?: Int | null
  category?: ExperienceCategoryUpdateOneInput | null
  host?: UserUpdateOneRequiredWithoutExperiencesInput | null
  location?: LocationUpdateOneRequiredInput | null
  preview?: PictureUpdateOneRequiredInput | null
}

export interface ExperienceUpdateWithWhereUniqueWithoutHostInput {
  where?: undefined | null
  data?: undefined | null
}

export interface ExperienceUpsertWithoutReviewsInput {
  update?: undefined | null
  create?: undefined | null
}

export interface ExperienceUpsertWithWhereUniqueWithoutHostInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface ExperienceWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  title_in?: undefined | null
  title_not_in?: undefined | null
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
  pricePerPerson_in?: undefined | null
  pricePerPerson_not_in?: undefined | null
  pricePerPerson_lt?: Int | null
  pricePerPerson_lte?: Int | null
  pricePerPerson_gt?: Int | null
  pricePerPerson_gte?: Int | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: undefined | null
  popularity_not_in?: undefined | null
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

export interface LocationCreateInput {
  title?: String | null
  id?: ID_Input | null
  lat?: undefined | null
  lng?: undefined | null
  address?: undefined | null
  directions?: undefined | null
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput | null
}

export interface LocationCreateManyInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface LocationCreateManyWithoutNeighbourHoodInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationCreateWithoutNeighbourHoodInput {
  title?: String | null
  id?: ID_Input | null
  lat?: undefined | null
  lng?: undefined | null
  address?: undefined | null
  directions?: undefined | null
}

export interface LocationScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  title?: String | null
  title_not?: String | null
  title_in?: undefined | null
  title_not_in?: undefined | null
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
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  lat_in?: undefined | null
  lat_not_in?: undefined | null
  lat_lt?: Float | null
  lat_lte?: Float | null
  lat_gt?: Float | null
  lat_gte?: Float | null
  lng?: Float | null
  lng_not?: Float | null
  lng_in?: undefined | null
  lng_not_in?: undefined | null
  lng_lt?: Float | null
  lng_lte?: Float | null
  lng_gt?: Float | null
  lng_gte?: Float | null
  address?: String | null
  address_not?: String | null
  address_in?: undefined | null
  address_not_in?: undefined | null
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
  directions_in?: undefined | null
  directions_not_in?: undefined | null
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
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: LocationWhereInput | null
}

export interface LocationUpdateDataInput {
  title?: String | null
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput | null
}

export interface LocationUpdateInput {
  title?: String | null
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput | null
}

export interface LocationUpdateManyDataInput {
  title?: String | null
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
}

export interface LocationUpdateManyInput {
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface LocationUpdateManyMutationInput {
  title?: String | null
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
}

export interface LocationUpdateManyWithoutNeighbourHoodInput {
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface LocationUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput | null
  connect?: LocationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: LocationUpdateDataInput | null
  upsert?: LocationUpsertNestedInput | null
}

export interface LocationUpdateOneRequiredInput {
  create?: LocationCreateInput | null
  connect?: LocationWhereUniqueInput | null
  update?: LocationUpdateDataInput | null
  upsert?: LocationUpsertNestedInput | null
}

export interface LocationUpdateWithoutNeighbourHoodDataInput {
  title?: String | null
  lat?: Float | null
  lng?: Float | null
  address?: String | null
  directions?: String | null
}

export interface LocationUpdateWithWhereUniqueNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput {
  where?: undefined | null
  data?: undefined | null
}

export interface LocationUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface LocationUpsertWithWhereUniqueNestedInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface LocationWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  title?: String | null
  title_not?: String | null
  title_in?: undefined | null
  title_not_in?: undefined | null
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
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  lat_in?: undefined | null
  lat_not_in?: undefined | null
  lat_lt?: Float | null
  lat_lte?: Float | null
  lat_gt?: Float | null
  lat_gte?: Float | null
  lng?: Float | null
  lng_not?: Float | null
  lng_in?: undefined | null
  lng_not_in?: undefined | null
  lng_lt?: Float | null
  lng_lte?: Float | null
  lng_gt?: Float | null
  lng_gte?: Float | null
  address?: String | null
  address_not?: String | null
  address_in?: undefined | null
  address_not_in?: undefined | null
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
  directions_in?: undefined | null
  directions_not_in?: undefined | null
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
}

export interface LocationWhereUniqueInput {
  id?: ID_Input | null
}

export interface MenuItemCreateInput {
  id?: ID_Input | null
  shortDescription?: undefined | null
  title?: undefined | null
  description?: undefined | null
  pricing?: undefined | null
  pictures?: PictureCreateManyInput | null
  reviews?: ReviewCreateManyInput | null
}

export interface MenuItemCreateManyInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface MenuItemScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: undefined | null
  updatedAt_not_in?: undefined | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  shortDescription?: String | null
  shortDescription_not?: String | null
  shortDescription_in?: undefined | null
  shortDescription_not_in?: undefined | null
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
  title?: String | null
  title_not?: String | null
  title_in?: undefined | null
  title_not_in?: undefined | null
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
  description?: String | null
  description_not?: String | null
  description_in?: undefined | null
  description_not_in?: undefined | null
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
}

export interface MenuItemSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: MenuItemWhereInput | null
}

export interface MenuItemUpdateDataInput {
  shortDescription?: String | null
  title?: String | null
  description?: String | null
  pricing?: PricingUpdateOneRequiredInput | null
  pictures?: PictureUpdateManyInput | null
  reviews?: ReviewUpdateManyInput | null
}

export interface MenuItemUpdateInput {
  shortDescription?: String | null
  title?: String | null
  description?: String | null
  pricing?: PricingUpdateOneRequiredInput | null
  pictures?: PictureUpdateManyInput | null
  reviews?: ReviewUpdateManyInput | null
}

export interface MenuItemUpdateManyDataInput {
  shortDescription?: String | null
  title?: String | null
  description?: String | null
}

export interface MenuItemUpdateManyInput {
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface MenuItemUpdateManyMutationInput {
  shortDescription?: String | null
  title?: String | null
  description?: String | null
}

export interface MenuItemUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface MenuItemUpdateWithWhereUniqueNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface MenuItemUpsertWithWhereUniqueNestedInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface MenuItemWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: undefined | null
  updatedAt_not_in?: undefined | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  shortDescription?: String | null
  shortDescription_not?: String | null
  shortDescription_in?: undefined | null
  shortDescription_not_in?: undefined | null
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
  title?: String | null
  title_not?: String | null
  title_in?: undefined | null
  title_not_in?: undefined | null
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
  description?: String | null
  description_not?: String | null
  description_in?: undefined | null
  description_not_in?: undefined | null
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
  pricing?: PricingWhereInput | null
  pictures_every?: PictureWhereInput | null
  pictures_some?: PictureWhereInput | null
  pictures_none?: PictureWhereInput | null
  reviews_every?: ReviewWhereInput | null
  reviews_some?: ReviewWhereInput | null
  reviews_none?: ReviewWhereInput | null
}

export interface MenuItemWhereUniqueInput {
  id?: ID_Input | null
}

export interface MessageCreateInput {
  id?: ID_Input | null
  deliveredAt?: undefined | null
  readAt?: undefined | null
  from?: undefined | null
  to?: undefined | null
}

export interface MessageCreateManyWithoutFromInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface MessageCreateManyWithoutToInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface MessageCreateWithoutFromInput {
  id?: ID_Input | null
  deliveredAt?: undefined | null
  readAt?: undefined | null
  to?: undefined | null
}

export interface MessageCreateWithoutToInput {
  id?: ID_Input | null
  deliveredAt?: undefined | null
  readAt?: undefined | null
  from?: undefined | null
}

export interface MessageScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  deliveredAt?: DateTime | null
  deliveredAt_not?: DateTime | null
  deliveredAt_in?: undefined | null
  deliveredAt_not_in?: undefined | null
  deliveredAt_lt?: DateTime | null
  deliveredAt_lte?: DateTime | null
  deliveredAt_gt?: DateTime | null
  deliveredAt_gte?: DateTime | null
  readAt?: DateTime | null
  readAt_not?: DateTime | null
  readAt_in?: undefined | null
  readAt_not_in?: undefined | null
  readAt_lt?: DateTime | null
  readAt_lte?: DateTime | null
  readAt_gt?: DateTime | null
  readAt_gte?: DateTime | null
}

export interface MessageSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
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
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface MessageUpdateManyWithoutToInput {
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface MessageUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
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
  where?: undefined | null
  data?: undefined | null
}

export interface MessageUpdateWithWhereUniqueWithoutToInput {
  where?: undefined | null
  data?: undefined | null
}

export interface MessageUpsertWithWhereUniqueWithoutFromInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface MessageUpsertWithWhereUniqueWithoutToInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface MessageWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  deliveredAt?: DateTime | null
  deliveredAt_not?: DateTime | null
  deliveredAt_in?: undefined | null
  deliveredAt_not_in?: undefined | null
  deliveredAt_lt?: DateTime | null
  deliveredAt_lte?: DateTime | null
  deliveredAt_gt?: DateTime | null
  deliveredAt_gte?: DateTime | null
  readAt?: DateTime | null
  readAt_not?: DateTime | null
  readAt_in?: undefined | null
  readAt_not_in?: undefined | null
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
  name?: undefined | null
  slug?: undefined | null
  featured?: undefined | null
  popularity?: undefined | null
  locations?: LocationCreateManyWithoutNeighbourHoodInput | null
  homePreview?: PictureCreateOneInput | null
  city?: undefined | null
}

export interface NeighbourhoodCreateManyWithoutCityInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface NeighbourhoodCreateOneWithoutLocationsInput {
  create?: NeighbourhoodCreateWithoutLocationsInput | null
  connect?: NeighbourhoodWhereUniqueInput | null
}

export interface NeighbourhoodCreateWithoutCityInput {
  id?: ID_Input | null
  name?: undefined | null
  slug?: undefined | null
  featured?: undefined | null
  popularity?: undefined | null
  locations?: LocationCreateManyWithoutNeighbourHoodInput | null
  homePreview?: PictureCreateOneInput | null
}

export interface NeighbourhoodCreateWithoutLocationsInput {
  id?: ID_Input | null
  name?: undefined | null
  slug?: undefined | null
  featured?: undefined | null
  popularity?: undefined | null
  homePreview?: PictureCreateOneInput | null
  city?: undefined | null
}

export interface NeighbourhoodScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  name_in?: undefined | null
  name_not_in?: undefined | null
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
  slug_in?: undefined | null
  slug_not_in?: undefined | null
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
  popularity_in?: undefined | null
  popularity_not_in?: undefined | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
}

export interface NeighbourhoodSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
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
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface NeighbourhoodUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
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
  where?: undefined | null
  data?: undefined | null
}

export interface NeighbourhoodUpsertWithoutLocationsInput {
  update?: undefined | null
  create?: undefined | null
}

export interface NeighbourhoodUpsertWithWhereUniqueWithoutCityInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface NeighbourhoodWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  name_in?: undefined | null
  name_not_in?: undefined | null
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
  slug_in?: undefined | null
  slug_not_in?: undefined | null
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
  popularity_in?: undefined | null
  popularity_not_in?: undefined | null
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
  link?: undefined | null
  readDate?: undefined | null
  user?: undefined | null
}

export interface NotificationCreateManyWithoutUserInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface NotificationCreateWithoutUserInput {
  id?: ID_Input | null
  type?: NOTIFICATION_TYPE | null
  link?: undefined | null
  readDate?: undefined | null
}

export interface NotificationScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  type?: NOTIFICATION_TYPE | null
  type_not?: NOTIFICATION_TYPE | null
  type_in?: undefined | null
  type_not_in?: undefined | null
  link?: String | null
  link_not?: String | null
  link_in?: undefined | null
  link_not_in?: undefined | null
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
  readDate_in?: undefined | null
  readDate_not_in?: undefined | null
  readDate_lt?: DateTime | null
  readDate_lte?: DateTime | null
  readDate_gt?: DateTime | null
  readDate_gte?: DateTime | null
}

export interface NotificationSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
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
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface NotificationUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface NotificationUpdateWithoutUserDataInput {
  type?: NOTIFICATION_TYPE | null
  link?: String | null
  readDate?: DateTime | null
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where?: undefined | null
  data?: undefined | null
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface NotificationWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  type?: NOTIFICATION_TYPE | null
  type_not?: NOTIFICATION_TYPE | null
  type_in?: undefined | null
  type_not_in?: undefined | null
  link?: String | null
  link_not?: String | null
  link_in?: undefined | null
  link_not_in?: undefined | null
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
  readDate_in?: undefined | null
  readDate_not_in?: undefined | null
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
  startDate?: undefined | null
  endDate?: undefined | null
  bookee?: undefined | null
  restaurant?: undefined | null
  payment?: undefined | null
}

export interface OrderCreateManyWithoutBookeeInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface OrderCreateManyWithoutRestaurantInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface OrderCreateOneInput {
  create?: OrderCreateInput | null
  connect?: OrderWhereUniqueInput | null
}

export interface OrderCreateOneWithoutPaymentInput {
  create?: OrderCreateWithoutPaymentInput | null
  connect?: OrderWhereUniqueInput | null
}

export interface OrderCreateWithoutBookeeInput {
  id?: ID_Input | null
  startDate?: undefined | null
  endDate?: undefined | null
  restaurant?: undefined | null
  payment?: undefined | null
}

export interface OrderCreateWithoutPaymentInput {
  id?: ID_Input | null
  startDate?: undefined | null
  endDate?: undefined | null
  bookee?: undefined | null
  restaurant?: undefined | null
}

export interface OrderCreateWithoutRestaurantInput {
  id?: ID_Input | null
  startDate?: undefined | null
  endDate?: undefined | null
  bookee?: undefined | null
  payment?: undefined | null
}

export interface OrderScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  startDate?: DateTime | null
  startDate_not?: DateTime | null
  startDate_in?: undefined | null
  startDate_not_in?: undefined | null
  startDate_lt?: DateTime | null
  startDate_lte?: DateTime | null
  startDate_gt?: DateTime | null
  startDate_gte?: DateTime | null
  endDate?: DateTime | null
  endDate_not?: DateTime | null
  endDate_in?: undefined | null
  endDate_not_in?: undefined | null
  endDate_lt?: DateTime | null
  endDate_lte?: DateTime | null
  endDate_gt?: DateTime | null
  endDate_gte?: DateTime | null
}

export interface OrderSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: OrderWhereInput | null
}

export interface OrderUpdateDataInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
  bookee?: UserUpdateOneRequiredWithoutOrdersInput | null
  restaurant?: RestaurantUpdateOneRequiredWithoutOrdersInput | null
  payment?: PaymentUpdateOneRequiredWithoutOrderInput | null
}

export interface OrderUpdateInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
  bookee?: UserUpdateOneRequiredWithoutOrdersInput | null
  restaurant?: RestaurantUpdateOneRequiredWithoutOrdersInput | null
  payment?: PaymentUpdateOneRequiredWithoutOrderInput | null
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
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface OrderUpdateManyWithoutRestaurantInput {
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface OrderUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface OrderUpdateOneRequiredInput {
  create?: OrderCreateInput | null
  connect?: OrderWhereUniqueInput | null
  update?: OrderUpdateDataInput | null
  upsert?: OrderUpsertNestedInput | null
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
  restaurant?: RestaurantUpdateOneRequiredWithoutOrdersInput | null
  payment?: PaymentUpdateOneRequiredWithoutOrderInput | null
}

export interface OrderUpdateWithoutPaymentDataInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
  bookee?: UserUpdateOneRequiredWithoutOrdersInput | null
  restaurant?: RestaurantUpdateOneRequiredWithoutOrdersInput | null
}

export interface OrderUpdateWithoutRestaurantDataInput {
  startDate?: DateTime | null
  endDate?: DateTime | null
  bookee?: UserUpdateOneRequiredWithoutOrdersInput | null
  payment?: PaymentUpdateOneRequiredWithoutOrderInput | null
}

export interface OrderUpdateWithWhereUniqueWithoutBookeeInput {
  where?: undefined | null
  data?: undefined | null
}

export interface OrderUpdateWithWhereUniqueWithoutRestaurantInput {
  where?: undefined | null
  data?: undefined | null
}

export interface OrderUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface OrderUpsertWithoutPaymentInput {
  update?: undefined | null
  create?: undefined | null
}

export interface OrderUpsertWithWhereUniqueWithoutBookeeInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface OrderUpsertWithWhereUniqueWithoutRestaurantInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface OrderWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  startDate?: DateTime | null
  startDate_not?: DateTime | null
  startDate_in?: undefined | null
  startDate_not_in?: undefined | null
  startDate_lt?: DateTime | null
  startDate_lte?: DateTime | null
  startDate_gt?: DateTime | null
  startDate_gte?: DateTime | null
  endDate?: DateTime | null
  endDate_not?: DateTime | null
  endDate_in?: undefined | null
  endDate_not_in?: undefined | null
  endDate_lt?: DateTime | null
  endDate_lte?: DateTime | null
  endDate_gt?: DateTime | null
  endDate_gte?: DateTime | null
  bookee?: UserWhereInput | null
  restaurant?: RestaurantWhereInput | null
  payment?: PaymentWhereInput | null
}

export interface OrderWhereUniqueInput {
  id?: ID_Input | null
}

export interface PaymentAccountCreateInput {
  id?: ID_Input | null
  type?: PAYMENT_PROVIDER | null
  user?: undefined | null
  payments?: PaymentCreateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationCreateOneInput | null
  paytm?: PaytmInformationCreateOneInput | null
  creditcard?: CreditCardInformationCreateOneInput | null
  debitcard?: DebitCardInformationCreateOneInput | null
}

export interface PaymentAccountCreateManyWithoutUserInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface PaymentAccountCreateOneWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput | null
  connect?: PaymentAccountWhereUniqueInput | null
}

export interface PaymentAccountCreateWithoutPaymentsInput {
  id?: ID_Input | null
  type?: PAYMENT_PROVIDER | null
  user?: undefined | null
  paypal?: PaypalInformationCreateOneInput | null
  paytm?: PaytmInformationCreateOneInput | null
  creditcard?: CreditCardInformationCreateOneInput | null
  debitcard?: DebitCardInformationCreateOneInput | null
}

export interface PaymentAccountCreateWithoutUserInput {
  id?: ID_Input | null
  type?: PAYMENT_PROVIDER | null
  payments?: PaymentCreateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationCreateOneInput | null
  paytm?: PaytmInformationCreateOneInput | null
  creditcard?: CreditCardInformationCreateOneInput | null
  debitcard?: DebitCardInformationCreateOneInput | null
}

export interface PaymentAccountScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  type?: PAYMENT_PROVIDER | null
  type_not?: PAYMENT_PROVIDER | null
  type_in?: undefined | null
  type_not_in?: undefined | null
}

export interface PaymentAccountSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: PaymentAccountWhereInput | null
}

export interface PaymentAccountUpdateInput {
  type?: PAYMENT_PROVIDER | null
  user?: UserUpdateOneRequiredWithoutPaymentAccountInput | null
  payments?: PaymentUpdateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationUpdateOneInput | null
  paytm?: PaytmInformationUpdateOneInput | null
  creditcard?: CreditCardInformationUpdateOneInput | null
  debitcard?: DebitCardInformationUpdateOneInput | null
}

export interface PaymentAccountUpdateManyDataInput {
  type?: PAYMENT_PROVIDER | null
}

export interface PaymentAccountUpdateManyMutationInput {
  type?: PAYMENT_PROVIDER | null
}

export interface PaymentAccountUpdateManyWithoutUserInput {
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface PaymentAccountUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface PaymentAccountUpdateOneRequiredWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput | null
  connect?: PaymentAccountWhereUniqueInput | null
  update?: PaymentAccountUpdateWithoutPaymentsDataInput | null
  upsert?: PaymentAccountUpsertWithoutPaymentsInput | null
}

export interface PaymentAccountUpdateWithoutPaymentsDataInput {
  type?: PAYMENT_PROVIDER | null
  user?: UserUpdateOneRequiredWithoutPaymentAccountInput | null
  paypal?: PaypalInformationUpdateOneInput | null
  paytm?: PaytmInformationUpdateOneInput | null
  creditcard?: CreditCardInformationUpdateOneInput | null
  debitcard?: DebitCardInformationUpdateOneInput | null
}

export interface PaymentAccountUpdateWithoutUserDataInput {
  type?: PAYMENT_PROVIDER | null
  payments?: PaymentUpdateManyWithoutPaymentMethodInput | null
  paypal?: PaypalInformationUpdateOneInput | null
  paytm?: PaytmInformationUpdateOneInput | null
  creditcard?: CreditCardInformationUpdateOneInput | null
  debitcard?: DebitCardInformationUpdateOneInput | null
}

export interface PaymentAccountUpdateWithWhereUniqueWithoutUserInput {
  where?: undefined | null
  data?: undefined | null
}

export interface PaymentAccountUpsertWithoutPaymentsInput {
  update?: undefined | null
  create?: undefined | null
}

export interface PaymentAccountUpsertWithWhereUniqueWithoutUserInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface PaymentAccountWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  type?: PAYMENT_PROVIDER | null
  type_not?: PAYMENT_PROVIDER | null
  type_in?: undefined | null
  type_not_in?: undefined | null
  user?: UserWhereInput | null
  payments_every?: PaymentWhereInput | null
  payments_some?: PaymentWhereInput | null
  payments_none?: PaymentWhereInput | null
  paypal?: PaypalInformationWhereInput | null
  paytm?: PaytmInformationWhereInput | null
  creditcard?: CreditCardInformationWhereInput | null
  debitcard?: DebitCardInformationWhereInput | null
}

export interface PaymentAccountWhereUniqueInput {
  id?: ID_Input | null
}

export interface PaymentCreateInput {
  id?: ID_Input | null
  serviceFee?: undefined | null
  restaurantPrice?: undefined | null
  totalPrice?: undefined | null
  order?: undefined | null
  paymentMethod?: undefined | null
}

export interface PaymentCreateManyWithoutPaymentMethodInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface PaymentCreateOneWithoutOrderInput {
  create?: PaymentCreateWithoutOrderInput | null
  connect?: PaymentWhereUniqueInput | null
}

export interface PaymentCreateWithoutOrderInput {
  id?: ID_Input | null
  serviceFee?: undefined | null
  restaurantPrice?: undefined | null
  totalPrice?: undefined | null
  paymentMethod?: undefined | null
}

export interface PaymentCreateWithoutPaymentMethodInput {
  id?: ID_Input | null
  serviceFee?: undefined | null
  restaurantPrice?: undefined | null
  totalPrice?: undefined | null
  order?: undefined | null
}

export interface PaymentScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  serviceFee?: Float | null
  serviceFee_not?: Float | null
  serviceFee_in?: undefined | null
  serviceFee_not_in?: undefined | null
  serviceFee_lt?: Float | null
  serviceFee_lte?: Float | null
  serviceFee_gt?: Float | null
  serviceFee_gte?: Float | null
  restaurantPrice?: Float | null
  restaurantPrice_not?: Float | null
  restaurantPrice_in?: undefined | null
  restaurantPrice_not_in?: undefined | null
  restaurantPrice_lt?: Float | null
  restaurantPrice_lte?: Float | null
  restaurantPrice_gt?: Float | null
  restaurantPrice_gte?: Float | null
  totalPrice?: Float | null
  totalPrice_not?: Float | null
  totalPrice_in?: undefined | null
  totalPrice_not_in?: undefined | null
  totalPrice_lt?: Float | null
  totalPrice_lte?: Float | null
  totalPrice_gt?: Float | null
  totalPrice_gte?: Float | null
}

export interface PaymentSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: PaymentWhereInput | null
}

export interface PaymentUpdateInput {
  serviceFee?: Float | null
  restaurantPrice?: Float | null
  totalPrice?: Float | null
  order?: OrderUpdateOneRequiredWithoutPaymentInput | null
  paymentMethod?: PaymentAccountUpdateOneRequiredWithoutPaymentsInput | null
}

export interface PaymentUpdateManyDataInput {
  serviceFee?: Float | null
  restaurantPrice?: Float | null
  totalPrice?: Float | null
}

export interface PaymentUpdateManyMutationInput {
  serviceFee?: Float | null
  restaurantPrice?: Float | null
  totalPrice?: Float | null
}

export interface PaymentUpdateManyWithoutPaymentMethodInput {
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface PaymentUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface PaymentUpdateOneRequiredWithoutOrderInput {
  create?: PaymentCreateWithoutOrderInput | null
  connect?: PaymentWhereUniqueInput | null
  update?: PaymentUpdateWithoutOrderDataInput | null
  upsert?: PaymentUpsertWithoutOrderInput | null
}

export interface PaymentUpdateWithoutOrderDataInput {
  serviceFee?: Float | null
  restaurantPrice?: Float | null
  totalPrice?: Float | null
  paymentMethod?: PaymentAccountUpdateOneRequiredWithoutPaymentsInput | null
}

export interface PaymentUpdateWithoutPaymentMethodDataInput {
  serviceFee?: Float | null
  restaurantPrice?: Float | null
  totalPrice?: Float | null
  order?: OrderUpdateOneRequiredWithoutPaymentInput | null
}

export interface PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where?: undefined | null
  data?: undefined | null
}

export interface PaymentUpsertWithoutOrderInput {
  update?: undefined | null
  create?: undefined | null
}

export interface PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface PaymentWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  serviceFee?: Float | null
  serviceFee_not?: Float | null
  serviceFee_in?: undefined | null
  serviceFee_not_in?: undefined | null
  serviceFee_lt?: Float | null
  serviceFee_lte?: Float | null
  serviceFee_gt?: Float | null
  serviceFee_gte?: Float | null
  restaurantPrice?: Float | null
  restaurantPrice_not?: Float | null
  restaurantPrice_in?: undefined | null
  restaurantPrice_not_in?: undefined | null
  restaurantPrice_lt?: Float | null
  restaurantPrice_lte?: Float | null
  restaurantPrice_gt?: Float | null
  restaurantPrice_gte?: Float | null
  totalPrice?: Float | null
  totalPrice_not?: Float | null
  totalPrice_in?: undefined | null
  totalPrice_not_in?: undefined | null
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
  email?: undefined | null
}

export interface PaypalInformationCreateOneInput {
  create?: PaypalInformationCreateInput | null
  connect?: PaypalInformationWhereUniqueInput | null
}

export interface PaypalInformationSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: PaypalInformationWhereInput | null
}

export interface PaypalInformationUpdateDataInput {
  email?: String | null
}

export interface PaypalInformationUpdateInput {
  email?: String | null
}

export interface PaypalInformationUpdateManyMutationInput {
  email?: String | null
}

export interface PaypalInformationUpdateOneInput {
  create?: PaypalInformationCreateInput | null
  connect?: PaypalInformationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PaypalInformationUpdateDataInput | null
  upsert?: PaypalInformationUpsertNestedInput | null
}

export interface PaypalInformationUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface PaypalInformationWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  email?: String | null
  email_not?: String | null
  email_in?: undefined | null
  email_not_in?: undefined | null
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
}

export interface PaypalInformationWhereUniqueInput {
  id?: ID_Input | null
}

export interface PaytmInformationCreateInput {
  id?: ID_Input | null
  phone?: undefined | null
}

export interface PaytmInformationCreateOneInput {
  create?: PaytmInformationCreateInput | null
  connect?: PaytmInformationWhereUniqueInput | null
}

export interface PaytmInformationSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: PaytmInformationWhereInput | null
}

export interface PaytmInformationUpdateDataInput {
  phone?: String | null
}

export interface PaytmInformationUpdateInput {
  phone?: String | null
}

export interface PaytmInformationUpdateManyMutationInput {
  phone?: String | null
}

export interface PaytmInformationUpdateOneInput {
  create?: PaytmInformationCreateInput | null
  connect?: PaytmInformationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PaytmInformationUpdateDataInput | null
  upsert?: PaytmInformationUpsertNestedInput | null
}

export interface PaytmInformationUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface PaytmInformationWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: undefined | null
  phone_not_in?: undefined | null
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
}

export interface PaytmInformationWhereUniqueInput {
  id?: ID_Input | null
}

export interface PictureCreateInput {
  id?: ID_Input | null
  url?: undefined | null
}

export interface PictureCreateManyInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface PictureCreateOneInput {
  create?: PictureCreateInput | null
  connect?: PictureWhereUniqueInput | null
}

export interface PictureScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  url_in?: undefined | null
  url_not_in?: undefined | null
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
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
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
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface PictureUpdateManyMutationInput {
  url?: String | null
}

export interface PictureUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
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
  where?: undefined | null
  data?: undefined | null
}

export interface PictureUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface PictureUpsertWithWhereUniqueNestedInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface PictureWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  url_in?: undefined | null
  url_not_in?: undefined | null
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

export interface PoliciesCreateInput {
  id?: ID_Input | null
  openingTime?: undefined | null
  closingTime?: undefined | null
}

export interface PoliciesCreateOneInput {
  create?: PoliciesCreateInput | null
  connect?: PoliciesWhereUniqueInput | null
}

export interface PoliciesSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: PoliciesWhereInput | null
}

export interface PoliciesUpdateDataInput {
  openingTime?: Float | null
  closingTime?: Float | null
}

export interface PoliciesUpdateInput {
  openingTime?: Float | null
  closingTime?: Float | null
}

export interface PoliciesUpdateManyMutationInput {
  openingTime?: Float | null
  closingTime?: Float | null
}

export interface PoliciesUpdateOneInput {
  create?: PoliciesCreateInput | null
  connect?: PoliciesWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PoliciesUpdateDataInput | null
  upsert?: PoliciesUpsertNestedInput | null
}

export interface PoliciesUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface PoliciesWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: undefined | null
  updatedAt_not_in?: undefined | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  openingTime?: Float | null
  openingTime_not?: Float | null
  openingTime_in?: undefined | null
  openingTime_not_in?: undefined | null
  openingTime_lt?: Float | null
  openingTime_lte?: Float | null
  openingTime_gt?: Float | null
  openingTime_gte?: Float | null
  closingTime?: Float | null
  closingTime_not?: Float | null
  closingTime_in?: undefined | null
  closingTime_not_in?: undefined | null
  closingTime_lt?: Float | null
  closingTime_lte?: Float | null
  closingTime_gt?: Float | null
  closingTime_gte?: Float | null
}

export interface PoliciesWhereUniqueInput {
  id?: ID_Input | null
}

export interface PricingCreateInput {
  id?: ID_Input | null
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  price?: undefined | null
  smartPricing?: Boolean | null
  basePrice?: undefined | null
  averageWeekly?: undefined | null
  averageMonthly?: undefined | null
  weekendPricing?: Int | null
}

export interface PricingCreateOneInput {
  create?: PricingCreateInput | null
  connect?: PricingWhereUniqueInput | null
}

export interface PricingSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: PricingWhereInput | null
}

export interface PricingUpdateDataInput {
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  price?: Int | null
  smartPricing?: Boolean | null
  basePrice?: Int | null
  averageWeekly?: Int | null
  averageMonthly?: Int | null
  weekendPricing?: Int | null
}

export interface PricingUpdateInput {
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  price?: Int | null
  smartPricing?: Boolean | null
  basePrice?: Int | null
  averageWeekly?: Int | null
  averageMonthly?: Int | null
  weekendPricing?: Int | null
}

export interface PricingUpdateManyMutationInput {
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  price?: Int | null
  smartPricing?: Boolean | null
  basePrice?: Int | null
  averageWeekly?: Int | null
  averageMonthly?: Int | null
  weekendPricing?: Int | null
}

export interface PricingUpdateOneRequiredInput {
  create?: PricingCreateInput | null
  connect?: PricingWhereUniqueInput | null
  update?: PricingUpdateDataInput | null
  upsert?: PricingUpsertNestedInput | null
}

export interface PricingUpsertNestedInput {
  update?: undefined | null
  create?: undefined | null
}

export interface PricingWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  monthlyDiscount_in?: undefined | null
  monthlyDiscount_not_in?: undefined | null
  monthlyDiscount_lt?: Int | null
  monthlyDiscount_lte?: Int | null
  monthlyDiscount_gt?: Int | null
  monthlyDiscount_gte?: Int | null
  weeklyDiscount?: Int | null
  weeklyDiscount_not?: Int | null
  weeklyDiscount_in?: undefined | null
  weeklyDiscount_not_in?: undefined | null
  weeklyDiscount_lt?: Int | null
  weeklyDiscount_lte?: Int | null
  weeklyDiscount_gt?: Int | null
  weeklyDiscount_gte?: Int | null
  price?: Int | null
  price_not?: Int | null
  price_in?: undefined | null
  price_not_in?: undefined | null
  price_lt?: Int | null
  price_lte?: Int | null
  price_gt?: Int | null
  price_gte?: Int | null
  smartPricing?: Boolean | null
  smartPricing_not?: Boolean | null
  basePrice?: Int | null
  basePrice_not?: Int | null
  basePrice_in?: undefined | null
  basePrice_not_in?: undefined | null
  basePrice_lt?: Int | null
  basePrice_lte?: Int | null
  basePrice_gt?: Int | null
  basePrice_gte?: Int | null
  averageWeekly?: Int | null
  averageWeekly_not?: Int | null
  averageWeekly_in?: undefined | null
  averageWeekly_not_in?: undefined | null
  averageWeekly_lt?: Int | null
  averageWeekly_lte?: Int | null
  averageWeekly_gt?: Int | null
  averageWeekly_gte?: Int | null
  averageMonthly?: Int | null
  averageMonthly_not?: Int | null
  averageMonthly_in?: undefined | null
  averageMonthly_not_in?: undefined | null
  averageMonthly_lt?: Int | null
  averageMonthly_lte?: Int | null
  averageMonthly_gt?: Int | null
  averageMonthly_gte?: Int | null
  weekendPricing?: Int | null
  weekendPricing_not?: Int | null
  weekendPricing_in?: undefined | null
  weekendPricing_not_in?: undefined | null
  weekendPricing_lt?: Int | null
  weekendPricing_lte?: Int | null
  weekendPricing_gt?: Int | null
  weekendPricing_gte?: Int | null
}

export interface PricingWhereUniqueInput {
  id?: ID_Input | null
}

export interface RestaurantCreateInput {
  id?: ID_Input | null
  name?: undefined | null
  shortDescription?: undefined | null
  description?: undefined | null
  slug?: undefined | null
  maxGuests?: undefined | null
  numRatings?: undefined | null
  avgRating?: Float | null
  popularity?: undefined | null
  avgPricePerPerson?: undefined | null
  isCurated?: Boolean | null
  reviews?: ReviewCreateManyInput | null
  location?: LocationCreateOneInput | null
  policies?: PoliciesCreateOneInput | null
  menu?: MenuItemCreateManyInput | null
  orders?: OrderCreateManyWithoutRestaurantInput | null
  pictures?: PictureCreateManyInput | null
}

export interface RestaurantCreateManyInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface RestaurantCreateOneWithoutOrdersInput {
  create?: RestaurantCreateWithoutOrdersInput | null
  connect?: RestaurantWhereUniqueInput | null
}

export interface RestaurantCreateWithoutOrdersInput {
  id?: ID_Input | null
  name?: undefined | null
  shortDescription?: undefined | null
  description?: undefined | null
  slug?: undefined | null
  maxGuests?: undefined | null
  numRatings?: undefined | null
  avgRating?: Float | null
  popularity?: undefined | null
  avgPricePerPerson?: undefined | null
  isCurated?: Boolean | null
  reviews?: ReviewCreateManyInput | null
  location?: LocationCreateOneInput | null
  policies?: PoliciesCreateOneInput | null
  menu?: MenuItemCreateManyInput | null
  pictures?: PictureCreateManyInput | null
}

export interface RestaurantScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  name_in?: undefined | null
  name_not_in?: undefined | null
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
  shortDescription?: String | null
  shortDescription_not?: String | null
  shortDescription_in?: undefined | null
  shortDescription_not_in?: undefined | null
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
  description_in?: undefined | null
  description_not_in?: undefined | null
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
  slug_in?: undefined | null
  slug_not_in?: undefined | null
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
  maxGuests_in?: undefined | null
  maxGuests_not_in?: undefined | null
  maxGuests_lt?: Int | null
  maxGuests_lte?: Int | null
  maxGuests_gt?: Int | null
  maxGuests_gte?: Int | null
  numRatings?: Int | null
  numRatings_not?: Int | null
  numRatings_in?: undefined | null
  numRatings_not_in?: undefined | null
  numRatings_lt?: Int | null
  numRatings_lte?: Int | null
  numRatings_gt?: Int | null
  numRatings_gte?: Int | null
  avgRating?: Float | null
  avgRating_not?: Float | null
  avgRating_in?: undefined | null
  avgRating_not_in?: undefined | null
  avgRating_lt?: Float | null
  avgRating_lte?: Float | null
  avgRating_gt?: Float | null
  avgRating_gte?: Float | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: undefined | null
  popularity_not_in?: undefined | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
  avgPricePerPerson?: Int | null
  avgPricePerPerson_not?: Int | null
  avgPricePerPerson_in?: undefined | null
  avgPricePerPerson_not_in?: undefined | null
  avgPricePerPerson_lt?: Int | null
  avgPricePerPerson_lte?: Int | null
  avgPricePerPerson_gt?: Int | null
  avgPricePerPerson_gte?: Int | null
  isCurated?: Boolean | null
  isCurated_not?: Boolean | null
}

export interface RestaurantSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: RestaurantWhereInput | null
}

export interface RestaurantUpdateDataInput {
  name?: String | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numRatings?: Int | null
  avgRating?: Float | null
  popularity?: Int | null
  avgPricePerPerson?: Int | null
  isCurated?: Boolean | null
  reviews?: ReviewUpdateManyInput | null
  location?: LocationUpdateOneInput | null
  policies?: PoliciesUpdateOneInput | null
  menu?: MenuItemUpdateManyInput | null
  orders?: OrderUpdateManyWithoutRestaurantInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface RestaurantUpdateInput {
  name?: String | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numRatings?: Int | null
  avgRating?: Float | null
  popularity?: Int | null
  avgPricePerPerson?: Int | null
  isCurated?: Boolean | null
  reviews?: ReviewUpdateManyInput | null
  location?: LocationUpdateOneInput | null
  policies?: PoliciesUpdateOneInput | null
  menu?: MenuItemUpdateManyInput | null
  orders?: OrderUpdateManyWithoutRestaurantInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface RestaurantUpdateManyDataInput {
  name?: String | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numRatings?: Int | null
  avgRating?: Float | null
  popularity?: Int | null
  avgPricePerPerson?: Int | null
  isCurated?: Boolean | null
}

export interface RestaurantUpdateManyInput {
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface RestaurantUpdateManyMutationInput {
  name?: String | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numRatings?: Int | null
  avgRating?: Float | null
  popularity?: Int | null
  avgPricePerPerson?: Int | null
  isCurated?: Boolean | null
}

export interface RestaurantUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface RestaurantUpdateOneRequiredWithoutOrdersInput {
  create?: RestaurantCreateWithoutOrdersInput | null
  connect?: RestaurantWhereUniqueInput | null
  update?: RestaurantUpdateWithoutOrdersDataInput | null
  upsert?: RestaurantUpsertWithoutOrdersInput | null
}

export interface RestaurantUpdateWithoutOrdersDataInput {
  name?: String | null
  shortDescription?: String | null
  description?: String | null
  slug?: String | null
  maxGuests?: Int | null
  numRatings?: Int | null
  avgRating?: Float | null
  popularity?: Int | null
  avgPricePerPerson?: Int | null
  isCurated?: Boolean | null
  reviews?: ReviewUpdateManyInput | null
  location?: LocationUpdateOneInput | null
  policies?: PoliciesUpdateOneInput | null
  menu?: MenuItemUpdateManyInput | null
  pictures?: PictureUpdateManyInput | null
}

export interface RestaurantUpdateWithWhereUniqueNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface RestaurantUpsertWithoutOrdersInput {
  update?: undefined | null
  create?: undefined | null
}

export interface RestaurantUpsertWithWhereUniqueNestedInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface RestaurantWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  name_in?: undefined | null
  name_not_in?: undefined | null
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
  shortDescription?: String | null
  shortDescription_not?: String | null
  shortDescription_in?: undefined | null
  shortDescription_not_in?: undefined | null
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
  description_in?: undefined | null
  description_not_in?: undefined | null
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
  slug_in?: undefined | null
  slug_not_in?: undefined | null
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
  maxGuests_in?: undefined | null
  maxGuests_not_in?: undefined | null
  maxGuests_lt?: Int | null
  maxGuests_lte?: Int | null
  maxGuests_gt?: Int | null
  maxGuests_gte?: Int | null
  numRatings?: Int | null
  numRatings_not?: Int | null
  numRatings_in?: undefined | null
  numRatings_not_in?: undefined | null
  numRatings_lt?: Int | null
  numRatings_lte?: Int | null
  numRatings_gt?: Int | null
  numRatings_gte?: Int | null
  avgRating?: Float | null
  avgRating_not?: Float | null
  avgRating_in?: undefined | null
  avgRating_not_in?: undefined | null
  avgRating_lt?: Float | null
  avgRating_lte?: Float | null
  avgRating_gt?: Float | null
  avgRating_gte?: Float | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: undefined | null
  popularity_not_in?: undefined | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
  avgPricePerPerson?: Int | null
  avgPricePerPerson_not?: Int | null
  avgPricePerPerson_in?: undefined | null
  avgPricePerPerson_not_in?: undefined | null
  avgPricePerPerson_lt?: Int | null
  avgPricePerPerson_lte?: Int | null
  avgPricePerPerson_gt?: Int | null
  avgPricePerPerson_gte?: Int | null
  isCurated?: Boolean | null
  isCurated_not?: Boolean | null
  reviews_every?: ReviewWhereInput | null
  reviews_some?: ReviewWhereInput | null
  reviews_none?: ReviewWhereInput | null
  location?: LocationWhereInput | null
  policies?: PoliciesWhereInput | null
  menu_every?: MenuItemWhereInput | null
  menu_some?: MenuItemWhereInput | null
  menu_none?: MenuItemWhereInput | null
  orders_every?: OrderWhereInput | null
  orders_some?: OrderWhereInput | null
  orders_none?: OrderWhereInput | null
  pictures_every?: PictureWhereInput | null
  pictures_some?: PictureWhereInput | null
  pictures_none?: PictureWhereInput | null
}

export interface RestaurantWhereUniqueInput {
  id?: ID_Input | null
}

export interface ReviewCreateInput {
  id?: ID_Input | null
  text?: undefined | null
  stars?: undefined | null
  accuracy?: undefined | null
  location?: undefined | null
  checkIn?: undefined | null
  value?: undefined | null
  cleanliness?: undefined | null
  communication?: undefined | null
  order?: undefined | null
  experience?: ExperienceCreateOneWithoutReviewsInput | null
}

export interface ReviewCreateManyInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface ReviewCreateManyWithoutExperienceInput {
  create?: undefined | null
  connect?: undefined | null
}

export interface ReviewCreateWithoutExperienceInput {
  id?: ID_Input | null
  text?: undefined | null
  stars?: undefined | null
  accuracy?: undefined | null
  location?: undefined | null
  checkIn?: undefined | null
  value?: undefined | null
  cleanliness?: undefined | null
  communication?: undefined | null
  order?: undefined | null
}

export interface ReviewScalarWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  text?: String | null
  text_not?: String | null
  text_in?: undefined | null
  text_not_in?: undefined | null
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
  stars_in?: undefined | null
  stars_not_in?: undefined | null
  stars_lt?: Int | null
  stars_lte?: Int | null
  stars_gt?: Int | null
  stars_gte?: Int | null
  accuracy?: Int | null
  accuracy_not?: Int | null
  accuracy_in?: undefined | null
  accuracy_not_in?: undefined | null
  accuracy_lt?: Int | null
  accuracy_lte?: Int | null
  accuracy_gt?: Int | null
  accuracy_gte?: Int | null
  location?: Int | null
  location_not?: Int | null
  location_in?: undefined | null
  location_not_in?: undefined | null
  location_lt?: Int | null
  location_lte?: Int | null
  location_gt?: Int | null
  location_gte?: Int | null
  checkIn?: Int | null
  checkIn_not?: Int | null
  checkIn_in?: undefined | null
  checkIn_not_in?: undefined | null
  checkIn_lt?: Int | null
  checkIn_lte?: Int | null
  checkIn_gt?: Int | null
  checkIn_gte?: Int | null
  value?: Int | null
  value_not?: Int | null
  value_in?: undefined | null
  value_not_in?: undefined | null
  value_lt?: Int | null
  value_lte?: Int | null
  value_gt?: Int | null
  value_gte?: Int | null
  cleanliness?: Int | null
  cleanliness_not?: Int | null
  cleanliness_in?: undefined | null
  cleanliness_not_in?: undefined | null
  cleanliness_lt?: Int | null
  cleanliness_lte?: Int | null
  cleanliness_gt?: Int | null
  cleanliness_gte?: Int | null
  communication?: Int | null
  communication_not?: Int | null
  communication_in?: undefined | null
  communication_not_in?: undefined | null
  communication_lt?: Int | null
  communication_lte?: Int | null
  communication_gt?: Int | null
  communication_gte?: Int | null
}

export interface ReviewSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: ReviewWhereInput | null
}

export interface ReviewUpdateDataInput {
  text?: String | null
  stars?: Int | null
  accuracy?: Int | null
  location?: Int | null
  checkIn?: Int | null
  value?: Int | null
  cleanliness?: Int | null
  communication?: Int | null
  order?: OrderUpdateOneRequiredInput | null
  experience?: ExperienceUpdateOneWithoutReviewsInput | null
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
  order?: OrderUpdateOneRequiredInput | null
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

export interface ReviewUpdateManyInput {
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
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
  create?: undefined | null
  connect?: undefined | null
  set?: undefined | null
  disconnect?: undefined | null
  delete?: undefined | null
  update?: undefined | null
  updateMany?: undefined | null
  deleteMany?: undefined | null
  upsert?: undefined | null
}

export interface ReviewUpdateManyWithWhereNestedInput {
  where?: undefined | null
  data?: undefined | null
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
  order?: OrderUpdateOneRequiredInput | null
}

export interface ReviewUpdateWithWhereUniqueNestedInput {
  where?: undefined | null
  data?: undefined | null
}

export interface ReviewUpdateWithWhereUniqueWithoutExperienceInput {
  where?: undefined | null
  data?: undefined | null
}

export interface ReviewUpsertWithWhereUniqueNestedInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface ReviewUpsertWithWhereUniqueWithoutExperienceInput {
  where?: undefined | null
  update?: undefined | null
  create?: undefined | null
}

export interface ReviewWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  text?: String | null
  text_not?: String | null
  text_in?: undefined | null
  text_not_in?: undefined | null
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
  stars_in?: undefined | null
  stars_not_in?: undefined | null
  stars_lt?: Int | null
  stars_lte?: Int | null
  stars_gt?: Int | null
  stars_gte?: Int | null
  accuracy?: Int | null
  accuracy_not?: Int | null
  accuracy_in?: undefined | null
  accuracy_not_in?: undefined | null
  accuracy_lt?: Int | null
  accuracy_lte?: Int | null
  accuracy_gt?: Int | null
  accuracy_gte?: Int | null
  location?: Int | null
  location_not?: Int | null
  location_in?: undefined | null
  location_not_in?: undefined | null
  location_lt?: Int | null
  location_lte?: Int | null
  location_gt?: Int | null
  location_gte?: Int | null
  checkIn?: Int | null
  checkIn_not?: Int | null
  checkIn_in?: undefined | null
  checkIn_not_in?: undefined | null
  checkIn_lt?: Int | null
  checkIn_lte?: Int | null
  checkIn_gt?: Int | null
  checkIn_gte?: Int | null
  value?: Int | null
  value_not?: Int | null
  value_in?: undefined | null
  value_not_in?: undefined | null
  value_lt?: Int | null
  value_lte?: Int | null
  value_gt?: Int | null
  value_gte?: Int | null
  cleanliness?: Int | null
  cleanliness_not?: Int | null
  cleanliness_in?: undefined | null
  cleanliness_not_in?: undefined | null
  cleanliness_lt?: Int | null
  cleanliness_lte?: Int | null
  cleanliness_gt?: Int | null
  cleanliness_gte?: Int | null
  communication?: Int | null
  communication_not?: Int | null
  communication_in?: undefined | null
  communication_not_in?: undefined | null
  communication_lt?: Int | null
  communication_lte?: Int | null
  communication_gt?: Int | null
  communication_gte?: Int | null
  order?: OrderWhereInput | null
  experience?: ExperienceWhereInput | null
}

export interface ReviewWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  displayName?: undefined | null
  phoneNumber?: undefined | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: undefined | null
  ownedRestaurant?: RestaurantCreateManyInput | null
  location?: LocationCreateManyInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  experiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateOneWithoutExperiencesInput {
  create?: UserCreateWithoutExperiencesInput | null
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

export interface UserCreateWithoutExperiencesInput {
  id?: ID_Input | null
  displayName?: undefined | null
  phoneNumber?: undefined | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: undefined | null
  ownedRestaurant?: RestaurantCreateManyInput | null
  location?: LocationCreateManyInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
}

export interface UserCreateWithoutNotificationsInput {
  id?: ID_Input | null
  displayName?: undefined | null
  phoneNumber?: undefined | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: undefined | null
  ownedRestaurant?: RestaurantCreateManyInput | null
  location?: LocationCreateManyInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  profilePicture?: PictureCreateOneInput | null
  experiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutOrdersInput {
  id?: ID_Input | null
  displayName?: undefined | null
  phoneNumber?: undefined | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: undefined | null
  ownedRestaurant?: RestaurantCreateManyInput | null
  location?: LocationCreateManyInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  experiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutPaymentAccountInput {
  id?: ID_Input | null
  displayName?: undefined | null
  phoneNumber?: undefined | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: undefined | null
  ownedRestaurant?: RestaurantCreateManyInput | null
  location?: LocationCreateManyInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  experiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutReceivedMessagesInput {
  id?: ID_Input | null
  displayName?: undefined | null
  phoneNumber?: undefined | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: undefined | null
  ownedRestaurant?: RestaurantCreateManyInput | null
  location?: LocationCreateManyInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  sentMessages?: MessageCreateManyWithoutFromInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  experiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutSentMessagesInput {
  id?: ID_Input | null
  displayName?: undefined | null
  phoneNumber?: undefined | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: undefined | null
  ownedRestaurant?: RestaurantCreateManyInput | null
  location?: LocationCreateManyInput | null
  orders?: OrderCreateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput | null
  receivedMessages?: MessageCreateManyWithoutToInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  profilePicture?: PictureCreateOneInput | null
  experiences?: ExperienceCreateManyWithoutHostInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  mutation_in?: undefined | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: undefined | null
  updatedFields_contains_some?: undefined | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: String | null
  ownedRestaurant?: RestaurantUpdateManyInput | null
  location?: LocationUpdateManyInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  experiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateManyMutationInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: String | null
}

export interface UserUpdateOneRequiredWithoutExperiencesInput {
  create?: UserCreateWithoutExperiencesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutExperiencesDataInput | null
  upsert?: UserUpsertWithoutExperiencesInput | null
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

export interface UserUpdateWithoutExperiencesDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: String | null
  ownedRestaurant?: RestaurantUpdateManyInput | null
  location?: LocationUpdateManyInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
}

export interface UserUpdateWithoutNotificationsDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: String | null
  ownedRestaurant?: RestaurantUpdateManyInput | null
  location?: LocationUpdateManyInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  profilePicture?: PictureUpdateOneInput | null
  experiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutOrdersDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: String | null
  ownedRestaurant?: RestaurantUpdateManyInput | null
  location?: LocationUpdateManyInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  experiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutPaymentAccountDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: String | null
  ownedRestaurant?: RestaurantUpdateManyInput | null
  location?: LocationUpdateManyInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  experiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutReceivedMessagesDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: String | null
  ownedRestaurant?: RestaurantUpdateManyInput | null
  location?: LocationUpdateManyInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  sentMessages?: MessageUpdateManyWithoutFromInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  experiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutSentMessagesDataInput {
  displayName?: String | null
  phoneNumber?: String | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: String | null
  ownedRestaurant?: RestaurantUpdateManyInput | null
  location?: LocationUpdateManyInput | null
  orders?: OrderUpdateManyWithoutBookeeInput | null
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput | null
  receivedMessages?: MessageUpdateManyWithoutToInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  profilePicture?: PictureUpdateOneInput | null
  experiences?: ExperienceUpdateManyWithoutHostInput | null
}

export interface UserUpsertWithoutExperiencesInput {
  update?: undefined | null
  create?: undefined | null
}

export interface UserUpsertWithoutNotificationsInput {
  update?: undefined | null
  create?: undefined | null
}

export interface UserUpsertWithoutOrdersInput {
  update?: undefined | null
  create?: undefined | null
}

export interface UserUpsertWithoutPaymentAccountInput {
  update?: undefined | null
  create?: undefined | null
}

export interface UserUpsertWithoutReceivedMessagesInput {
  update?: undefined | null
  create?: undefined | null
}

export interface UserUpsertWithoutSentMessagesInput {
  update?: undefined | null
  create?: undefined | null
}

export interface UserWhereInput {
  AND?: undefined | null
  OR?: undefined | null
  NOT?: undefined | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: undefined | null
  id_not_in?: undefined | null
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
  createdAt_in?: undefined | null
  createdAt_not_in?: undefined | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: undefined | null
  updatedAt_not_in?: undefined | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  displayName?: String | null
  displayName_not?: String | null
  displayName_in?: undefined | null
  displayName_not_in?: undefined | null
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
  phoneNumber_in?: undefined | null
  phoneNumber_not_in?: undefined | null
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
  responseRate_in?: undefined | null
  responseRate_not_in?: undefined | null
  responseRate_lt?: Float | null
  responseRate_lte?: Float | null
  responseRate_gt?: Float | null
  responseRate_gte?: Float | null
  responseTime?: Int | null
  responseTime_not?: Int | null
  responseTime_in?: undefined | null
  responseTime_not_in?: undefined | null
  responseTime_lt?: Int | null
  responseTime_lte?: Int | null
  responseTime_gt?: Int | null
  responseTime_gte?: Int | null
  accountType?: UserType | null
  accountType_not?: UserType | null
  accountType_in?: undefined | null
  accountType_not_in?: undefined | null
  uid?: String | null
  uid_not?: String | null
  uid_in?: undefined | null
  uid_not_in?: undefined | null
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
  ownedRestaurant_every?: RestaurantWhereInput | null
  ownedRestaurant_some?: RestaurantWhereInput | null
  ownedRestaurant_none?: RestaurantWhereInput | null
  location_every?: LocationWhereInput | null
  location_some?: LocationWhereInput | null
  location_none?: LocationWhereInput | null
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
  experiences_every?: ExperienceWhereInput | null
  experiences_some?: ExperienceWhereInput | null
  experiences_none?: ExperienceWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  uid?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id?: undefined | null
}

export interface AggregateCity {
  count?: undefined | null
}

export interface AggregateCreditCardInformation {
  count?: undefined | null
}

export interface AggregateDebitCardInformation {
  count?: undefined | null
}

export interface AggregateExperience {
  count?: undefined | null
}

export interface AggregateExperienceCategory {
  count?: undefined | null
}

export interface AggregateLocation {
  count?: undefined | null
}

export interface AggregateMenuItem {
  count?: undefined | null
}

export interface AggregateMessage {
  count?: undefined | null
}

export interface AggregateNeighbourhood {
  count?: undefined | null
}

export interface AggregateNotification {
  count?: undefined | null
}

export interface AggregateOrder {
  count?: undefined | null
}

export interface AggregatePayment {
  count?: undefined | null
}

export interface AggregatePaymentAccount {
  count?: undefined | null
}

export interface AggregatePaypalInformation {
  count?: undefined | null
}

export interface AggregatePaytmInformation {
  count?: undefined | null
}

export interface AggregatePicture {
  count?: undefined | null
}

export interface AggregatePolicies {
  count?: undefined | null
}

export interface AggregatePricing {
  count?: undefined | null
}

export interface AggregateRestaurant {
  count?: undefined | null
}

export interface AggregateReview {
  count?: undefined | null
}

export interface AggregateUser {
  count?: undefined | null
}

export interface BatchPayload {
  count?: undefined | null
}

export interface City {
  id?: undefined | null
  name?: undefined | null
  neighbourhoods?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface CityConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface CityEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface CityPreviousValues {
  id?: undefined | null
  name?: undefined | null
}

export interface CitySubscriptionPayload {
  mutation?: undefined | null
  node?: City | null
  updatedFields?: undefined | null
  previousValues?: CityPreviousValues | null
}

export interface CreditCardInformation {
  id?: undefined | null
  createdAt?: undefined | null
  cardNumber?: undefined | null
  expiresOnMonth?: undefined | null
  expiresOnYear?: undefined | null
  securityCode?: undefined | null
  firstName?: undefined | null
  lastName?: undefined | null
  postalCode?: undefined | null
  country?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface CreditCardInformationConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface CreditCardInformationEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface CreditCardInformationPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  cardNumber?: undefined | null
  expiresOnMonth?: undefined | null
  expiresOnYear?: undefined | null
  securityCode?: undefined | null
  firstName?: undefined | null
  lastName?: undefined | null
  postalCode?: undefined | null
  country?: undefined | null
}

export interface CreditCardInformationSubscriptionPayload {
  mutation?: undefined | null
  node?: CreditCardInformation | null
  updatedFields?: undefined | null
  previousValues?: CreditCardInformationPreviousValues | null
}

export interface DebitCardInformation {
  id?: undefined | null
  createdAt?: undefined | null
  cardNumber?: undefined | null
  expiresOnMonth?: undefined | null
  expiresOnYear?: undefined | null
  securityCode?: undefined | null
  firstName?: undefined | null
  lastName?: undefined | null
  postalCode?: undefined | null
  country?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface DebitCardInformationConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface DebitCardInformationEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface DebitCardInformationPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  cardNumber?: undefined | null
  expiresOnMonth?: undefined | null
  expiresOnYear?: undefined | null
  securityCode?: undefined | null
  firstName?: undefined | null
  lastName?: undefined | null
  postalCode?: undefined | null
  country?: undefined | null
}

export interface DebitCardInformationSubscriptionPayload {
  mutation?: undefined | null
  node?: DebitCardInformation | null
  updatedFields?: undefined | null
  previousValues?: DebitCardInformationPreviousValues | null
}

export interface Experience {
  id?: undefined | null
  category?: ExperienceCategory | null
  title?: undefined | null
  host?: undefined | null
  location?: undefined | null
  pricePerPerson?: undefined | null
  reviews?: undefined | null
  preview?: undefined | null
  popularity?: undefined | null
}

export interface ExperienceCategory {
  id?: undefined | null
  mainColor?: undefined | null
  name?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface ExperienceCategoryConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface ExperienceCategoryEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface ExperienceCategoryPreviousValues {
  id?: undefined | null
  mainColor?: undefined | null
  name?: undefined | null
}

export interface ExperienceCategorySubscriptionPayload {
  mutation?: undefined | null
  node?: ExperienceCategory | null
  updatedFields?: undefined | null
  previousValues?: ExperienceCategoryPreviousValues | null
}

/*
 * A connection to a list of items.

 */
export interface ExperienceConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface ExperienceEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface ExperiencePreviousValues {
  id?: undefined | null
  title?: undefined | null
  pricePerPerson?: undefined | null
  popularity?: undefined | null
}

export interface ExperienceSubscriptionPayload {
  mutation?: undefined | null
  node?: Experience | null
  updatedFields?: undefined | null
  previousValues?: ExperiencePreviousValues | null
}

export interface Location {
  title?: String | null
  id?: undefined | null
  lat?: undefined | null
  lng?: undefined | null
  neighbourHood?: Neighbourhood | null
  address?: undefined | null
  directions?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface LocationPreviousValues {
  title?: String | null
  id?: undefined | null
  lat?: undefined | null
  lng?: undefined | null
  address?: undefined | null
  directions?: undefined | null
}

export interface LocationSubscriptionPayload {
  mutation?: undefined | null
  node?: Location | null
  updatedFields?: undefined | null
  previousValues?: LocationPreviousValues | null
}

export interface MenuItem {
  id?: undefined | null
  createdAt?: undefined | null
  updatedAt?: undefined | null
  shortDescription?: undefined | null
  title?: undefined | null
  description?: undefined | null
  pricing?: undefined | null
  pictures?: undefined | null
  reviews?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface MenuItemConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface MenuItemEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface MenuItemPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  updatedAt?: undefined | null
  shortDescription?: undefined | null
  title?: undefined | null
  description?: undefined | null
}

export interface MenuItemSubscriptionPayload {
  mutation?: undefined | null
  node?: MenuItem | null
  updatedFields?: undefined | null
  previousValues?: MenuItemPreviousValues | null
}

export interface Message {
  id?: undefined | null
  createdAt?: undefined | null
  from?: undefined | null
  to?: undefined | null
  deliveredAt?: undefined | null
  readAt?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface MessagePreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  deliveredAt?: undefined | null
  readAt?: undefined | null
}

export interface MessageSubscriptionPayload {
  mutation?: undefined | null
  node?: Message | null
  updatedFields?: undefined | null
  previousValues?: MessagePreviousValues | null
}

export interface Neighbourhood {
  id?: undefined | null
  locations?: undefined | null
  name?: undefined | null
  slug?: undefined | null
  homePreview?: Picture | null
  city?: undefined | null
  featured?: undefined | null
  popularity?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface NeighbourhoodConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface NeighbourhoodEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface NeighbourhoodPreviousValues {
  id?: undefined | null
  name?: undefined | null
  slug?: undefined | null
  featured?: undefined | null
  popularity?: undefined | null
}

export interface NeighbourhoodSubscriptionPayload {
  mutation?: undefined | null
  node?: Neighbourhood | null
  updatedFields?: undefined | null
  previousValues?: NeighbourhoodPreviousValues | null
}

export interface Notification {
  id?: undefined | null
  createdAt?: undefined | null
  type?: NOTIFICATION_TYPE | null
  user?: undefined | null
  link?: undefined | null
  readDate?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface NotificationPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  type?: NOTIFICATION_TYPE | null
  link?: undefined | null
  readDate?: undefined | null
}

export interface NotificationSubscriptionPayload {
  mutation?: undefined | null
  node?: Notification | null
  updatedFields?: undefined | null
  previousValues?: NotificationPreviousValues | null
}

export interface Order {
  id?: undefined | null
  createdAt?: undefined | null
  bookee?: undefined | null
  restaurant?: undefined | null
  startDate?: undefined | null
  endDate?: undefined | null
  payment?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface OrderPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  startDate?: undefined | null
  endDate?: undefined | null
}

export interface OrderSubscriptionPayload {
  mutation?: undefined | null
  node?: Order | null
  updatedFields?: undefined | null
  previousValues?: OrderPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage?: undefined | null
  hasPreviousPage?: undefined | null
  startCursor?: String | null
  endCursor?: String | null
}

export interface Payment {
  id?: undefined | null
  createdAt?: undefined | null
  serviceFee?: undefined | null
  restaurantPrice?: undefined | null
  totalPrice?: undefined | null
  order?: undefined | null
  paymentMethod?: undefined | null
}

export interface PaymentAccount {
  id?: undefined | null
  createdAt?: undefined | null
  type?: PAYMENT_PROVIDER | null
  user?: undefined | null
  payments?: undefined | null
  paypal?: PaypalInformation | null
  paytm?: PaytmInformation | null
  creditcard?: CreditCardInformation | null
  debitcard?: DebitCardInformation | null
}

/*
 * A connection to a list of items.

 */
export interface PaymentAccountConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface PaymentAccountEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface PaymentAccountPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  type?: PAYMENT_PROVIDER | null
}

export interface PaymentAccountSubscriptionPayload {
  mutation?: undefined | null
  node?: PaymentAccount | null
  updatedFields?: undefined | null
  previousValues?: PaymentAccountPreviousValues | null
}

/*
 * A connection to a list of items.

 */
export interface PaymentConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface PaymentEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface PaymentPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  serviceFee?: undefined | null
  restaurantPrice?: undefined | null
  totalPrice?: undefined | null
}

export interface PaymentSubscriptionPayload {
  mutation?: undefined | null
  node?: Payment | null
  updatedFields?: undefined | null
  previousValues?: PaymentPreviousValues | null
}

export interface PaypalInformation {
  id?: undefined | null
  createdAt?: undefined | null
  email?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface PaypalInformationConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface PaypalInformationEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface PaypalInformationPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  email?: undefined | null
}

export interface PaypalInformationSubscriptionPayload {
  mutation?: undefined | null
  node?: PaypalInformation | null
  updatedFields?: undefined | null
  previousValues?: PaypalInformationPreviousValues | null
}

export interface PaytmInformation {
  id?: undefined | null
  createdAt?: undefined | null
  phone?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface PaytmInformationConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface PaytmInformationEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface PaytmInformationPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  phone?: undefined | null
}

export interface PaytmInformationSubscriptionPayload {
  mutation?: undefined | null
  node?: PaytmInformation | null
  updatedFields?: undefined | null
  previousValues?: PaytmInformationPreviousValues | null
}

export interface Picture {
  id?: undefined | null
  url?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface PictureConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface PictureEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface PicturePreviousValues {
  id?: undefined | null
  url?: undefined | null
}

export interface PictureSubscriptionPayload {
  mutation?: undefined | null
  node?: Picture | null
  updatedFields?: undefined | null
  previousValues?: PicturePreviousValues | null
}

export interface Policies {
  id?: undefined | null
  createdAt?: undefined | null
  updatedAt?: undefined | null
  openingTime?: undefined | null
  closingTime?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface PoliciesConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface PoliciesEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface PoliciesPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  updatedAt?: undefined | null
  openingTime?: undefined | null
  closingTime?: undefined | null
}

export interface PoliciesSubscriptionPayload {
  mutation?: undefined | null
  node?: Policies | null
  updatedFields?: undefined | null
  previousValues?: PoliciesPreviousValues | null
}

export interface Pricing {
  id?: undefined | null
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  price?: undefined | null
  smartPricing?: undefined | null
  basePrice?: undefined | null
  averageWeekly?: undefined | null
  averageMonthly?: undefined | null
  weekendPricing?: Int | null
}

/*
 * A connection to a list of items.

 */
export interface PricingConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface PricingEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface PricingPreviousValues {
  id?: undefined | null
  monthlyDiscount?: Int | null
  weeklyDiscount?: Int | null
  price?: undefined | null
  smartPricing?: undefined | null
  basePrice?: undefined | null
  averageWeekly?: undefined | null
  averageMonthly?: undefined | null
  weekendPricing?: Int | null
}

export interface PricingSubscriptionPayload {
  mutation?: undefined | null
  node?: Pricing | null
  updatedFields?: undefined | null
  previousValues?: PricingPreviousValues | null
}

export interface Restaurant {
  id?: undefined | null
  name?: undefined | null
  shortDescription?: undefined | null
  description?: undefined | null
  slug?: undefined | null
  maxGuests?: undefined | null
  numRatings?: undefined | null
  avgRating?: Float | null
  reviews?: undefined | null
  location?: Location | null
  policies?: Policies | null
  menu?: undefined | null
  orders?: undefined | null
  pictures?: undefined | null
  popularity?: undefined | null
  avgPricePerPerson?: undefined | null
  isCurated?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface RestaurantConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface RestaurantEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface RestaurantPreviousValues {
  id?: undefined | null
  name?: undefined | null
  shortDescription?: undefined | null
  description?: undefined | null
  slug?: undefined | null
  maxGuests?: undefined | null
  numRatings?: undefined | null
  avgRating?: Float | null
  popularity?: undefined | null
  avgPricePerPerson?: undefined | null
  isCurated?: undefined | null
}

export interface RestaurantSubscriptionPayload {
  mutation?: undefined | null
  node?: Restaurant | null
  updatedFields?: undefined | null
  previousValues?: RestaurantPreviousValues | null
}

export interface Review {
  id?: undefined | null
  createdAt?: undefined | null
  text?: undefined | null
  stars?: undefined | null
  accuracy?: undefined | null
  location?: undefined | null
  checkIn?: undefined | null
  value?: undefined | null
  cleanliness?: undefined | null
  communication?: undefined | null
  order?: undefined | null
  experience?: Experience | null
}

/*
 * A connection to a list of items.

 */
export interface ReviewConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface ReviewEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface ReviewPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  text?: undefined | null
  stars?: undefined | null
  accuracy?: undefined | null
  location?: undefined | null
  checkIn?: undefined | null
  value?: undefined | null
  cleanliness?: undefined | null
  communication?: undefined | null
}

export interface ReviewSubscriptionPayload {
  mutation?: undefined | null
  node?: Review | null
  updatedFields?: undefined | null
  previousValues?: ReviewPreviousValues | null
}

export interface User {
  id?: undefined | null
  createdAt?: undefined | null
  updatedAt?: undefined | null
  displayName?: undefined | null
  phoneNumber?: undefined | null
  responseRate?: Float | null
  responseTime?: Int | null
  ownedRestaurant?: undefined | null
  location?: undefined | null
  orders?: undefined | null
  paymentAccount?: undefined | null
  sentMessages?: undefined | null
  receivedMessages?: undefined | null
  notifications?: undefined | null
  profilePicture?: Picture | null
  experiences?: undefined | null
  accountType?: UserType | null
  uid?: undefined | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo?: undefined | null
  edges?: undefined | null
  aggregate?: undefined | null
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node?: undefined | null
  cursor?: undefined | null
}

export interface UserPreviousValues {
  id?: undefined | null
  createdAt?: undefined | null
  updatedAt?: undefined | null
  displayName?: undefined | null
  phoneNumber?: undefined | null
  responseRate?: Float | null
  responseTime?: Int | null
  accountType?: UserType | null
  uid?: undefined | null
}

export interface UserSubscriptionPayload {
  mutation?: undefined | null
  node?: User | null
  updatedFields?: undefined | null
  previousValues?: UserPreviousValues | null
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