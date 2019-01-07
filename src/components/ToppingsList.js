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
    const {toppings, maxToppings} = this.props;
    const disableUnselected = !maxToppings ? false : toppings.filter(t => t.selected).length === maxToppings;
    const toppingsLeft = !maxToppings ? "Unlimited" : maxToppings - toppings.filter(t => t.selected).length;

		return (
			<div className="topping-list">
        <h2>Toppings Left: {toppingsLeft}</h2>
				{toppings.map(topping => (
					<Topping
						key={topping.name}
						topping={topping}
            toppingClick={t => this.handleToppingClick(t)}
            disabled={!topping.selected && disableUnselected}
					/>
				))}
			</div>
		);
	}
}

ToppingsList.propTypes = {
  maxToppings: PropTypes.number,
	toppings: PropTypes.array.isRequired,
	toppingClick: PropTypes.func.isRequired
};

export default ToppingsList;
