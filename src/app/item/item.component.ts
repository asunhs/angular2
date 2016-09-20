import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: ['./item.component.css']
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
