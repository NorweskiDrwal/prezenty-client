export const ITEM_ADD_ERROR = 'ITEM_ADD_ERROR';
export const ITEM_ADD_SUCCESS = 'ITEM_ADD_SUCCESS';
export const ITEM_ADD_LOADING = 'ITEM_ADD_LOADING';
export const OPEN_SIGN_MODAL = 'OPEN_SIGN_MODAL';
export const GO_TO_NEW_LIST = 'GO_TO_NEW_LIST';

export const itemAddError = (msg) => ({
  type: ITEM_ADD_ERROR,
  payload: msg,
});

export const itemAddSuccess = (itemName) => ({
  type: ITEM_ADD_SUCCESS,
  payload: itemName,
});

export const itemAddLoading = () => ({
  type: ITEM_ADD_LOADING,
});

export const openSignModal = () => ({
  type: OPEN_SIGN_MODAL
})

export const goToNewList = () => ({
  type: GO_TO_NEW_LIST
})

export const itemAddToList = () => {}