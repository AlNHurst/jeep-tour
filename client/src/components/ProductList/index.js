import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useParams } from 'react-router-dom';
import ReservationForm from '../ReservationForm';

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
     
      {/* <button>
        Make Reservation
      </button> */}
    </>
  );
}

export default ProductList;
