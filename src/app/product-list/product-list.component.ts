import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';

import { Product }                from '../product/product';
import { ProductService }         from '../_services/product.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  })
  export class ProductListComponent implements OnInit{
    products: Product[] = [];

    constructor(
      private router: Router,
      private productService: ProductService) {
    }

    ngOnInit(): void {
      this.productService.getProducts()
        .subscribe(response => {
          this.products = response;
        })
    }

    gotoDetail(product: Product): void {
      const link = ['/product', product.id];
      this.router.navigate(link);
    }
    
  }