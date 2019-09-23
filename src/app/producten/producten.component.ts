import { Component, OnInit } from '@angular/core';
import { productList } from './mock-products';
import { Product } from './product/product';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.scss']
})
export class ProductenComponent implements OnInit {
  productList: Product [] = productList;

  constructor(private productService: ProductService) {}

  onClick(id: number) {
    this.productService.setProductId(id);
  }

  ngOnInit() {
  }

}
