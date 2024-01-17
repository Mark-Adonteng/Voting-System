// store.ts
import { createStore } from 'redux';
import categoryReducer from '../redux/Reducers';

export interface RootState {
  categories: string[];
}

const store = createStore(categoryReducer);

export default store;
