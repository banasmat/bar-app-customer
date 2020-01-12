import { PLACES_DATA_LOADED } from "../constants/action-types";
import { API_PLACES } from "../constants/urls";

export function getPlacesData(searchValue) {
    return function(dispatch) {
        return fetch(API_PLACES + "?search=" + searchValue)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: PLACES_DATA_LOADED, payload: json });
            });
    };
}