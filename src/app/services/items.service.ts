import { Injectable } from '@angular/core';
import * as items from '../../data/items.json';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItems() {
    // todo: make async
    // @ts-ignore
    return items.default
  }
}
