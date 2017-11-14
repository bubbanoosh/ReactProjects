import axios from 'axios';
import AppConfig from '../../app_config/app_config';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST'; 

// ACTION CREATOR > Reducers
export function fetchPosts () {
    const request = axios.get(`${AppConfig.ROOT_URL}/posts${AppConfig.API_KEY}`);

    return {
        type: FETCH_POSTS,
        // 'Redux promise Middleware' will automatically resolve the request for us
        payload: request 
    };
}

// ACTION CREATOR > Reducers
export function createPost (values) {
    const request = axios.post(`${AppConfig.ROOT_URL}/posts${AppConfig.API_KEY}`, values);

    return {
        type: CREATE_POST,
        // 'Redux promise Middleware' will automatically resolve the request for us
        payload: request 
    }
}