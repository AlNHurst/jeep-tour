import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      reviews {
        _id
        comment
        rating
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_TOUR = gql`
  query tourPackages($id: ID!) {
    tourPackages(id: $id) {
      _id
      name
      description
      adultPrice
      childPrice
      duration
      departureTimes
    }

  }`;