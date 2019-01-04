import React, { Component } from "react";
import PropTypes from "prop-types";
import Topping from "./Topping";

class ToppingsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toppings: this.props.toppings
		};

		this.handleToppingClick = this.handleToppingClick.bind(this);
	}

	handleToppingClick(topping) {
		let newToppings = this.state.toppings.map(t => {
			return t.id === topping.id ? topping : t;
		});

		this.setState({
			toppings: newToppings
		});
	}

	render() {
		return (
			<div>
				{this.state.toppings.map(topping => (
					<Topping
						key={topping.name}
						topping={topping}
						toppingClick={t => this.handleToppingClick(t)}
					/>
				))}
			</div>
		);
	}
}

ToppingsList.propTypes = {
	toppings: PropTypes.array.isRequired,
	toppingClick: PropTypes.func.isRequired
};

export default ToppingsList;
