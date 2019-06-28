import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Product} from '../product';
import {PRODUCTS} from '../mock-products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-app',
  templateUrl: './product-app.component.html',
  styleUrls: ['./product-app.component.css']
})
export class ProductAppComponent implements OnInit {

  product: Product = {
    Id: 1, 
    Title: 'Apple Watch',
    Price: 100,
    Rating: 5,
    Description: 'Electronic Devices',
    Category: 'Watch'
  };

  //products = PRODUCTS;
  products: Product[];

  constructor(private productService: ProductService) { 

  }

  ngOnInit() {
    this.getProducts();
  }

  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
 
  getProducts(): void {
    this.products = this.productService.getProducts();
  }
}
