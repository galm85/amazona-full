import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { userSignInReducer, userRegisterReducer } from "./reducers/userReducer";
import { orderCreateReducer } from "./reducers/orderReducer";

const initialState = {
    cart:{
        cartItems:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingAddress:localStorage.getItem('shipping-address') ? JSON.parse(localStorage.getItem('shipping-address')) : {}
    },
    userSignin:{
        userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    paymentMethod:'PayPal'
};

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSignInReducer,
    userRegister:userRegisterReducer,
    orderCreate:orderCreateReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;