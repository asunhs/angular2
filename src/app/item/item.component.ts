import { Component } from '@angular/core';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {
  name:string;

  constructor() {
    this.name = 'Sun';
  }

  onClick() {
    alert(`Hello, ${this.name}`);
  }
}
