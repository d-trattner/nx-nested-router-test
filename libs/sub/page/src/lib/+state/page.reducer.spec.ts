import { Action } from '@ngrx/store';

import * as PageActions from './page.actions';
import { PageEntity } from './page.models';
import { PageState, initialPageState, pageReducer } from './page.reducer';

describe('Page Reducer', () => {
  const createPageEntity = (id: string, name = ''): PageEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Page actions', () => {
    it('loadPageSuccess should return the list of known Page', () => {
      const page = [
        createPageEntity('PRODUCT-AAA'),
        createPageEntity('PRODUCT-zzz'),
      ];
      const action = PageActions.loadPageSuccess({ page });

      const result: PageState = pageReducer(initialPageState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = pageReducer(initialPageState, action);

      expect(result).toBe(initialPageState);
    });
  });
});
