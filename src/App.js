import React, { Component } from "react";
import Pizza from "./components/Pizza";
import PizzaSizes from "./components/PizzaSizes";
import ToppingsList from "./components/ToppingsList";
import Costs from "./components/Costs";
import { createStore } from "redux";
import pizzaApp from "./reducers";
import { Provider } from "react-redux";
import {selectSize, saveBasePizza, saveToppings} from "./actions";

const store = createStore(pizzaApp);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			size: "",
			basePizza: null,
			toppings: []
		};

		store.subscribe(() => {
			this.setState({
				size: store.getState().size,
				basePizza: store.getState().basePizza,
				toppings: store.getState().toppings
			});
		});
	}

	render() {
		return (
			<Provider store={store}>
				{this.state.size === "" ? (
					<PizzaSizes
						onClick={size =>
							store.dispatch(selectSize(size))
						}
					/>
				) : null}

				{this.state.size !== "" && this.state.toppings.length === 0 ? (
					<Pizza
						size={this.state.size}
						saveBasePizza={basePizza => store.dispatch(saveBasePizza(basePizza))}
					/>
				) : null}

				{this.state.toppings.length > 0 ? (
					<div>
						<ToppingsList
							toppings={this.state.toppings}
							toppingClick={toppings => store.dispatch(saveToppings(toppings))}
						/>
            <hr />
						<Costs
							basePizza={this.state.basePizza}
							toppings={this.state.toppings}
						/>
					</div>
				) : null}
			</Provider>
		);
	}
}

export default App;
