import React, { Component } from "react";
import PropTypes from "prop-types";

class Costs extends Component {
  render() {
    const {basePizza, toppings} = this.props;
    const selectedToppings = toppings.filter(topping => topping.selected);

    const total = basePizza.basePrice + selectedToppings.map(t => t.price).reduce((a,b) => a + b);

    return (
      <div>
        <div>{basePizza.name.toUpperCase()} Pizza: ${basePizza.basePrice}</div>
        {
          selectedToppings
            .map(topping => <div key={topping.id}>{topping.name} ${topping.price}</div>)
        }
        <hr />
        <div>Total: ${total}</div>
      </div>
    );
  }
}

Costs.propTypes = {
	basePizza: PropTypes.object.isRequired,
	toppings: PropTypes.array.isRequired
};

export default Costs;
