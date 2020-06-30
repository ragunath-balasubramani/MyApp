import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSignupComponent } from './user-signup/user-signup.component';



const routes: Routes = [
  { path: '', component: UserSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }