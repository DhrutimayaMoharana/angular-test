import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test-App';
  name = 'Dhrutimaya Moharana'
  getShortName(){
    return 'Sumit'
  }
  getName(){
    return this.name
  }
  object={
    name : 'Amiya',
    age : 24
  }
  arr=['Amiya','Nihar','Piyush']
  a=10
  b=12
  siteUrl=window.location.href
}
