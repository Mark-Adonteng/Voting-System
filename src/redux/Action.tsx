// Action.tsx

// Update the type of 'category' parameter
export const addCategory = (category: string) => ({
  type: 'ADD_CATEGORY',
  payload: category,
});

// Update the type of 'index' and 'category' parameters
export const updateCategory = (index: number, category: string) => ({
  type: 'UPDATE_CATEGORY',
  payload: { index, category },
});

// Update the type of 'index' parameter
export const deleteCategory = (index: number) => ({
  type: 'DELETE_CATEGORY',
  payload: index,
});




// votingListActions.ts
import { VotingItem } from '../screens/VotingList'; // Make sure to import the VotingItem type

export const addItem = (newItem: VotingItem) => ({
  type: 'ADD_ITEM',
  payload: newItem,
});

export const updateItem = (index: number, updatedItem: VotingItem) => ({
  type: 'UPDATE_ITEM',
  payload: { index, updatedItem },
});

export const deleteItem = (index: number) => ({
  type: 'DELETE_ITEM',
  payload: { index },
});
