import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getReducer, addReducer } from './dataReducer';
import  thunk from 'redux-thunk';

const store = createStore( combineReducers({
    getReducer,
    addReducer
}) , applyMiddleware(thunk) );

export default store;