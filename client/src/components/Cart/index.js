import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

const stripePromise = loadStripe('pk_test_51JGnh7DEEk2RiGSYfn0k0rI7DQBnnGaZHdJn0JQEOg1ed4scJaWl9sKA1vsitOL0ly42farkhEjSMyT7xvoL7k9s00RMkS6hcM');
console.log(stripePromise);

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  console.log(data);

  useEffect(() => {
    if (data?.checkout?.session) {
      stripePromise.then((res) => {
        console.log('res-23', res);
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
  console.log('data-26', data);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  // function toggleCart() {
  //   dispatch({ type: TOGGLE_CART });
  // }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];
    console.log('product-id', productIds);

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    // Before getCheckout executes, run a submitHandler for the form input submission

    getCheckout({
      variables: { products: productIds },
    });
  }



  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <p>
          Your cart is empty! Please click "Add to cart" to add tickets to your reservation.
        </p>
      )}
    </div>
  );
};

export default Cart;
