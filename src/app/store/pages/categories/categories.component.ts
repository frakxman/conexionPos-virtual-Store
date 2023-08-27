import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../../services/categories.service';
import { Categories } from '../../interfaces/categories.interface';

@Component({
  selector: 'store-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesPageComponent implements OnInit {

  public categories: Categories[] = [];
  

  constructor( private categoriesServices: CategoriesService ) {}

  ngOnInit(): void {
      this.categoriesServices.getAllCategories()
        .subscribe( categories => this.categories = categories );
  }

}
