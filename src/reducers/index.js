import {
	SELECT_SIZE,
	SAVE_TOPPINGS,
	SUBMIT_ORDER,
	SAVE_BASE_PIZZA
} from "../actions";

const initialState = {
	size: "",
	basePizza: null,
	toppings: []
};

function pizzaApp(state = initialState, action) {
	switch (action.type) {
		case SELECT_SIZE:
			return Object.assign({}, state, {
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
        basePizza: action.pizza,
        toppings: toppings
			});
		case SAVE_TOPPINGS:
			return Object.assign({}, state, {
				toppings: [...action.toppings]
			});
		case SUBMIT_ORDER:
			// todo
			break;
		default:
			return state;
	}
}

export default pizzaApp;
