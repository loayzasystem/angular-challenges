import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavButtonComponent } from './nav-button.component';

@Component({
  imports: [NavButtonComponent, RouterLink],
  selector: 'app-home',
  template: `
    <nav-button [routerLink]="['']" class="fixed left-1/2 top-3 ">
      Foo Page
    </nav-button>
    <div id="top" class="h-screen bg-gray-500">
      Empty
      <nav-button anchor="bottom">Scroll Bottom</nav-button>
    </div>
    <div id="bottom" class="h-screen bg-blue-300">
      I want to scroll each
      <nav-button [routerLink]="['']" fragment="top">Scroll Top</nav-button>
    </div>
  `,
  host: { class: 'scroll-smooth' },
})
export class HomeComponent {}
