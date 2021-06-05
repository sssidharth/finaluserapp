import {usersReducer} from './Reducers/userReducer';
import {createStore} from 'redux';

const store = createStore(usersReducer,{});

export default store;