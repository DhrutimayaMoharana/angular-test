import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadadminRoutingModule } from './lazyloadadmin-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { LazyadminviewComponent } from './lazyadminview/lazyadminview.component';
import { LazyadminlistComponent } from './lazyadminlist/lazyadminlist.component';


@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    LazyadminviewComponent,
    LazyadminlistComponent
  ],
  imports: [
    CommonModule,
    LazyloadadminRoutingModule
  ]
})
export class LazyloadadminModule { }
