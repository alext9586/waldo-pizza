import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Pizza from "./components/Pizza";
import PizzaSizes from "./components/PizzaSizes";
import {
	selectSize,
	saveBasePizza,
	saveToppings,
	addPizzaToCart,
	removeCurrentPizza,
	removePizzaFromCart,
	submitOrder,
	start
} from "./actions";
import pizzaApp, {
	STAGE_SELECT_SIZE,
	STAGE_LOAD_PIZZA,
	STAGE_SELECT_TOPPINGS,
	STAGE_SUBMIT
} from "./reducers";
import SubmitContainer from "./containers/SubmitContainer";
import CartContainer from "./containers/CartContainer";
import ToppingSelectContainer from "./containers/ToppingSelectContainer";

const store = createStore(pizzaApp);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = store.getState();

		store.subscribe(() => {
			this.setState({
				stage: store.getState().stage,
				size: store.getState().size,
				basePizza: store.getState().basePizza,
				toppings: store.getState().toppings,
				cart: store.getState().cart
			});
		});
	}

	render() {
		const { stage, size, basePizza, toppings, cart } = this.state;

		return (
			<Provider store={store}>
				<h1>Waldo Pizza</h1>
				<p>
					<i>Best pizza between a rock and a weird place!</i>
				</p>
				<hr />
				{stage === STAGE_SELECT_SIZE ? (
					<PizzaSizes onClick={s => store.dispatch(selectSize(s))} />
				) : null}

				{stage === STAGE_LOAD_PIZZA ? (
					<Pizza
						size={size}
						saveBasePizza={bp => store.dispatch(saveBasePizza(bp))}
					/>
				) : null}

				{stage === STAGE_SELECT_TOPPINGS ? (
					<ToppingSelectContainer
						basePizza={basePizza}
						toppings={toppings}
						toppingClick={t => store.dispatch(saveToppings(t))}
						addClick={e => store.dispatch(addPizzaToCart())}
						removeClick={e => store.dispatch(removeCurrentPizza())}
					/>
				) : null}

				{cart.length > 0 ? (
					<div>
						<hr />
						<CartContainer
							cart={cart}
							removeClick={p => store.dispatch(removePizzaFromCart(p))}
							submitClick={e => store.dispatch(submitOrder())}
						/>
					</div>
				) : null}

				{stage === STAGE_SUBMIT ? (
					<SubmitContainer
						newOrderClick={e => store.dispatch(start())}
					/>
				) : null}
			</Provider>
		);
	}
}

export default App;
