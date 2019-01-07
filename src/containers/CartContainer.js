import React, { Component } from "react";
import PropTypes from "prop-types";
import TotalCosts from "../components/TotalCosts";
import Cart from "../components/Cart";

class CartContainer extends Component {
    render() {
        const {cart, removeClick, submitClick} = this.props;

        return (
            <div>
                <h1>Pizza Cart</h1>
                <Cart cart={cart} removeClick={p => removeClick(p)} />
                <hr />
                <TotalCosts
                    cart={cart}
                />
                <button onClick={e => submitClick()}>Checkout</button>
            </div>
        );
    }
}

CartContainer.propTypes = {
    cart: PropTypes.array.isRequired,
    removeClick: PropTypes.func.isRequired,
    submitClick: PropTypes.func.isRequired
};

export default CartContainer;