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

import Home from './pages/Home';
import Footer from './components/Footer';
import SingleTour from './pages/SingleTour';
import ProductList from './components/ProductList';
import Success from './pages/Success';
import NavigationBar from './components/NavigationBar';
import HomeHero from './components/HomeHero';
import OrderHistory from './pages/OrderHistory';
import ReviewForm from './components/ReviewForm';
import TourReviews from './components/TourReviews';
import About from './pages/About';

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
        <Router>
          <div className="grid-areas">
            <NavigationBar className="navigation-grid"/>
            <HomeHero className="homehero-grid" />

            <Route exact path="/"><Home className="home-grid" />
            </Route>

            <Route exact path="/singletour/:tourId"><SingleTour />
            </Route>

            <Route exact path="/productlist"><ProductList />
            </Route>

            <Route exact path="/about"><About />
            </Route>

            <Route exact path="/success" component={Success} />

            <Route exact path="/orderHistory" component={OrderHistory} />

            <TourReviews className="review-grid"/>
            <ReviewForm className="review-form-grid"/>
            <Footer className="footer-grid" />
          </div>
        </Router>
      </ApolloProvider >
    </StoreProvider>

  );
}

export default App;
