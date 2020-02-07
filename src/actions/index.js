import {
    PLACES_DATA_LOADED,
    MENU_DATA_LOADED,
    ADD_CART_ITEM,
    API_ERROR,
    ORDER_PLACED,
    ORDER_STATUS_CHECKED
} from "../constants/action-types";
import {API_PLACES, API_MENU, PAYMENT_REQUEST, ORDER_STATUS} from "../constants/urls";

export function getPlacesData(searchValue) {
    return function(dispatch) {
        return fetch(API_PLACES + "?search=" + searchValue)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: PLACES_DATA_LOADED, payload: json });
            });
    };
}

export function getPlacesDataByGeolocation(lat, lon) {
    return function(dispatch) {
        return fetch(API_PLACES + "?lat=" + lat + "&lon=" + lon)
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
                if(json.status === "SUCCESS"){
                    dispatch({ type: ORDER_PLACED, payload: {
                        orderId: json.orderId,
                    } }); //TODO make sure dispatch is not async, also make sure to save orderId in local storage

                    window.location.replace(json.redirectUri)
                } else {
                    dispatch({ type: API_ERROR, payload: json });
                }
            });
    };
}

export function checkOrderStatus(orderId) {
    return function(dispatch) {
        return fetch(ORDER_STATUS + "?id=" + orderId)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: ORDER_STATUS_CHECKED, payload: json });
            });
    };
}