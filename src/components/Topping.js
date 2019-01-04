import React, { Component } from 'react'

class Topping extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: props.selected
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(topping) {
        console.log(topping);
        // this.setState({
        //   selected: event.target.value
        // });
    }

    render() {
        const {name} = this.props.topping;
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={this.props.selected}
                        onChange={e => this.handleInputChange(name)}/>
                    {name}
                </label>
            </div>
        );
    }
}

export default Topping;