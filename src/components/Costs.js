import React, { Component } from "react";
import PropTypes from "prop-types";
import CurrencyDisplay from "./CurrencyDisplay";

class Costs extends Component {
  render() {
    const {basePizza, toppings} = this.props;
    const selectedToppings = toppings.filter(topping => topping.selected);

    return (
      <table className="cost-table">
        <tbody>
          <tr>
            <td className="cost-table-label-col pizza-size"><h2>{basePizza.name} Pizza:</h2></td>
            <td className="cost-table-price-col"><h2><CurrencyDisplay value={basePizza.basePrice} /></h2></td>
          </tr>
          {
            selectedToppings
              .map(topping =>
                <tr key={topping.id}>
                  <td className="cost-table-label-col topping">{topping.name}</td>
                  <td className="cost-table-price-col"><CurrencyDisplay value={topping.price} /></td>
                </tr>
              )
          }
        </tbody>
      </table>
    );
  }
}

Costs.propTypes = {
	basePizza: PropTypes.object.isRequired,
	toppings: PropTypes.array.isRequired
};

export default Costs;
