import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickeventComponent } from './clickevent/clickevent.component';



@NgModule({
  declarations: [
    ClickeventComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ClickeventComponent
  ]
})
export class EventmoduleModule { }
