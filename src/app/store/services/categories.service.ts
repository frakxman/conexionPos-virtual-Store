import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environments } from 'src/environments/environments';

import { Categories } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  private baseUrl: string = environments.baseUrl

  constructor( private http: HttpClient) { }

  // Get all categories
  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${ this.baseUrl }/categories?page=1&limit=10`);     
  }
}
