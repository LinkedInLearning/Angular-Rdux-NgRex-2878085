import { LoadItems, itemsLoaded } from './items.actions';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { ItemsService } from 'src/app/services/items.service';

@Injectable()
export class ItemsEffects {

    loadItems$ = createEffect(
        () => this.actions$.pipe(
            ofType(LoadItems),
            mergeMap(
                () => this.itemsService.getItems()
                    .pipe(
                        map(items => itemsLoaded({items}))
                    )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private itemsService: ItemsService
    ) {}

}
