import { Item } from './../../models/item';
import { createAction, props } from '@ngrx/store';

export const itemsLoaded = createAction(
    '[Items Page] Items Loaded',
    props<{items: Item[]}>()
);
