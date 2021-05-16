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

  constructor() {
    this.saveUser("user", "user", "test@test.com", "7651991216")
  }

  validateUser(username: string, password: string): boolean {
    if (this.users[0].username == username && this.users[0].password == password) {
      return true;
    }
    else
      return false;
  }

  private saveUser(username: string, password: string, email: string, mobile: string) {
    this.users = [{
      "id": "1",
      "username": username,
      "password": password,
      "email": email,
      "mobile": mobile
    }]
  }


}


