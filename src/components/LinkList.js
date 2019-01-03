import React, { Component } from 'react';
import { Query } from 'react-apollo';
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

class LinkList extends Component {
    render() {
        return (
          <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
        
              //const linksToRender = data
              console.log(data);
        
              return (
                <div>
                  <h1>Hello World</h1>
                </div>
              )
            }}
          </Query>
        )
      }
}

export default LinkList;