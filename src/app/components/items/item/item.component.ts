import { itemSelected } from 'src/app/state/selected-items/selected-items.actions';
import { Store } from '@ngrx/store';
import { Item } from './../../../models/item';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item: Item;

  constructor(
    private store: Store
  ) { }

  selectItem() {
    this.store.dispatch(itemSelected({id: this.item.id}));
  }

}
