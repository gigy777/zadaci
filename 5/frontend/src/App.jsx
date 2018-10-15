import React, { Component } from 'react';
import Layout from './layouts';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <Layout />
      </Provider>

    );
  }
}

export default App;
