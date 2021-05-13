import { Component, OnInit } from '@angular/core';
import { CartModel } from '../core/model/cartModel';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartModel:CartModel;
  flag:boolean = true;
  private storageSub= new Subject<String>();
  localStorageChange = this.localStorageService.localStoragechanges;
  
  constructor(private readonly router:Router,private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getCartDetail();

    this.watchStorage().subscribe((data:string)=>{
      alert("changed")
    })

    this.localStorageChange.subscribe({
      next:data=>{
        alert("data changed");
      }
    })
   
  }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
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
    window.location.reload();
    
  }

  public checkout(){
    this.localStorageService.set("test","");
  }

}
