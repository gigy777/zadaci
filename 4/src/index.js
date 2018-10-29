import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './components/App';
import * as actions from './reducers/actions';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(actions.startGame());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
