import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user_name: string;
  user_password: string;
  loginForm: FormGroup;
  invalidUser: boolean = false;

  constructor(private router: Router, private loginService: LoginService, public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  submitLogin() {
    if (this.loginService.validateUser(this.user_name, this.user_password)) {
      localStorage.setItem("isLoggedIn", 'true');
      this.router.navigateByUrl('/home')
      this.invalidUser = false;
    }
    else
      this.invalidUser = true;
  }

}
