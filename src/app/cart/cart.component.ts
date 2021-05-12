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

  public remove(id:string){
    var cartModel = JSON.parse(localStorage.getItem('cart'));
    for(let i=0; i<cartModel.cartItem.length;i++){
        if(cartModel.cartItem[i].id===id){
          cartModel.cartItem.splice(i,1)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartModel));
  }

  public checkout(){
    alert(this.cartModel.cartItem.length>1)
  }

}
