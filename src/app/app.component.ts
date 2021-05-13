import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


interface Book {
  name: string;
  author: string;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  books: Book[];
  selectedBook: string;
  savedbook:Book

  constructor(private router:Router, public translate:TranslateService) {

    this.books = [
      {name:"Shop By Category", author:""},
      {name: "Men's Clothing", author: "Author1"},
      {name: "Men's Footwear", author: "Author2"},
      {name: "Accessories", author: "Author3"}
      ];

    translate.addLangs(['en','hi']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hi/)? browserLang : 'en');
   }

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
