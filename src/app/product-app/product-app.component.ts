import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Product} from '../product';
import {PRODUCTS} from '../mock-products';

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

  products = PRODUCTS;

  // public productId;
  // public selectedId;
  // productArrary = [
  //   {Id: 1, Title: "Apple Watch", Price: 100, Rating: 5, Description: "Electronic Device", Category: "Electronic Device"},
  //   {Id: 2, Title: "Soda", Price: 23, Rating: 4, Description: "Living Product", Category: "Living Product"},
  //   {Id: 3, Title: "Lemmon", Price: 2, Rating: 5, Description: "Fruit", Category: "Food"}
  // ]

  constructor() { 

    // this.productArrary = [
    //   {Id: 1, Title: "Apple Watch", Price: 100, Rating: 5, Description: "Electronic Device", Category: "Electronic Device"},
    //   {Id: 2, Title: "Soda", Price: 23, Rating: 4, Description: "Living Product", Category: "Living Product"},
    //   {Id: 3, Title: "Lemmon", Price: 2, Rating: 5, Description: "Fruit", Category: "Food"}
    // ];
  }

  ngOnInit() {
  }

  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  // onSelect(p) {
  //   console.log(p)
  //   this.router.navigate(['/products', p.Id]);
  //    //this.router.navigate([department.id], { relativeTo: this.route });
  // }

  // isSelected(p) { 
  //   return p.id === this.selectedId; 
  // }
}
