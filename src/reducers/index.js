import { PLACES_DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles: [],
    remotePlaces: []
};

function rootReducer(state = initialState, action) {
    if (action.type === PLACES_DATA_LOADED) {
        return Object.assign({}, state, {
            remotePlaces: state.remotePlaces.concat(action.payload)
        });
    }

    return state;
}

export default rootReducer;