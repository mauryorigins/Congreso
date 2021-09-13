// ---Types
import { RandObj } from '@Declarations'

export interface Action {
  type: string;
  payload: boolean | string | RandObj;
}

export interface ReducerState {
  isMovil: boolean;
  isLoading: boolean;
  currentPath: string;
  currentParams: RandObj
}