export const SELECT_SIZE = 'SELECT_SIZE';
export const SAVE_BASE_PIZZA = 'SAVE_BASE_PIZZA';
export const SAVE_TOPPINGS = 'SAVE_TOPPINGS';
export const SUBMIT_ORDER = 'SUBMIT_ORDER';

export function selectSize(size) {
    return { type: SELECT_SIZE, size: size }
}

export function saveBasePizza(pizza) {
    return { type: SAVE_BASE_PIZZA, pizza: pizza }
}

export function saveToppings(toppings) {
    return { type: SAVE_TOPPINGS, toppings: toppings }
}

export function submitOrder() {
    return { type: SUBMIT_ORDER }
}