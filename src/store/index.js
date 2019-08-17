import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import qwerty from "../ducks/qwerty";
import ethernetShopsReducer from "../ducks/ethernetShopsReducer";

const middleware = [];

const combineEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

middleware.push(thunkMiddleware);

export default createStore(combineReducers({ethernetShopsReducer, qwerty}), combineEnhancers(applyMiddleware(...middleware)))