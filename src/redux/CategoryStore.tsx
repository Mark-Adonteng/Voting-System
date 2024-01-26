// store.js

import { createStore } from 'redux';
import rootReducer from './CategoryReducers'; // Create this file as mentioned below

const store = createStore(rootReducer);

export default store;
