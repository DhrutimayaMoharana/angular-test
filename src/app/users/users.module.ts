import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginsComponent } from './logins/logins.component';
import {UsersRoutingModule} from './users-routing.module'


@NgModule({
  declarations: [
    SignupComponent,
    LoginsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    LoginsComponent,
    SignupComponent
  ]
})
export class UsersModule { }
