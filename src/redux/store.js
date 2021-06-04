import {usersReducer} from './Reducers/userReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(usersReducer,{},applyMiddleware(thunk));

export default store;