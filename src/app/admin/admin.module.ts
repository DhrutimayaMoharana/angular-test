import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginsComponent } from './logins/logins.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginsComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
