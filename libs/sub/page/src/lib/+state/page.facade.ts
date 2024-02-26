import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as PageActions from './page.actions';
import * as PageFeature from './page.reducer';
import * as PageSelectors from './page.selectors';

@Injectable()
export class PageFacade {
  private readonly store = inject(Store);

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  navigatePage(route: string) {
    this.store.dispatch(PageActions.navigatePage({ route }));
  }
}
