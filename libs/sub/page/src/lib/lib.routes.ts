import { Route } from '@angular/router';
import { SubPageComponent } from './sub-page.component';

export const subPageRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: SubPageComponent }
];
