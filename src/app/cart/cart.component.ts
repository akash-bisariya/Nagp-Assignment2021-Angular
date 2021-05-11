import { Component, OnInit } from '@angular/core';
import { CartModel } from '../core/model/cartModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartModel:CartModel;
  constructor() { }

  ngOnInit(): void {
    this.getCartDetail();
  }

  public getCartDetail(){
    this.cartModel = JSON.parse(localStorage.getItem('cart'));
  }

  public remove(){

  }

  public checkout(){
    
  }

}
