import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent {
  data=['a','b','c','d']
  data1=[
    {
      name:'Sumit',
      age:'23'
    },
    {
      name:'Dhruti',
      age:'24'
    },
    {
      name:'Amiya',
      age:'24'
    }
  ]
}
