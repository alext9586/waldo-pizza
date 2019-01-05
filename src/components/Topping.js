import React, { Component } from "react";
import PropTypes from "prop-types";

class Topping extends Component {
	constructor(props) {
		super(props);
		this.handleToppingClick = this.handleToppingClick.bind(this);
	}

	handleToppingClick(topping) {
		topping.selected = !topping.selected;
		this.props.toppingClick(topping);
	}

	render() {
		const { topping, disabled } = this.props;
		return (
			<div>
				<label>
					<input
						type="checkbox"
            checked={topping.selected}
            disabled={disabled}
						onChange={e => this.handleToppingClick(topping)}
					/>
					{topping.name}
				</label>
			</div>
		);
	}
}

Topping.propTypes = {
	topping: PropTypes.object.isRequired,
  toppingClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Topping;
