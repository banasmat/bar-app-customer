import {
    PLACES_DATA_LOADED,
    MENU_DATA_LOADED,
    ADD_CART_ITEM,
    ORDER_PLACED,
    ORDER_STATUS_CHECKED
} from "../constants/action-types";
import {
    ORDER_STATUS_ACCEPTED,
    ORDER_STATUS_FINISHED,
    ORDER_STATUS_NONE,
    ORDER_STATUS_READY
} from "../constants/order-status";
import {loadState, saveState} from "../store/localStorage";

let vibrateInterval;

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
        if(action.payload.status !== state.orderStatus){
            if(action.payload.status === ORDER_STATUS_ACCEPTED){
                // If payment goes well, clear cart data (so it's cleared from local storage)
                return {
                    ...state,
                    remotePlaces: [],
                    remoteMenuItems: [],
                    currentPlaceData: {},
                    cart: {
                        items: [],
                        priceTotal: 0
                    },
                    orderStatus: state.orderStatus = action.payload.status
                }
            } else if(action.payload.status === ORDER_STATUS_READY){
                //TODO might move vibration to middleware
                //TODO button to stop
                vibrateInterval = setInterval(function() {
                    window.navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);
                }, 5000);

            } else if(action.payload.status === ORDER_STATUS_FINISHED){
                if(vibrateInterval) clearInterval(vibrateInterval);
                window.navigator.vibrate(0);
                return {
                    ...state,
                    currentOrderId: null,
                    orderStatus: state.orderStatus = action.payload.status
                }
            }

            return {
                ...state,
                orderStatus: state.orderStatus = action.payload.status
            }
        }
    }
    //TODO API_ERROR



    return state;
}

export default rootReducer;