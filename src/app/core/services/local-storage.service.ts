import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localstorage: Storage;
  localStoragechanges = new Subject();

  constructor() {
    this.localstorage = window.localStorage
  }

  get(key: string) {
    return JSON.parse(this.localstorage.getItem(key));
  }

  set(key: string, value: any) {
    this.localstorage.setItem(key, JSON.stringify(value));
    this.localStoragechanges.next({
      type:'set',
      key,value
    });
  }


  remove(id:string):boolean{
    var cartModel = JSON.parse(this.localstorage.getItem('cart'));
    for(let i=0; i<cartModel.cartItem.length;i++){
        if(cartModel.cartItem[i].id===id){
          cartModel.cartItem.splice(i,1)
        }
    }
    this.localstorage.setItem('cart', JSON.stringify(cartModel));
    this.localStoragechanges.next({
      type:'remove',
      id
    });
    return true;
  }

  updateQuantity(quantity:string, productdId:string):boolean{
    var cartModel = JSON.parse(this.localstorage.getItem('cart'));
    for(let i=0; i<cartModel.cartItem.length;i++){
        if(cartModel.cartItem[i].id===productdId){
          cartModel.cartItem[i].quantity = quantity
        }
    }
    this.localstorage.setItem('cart', JSON.stringify(cartModel));
    this.localStoragechanges.next({
      type:'remove',
      productdId
    });
    return true;
  }



  calculateCartAmount():number{
    var totalprice = 0;
    var cartModel = JSON.parse(this.localstorage.getItem('cart'));
    for(let i=0; i<cartModel.cartItem.length;i++){
        console.log("price"+cartModel.cartItem[0].price+"quantity"+cartModel.cartItem[0].quantity)
        totalprice = totalprice +  (parseInt(cartModel.cartItem[i].price)* parseInt(cartModel.cartItem[i].quantity))
    }
   
    return totalprice;
  }

}
