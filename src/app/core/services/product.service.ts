import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_LIST_BASE_URL = "/assets/templates";

  constructor(private readonly http: HttpClient) { }

  public getProductList() {
    const url = `${this.PRODUCT_LIST_BASE_URL}/product.json`;
    return this.http.get<Products[]>(url);
  }
}
