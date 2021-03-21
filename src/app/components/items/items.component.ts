import { itemsLoaded } from './../../state/items/items.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from './../../models/item';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(
    private itemsService: ItemsService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.items = this.store.select('items');
    this.itemsService.getItems().subscribe(
      (items) => this.store.dispatch(itemsLoaded({items}))
    );
  }

}
