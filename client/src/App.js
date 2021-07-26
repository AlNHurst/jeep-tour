import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Home from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import SingleTour from './pages/SingleTour';
import ProductList from './components/ProductList';



// stripe promise
const stripePromise = loadStripe('pk_test_51JGnh7DEEk2RiGSYfn0k0rI7DQBnnGaZHdJn0JQEOg1ed4scJaWl9sKA1vsitOL0ly42farkhEjSMyT7xvoL7k9s00RMkS6hcM');

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <StoreProvider>
      <ApolloProvider client={client}>
        <Elements stripe={stripePromise}>
          <Router>
            <Navbar></Navbar>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/singletour/:tourId">
              <SingleTour />
            </Route>
            <Route exact path="/productlist">
              <ProductList />
            </Route>
            <Footer />
          </Router>
        </Elements>
      </ApolloProvider >
    </StoreProvider>
  );
}

export default App;
