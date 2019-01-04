import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Pizza from './Pizza';
import gql from 'graphql-tag';

const FEED_QUERY = gql`
{
    pizzaSizes {
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

class PizzaList extends Component {
    render() {
        return (
          <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
        
              const pizzaSizes = data.pizzaSizes;
              console.log(pizzaSizes);
        
              return (
                <div>
                  {pizzaSizes.map( (pizza, index) => <Pizza key={index} pizza={pizza} />)}
                </div>
              )
            }}
          </Query>
        )
      }
}

export default PizzaList;