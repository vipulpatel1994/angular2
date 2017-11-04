import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<top-bar><h1>Hello {{name}}</h1></top-bar>`,
})
export class AppComponent  { name = 'Vipul'; }
