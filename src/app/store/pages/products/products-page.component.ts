import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  public products: Products[] = [];

  constructor( private productsService: ProductsService ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe( data => {
        this.products = data;
      }  
    );
  }

  // Get ProductId to add to shopping car 
  // getProductById() {}

  // Add to car 
  // addProductToCar(){} 

}
