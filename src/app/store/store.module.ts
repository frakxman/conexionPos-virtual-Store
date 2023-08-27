import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreRoutingModule } from './store-routing.module';
import { ProductsPageComponent } from './pages/products/products-page.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CartPageComponent } from './pages/cart/cart.component';
import { CategoriesPageComponent } from './pages/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    LayoutComponent,
    CartPageComponent,
    CategoriesPageComponent,
    NavbarComponent,
    CardComponent,
    SearcherComponent,
    ClientFormComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
