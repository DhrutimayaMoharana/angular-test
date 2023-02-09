import { Component ,OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent {
  @Input() item = '';

  @Output() parentComponent:EventEmitter<any>= new EventEmitter()
  constructor(){}

  ngOnInit(): void{
    // this.parentComponent.emit({name:'Dhruti',age:28})
  }
  sendDatas(){
    this.parentComponent.emit({name:'Dhruti',age:28})
  }

}
