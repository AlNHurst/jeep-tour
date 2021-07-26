import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useParams } from 'react-router-dom';


const ProductList = () => {
  const [state, dispatch] = useStoreContext();

  const { tourId } = useParams();
  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { id: tourId },
  });

  useEffect(() => {
    if (data?.products) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      console.log(data.products);
      data.products.forEach((product) => {
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
        <h2>Our Products:</h2>
        {state.products.length ? (
          <div className="flex-row">
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
        )}
      </div>
      <button>
        Make Reservation
      </button>
    </>
  );
}

export default ProductList;
