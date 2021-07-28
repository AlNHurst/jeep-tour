import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        price    
        tourPackage {
          _id
        }
      }
    }
  }
`;

export const ADD_RESERVATION = gql`
  mutation addReservation($name: String!, $phone: String!, $email: String!, $date: String!, $time: String!) {
    addReservation(name: $name, phone: $phone, email: $email, date: $date, time: $time) 
      {
        _id
        name
        phone
        email
        date
        time 
      }
    }
  
`;

export const ADD_REVIEW = gql`
  mutation addReview($name: String!, $comment: String!, $rating: String!) {
    addReview(name: $name, comment: $comment, rating: $rating) 
      {
        _id
        name
        comment
        rating 
      }
    }`
  ;


