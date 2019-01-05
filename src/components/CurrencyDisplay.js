import React, { Component } from "react";
import PropTypes from "prop-types";

class CurrencyDisplay extends Component {
    render() {
        const {value} = this.props;
        return (
            <span>${value.toFixed(2)}</span>
        );
    }
}

CurrencyDisplay.propTypes = {
    value: PropTypes.number.isRequired
}

export default CurrencyDisplay;