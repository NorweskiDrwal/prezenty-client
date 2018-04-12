export const ITEM_ADD_ERROR = 'ITEM_ADD_ERROR';
export const ITEM_ADD_SUCCESS = 'ITEM_ADD_SUCCESS';
export const ITEM_ADD_LOADING = 'ITEM_ADD_LOADING';

export const itemAddError = (error) => ({
  type: ITEM_ADD_ERROR,
  payload: error,
});

export const itemAddSuccess = (itemName) => ({
  type: ITEM_ADD_SUCCESS,
  payload: itemName,
});

export const itemAddLoading = () => ({
  type: ITEM_ADD_LOADING,
});

export const itemAddToList = () => {}