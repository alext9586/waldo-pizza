import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Pizza from './Pizza';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class PizzaList extends Component {
    render() {
        const {size} = this.props;
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
        const FEED_QUERY = gql(queryLiteral);

        return (
          <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
        
              const basePizza = data.pizzaSizeByName;
              console.log(basePizza);
        
              return (
                <Pizza pizza={basePizza} />
              )
            }}
          </Query>
        )
      }
}


PizzaList.PropTypes = {
    size: PropTypes.string.isRequired
}

export default PizzaList;