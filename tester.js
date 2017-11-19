import fetch from 'isomorphic-fetch';

// One action to tell your app you're fetching data
export const GET_CART_PRODUCTS_REQUEST = 'GET_CART_PRODUCTS_REQUEST'
function getCartProductsRequest(customerId) {
  return {
    type: GET_CART_PRODUCTS_REQUEST,
    customerId
  };
}

// One action to signify success
export const GET_CART_PRODUCTS_SUCCESS = 'GET_CART_PRODUCTS_SUCCESS'
function getCartProductsSuccess(cartProducts) {
  return {
    type: GET_CART_PRODUCTS_SUCCESS,
    cartProducts
  };
};

// One action to signify an error
export const GET_CART_PRODUCTS_ERROR = 'GET_CART_PRODUCTS_ERROR'
function getCartProductsSuccess(error) {
  return {
    type: GET_CART_PRODUCTS_ERROR,
    error
  };
};

// This is the async action that fires one action when it starts
// And then one of two actions when it finishes
export function fetchCartProducts(customerId) {
  return dispatch => {
    // Dispatch action that tells your app you're going to get data
    // This is where you'll set any 'isLoading' state in your store
    dispatch(getCartProductsRequest(customerId))

    return fetch('https://api.website.com/customers/' + customerId + '/cartProducts')
      .then(response => response.json())
      .then(
        // Fire success action on success
        cartProducts => dispatch(getCartProductsSuccess(cartProducts)),

        // Fire error action on error
        error => dispatch(getCartProductsError(error))
      );
    };
  };
}