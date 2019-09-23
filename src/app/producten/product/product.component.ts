import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { productList } from '../mock-products';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList: Product [] = productList;
  displayProductId: number;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.displayProductId = this.productService.getProductId();
  }
}
