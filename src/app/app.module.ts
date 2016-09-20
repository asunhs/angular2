import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ItemModule } from './item/item.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        ItemModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
