import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../core/model/products';
import { CartItem } from '../core/model/cartItem';
import { CartModel } from '../core/model/cartModel';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Products;

  constructor(private readonly route: ActivatedRoute, private translate: TranslateService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
      this.product = data.product;
    })
  }

  public addToCart(productId: string, name: string, price: string, image: string) {
    if(localStorage.getItem("isLoggedIn")){
    let savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      let cart =   {
        "id": productId,
        "name": name,
        "price": price,
        "image": image,
        "quantity": "1"
      }
      savedCart.cartItem.push(cart)
      localStorage.setItem('cart', JSON.stringify(savedCart))
      alert(this.translate.instant('ProductDetail')["PRODUCT_ADDED_TO_CART"])
    }
    else {
      let cartData: CartModel = <CartModel><unknown>{
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
      localStorage.setItem('cart', JSON.stringify(cartData))
    }
  }
  else{
    alert("Please Login First to Add Product!!")
  }


  }

}
