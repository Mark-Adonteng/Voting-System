// CategoryReducers.tsx

import { Reducer } from 'redux';
import { UPDATE_SELECTED_IMAGES, UpdateSelectedImagesAction } from './CategoryAction';

export interface AppState {
  selectedImages: string[]; // Adjust the type according to your data structure
  // ... other state properties
}

const initialState: AppState = {
  selectedImages: [],
  // ... initialize other state properties
};

const rootReducer: Reducer<AppState, UpdateSelectedImagesAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_IMAGES:
      return {
        ...state,
        selectedImages: action.payload,
      };
    // ... handle other actions
    default:
      return state;
  }
};

export default rootReducer;
