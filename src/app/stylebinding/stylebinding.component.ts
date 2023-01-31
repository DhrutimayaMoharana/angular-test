import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {
  color = 'blue'
  err = true
  updateColor() {
    this.color = 'cyan'
    if (this.err) {
      this.err = false
    }
    else {
      this.err = true
    }
  }
}
