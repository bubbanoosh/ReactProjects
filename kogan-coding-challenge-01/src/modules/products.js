import AppConfig from '../appConfig/appConfig'
import axios from 'axios'
import _ from 'lodash'

export const FETCH_PRODUCTS = 'products/FETCH_PRODUCTS'
export const FETCH_PRODUCTS_REQUEST = 'products/FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'products/FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'products/FETCH_PRODUCTS_ERROR'
export const FILTER_PRODUCT = 'products/FILTER_PRODUCT'
export const SET_CURRENT_PRODUCTS = 'products/SET_CURRENT_PRODUCTS'
export const CALCULATE_AVERAGE_WEIGHT = 'products/CALCULATE_AVERAGE_WEIGHT'
export const CALCULATE_AVERAGE_WEIGHT_REQUESTED = 'products/CALCULATE_AVERAGE_WEIGHT_REQUESTED'

const initialState = {
    averageCubicWeight: 0,
    productCategory: 'Air Conditioners',
    currentPageResponse: [],
    currentProducts: [],
    nextPage: '',
    productsError: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:

            return {
                ...state,
                currentPageResponse: action.payload
            }
        case FETCH_PRODUCTS_REQUEST:

            return {
                ...state,
                productCategory: action.productCategory
            }
        case SET_CURRENT_PRODUCTS:

            return {
                ...state,
                currentProducts: action.payload
            }
        case FETCH_PRODUCTS_ERROR:

            return {
                ...state,
                productsError: action.error
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
                averageCubicWeight: action.payload
            }

        default:
            return state
    }
}

export const fetchProducts = (firstPage = '/api/products/1') => {
    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS_REQUEST,
            productCategory: 'Air Conditioners'
        })

        get(axios, firstPage, dispatch)
    }

    function get(axios, firstPage, dispatch) {
        function fetch(page, responses) {

            return new Promise((resolve) => {
                axios.get(`${AppConfig.API_ROOT_URL}${page}`).then(response => {

                    responses.push(response);
                    if (response.data.next !== null) {
                        fetch(response.data.next, responses).then(() => resolve());
                    } else {
                        resolve();
                    }
                });
            });
        }
        const responses = [];
        return fetch(firstPage, responses).then(() => {

            const results = responses.map(response => response.data.objects);
            const allResults = [].concat(...results);

            console.log('FETCH_PRODUCTS_REQUEST:' + allResults);

            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: allResults
            })
        });
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

export const setCurrentProducts = (currentProducts) => {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_PRODUCTS,
            payload: currentProducts
        })
    }
}

export const calculateAverage = (currentProducts) => {
    //const average = 0

    return dispatch => {
        dispatch({
            type: CALCULATE_AVERAGE_WEIGHT_REQUESTED
        })

        getAverage(currentProducts, dispatch)
    }

    function getAverage(currentProducts, dispatch) {
        let avg = 0
        if (currentProducts.length > 0) {
            avg = calculateAverageWeight(currentProducts)
        }
        dispatch({
            type: CALCULATE_AVERAGE_WEIGHT,
            payload: avg
        })

    }

    function calculateAverageWeight(currentProducts) {

        let avg = 0;
        let weights = [];

        currentProducts.forEach(c => {

            const prod = c
            const weight = c.weight
            const size = c.size

            const dimensions = calculateDimensions(size)

            console.log('dimensions: ' + dimensions);

            const totalWeight = dimensions * 250

            console.log('totalWeight: ' + totalWeight);


            weights.push(totalWeight)
        });

        console.log('weights.length: ' + weights.length);

        avg = _.mean(weights)

        console.log('avg: ' + avg);

        return round(avg, 2)
    }

    function calculateDimensions(size) {
        const w = (size.width / 100)
        const l = (size.length / 100)
        const h = (size.height / 100)
        const cubic = (w * l * h)

        return round(cubic, 2)
    }

    function round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
}