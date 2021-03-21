import { Item } from './../models/item';
import { Injectable } from '@angular/core';
// @ts-ignore
import * as items from '../../data/items.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() {}

  getItems(): Observable<Item[]> {
    // @ts-ignore
    return of(items.default);
  }
}
