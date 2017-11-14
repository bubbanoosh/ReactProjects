import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

// REDUCER_POSTS
export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // [ {post1}, {post2} ]
            // We want to transform to
            //      { id1: {}, id2: {} } 
            return _.mapKeys(action.payload.data, 'id'); 
        default:
            return state;
    }
}

