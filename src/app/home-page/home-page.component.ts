import { Component, OnInit } from '@angular/core';
import { Products } from '../core/model/products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: Products[] = []
  constructor(private router:Router,private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = data.productList
      console.log(this.products);
    })
  }

  getProductDetail(productCode: string) {
    this.router.navigateByUrl('/product/' + productCode);
  }



}
