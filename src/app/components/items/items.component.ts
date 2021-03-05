import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    // todo: make async !!
    this.items = this.itemsService.getItems();
  }

}
