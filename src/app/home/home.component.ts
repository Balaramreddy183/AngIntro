import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,  CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private productsService: ProductsService
  ) { }
  products:Product[] =[];
  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 20 })
      .subscribe((products: Products) =>{
       this.products = products.items;
      })
  }
}