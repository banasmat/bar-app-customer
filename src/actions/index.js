import { PLACES_DATA_LOADED, MENU_DATA_LOADED } from "../constants/action-types";
import { API_PLACES, API_MENU } from "../constants/urls";

export function getPlacesData(searchValue) {
    return function(dispatch) {
        return fetch(API_PLACES + "?search=" + searchValue)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: PLACES_DATA_LOADED, payload: json });
            });
    };
}

export function getMenuData(placeId) {
    return function(dispatch) {
        return fetch(API_MENU + "?id=" + placeId)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: MENU_DATA_LOADED, payload: json });
            });
    };
}