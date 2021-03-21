import { createReducer, on } from '@ngrx/store';
import { itemSelected } from './selected-items.actions';

const initialState = [];

export const selectedItemsReducer = createReducer(
    initialState,
    on(itemSelected, (state, {id}) => state.concat(id))
);
