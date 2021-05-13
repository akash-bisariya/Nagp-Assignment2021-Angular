import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/products';
import { CartItem } from '../model/cartItem';
import { CartModel } from '../model/cartModel';
import { filter, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_LIST_BASE_URL = "/assets/templates";

  private listexa:any
  constructor(private readonly http: HttpClient) { }

  public getProductList(categoryId:string) {
    const url = `${this.PRODUCT_LIST_BASE_URL}/product.json`;
    if(categoryId){
      console.log(categoryId);

      return this.http.get<Products[]>(url).pipe (
        map(items => 
         items.filter(item => item.category == categoryId)) )

      // this.listexa =  this.http.get<Products[]>(url).pipe(
      //    filter(object => object[categoryId]==categoryId));
      //   //  console.log(this.listexa);
      //    return this.listexa;
    }
    else{
      console.log("Nocategory")
    return this.http.get<Products[]>(url);
    }
  }

  

  public getProductDetail(productId:string) {
    const url = `${this.PRODUCT_LIST_BASE_URL}/product.json`;
    return this.http.get<Products[]>(url).pipe(
      map(product => product.find(prd=>prd.id===productId)  
    ));
  }


}
