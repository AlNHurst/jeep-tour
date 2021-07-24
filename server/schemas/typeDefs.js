const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    reviews: [Review]
  }

  type TourPackage {
    _id: ID
    name: String
    url: String
    description: String
    adultPrice: Int
    childPrice: Int
    duration: Int
    departureTimes: String
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

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    tourReviews: [Review]
    tourPackages: [TourPackage]
    tourPackage(id: ID!): TourPackage
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
