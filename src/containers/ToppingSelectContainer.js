import React, { Component } from "react";
import PropTypes from "prop-types";
import ToppingsList from "../components/ToppingsList";
import Costs from "../components/Costs";

class ToppingSelectContainer extends Component {
    render() {
        const {basePizza, toppings, toppingClick, addClick, removeClick} = this.props;

        return (
            <div className="topping-select-container">
                <ToppingsList
                    maxToppings={basePizza.maxToppings}
                    toppings={toppings}
                    toppingClick={t => toppingClick(t)}
                />
                <div>
                    <Costs
                        basePizza={basePizza}
                        toppings={toppings}
                    />
                    <button onClick={e => addClick()}>Add to Cart</button>
                    <button onClick={e => removeClick()}>Remove</button>
                </div>
            </div>
        );
    }
}

ToppingSelectContainer.propTypes = {
    basePizza: PropTypes.object,
    toppings: PropTypes.array.isRequired,
    toppingClick: PropTypes.func.isRequired,
    addClick: PropTypes.func.isRequired,
    removeClick: PropTypes.func.isRequired
};

export default ToppingSelectContainer;