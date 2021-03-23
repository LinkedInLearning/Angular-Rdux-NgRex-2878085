
import * as fromSelectedItems from './selected-items/selected-items.reducer';
import * as fromItems from './items/items.reducer';

export interface AppState {
    items: fromItems.ItemsState;
    selectedItems: fromSelectedItems.SelectedItemsState;
    filters: any;
}

export const reducers = {
    items: fromItems.itemsReducer,
    selectedItems: fromSelectedItems.selectedItemsReducer,
    filters: () => {}
};
