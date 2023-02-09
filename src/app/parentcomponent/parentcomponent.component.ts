import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent {
  data: any;
  name: any;
  age: any;

  parentComponent(item: any) {
    console.warn(item);
    this.name=item.name
    this.age=item.age
    this.data=item
  }
}
