import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router:Router, public translate:TranslateService) {
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
