import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  signupForm = new FormGroup({
    mobile: new FormControl(''),
    password: new FormControl(''),
    c_password: new FormControl(''),
  });


  constructor(private router: Router,private services:GlobalService) { }

  ngOnInit() {
  }

  loginClick(){
    this.router.navigateByUrl('/login');
  }
  onSubmit(){
    console.log(this.signupForm.value);
    this.services.updateInformation(this.signupForm.value);
  }
}