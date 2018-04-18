import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../product/product';
import { ProductService } from '../_services/product.service';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
  })
  export class ProductDetailComponent implements OnInit {
    @Input() product: Product;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here
  
    constructor(
      private productService: ProductService,
      private route: ActivatedRoute) {
    }
  
    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        if (params['id'] !== undefined) {
          const id = +params['id'];
          this.navigated = true;
          this.productService.getProduct(id);
        } else {
          this.navigated = false;
          this.product = new Product();
        }
      });
    }
  
    // save(): void {
    //   this.heroService
    //       .save(this.hero)
    //       .then(hero => {
    //         this.hero = hero; // saved hero, w/ id if new
    //         this.goBack(hero);
    //       })
    //       .catch(error => this.error = error); // TODO: Display error message
    // }
  
    goBack(savedProduct: Product = null): void {
      this.close.emit(savedProduct);
      if (this.navigated) { window.history.back(); }
    }
  }