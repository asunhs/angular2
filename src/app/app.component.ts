import { Component, ViewChild } from '@angular/core';
import { ItemComponent } from './item/item.component';

import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ItemComponent) child: ItemComponent;

  onClick(item:ItemComponent) {

    console.log(item);

    if (item) {
      item.onClick();
    } else {
      this.child.onClick();
    }
  }
}
