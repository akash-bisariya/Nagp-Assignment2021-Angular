import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../core/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Products;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.data.subscribe(data => {
      console.log(data);
      this.product = data.product;
    })
  }

}
