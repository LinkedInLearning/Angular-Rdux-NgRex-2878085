import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './imports/material.module';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/items/item/item.component';
import { CartItemComponent } from './components/cart-items/cart-item/cart-item.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { UnescapePipe } from './pipes/unescape.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    CartItemComponent,
    ToolbarComponent,
    CartItemsComponent,
    UnescapePipe
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
