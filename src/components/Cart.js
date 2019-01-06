import React, { Component } from "react";
import PropTypes from "prop-types";
import Costs from "./Costs";

class Cart extends Component {
    render() {
        const {cart, removeClick} = this.props;

        return(
            (!cart || cart.length === 0)
                ? null
                : cart.map(pizza => {
                    return (
                        <div key={pizza.id}>
                            <Costs
                                basePizza={pizza.basePizza}
                                toppings={pizza.toppings}
                            />
                            <button onClick={e => removeClick(pizza.id)}>Remove</button>
                        </div>
                    );
                })
        );
    }
}

Cart.propTypes = {
    cart: PropTypes.array,
    removeClick: PropTypes.func.isRequired
};

export default Cart;