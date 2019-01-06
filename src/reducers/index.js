import {
	START,
	SELECT_SIZE,
	SAVE_TOPPINGS,
	SUBMIT_ORDER,
	SAVE_BASE_PIZZA,
	ADD_PIZZA_TO_CART,
	REMOVE_CURRENT_PIZZA,
	REMOVE_PIZZA_FROM_CART
} from "../actions";

export const STAGE_START = 0;
export const STAGE_SELECT_SIZE = 1;
export const STAGE_LOAD_PIZZA = 2;
export const STAGE_SELECT_TOPPINGS = 3;
export const STAGE_SUBMIT = 4;

const initialState = {
	stage: STAGE_SELECT_SIZE,
	size: "",
	basePizza: null,
	toppings: [],
	cart: []
};

function pizzaApp(state = initialState, action) {
	switch (action.type) {
		case START:
			return Object.assign({}, initialState);
		case SELECT_SIZE:
			return Object.assign({}, state, {
				stage: STAGE_LOAD_PIZZA,
				size: action.size
			});
		case SAVE_BASE_PIZZA:
			const toppings = action.pizza.toppings.map((topping, index) => {
				return {
					id: index,
					selected: topping.defaultSelected,
					name: topping.topping.name,
					price: topping.topping.price
				};
			});
			return Object.assign({}, state, {
				stage: STAGE_SELECT_TOPPINGS,
				basePizza: action.pizza,
				toppings: toppings
			});
		case SAVE_TOPPINGS:
			return Object.assign({}, state, {
				toppings: [...action.toppings]
			});
		case ADD_PIZZA_TO_CART:
			const pizza = {
				id: Math.random() * 1000000,
				basePizza: state.basePizza,
				toppings: state.toppings.filter(t => t.selected),
				price: state.basePizza.basePrice + state.toppings.filter(t => t.selected).map(t => t.price).reduce((a,b) => a + b)
			};
			
			return Object.assign({}, initialState, {
				cart: [...state.cart, pizza]
			});
		case REMOVE_PIZZA_FROM_CART:
			const cart = state.cart.filter(p => p.id !== action.id);
			return Object.assign({}, state, {
				cart: cart
			});
		case REMOVE_CURRENT_PIZZA:
			return Object.assign({}, initialState, {
				cart: [...state.cart]
			});
		case SUBMIT_ORDER:
			return Object.assign({}, initialState, {
				stage: STAGE_SUBMIT
			});
		default:
			return state;
	}
}

export default pizzaApp;
