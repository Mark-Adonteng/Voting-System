// CategoryContext.tsx
import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

interface CategoryState {
  categories: string[];
}

interface CategoryAction {
  type: string;
  payload: any;
}

const initialState: CategoryState = {
  categories: [],
};

const CategoryContext = createContext<{
  state: CategoryState;
  dispatch: Dispatch<CategoryAction>;
} | undefined>(undefined);

const categoryReducer = (state: CategoryState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    // Define your category-related actions here (addCategory, updateCategory, deleteCategory)
    default:
      return state;
  }
};

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
};
