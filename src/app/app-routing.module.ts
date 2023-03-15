import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './routingmodule/user/user.component'
import { AdminComponent } from './routingmodule/admin/admin.component'

const routes: Routes = [

  // {
  //   path: 'user',
  //   component: UserComponent
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // }

  {
    path: 'lazyloadsadmin',
    loadChildren: () => import('./lazyloadadmin/lazyadminview/lazyadminview.component')
      .then(mod => mod.LazyadminviewComponent)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
