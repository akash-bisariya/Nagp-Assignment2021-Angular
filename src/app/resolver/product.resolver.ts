import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../core/services/product.service';
import { Products } from '../core/products';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Products[]> {

  constructor(private productService:ProductService){

  }
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Products[]> {
    return this.productService.getProductList();
  }
}
