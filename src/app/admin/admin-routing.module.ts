import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsComponent } from './logins/logins.component'
import { SignupComponent } from './signup/signup.component'
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'


const routes: Routes = [{
  path: 'admin',
  children: [
    {
      path: 'login',
      component: LoginsComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
