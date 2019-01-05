import React, { Component } from "react";
import Pizza from "./components/Pizza";
import PizzaSizes from "./components/PizzaSizes";
import ToppingsList from "./components/ToppingsList";
import Costs from "./components/Costs";
import { createStore } from "redux";
import pizzaApp from "./reducers";
import { Provider } from "react-redux";
import {selectSize, saveBasePizza, saveToppings, addPizzaToCart} from "./actions";
import {STAGE_SELECT_SIZE, STAGE_LOAD_PIZZA, STAGE_SELECT_TOPPINGS} from "./reducers";
import TotalCosts from "./components/TotalCosts";

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
  
  changeStage(newStage) {
    this.setState({
      stage: newStage
    })
  }

	render() {
    const {stage} = this.state;

		return (
			<Provider store={store}>
				{stage === STAGE_SELECT_SIZE ? (
					<PizzaSizes
						onClick={size =>
							store.dispatch(selectSize(size))
						}
					/>
				) : null}

				{stage === STAGE_LOAD_PIZZA ? (
					<Pizza
						size={this.state.size}
						saveBasePizza={basePizza => store.dispatch(saveBasePizza(basePizza))}
					/>
				) : null}

				{stage === STAGE_SELECT_TOPPINGS ? (
					<div>
						<ToppingsList
              maxToppings={this.state.basePizza.maxToppings}
							toppings={this.state.toppings}
							toppingClick={toppings => store.dispatch(saveToppings(toppings))}
						/>
            <hr />
						<Costs
							basePizza={this.state.basePizza}
							toppings={this.state.toppings}
						/>
						<button onClick={e => store.dispatch(addPizzaToCart())}>Add to Cart</button>
					</div>
				) : null}

				<hr />
				<TotalCosts 
					basePizza={this.state.basePizza}
					toppings={this.state.toppings}
					cart={this.state.cart}
				/>
			</Provider>
		);
	}
}

export default App;
