import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {

  name="Batman"
  disabledBox=true
  enableBox(){
    this.disabledBox=false
  }

}
