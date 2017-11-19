import AppConfig from '../appConfig/appConfig'
import axios from 'axios'
import _ from 'lodash'

export const FETCH_PRODUCTS = 'products/FETCH_PRODUCTS'
export const FETCH_PRODUCTS_ERROR = 'products/FETCH_PRODUCTS_ERROR'
export const FILTER_PRODUCT = 'products/FILTER_PRODUCT'
export const CALCULATE_AVERAGE_WEIGHT = 'products/CALCULATE_AVERAGE_WEIGHT'
export const CALCULATE_AVERAGE_WEIGHT_REQUESTED = 'products/CALCULATE_AVERAGE_WEIGHT_REQUESTED'

const initialState = {
    averageCubicWeight: 0,
    productCategory: 'Air Conditioners',
    currentPageResponse: [],
    nextPage: '',
    productsError: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log('FETCH_PRODUCTS:' + action.payload.data.objects);
            return {
                ...state,
                currentPageResponse: action.payload // _.mapKeys(action.payload.data, 'title')
                //,isIncrementing: true
            }
        case FETCH_PRODUCTS_ERROR:

            return {
                ...state,
                productsError: action.error
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

export const fetchProducts = (firstPage = '/api/products/1') => {
    let error = {};

    function get(axios, firstPage) {
        function fetch(page, responses) {

            console.log('axios.get b4:' + page);
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
        console.log('FUKER');
        const responses = [];
        return fetch(firstPage, responses).then(() => {
            const results = responses.map(response => response.data.objects);
            let hmmm = [].concat(...results);
            console.log('Hmmm:' + hmmm);
            return hmmm;
        });
    }

    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: get(axios, firstPage)
        })
    }

}

export const fetchProductsNewer = (firstPage = '/api/products/1') => {
    let results = [];
    let newResults = [];
    let error = {};

    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: justGetIt(firstPage, newResults)
        })
    }

    function justGetIt(pge, newResults) {
        fetchAllProducts(pge)
            .then(fragment => {
                if (fragment.data.next) {
                    console.log('HERE' + fragment.data.next)
                    return justGetIt(fragment.data.next)
                        .then(nextFragment => fragment.data.objects)//.concat(nextFragment))
                } else {
                    console.log('THERE')
                    return fragment.data;
                }
            });
    }
    function fetchAllProducts(page) {
        return axios.get(`${AppConfig.API_ROOT_URL}${page}`);

        // const req = axios.get(`${AppConfig.API_ROOT_URL}${page}`)
        // .then(r => r)
    }
}

export const fetchProductsOld = (page = '/api/products/1') => {
    let results = [];
    let newResults = [];
    let error = {};

    return dispatch => {
        dispatch({
            type: 'FETCH_PRODUCTS',
            payload: fetchAllProducts(page)
        })
    }
    function fetchAllProducts(page) {
        axios.get(`${AppConfig.API_ROOT_URL}${page}`)
            .then(response => {


                //results.push(response.data.objects);
                newResults = response.data.objects;
                console.log('newResults: ' + newResults);
                //const nextPage = response.data.next;


                if (response.data.next) {
                    console.log('Payload1:' + response.data.objects);
                    return fetchAllProducts(response.data.next)
                        .then(nextResponse => response.data.objects.push(...nextResponse))
                } else {
                    console.log('Payload:' + response.data);
                    return response.data
                }
            }).catch((error) =>
                error = error.response
            )
    }




    // return dispatch => {
    //     // axios.get(`${AppConfig.API_ROOT_URL}${page}`)
    //     //     .then((response) => {
    //     //         dispatch({
    //     //             type: FETCH_PRODUCTS,
    //     //             payload: response
    //     //         })
    //     //     }
    //     //     ).catch((error) =>
    //     //         dispatch({
    //     //             type: FETCH_PRODUCTS_ERROR,
    //     //             error: error.response
    //     //         })
    //     //     )
    // }
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