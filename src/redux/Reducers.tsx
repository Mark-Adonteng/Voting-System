// reducers.ts
import { RootState } from '../redux/Store'; // Update the path accordingly

interface CategoryState {
  categories: string[];
}

const initialState: CategoryState = {
  categories: ['SRC ELECTION', 'COMPSA ELECTION', 'WASSA ELECTION'],
};

const categoryReducer = (state: CategoryState = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case 'UPDATE_CATEGORY':
      const updatedCategories = [...state.categories];
      updatedCategories[action.payload.index] = action.payload.category;
      return {
        ...state,
        categories: updatedCategories,
      };
    case 'DELETE_CATEGORY':
      const filteredCategories = state.categories.filter((_, index) => index !== action.payload);
      return {
        ...state,
        categories: filteredCategories,
      };
    default:
      return state;
  }
};

export default categoryReducer;
