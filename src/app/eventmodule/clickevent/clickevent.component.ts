import { Component } from '@angular/core';

@Component({
  selector: 'app-clickevent',
  templateUrl: './clickevent.component.html',
  styleUrls: ['./clickevent.component.css']
})
export class ClickeventComponent {
  yourName="Dhruti"
  des="This is a word!!!"
event: any;
  getOnClickName(name:any)
  {
    alert(name)
  }
  myevent(msg:any){
    console.warn(msg)
  }
  mouseOver(des:any){
    console.log(des)
  }
  mouseIn(des:any){
    console.log(des)
  }
  currentval =''
  getVal(val:any){
    console.warn(val)
    this.currentval=val
  }
}
