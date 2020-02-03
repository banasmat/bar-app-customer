import { PLACES_DATA_LOADED, MENU_DATA_LOADED, ADD_CART_ITEM, API_ERROR } from "../constants/action-types";
import { API_PLACES, API_MENU, PAYMENT_REQUEST } from "../constants/urls";

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

export function addToCart(menuItem, count) {
    return function(dispatch) {
        return dispatch({ type: ADD_CART_ITEM, payload: {
            menuItem: menuItem,
            count: count
        } });
    };
}

export function requestPayment(paymentData) {
    return function(dispatch) {

        return fetch(PAYMENT_REQUEST, {
            // method: "POST", TODO uncomment when api is ready
            // body: JSON.stringify(paymentData),
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                if(json.status === "SUCCESS"){
                    window.location.replace(json.redirectUri)
                } else {
                    dispatch({ type: API_ERROR, payload: json });
                }
            });
    };
}