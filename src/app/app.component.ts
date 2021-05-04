import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router:Router) { }

  title = 'NAGP-Assignment2021';
  localStorageUser = localStorage;

  testLogin(){
    if(localStorage.getItem("isLoggedIn")=='true'){
        localStorage.removeItem("isLoggedIn")
    }
    else{
      this.router.navigateByUrl('/login')
    }
  }

}
