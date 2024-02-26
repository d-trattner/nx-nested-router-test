import { Route } from '@angular/router';
import { SubCoreComponent } from './sub-core.component';
import { SubPage2Component, SubPageComponent } from '@test/sub-page';

export const subCoreRoutes: Route[] = [
  {
    path: '',
    component: SubCoreComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: 'page',
        pathMatch: 'prefix',
      },
      {
        path: 'page',
        // pathMatch: 'full',
        component: SubPageComponent,
        // loadChildren: () =>
        //   import('@test/sub-page').then((m) => m.SubPageModule),
      },
      {
        path: 'page2',
        // pathMatch: 'full',
        component: SubPage2Component,
        // loadChildren: () =>
        //   import('@test/sub-page').then((m) => m.SubPageModule),
      },
    ],
  },
];
