import axios from 'axios';
import AppConfig from '../../app_config/app_config';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

// ACTION CREATOR > Reducers
export function fetchPosts() {
    const request = axios.get(`${AppConfig.ROOT_URL}/posts${AppConfig.API_KEY}`);

    return {
        type: FETCH_POSTS,
        // 'Redux promise Middleware' will automatically resolve the request for us
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${AppConfig.ROOT_URL}/posts/${id}${AppConfig.API_KEY}`);
    // .then(response => {
    //     if (response.status === 200) {
    //         return response.data;
    //     } else {
    //         return response
    //     }
    // })
    // .catch(error => { Promise.reject(error) });

    return {
        type: FETCH_POST,
        // 'Redux promise Middleware' will automatically resolve the request for us
        payload: request
    };
}

// ACTION CREATOR > Reducers
export function createPost(values, callback) {

    let postValues = {};
    postValues.title = values.postTitle;
    postValues.categories = values.postCategories;
    postValues.content = values.postContent;

    //window.alert(`You submitted:\n\n${JSON.stringify(postValues, null, 2)}`);

    const request = axios.post(`${AppConfig.ROOT_URL}/posts${AppConfig.API_KEY}`, postValues)
        .then(() => callback());

    return {
        type: CREATE_POST,
        // 'Redux promise Middleware' will automatically resolve the request for us
        payload: request
    }
}

// ACTION CREATOR > Reducers
export function deletePost(id, callback) {
    //window.alert(`Deleting: ${id}`);

    const request = axios.delete(`${AppConfig.ROOT_URL}/posts/${id}${AppConfig.API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        // 'Redux promise Middleware' will automatically resolve the request for us
        payload: id
    }
}