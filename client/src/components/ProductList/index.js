import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useParams } from 'react-router-dom';
import CartItem from '../Cart';


const ProductList = () => {
  const [state, dispatch] = useStoreContext();

  const { tourId } = useParams();



  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { tourPackage: tourId },
  });
  

  useEffect(() => {
    if (data?.getProducts) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.getProducts,
      });
      
      data.getProducts.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  return (
    <>
      <div className="my-2">
        <h2>Reservation Form
        </h2>
        <form className="box">
          <div className="field">
            <label
              className="label">Full Name
            </label>
            <div className="control">
              <input type="text" placeholder="Full Name" className="input" name="name"
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label">Phone Number
            </label>
            <div className="control">
              <input type="tel" placeholder="Phone Number" className="input" name="number"
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label">Email</label>
            <div className="control">
              <input type="email" placeholder="email@email.com" className="input" name="email"
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label">Desired Tour Date</label>
            <div className="control">
              <input type="date" placeholder="01/01/2022" className="input" name="date"
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label">Departure Time</label>
            <div className="control">
              <select
                placeholder="01/01/2022"
                className="input"
                name="time">
                <option value="8:30 a.m.">8:30 A.M.</option>
                <option value="2:00 a.m.">2:00 P.M.</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div>
        {
          state.products.length ? (
            <div>
              {state.products.map((product) => (
                <ProductItem
                  key={product._id}
                  _id={product._id}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            <h3>You haven't added any products yet!</h3>
          )
        }
      </div>
      <CartItem />

      <button>
        Make Reservation
      </button>
    </>
  );
}

export default ProductList;
