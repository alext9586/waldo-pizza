import React, { Component } from "react";
import PropTypes from "prop-types";
import Costs from "./Costs";

class Cart extends Component {
    render() {
        const {cart} = this.props;

        return(
            (!cart || cart.length === 0)
                ? null
                : cart.map(pizza => {
                    return (
                    <Costs
                        key={pizza.id}
                        basePizza={pizza.basePizza}
                        toppings={pizza.toppings}
                    />
                    );
                })
        );
    }
}

Cart.propTypes = {
    cart: PropTypes.array
};

export default Cart;