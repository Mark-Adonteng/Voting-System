// CategoryAction.tsx

import { Action } from 'redux';

export const UPDATE_SELECTED_IMAGES = 'UPDATE_SELECTED_IMAGES';

export interface UpdateSelectedImagesAction extends Action<typeof UPDATE_SELECTED_IMAGES> {
  payload: string[]; // Adjust the type according to your data structure
}

export const updateSelectedImages = (selectedImages: string[]): UpdateSelectedImagesAction => ({
  type: UPDATE_SELECTED_IMAGES,
  payload: selectedImages,
});
