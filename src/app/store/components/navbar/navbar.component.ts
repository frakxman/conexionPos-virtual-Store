import { Component } from '@angular/core';

@Component({
  selector: 'store-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  public navbarItems = [
    { link: 'categories' },
    { link: 'products' }
  ]

}
