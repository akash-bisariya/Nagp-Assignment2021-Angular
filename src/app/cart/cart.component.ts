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
  private totalPrice:number;

  localStorageChange = this.localStorageService.localStoragechanges;
  
  constructor(private readonly router:Router,private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getCartDetail();
    this.totalPrice = this.localStorageService.calculateCartAmount()
    this.watchStorage().subscribe((data:string)=>{
    })

    this.localStorageChange.subscribe({
      next:data=>{
        this.totalPrice = this.localStorageService.calculateCartAmount()
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
    this.localStorageService.updateQuantity(e.target.value,productId);
    

  }

  public checkout(){
    this.router.navigateByUrl('/checkout')
  }


}
