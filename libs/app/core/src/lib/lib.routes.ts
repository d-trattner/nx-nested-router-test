import { Route } from '@angular/router';
import { AppCoreComponent } from './app-core.component';

export const appCoreRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AppCoreComponent,
    children: [
      {
        path: 'sub',
        // pathMatch: 'full',
        loadChildren: () =>
          import('@test/sub-core').then((m) => m.SubCoreModule),
      },
    ],
  },
];
