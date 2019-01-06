export const START = "START";
export const SELECT_SIZE = "SELECT_SIZE";
export const SAVE_BASE_PIZZA = "SAVE_BASE_PIZZA";
export const SAVE_TOPPINGS = "SAVE_TOPPINGS";
export const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART";
export const REMOVE_PIZZA_FROM_CART = "REMOVE_PIZZA_FROM_CART";
export const REMOVE_CURRENT_PIZZA = "REMOVE_CURRENT_PIZZA";
export const SUBMIT_ORDER = "SUBMIT_ORDER";

export function start() {
    return { type: START };
}

export function selectSize(size) {
	return { type: SELECT_SIZE, size: size };
}

export function saveBasePizza(pizza) {
	return { type: SAVE_BASE_PIZZA, pizza: pizza };
}

export function saveToppings(toppings) {
	return { type: SAVE_TOPPINGS, toppings: toppings };
}

export function addPizzaToCart() {
	return { type: ADD_PIZZA_TO_CART };
}

export function removePizzaFromCart(pizzaId) {
	return { type: REMOVE_PIZZA_FROM_CART, id: pizzaId };
}

export function removeCurrentPizza() {
	return { type: REMOVE_CURRENT_PIZZA };
}

export function submitOrder() {
	return { type: SUBMIT_ORDER };
}
