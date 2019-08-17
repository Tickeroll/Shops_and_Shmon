import _ from 'lodash';
import {gamepads} from "../consts/products/Products";
// для каждого действия action Type
const ESHOP_ADD_PRODUCT_TO_BASKET = 'ESHOP_ADD_PRODUCT_TO_BASKET';
const ESHOP_PRODUCT_COUNT_PLUS = 'ESHOP_PRODUCT_COUNT_PLUS';
const ESHOP_PRODUCT_COUNT_MINUS = 'ESHOP_PRODUCT_COUNT_MINUS';

//начальное глобальное состояние
const initialState = {
    basketProducts: [],
    products: gamepads,
};

//редьюсер
export default function ethernetShopsReducer(state = {...initialState}, action) {
    switch (action.type) {
        //для каждого действия свой кейс
        case ESHOP_ADD_PRODUCT_TO_BASKET:
            return {...state, products:action.products, basketProducts: action.basketProducts};
        case ESHOP_PRODUCT_COUNT_PLUS:
            return {...state, products: action.products};
        case ESHOP_PRODUCT_COUNT_MINUS:
            return {...state, products: action.products};
        default:
            return state
    }
}

//для каждого действия экшин в котором логика
export function addProductToBasket(id) {
    return (dispatch, getState) => {
        let basketProducts = _.cloneDeep(getState().ethernetShopsReducer.basketProducts);
        let products = _.cloneDeep(getState().ethernetShopsReducer.products);
        let product = products.find(product => product.id === id);
        let index = products.findIndex(product => product.id === id);
        //логика
        basketProducts.push(product);
        products[index].count = 0;
        dispatch({type: ESHOP_ADD_PRODUCT_TO_BASKET, basketProducts, products})
    }
}

export function productCountPlus(id) {
    return (dispatch, getState) => {
        let products = _.cloneDeep(getState().ethernetShopsReducer.products);
        let index = products.findIndex(product => product.id === id);
        products[index].count = products[index].count + 1;
        dispatch({type: ESHOP_PRODUCT_COUNT_PLUS, products})
    }
}
    export function productCountMinus(id) {
        return (dispatch, getState) => {
            console.log(3, id)
            let products = _.cloneDeep(getState().ethernetShopsReducer.products);
            let index = products.findIndex(product => product.id === id);
            console.log(1, products)
            console.log(2, index)
            if (products[index].count > 0)
            {
                products[index].count = products[index].count - 1;
                dispatch({type: ESHOP_PRODUCT_COUNT_MINUS, products})
            }

        }

}

