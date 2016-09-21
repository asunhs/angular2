import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item.component';

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
    exports : [
        ItemComponent
    ]
})
export class ItemModule { }
