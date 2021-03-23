import { createReducer, on, Action } from '@ngrx/store';
import { itemSelected } from './selected-items.actions';

export type SelectedItemsState = number[];

const initialState = [];

const reducer = createReducer(
    initialState,
    on(itemSelected, (state, {id}) => state.concat(id))
);

// Export compilation pre-Ivy
export function selectedItemsReducer(state: SelectedItemsState | undefined, action: Action) {
    return reducer(state, action);
}
