import React, { Component } from "react";
import Pizza from "./components/Pizza";
import PizzaSizes from "./components/PizzaSizes";
import ToppingsList from "./components/ToppingsList";
import Costs from "./components/Costs";
import { createStore } from "redux";
import pizzaApp from "./reducers";
import { Provider } from "react-redux";
import {selectSize, saveBasePizza, saveToppings, addPizzaToCart, removeCurrentPizza, removePizzaFromCart} from "./actions";
import {STAGE_SELECT_SIZE, STAGE_LOAD_PIZZA, STAGE_SELECT_TOPPINGS} from "./reducers";
import TotalCosts from "./components/TotalCosts";
import Cart from "./components/Cart";

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
    const {stage, size, basePizza, toppings, cart} = this.state;

		return (
			<Provider store={store}>
				{stage === STAGE_SELECT_SIZE ? (
					<PizzaSizes
						onClick={s =>
							store.dispatch(selectSize(s))
						}
					/>
				) : null}

				{stage === STAGE_LOAD_PIZZA ? (
					<Pizza
						size={size}
						saveBasePizza={bp => store.dispatch(saveBasePizza(bp))}
					/>
				) : null}

				{stage === STAGE_SELECT_TOPPINGS ? (
					<div>
						<ToppingsList
              maxToppings={basePizza.maxToppings}
							toppings={toppings}
							toppingClick={t => store.dispatch(saveToppings(t))}
						/>
            <hr />
						<Costs
							basePizza={basePizza}
							toppings={toppings}
						/>
						<button onClick={e => store.dispatch(addPizzaToCart())}>Add to Cart</button>
						<button onClick={e => store.dispatch(removeCurrentPizza())}>Remove</button>
					</div>
				) : null}

				{cart.length > 0 ? (
					<div>
						<hr />
						<h1>Shopping Cart</h1>
					</div>
				) : null}
				<Cart cart={cart} removeClick={p => store.dispatch(removePizzaFromCart(p))} />
				<hr />
				<TotalCosts 
					basePizza={basePizza}
					toppings={toppings}
					cart={cart}
				/>
			</Provider>
		);
	}
}

export default App;
