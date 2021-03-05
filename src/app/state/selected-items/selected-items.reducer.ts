import { createReducer, on } from '@ngrx/store';
import { itemSelected } from './selected-items.actions';
const initialState = 0;

export const selectedItemsReducer = createReducer(
    initialState,
    on(itemSelected, (state) => state + 1)
);
