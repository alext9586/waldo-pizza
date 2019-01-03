import React, { Component } from 'react'

class Topping extends Component {
  render() {
    return (
      <div>
        <div>
            <input type="checkbox" checked={this.props.selected}/>
          {this.props.topping.name}
        </div>
      </div>
    );
  }
}

export default Topping;