import { itemsLoaded } from './items.actions';
import { createReducer, on } from '@ngrx/store';

const initialState = [];

export const itemsReducer = createReducer(
    initialState,
    on(itemsLoaded, (state, {items}) => items)
);
