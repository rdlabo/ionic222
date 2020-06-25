import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignupPage } from './signup/signup.page';
import { SigninPage } from './signin/signin.page';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'signin',
    component: SigninPage
  }
];

@NgModule({
  declarations: [SignupPage, SigninPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class AuthModule { }
