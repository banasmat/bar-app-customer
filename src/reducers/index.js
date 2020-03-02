import {
    PLACES_DATA_LOADED,
    MENU_DATA_LOADED,
    ADD_CART_ITEM,
    ORDER_PLACED,
    ORDER_STATUS_CHECKED
} from "../constants/action-types";
import {ORDER_STATUS_NONE} from "../constants/order-status";
import {loadState, saveState} from "../store/localStorage";

const initialState = loadState() || {
    remotePlaces: [],
    remoteMenuItems: [],
    currentPlaceData: {},
    cart: {
        items: [],
        priceTotal: 0
    },
    currentOrderId: null,
    orderStatus: ORDER_STATUS_NONE
};


function rootReducer(state = initialState, action) {
    if (action.type === PLACES_DATA_LOADED) {
        return {
            ...state,
            remotePlaces: state.remotePlaces = action.payload
        }
    }
    if (action.type === MENU_DATA_LOADED) {
        console.log(action.payload);
        return {
            ...state,
            remoteMenuItems: state.remoteMenuItems = action.payload.menuItems,
            currentPlaceData: state.currentPlaceData = action.payload.place,
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
    if (action.type === ORDER_PLACED) {
        return {
            ...state,
            currentOrderId: state.currentOrderId = action.payload.orderId
        }
    }
    if (action.type === ORDER_STATUS_CHECKED) {

        if(action.payload.orderStatus !== state.orderStatus){
            return {
                ...state,
                orderStatus: state.orderStatus = action.payload.orderStatus
            }
        }
    }
    //TODO API_ERROR



    return state;
}

export default rootReducer;