import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  items: Item[];
  count$: Observable<number[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.count$ = this.store.select('selectedItems');
  }

}
