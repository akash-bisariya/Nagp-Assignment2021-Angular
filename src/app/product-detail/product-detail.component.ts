import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../core/model/products';
import { CartItem } from '../core/model/cartItem';
import { CartModel } from '../core/model/cartModel';

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

  public addToCart(productId:string,name:string,price:string,image:string) {
    let cartData:CartModel = <CartModel><unknown>{
      "customer_id": "1",
      "cartItem": [
        {
          "id": productId,
          "name": name,
          "price": price,
          "image": image,
          "quantity": "1"
        }
      ]
    };
    
    localStorage.setItem('cart',JSON.stringify(cartData))
  }

}
