import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

const QUERY = gql`
	{
		pizzaSizes {
			name
		}
	}
`;

class PizzaSizes extends Component {
	handleButtonClick(size) {
		this.props.onClick(size);
	}

	render() {
		return (
			<Query query={QUERY}>
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching</div>;
					if (error) return <div>Error</div>;

					const pizzaSizes = data.pizzaSizes;

					return (
						<div>
							{pizzaSizes.map(size => (
								<button
									key={size.name}
									onClick={e =>
										this.handleButtonClick(size.name)
									}>
									{size.name}
								</button>
							))}
						</div>
					);
				}}
			</Query>
		);
	}
}

PizzaSizes.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default PizzaSizes;
