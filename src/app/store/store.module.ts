import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { ProductsPageComponent } from './pages/products/products-page.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CartPageComponent } from './pages/cart/cart.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    LayoutComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
