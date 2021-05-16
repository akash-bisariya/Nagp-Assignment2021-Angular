import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


interface Category {
  name: string;
  value: string;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  categories: Category[];
  selectedBook: string;
  categoryName:Category
  searchText:string="";

  constructor(private router:Router, public translate:TranslateService) {

    this.categories = [
      {name:"Shop By Category", value:"0"},
      {name: "Men's Footwear", value: "1"},
      {name: "Accessories", value: "2"},
      {name: "Men's Clothing", value: "3"}
      ];

    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/)? browserLang : 'en');
   }

  title = 'NAGP-Assignment2021';
  localStorageUser = localStorage;

  Login(){
    if(localStorage.getItem("isLoggedIn")=='true'){
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem('cart')
    }
    else{
      this.router.navigateByUrl('/login')
    }
  }

  categoryChanged(){
    if(this.categoryName.value!="0")
    this.router.navigateByUrl('/home/category/'+this.categoryName.name);
    else
    this.router.navigateByUrl('/home');
  }

  searchProduct(search:string){
    if(search)
    this.router.navigateByUrl('/home/search/'+search);
    else
    this.router.navigateByUrl('/home');
  }

}
