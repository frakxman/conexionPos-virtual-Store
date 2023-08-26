import { Pipe, PipeTransform } from '@angular/core';

import { Products } from '../interfaces/products.interface';

@Pipe({
  name: 'productImage'
})
export class ProductImagePipe implements PipeTransform {

  transform( product: Products ) {
        if ( !product.idproducto && !product.url_foto ) {
          return 'assets/logo_celulares.png';
        }
    
        if ( product.url_foto ) return product.url_foto;
    
        return 'assets/logo_celulares.png'
      }

}
