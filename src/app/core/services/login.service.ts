import { Injectable, OnInit } from '@angular/core';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  private users: UserModel[];


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

private getUsers(): UserModel[] {
  this.users = [{
    "id": "1",
    "username": "user",
    "password": "user",
    "email":"",
    "mobile":""
  }];
  return this.users;
}

private validateUser(username:string, password:string){
  
}


}


