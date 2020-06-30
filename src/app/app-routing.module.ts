import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./feature-modules/signup/signup.module').then(module => module.SignupModule),
    data: { preload: true }
  },
  {
    path: 'login',
    loadChildren: () => import('./feature-modules/login/login.module').then(module => module.LoginModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }