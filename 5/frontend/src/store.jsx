import { createStore, combineReducers } from 'redux';
import auth  from './reducers/auth/auth.reducer';

const reducer = combineReducers({ auth });

export default createStore(reducer);