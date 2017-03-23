import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <header></header>
      <nav></nav>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
