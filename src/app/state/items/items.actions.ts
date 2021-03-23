import { Item } from './../../models/item';
import { createAction, props } from '@ngrx/store';

export const LoadItems = createAction(
    '[Items Page] Load Items'
);

export const itemsLoaded = createAction(
    '[Items Page] Items Loaded',
    props<{items: Item[]}>()
);
