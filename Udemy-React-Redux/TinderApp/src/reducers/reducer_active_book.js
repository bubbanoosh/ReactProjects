// State arg is NOT application state
//  ONLY the state this reducer is responsible for
export default function(state = null, action) {
    switch (action) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }

    //return state;
}