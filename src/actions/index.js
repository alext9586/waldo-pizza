export const SELECT_SIZE = 'SELECT_SIZE';
export const SAVE_BASE_PIZZA = 'SAVE_BASE_PIZZA';
export const ADD_TOPPING = 'ADD_TOPPING';
export const REMOVE_TOPPING = 'REMOVE_TOPPING';
export const SUBMIT_ORDER = 'SUBMIT_ORDER';

export function selectSize(size) {
    return { type: SELECT_SIZE, size }
}

export function saveBasePizza(pizza) {
    return { type: SAVE_BASE_PIZZA, pizza }
}

export function addTopping(topping) {
    return { type: ADD_TOPPING, topping }
}

export function removeTopping(topping) {
    return { type: REMOVE_TOPPING, topping }
}

export function submitOrder() {
    return { type: SUBMIT_ORDER }
}