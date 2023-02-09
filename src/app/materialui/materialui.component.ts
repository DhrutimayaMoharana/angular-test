import { Component } from '@angular/core';

@Component({
  selector: 'app-materialui',
  templateUrl: './materialui.component.html',
  styleUrls: ['./materialui.component.css']
})
export class MaterialuiComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
