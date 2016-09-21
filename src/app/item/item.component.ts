import {
  Component,
  ViewEncapsulation,
  OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  name: string;
  fetchName: Promise<string>;
  obName: Observable<string>;

  constructor() {
    this.name = 'Sun';
    this.fetchName = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Sun'), 1000);
    });
    this.obName = Observable.create((observer:Observer<string>) => {
      observer.next("Sun");
      setInterval(() => { observer.next("Kim"); }, 1000);
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.name = 'Kim';
    }, 2000);
  }

  onClick() {
    alert(`Hello, ${this.name}`);
  }
}
