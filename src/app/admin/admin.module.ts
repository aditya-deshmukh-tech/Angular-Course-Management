import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FirebaseModule } from '../firebase/firebase/firebase.module';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FirebaseModule
  ],
  exports:[
    LoginComponent,
    SignupComponent
  ]
})
export class AdminModule { }
