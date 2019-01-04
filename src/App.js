import React, { Component } from 'react';
import PizzaList from './components/PizzaList';
import PizzaSizes from './components/PizzaSizes';
import { createStore } from 'redux';
import pizzaApp from './reducers';
import { Provider } from 'react-redux';
import { SELECT_SIZE } from './actions';

const store = createStore(pizzaApp);

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <PizzaSizes onClick={(size) => store.dispatch({ type: SELECT_SIZE, size: size })} />
        <PizzaList />
      </Provider>
    )
  }
}

export default App