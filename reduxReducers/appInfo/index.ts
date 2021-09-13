// -------------------------------------------TYPES------------------------------------
import {
  UPDATE_PARAMS,
  CHANGE_RESPONSIVE,
  UPDATE_PATH,
  UPDATE_LOADING
} from 'Types';
import { Action, ReducerState } from '@Reducers/appInfo/customTypes';
import { RandObj } from '@Declarations';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE = {
  isMovil: false,
  isLoading: false,
  currentPath: '',
  currentParams: {}
};

// ------------------------------------------REDUCER-----------------------------------
const reducer = (state = INITIAL_STATE, action: Action) : ReducerState => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_RESPONSIVE:
      return {
        ...state,
        isMovil: <boolean>payload
      };

    case UPDATE_PATH:
      return {
        ...state,
        currentPath: <string>payload
      };

    case UPDATE_PARAMS:
      return {
        ...state,
        currentParams: <RandObj>payload
      };

    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: <boolean>payload
      };

    default:
      return state;
  }
};

export default reducer;