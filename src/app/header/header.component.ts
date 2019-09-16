import { Component } from '@angular/core';

import { navItem } from './listItem';
import { ITEMSL, ITEMSR } from './mock-items';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navItemsL: navItem[] = ITEMSL;
  navItemsR: navItem[] = ITEMSR;

  title = "Webshop Penguini";


}
