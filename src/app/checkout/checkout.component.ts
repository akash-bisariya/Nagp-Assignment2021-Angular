import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup
  submitted = false;
  constructor(private router: Router,public formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    })  
   }

   get f() { return this.checkoutForm.controls; }
   submitCheckoutForm () {
     this.submitted = true;
 
    //  if (this.checkoutForm.invalid) {
    //      return;
    //  }

    this.router.navigateByUrl('/order-success')
   }

  ngOnInit(): void {
  }

}
