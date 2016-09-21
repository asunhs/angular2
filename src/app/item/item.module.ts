import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item.component';

import { Greeting } from '../services/greeting';

import { UpperPipe } from './upper.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ItemComponent,
        UpperPipe
    ],
    providers: [
        Greeting
    ],
    exports : [
        ItemComponent
    ]
})
export class ItemModule { }
