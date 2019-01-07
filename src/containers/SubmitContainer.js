import React, { Component } from "react";
import PropTypes from "prop-types";

class SubmitContainer extends Component {
    render() {
        const {newOrderClick} = this.props;

        return (
            <div>
                <h1>Order Submitted!</h1>
                <p>Your order will be prepared by <span className="employee-name">Brian</span> and delivered by <span className="employee-name">Steve</span>.</p>
                <p>
                    Your pizza will be delivered to:
                </p>
                <div className="address">
                    4420 N Lamar Blvd<br />Austin, TX 78756
                </div>
                <button onClick={e => newOrderClick()}>New Order</button>
            </div>
        );
    }
}

SubmitContainer.propTypes = {
    newOrderClick: PropTypes.func.isRequired
};

export default SubmitContainer;