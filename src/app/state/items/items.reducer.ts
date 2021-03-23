import { Item } from './../../models/item';
import { itemsLoaded } from './items.actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface ItemsState {
    cats: Item[];
}

const initialState: ItemsState = {
    cats: []
};

const reducer = createReducer(
    initialState,
    on(itemsLoaded, (state, {items}) => ({cats: items}))
);

// Export compilation pre-Ivy
export function itemsReducer(state: ItemsState | undefined, action: Action) {
    return reducer(state, action);
}
