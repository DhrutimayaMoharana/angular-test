import { Component } from '@angular/core';


interface dataType{
  name:string,
  id:number,
  indian:boolean,
  address:any
}

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {

  getData() {
    const data:dataType = {
      name: 'dhruti',
      id: 1,
      indian: true,
      address:'Bhubaneswar'
    }
  }

}
