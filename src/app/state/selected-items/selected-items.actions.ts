import { createAction, props } from '@ngrx/store';

export const itemSelected = createAction(
    '[Items Page] Item Selected',
    props<{id: number}>()
);
