import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';

import { Products } from '../../interfaces/products.interface';

@Component({
  selector: 'store-carousel',
  templateUrl: './carousel.component.html',
  styles: [
  ]
})
export class CarouselComponent implements OnInit {

  public products: Products[] = [];

  constructor( private productsService: ProductsService ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe( data => {
        this.products = data;
      });
  }

}
