import React, { Component } from "react";
import Pizza from "./components/Pizza";
import PizzaSizes from "./components/PizzaSizes";
import ToppingsList from "./components/ToppingsList";
import Costs from "./components/Costs";
import { createStore } from "redux";
import pizzaApp, { STAGE_SUBMIT } from "./reducers";
import { Provider } from "react-redux";
import {selectSize, saveBasePizza, saveToppings, addPizzaToCart, removeCurrentPizza, removePizzaFromCart, submitOrder, start} from "./actions";
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
				<h1>Waldo Pizza</h1>
				<p><i>Best pizza between a rock and a weird place!</i></p>
				<hr />
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
						<Cart cart={cart} removeClick={p => store.dispatch(removePizzaFromCart(p))} />
						<hr />
						<TotalCosts 
							basePizza={basePizza}
							toppings={toppings}
							cart={cart}
						/>
						<button onClick={e => store.dispatch(submitOrder())}>Checkout</button>
					</div>
				) : null}

				{stage === STAGE_SUBMIT ? (
					<div>
						<h1>Order Submitted!</h1>
						<p>Your order will be prepared by <span className="employee-name">Brian</span> and delivered by <span className="employee-name">Steve</span>.</p>
						<p>
							Your pizza will be delivered to:
						</p>
						<div className="address">
							4420 N Lamar Blvd<br />Austin, TX 78756
						</div>
						<button onClick={e => store.dispatch(start())}>New Order</button>
					</div>
				) : null}
			</Provider>
		);
	}
}

export default App;
