import { Component, OnInit } from '@angular/core';
import { productList } from './mock-products';
import { Product } from './product/product';

@Component({
  selector: 'app-producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.scss']
})
export class ProductenComponent implements OnInit {
  productList: Product [] = productList;

  constructor() { }

  ngOnInit() {
  }

}
