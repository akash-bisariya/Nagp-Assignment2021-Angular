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
      {name: "Book1", author: "Author1"},
      {name: "Book2", author: "Author2"},
      {name: "Book3", author: "Author3"},
      {name: "Book4", author: "Author4"},
      {name: "Book5", author: "Author5"}
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
