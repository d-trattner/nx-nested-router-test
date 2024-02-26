import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PageActions from './page.actions';

export const PAGE_FEATURE_KEY = 'page';

export interface PageState  {
  loaded: boolean;
}

export interface PagePartialState {
  readonly [PAGE_FEATURE_KEY]: PageState;
}

export const initialPageState: PageState = {
  // set initial required properties
  loaded: false,
};

const reducer = createReducer(
  initialPageState,
  // on(PageActions.initPage, (state) => ({
  //   ...state,
  //   loaded: false,
  //   error: null,
  // })),
  // on(PageActions.loadPageSuccess, (state, { page }) =>
  //   pageAdapter.setAll(page, { ...state, loaded: true })
  // ),
  // on(PageActions.loadPageFailure, (state, { error }) => ({ ...state, error }))
);

export function pageReducer(state: PageState | undefined, action: Action) {
  return reducer(state, action);
}
