import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../core/services/product.service';
import { Products } from '../core/model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolver implements Resolve<Products> {
  
  constructor(private productService:ProductService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Products> {
    const productId = route.paramMap.get('productId');
    return this.productService.getProductDetail(productId);
  }

}
