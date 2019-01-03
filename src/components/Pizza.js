import React, { Component } from 'react';
import Topping from './Topping';

class Pizza extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.pizza.name} ({this.props.pizza.maxToppings})
          {this.props.pizza.toppings.map((topping, index) => <Topping key={index} selected={topping.defaultSelected} topping={topping.topping} />)}
        </div>
      </div>
    );
  }
}

export default Pizza;