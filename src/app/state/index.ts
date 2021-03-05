import * as fromSelectedItems from './selected-items/selected-items.reducer';

export interface AppState {
    items: any;
    filters: any;
    selectedItems: number;
}

export const reducers = {
    items: () => {},
    filters: () => {},
    selectedItems: fromSelectedItems.selectedItemsReducer
};
