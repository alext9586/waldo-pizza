import React, { Component } from "react";
import PropTypes from "prop-types";

class TotalCosts extends Component {
    render() {
        const {basePizza, toppings, cart} = this.props;

        const basePizzaCost = !basePizza ? 0 : basePizza.basePrice;
        const toppingsCost = (!toppings || toppings.length === 0) ? 0 : toppings.filter(t => t.selected).map(t => t.price).reduce((a,b) => a + b);
        const cartCost = (!cart || cart.length === 0) ? 0 : cart.map(t => t.price).reduce((a,b) => a + b);

        const total = basePizzaCost + toppingsCost + cartCost;

        return (
            <table>
                <tbody>
                    <tr>
                        <td className="cost-table-col-1"><h2>Total:</h2></td>
                        <td className="cost-table-col-2"><h2>${total}</h2></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

TotalCosts.propTypes = {
    basePizza: PropTypes.object,
    toppings: PropTypes.array,
    cart: PropTypes.array
};

export default TotalCosts;
