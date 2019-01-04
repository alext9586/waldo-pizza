import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

class Pizza extends Component {
	render() {
		const { size, saveBasePizza } = this.props;
		const queryLiteral = `
      {
          pizzaSizeByName(name: ${size.toUpperCase()}) {
            name,
            maxToppings,
            basePrice,
            toppings {
              topping {
                name,
                price
              },
              defaultSelected
            }
          }
        }
      `;
		const QUERY = gql(queryLiteral);

		return (
			<Query query={QUERY}>
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching</div>;
					if (error) return <div>Error</div>;

					const basePizza = data.pizzaSizeByName;
          
          saveBasePizza(basePizza);
          return (<h1>Loading</h1>)
				}}
			</Query>
		);
	}
}

Pizza.propTypes = {
  size: PropTypes.string.isRequired,
  saveBasePizza: PropTypes.func.isRequired
};

export default Pizza;
