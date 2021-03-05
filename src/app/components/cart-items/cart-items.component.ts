import { ItemsService } from './../../services/items.service';
import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  // todo: mutualize?
  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    // todo: make async !!
    this.items = this.itemsService.getItems();
  }

}
