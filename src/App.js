import React, { Component } from 'react';
import PizzaList from './components/PizzaList';
import PizzaSizes from './components/PizzaSizes';
import { createStore } from 'redux';
import pizzaApp from './reducers';
import { Provider } from 'react-redux';
import { SELECT_SIZE } from './actions';

const store = createStore(pizzaApp);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: ""
    };

    store.subscribe(() => {
      this.setState({
        size: store.getState().size
      });
    });
  }

  render() {
    return(
      <Provider store={store}>
        <PizzaSizes onClick={(size) => store.dispatch({ type: SELECT_SIZE, size: size })} />
        { this.state.size !== ""
          ? (<PizzaList size={this.state.size} />)
          : null
        }
      </Provider>
    )
  }
}

export default App