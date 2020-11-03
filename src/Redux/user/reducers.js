import { ActionTypes } from './actionTypes.js';

const defaultState = {
    bids: [],
}

const userReducer = (state = defaultState, action) => {

    switch(action.type) {
        case ActionTypes.USER_AUTH_UPDATE: 
        return {
            ...state,
            isLoggedIn: action.isLoggedIn,
            profile: action.profile,
        }
        default:
            return state;
    }
}

export default userReducer;