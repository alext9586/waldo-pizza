import { SELECT_SIZE, ADD_TOPPING, REMOVE_TOPPING, SUBMIT_ORDER, SAVE_BASE_PIZZA } from "../actions";

const initialState = {
    size: '',
    basePizza: {},
    toppings: []
};

function pizzaApp(state = initialState, action) {
    switch(action.type) {
        case SELECT_SIZE:
            return Object.assign({}, state, {
                size: action.size
            });
        case SAVE_BASE_PIZZA:
            return Object.assign({}, state, {
                basePizza: action.pizza
            })
        case ADD_TOPPING:
            return Object.assign({}, state, {
                toppings: state.toppings.map(topping => topping.selected)
            });
        case REMOVE_TOPPING:
            return Object.assign({}, state, {
                toppings: state.toppings.map(topping => topping.selected)
            });
        case SUBMIT_ORDER:
            // todo
            break;
        default:
            return state;
    }
}

export default pizzaApp;