import { PLACES_DATA_LOADED } from "../constants/action-types";

export function getPlacesData(searchValue) {
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: PLACES_DATA_LOADED, payload: json });
            });
    };
}