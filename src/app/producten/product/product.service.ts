import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  currentProductId = -1;

  setProductId(newId: number) {
    this.currentProductId = newId;
  }

  getProductId(): number {
    return this.currentProductId;
  }

  constructor() {}
}
