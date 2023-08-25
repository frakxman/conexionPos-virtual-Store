import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { environments } from 'src/environments/environments';

import { Products } from '../interfaces/products.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = environments.baseUrl

  constructor( private http: HttpClient) { }

  // Get all products
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${ this.baseUrl }/products/4?page=1&limit=9`);     
  }

}
