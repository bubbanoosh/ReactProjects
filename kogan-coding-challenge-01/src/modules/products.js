import AppConfig from '../appConfig/appConfig'

export const FETCH_PRODUCTS = 'products/FETCH_PRODUCTS'
export const FILTER_PRODUCT = 'products/FILTER_PRODUCT'
export const CALCULATE_AVERAGE_WEIGHT = 'products/CALCULATE_AVERAGE_WEIGHT'
export const CALCULATE_AVERAGE_WEIGHT_REQUESTED = 'products/CALCULATE_AVERAGE_WEIGHT_REQUESTED'

const initialState = {
  averageCubicWeight: 0,
  productCategory: 'Air Conditioners',
  currentProducts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        currentProducts: action.payload.data
        //,isIncrementing: true
      }
    case FILTER_PRODUCT:
      return {
        ...state
        //,count: state.count + 1,
        //isIncrementing: !state.isIncrementing
      }

    case CALCULATE_AVERAGE_WEIGHT_REQUESTED:
      return {
        ...state,
        averageCubicWeight: 0
      }

    case CALCULATE_AVERAGE_WEIGHT:
      return {
        ...state,
        averageCubicWeight: action.payload.data
      }

    default:
      return state
  }
}

export const fetchProducts = (page) => {
  return dispatch => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: page
    })
  }
}

export const filterProduct = (product) => {
  return dispatch => {
    dispatch({
      type: FILTER_PRODUCT,
      payload: product
    })
  }
}

export const calculateAverage = () => {
  const average = 250000
  
  return dispatch => {
    dispatch({
      type: CALCULATE_AVERAGE_WEIGHT_REQUESTED
    })

    dispatch({
      type: CALCULATE_AVERAGE_WEIGHT,
      payload: average
    })
  }
}