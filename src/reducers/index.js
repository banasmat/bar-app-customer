import { PLACES_DATA_LOADED, MENU_DATA_LOADED, ADD_TO_CART } from "../constants/action-types";

const initialState = {
    remotePlaces: [],
    remoteMenuItems: [],
    cart: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === PLACES_DATA_LOADED) {
        return {
            ...state,
            remotePlaces: state.remotePlaces = action.payload
        }
    }
    if (action.type === MENU_DATA_LOADED) {
        return {
            ...state,
            remoteMenuItems: state.remoteMenuItems = action.payload
        }
    }
    if (action.type === ADD_TO_CART) {
        // Increment count if menuItem is already in cart
        let cart = state.cart;
        let newCartItem = action.payload;
        if(newCartItem.menuItemId in state.cart){
            newCartItem.count += cart[newCartItem.menuItemId].count;
        }
        cart[newCartItem.menuItemId] = newCartItem;

        return {
            ...state,
            cart: cart
        }
    }

    return state;
}

export default rootReducer;