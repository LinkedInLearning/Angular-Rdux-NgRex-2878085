import { createReducer, on } from '@ngrx/store';
import { itemSelected } from './selected-items.actions';

// interface !

const initialState = {
  id: 0,
  q: 0
};

export const selectedItemsReducer = createReducer(
  initialState,
  on(itemSelected, (state, {id}) => ({...state, id}))
);
