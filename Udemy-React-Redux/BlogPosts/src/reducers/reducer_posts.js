import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

// REDUCER_POSTS
export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            // Clean up State after delete
            //  Action Creator's payload === id
            return _.omit(state, action.payload);
        case FETCH_POSTS:
            // [ {post1}, {post2} ]
            // We want to transform to
            //      { id1: {}, id2: {} } 
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            /*
            ...state === 'Get all th existing posts etc that are already in the state'
            */
            // // ES5
            // const post = action.payload.data;
            // const newState =  { ...state };
            // newState[post.id] = post; // Replace in the existing state
            // return newState;

            // ES6 'Key interpolation' (This does NOT create an array)
            //  adding the new key to the over all state
            //if (action.payload.data !== undefined) {
                return { ...state, [action.payload.data.id]: action.payload.data }
            // }
            // else {
            //     return state;
            // }

        default:
            return state;
    }
}

