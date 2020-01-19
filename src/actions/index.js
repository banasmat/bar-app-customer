import { PLACES_DATA_LOADED, MENU_DATA_LOADED, ADD_TO_CART } from "../constants/action-types";
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

export function addToCart(placeId, menuItemId, count) {
    return function(dispatch) {
        return dispatch({ type: ADD_TO_CART, payload: {
            placeId: placeId,
            menuItemId: menuItemId,
            count: count
        } });
    };
}