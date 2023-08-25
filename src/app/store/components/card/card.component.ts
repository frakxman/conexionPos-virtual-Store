import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../interfaces/products.interface';

@Component({
  selector: 'products-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() 
  public products!: Products[]

  ngOnInit(): void {
    if( !this.products ) throw Error('Products property is required');
  }

}
