import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  {
    path: 'foo',
    loadComponent: () => import('./foo.component').then((m) => m.FooComponent),
  },
  { path: '**', redirectTo: 'home' },
];
