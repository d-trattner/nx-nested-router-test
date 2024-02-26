import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: 'core',
        loadChildren: () => import('@test/app-core').then((m) => m.AppCoreModule),
      },
    ],
    // loadChildren: () => import('@test/app-core').then((m) => m.appCoreRoutes),
  },
];
