import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LazyadminviewComponent} from './lazyadminview/lazyadminview.component'
import {LazyadminlistComponent} from './lazyadminlist/lazyadminlist.component'

const routes: Routes = [
  {
    path:'adminView',
    component:LazyadminviewComponent
  },
  {
    path:'adminList',
    component:LazyadminlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadadminRoutingModule { }
