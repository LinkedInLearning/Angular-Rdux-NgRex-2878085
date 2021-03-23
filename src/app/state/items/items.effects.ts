import { LoadItems } from './items.actions';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ItemsService } from 'src/app/services/items.service';

@Injectable()
export class ItemsEffects {

    loadItems$ = createEffect(
        () => this.actions$.pipe(
            ofType(LoadItems)
        )
    );

    constructor(
        private actions$: Actions
    ) {}

}
