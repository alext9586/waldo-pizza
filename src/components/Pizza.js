import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import ToppingsList from "./ToppingsList";

class Pizza extends Component {
	render() {
		const { size } = this.props;
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
					const toppings = basePizza.toppings.map(
						(topping, index) => {
							return {
								id: index,
								selected: topping.defaultSelected,
								name: topping.topping.name,
								price: topping.topping.price
							};
						}
					);

					return (
						<ToppingsList
							toppings={toppings}
							toppingClick={e => console.log(e)}
						/>
					);
				}}
			</Query>
		);
	}
}

Pizza.propTypes = {
	size: PropTypes.string.isRequired
};

export default Pizza;
