import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components 
import { CategoriesPageComponent } from './pages/categories/categories.component';
import { CartPageComponent } from './pages/cart/cart.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductsPageComponent } from './pages/products/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: 'products', component: ProductsPageComponent },
        { path: 'cart', component: CartPageComponent},
        { path: 'categories', component: CategoriesPageComponent },
        { path: '**', redirectTo: 'products' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
