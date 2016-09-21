import {
  Component,
  ViewEncapsulation,
  Inject,
  Input,
  OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Greeting } from '../services/greeting';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() name: string;
  fetchName: Promise<string>;
  obName: Observable<string>;
  greeter: Greeting;

  constructor(greeter: Greeting) {
    this.fetchName = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Sun'), 1000);
    });
    this.obName = Observable.create((observer:Observer<string>) => {
      observer.next("Sun");
      setInterval(() => { observer.next("Kim"); }, 1000);
    });
    this.greeter = greeter;
  }

  ngOnInit() {
    setTimeout(() => {
      this.name = 'Kim';
    }, 2000);
    this.name = this.greeter.greet(this.name);
  }

  onClick() {
    alert(`Hello, ${this.name}`);
  }
}
