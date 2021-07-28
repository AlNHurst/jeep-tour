const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    imageJpg: String
    review: Review
    orders: [Order]
    products: [Product]
  }

  type TourPackage {
    _id: ID
    name: String
    url: String
    shortDescription: String
    longDescription: String
    destinations: [String]
    adultPrice: Int
    childPrice: Int
    duration: Int
    departureTimes: [String]
    orders: [Order]
  }

  type Review {
    _id: ID
    user_id: ID
    comment: String!
    rating: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Product {
    _id: ID
    name: String
    price: Float
    tourPackage: TourPackage
  }

  type Order {
  _id: ID
  name: String
  phone: String
  email: String
  date: String
  time: String
  purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    tourReviews: [Review]
    tourPackages: [TourPackage]
    products: [Product]
    product(id: ID!): Product
    order(_id: ID!): Order
    orders: [Order]
    tourPackage(id: ID!): TourPackage
    checkout(products: [ID]!): Checkout
    getProducts(tourPackage: ID): [Product]
    getOrder(id: ID!): Order
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
  }
`;

module.exports = typeDefs;
