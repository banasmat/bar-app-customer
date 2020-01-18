import { PLACES_DATA_LOADED, MENU_DATA_LOADED } from "../constants/action-types";

const initialState = {
    remotePlaces: [],
    remoteMenuItems: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === PLACES_DATA_LOADED) {
        return Object.assign({}, state, {
            remotePlaces: state.remotePlaces = action.payload
        });
    }
    if (action.type === MENU_DATA_LOADED) {
        return Object.assign({}, state, {
            remoteMenuItems: state.remoteMenuItems = action.payload
        });
    }

    return state;
}

export default rootReducer;