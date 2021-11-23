import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] | undefined

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    const newLocal = this.products;
    this.ProductService.read().subscribe(products => {
      this.products = this.products
      console.log(products)      
    })
  }

}
