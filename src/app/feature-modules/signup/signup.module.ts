import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignupComponent } from './user-signup/user-signup.component';

import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from '../../shared-modules/shared.module';


@NgModule({
  declarations: [UserSignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule
  ]
})
export class SignupModule { }