import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TopBarComponent } from "./common/top_bar.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
                  AppComponent,
                  TopBarComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
