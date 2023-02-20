import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeapp',
  templateUrl: './pipeapp.component.html',
  styleUrls: ['./pipeapp.component.css']
})
export class PipeappComponent {

  name="dhruti";
  today=Date.now();
  val=100;
}
