import React, { Component } from "react";
import PropTypes from "prop-types";
import Topping from "./Topping";

class ToppingsList extends Component {
	constructor(props) {
		super(props);
		this.handleToppingClick = this.handleToppingClick.bind(this);
	}

	handleToppingClick(topping) {
		let newToppings = this.props.toppings.map(t => {
			return t.id === topping.id ? topping : t;
		});

		this.props.toppingClick(newToppings);
	}

	render() {
		return (
			<div>
				{this.props.toppings.map(topping => (
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
