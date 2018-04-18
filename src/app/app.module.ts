import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import { AppRoutingModule }                   from './app-routing.module';
import { HttpModule }                         from '@angular/http';
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule }                      from '@angular/material/card';

import { AppComponent }                       from './app.component';
import { ProductComponent }                   from './product/product.component';
import { ProductListComponent }               from './product-list/product-list.component';
import { ProductDetailComponent }             from './product-detail/product-detail.component';
import { ProductService }                     from './_services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule     
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
