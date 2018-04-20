import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Product } from '../product/product';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private productUrl = 'http://localhost:57247/api/values/';  // URL to web api

  constructor(private http: Http) { }

  getProducts() {
    return this.http
      .get(this.productUrl)
      .map((response: Response) => response.json())
  }

  getProduct(id: number) {
    let url = this.productUrl + id;
    return this.http
      .get(url)
      .map((response: Response) => response.json())
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}