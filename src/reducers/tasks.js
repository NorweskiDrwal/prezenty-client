import { LOCATION_CHANGE } from 'react-router-redux/reducer';

import {
  ITEM_ADD_ERROR,
  ITEM_ADD_SUCCESS,
  ITEM_ADD_LOADING,
} from '../actions/index';

const initialState = {
  loading: false,
  error: null,
  itemName: null,
  openModal: false,
};

const tasks = (state = initialState, { type, payload }) => {
  switch (type) {

    case ITEM_ADD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case ITEM_ADD_SUCCESS:
      return {
        ...state,
        itemName: payload,
        loading: false,
      };

    case ITEM_ADD_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        itemName: null,
      };

    case LOCATION_CHANGE:
      return {
          ...state,
          itemName: null,
          error: null,
      };  

    default:
      return state;
  }
}

export default tasks;
