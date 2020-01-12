import { PLACES_DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles: [],
    remotePlaces: []
};

function rootReducer(state = initialState, action) {
    if (action.type === PLACES_DATA_LOADED) {
        return Object.assign({}, state, {
            remotePlaces: state.remotePlaces = action.payload
        });
    }

    return state;
}

export default rootReducer;