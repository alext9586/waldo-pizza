import React, { Component } from "react";
import Pizza from "./components/Pizza";
import PizzaSizes from "./components/PizzaSizes";
import ToppingsList from "./components/ToppingsList";
import Costs from "./components/Costs";
import { createStore } from "redux";
import pizzaApp from "./reducers";
import { Provider } from "react-redux";
import {selectSize, saveBasePizza, saveToppings} from "./actions";
import {STAGE_SELECT_SIZE, STAGE_LOAD_PIZZA, STAGE_SELECT_TOPPINGS} from "./reducers";

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
				toppings: store.getState().toppings
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
					</div>
				) : null}
			</Provider>
		);
	}
}

export default App;
