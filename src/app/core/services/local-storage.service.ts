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


  remove(key:string):boolean{
    this.localstorage.removeItem(key);
    this.localStoragechanges.next({
      type:'remove',
      key
    });
    return true;
  }



}
