import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      imageJpg
      review {
        _id
        comment
        rating
      }
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          price
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($tourPackage: ID) {
    getProducts(tourPackage: $tourPackage) {
      _id
      name
      price
      tourPackage {
        _id
        name
      }
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query product($id: ID!) {
    product(id: $id) {
      _id
      name
      price
      tourPackage {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query products {
    products {
      _id
      name
      price
      tourPackage {
        _id
        name
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query checkout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      review {
        _id
        name
        comment
        rating
      }
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          price
        }
      }
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
      destinations
      shortDescription
      longDescription
      adultPrice
      childPrice
      duration
      departureTimes
    }
  }
`;

export const QUERY_TOUR = gql`
  query tourPackage($id: ID!) {
    tourPackage(id: $id) {
      _id
      name
      url
      destinations
      shortDescription
      longDescription
      adultPrice
      childPrice
      duration
      departureTimes
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query tourReviews {
    tourReviews {
      _id
      name
      comment
      rating
    }
  }
`;

export const Query_ORDERS = gql`
  query orders {
    orders {
      _id
      purchaseDate
      products {
        _id
        name
      }
    }
  }
`;

export const Query_ORDER = gql`
  query order($id: ID!) {
    order(id: $id) {
      _id
      purchaseDate
      products {
        _id
        name
      }
    }
  }
`;

export const Query_GET_ORDER = gql`
  query getOrder($id: ID!) {
    order(id: $id) {
      _id
      purchaseDate
      products {
        _id
        name
      }
    }
  }
`;

export const QUERY_RESERVATIONS = gql`
  query reservations {
    reservations {
      _id
      name
      phone
      email
      date
      time
    }
  }
`;