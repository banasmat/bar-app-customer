import { PLACES_DATA_LOADED, MENU_DATA_LOADED, ADD_CART_ITEM } from "../constants/action-types";

const initialState = {
    remotePlaces: [],
    remoteMenuItems: [],
    cart: {
        items: [],
        priceTotal: 0
    },
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
    if (action.type === ADD_CART_ITEM) {
        // Increment count if menuItem is already in cart
        let cartItems = {...state.cart.items};
        let newCartItem = action.payload;
        if(newCartItem.menuItem.id in state.cart.items){
            newCartItem.count += cartItems[newCartItem.menuItem.id].count;
        }
        cartItems[newCartItem.menuItem.id] = newCartItem;

        return {
            ...state,
            cart: {
                ...state.cart,
                items: {
                    ...state.cart.items,
                    [newCartItem.menuItem.id]: newCartItem
                },
                priceTotal: Object.values(cartItems).reduce((prev, curr) => {
                    return prev + curr.menuItem.price * curr.count;
                }, 0)
            }
        }
    }
    //TODO API_ERROR

    return state;
}

export default rootReducer;