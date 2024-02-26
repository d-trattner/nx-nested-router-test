import { Route } from '@angular/router';
import { SubCoreComponent } from './sub-core.component';

export const subCoreRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: SubCoreComponent,
    children: [
      {
        path: 'page',
        // pathMatch: 'full',
        loadChildren: () =>
          import('@test/sub-page').then((m) => m.SubPageModule),
      },
    ],
  },
];
