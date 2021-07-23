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


export const QUERY_TOURS = gql`
  query tourPackages {
    tourPackages {
      _id
      name
      url
      description
      adultPrice
      childPrice
      duration
      departureTimes
    }

  }
`;

export const QUERY_TOUR = gql`
  query tourPackages($id: ID!) {
    tourPackages(id: $id) {
      _id
      name
      url
      description
      adultPrice
      childPrice
      duration
      departureTimes
    }

  }`;

export const QUERY_REVIEWS = gql`
  query tourReviews($tour_id: ID!) {
    tourReviews(tour_id: $tour_id) {
      _id
      user_id
      tour_id
      comment
      rating  
    }

  }`;