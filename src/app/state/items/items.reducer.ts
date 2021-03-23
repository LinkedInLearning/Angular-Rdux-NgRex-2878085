import { Item } from './../../models/item';
import { itemsLoaded } from './items.actions';
import { createReducer, on, Action } from '@ngrx/store';

export type ItemsState = Item[];

const initialState = [];

const reducer = createReducer(
    initialState,
    on(itemsLoaded, (state, {items}) => items)
);

// Export compilation pre-Ivy
export function itemsReducer(state: ItemsState | undefined, action: Action) {
    return reducer(state, action);
}
