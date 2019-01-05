import {
	SELECT_SIZE,
	SAVE_TOPPINGS,
	SUBMIT_ORDER,
	SAVE_BASE_PIZZA
} from "../actions";

export const STAGE_SELECT_SIZE = 1;
export const STAGE_LOAD_PIZZA = 2;
export const STAGE_SELECT_TOPPINGS = 3;
export const STAGE_SUBMIT = 4;

const initialState = {
	stage: STAGE_SELECT_SIZE,
	size: "",
	basePizza: null,
	toppings: []
};

function pizzaApp(state = initialState, action) {
	switch (action.type) {
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
		case SUBMIT_ORDER:
      return Object.assign({}, state, {
        stage: STAGE_SUBMIT
      });
		default:
			return state;
	}
}

export default pizzaApp;
