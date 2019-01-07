import React, { Component } from "react";
import PropTypes from "prop-types";
import CurrencyDisplay from "./CurrencyDisplay";

class TotalCosts extends Component {
    render() {
        const {cart} = this.props;

        const subtotal = (!cart || cart.length === 0) ? 0 : cart.map(t => t.price).reduce((a,b) => a + b);
        const deliveryFee = 2;
        const tax = (subtotal + deliveryFee) * 0.0825;
        const total = subtotal + deliveryFee + tax;

        return (
            <table>
                <tbody>
                    <tr>
                        <td className="cost-table-label-col"><h3>Subtotal</h3></td>
                        <td className="cost-table-price-col"><h3><CurrencyDisplay value={subtotal} /></h3></td>
                    </tr>
                    <tr>
                        <td className="cost-table-label-col">Delivery Fee</td>
                        <td className="cost-table-price-col"><CurrencyDisplay value={deliveryFee} /></td>
                    </tr>
                    <tr>
                        <td className="cost-table-label-col">Sales Tax (8.25%)</td>
                        <td className="cost-table-price-col"><CurrencyDisplay value={tax} /></td>
                    </tr>
                    <tr>
                        <td className="cost-table-label-col"><h2>Total</h2></td>
                        <td className="cost-table-price-col"><h2><CurrencyDisplay value={total} /></h2></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

TotalCosts.propTypes = {
    cart: PropTypes.array
};

export default TotalCosts;
