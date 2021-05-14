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
  changedQuantity:string
  private storageSub= new Subject<String>();
  private totalPrice:string

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
    if(this.localStorageService.remove(id))
    window.location.reload();
    
  }

  public quantityChanged(productId:string,e){

    alert("productid--"+e.target.value+"---"+productId);
    // this.localStorageService.updateQuantity()
    this.totalPrice = "1000";
    

  }

  public checkout(){
    this.router.navigateByUrl('/checkout')
  }

}
