import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as PageActions from './page.actions';
import { PageEffects } from './page.effects';

describe('PageEffects', () => {
  let actions: Observable<Action>;
  let effects: PageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PageEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PageEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PageActions.initPage() });

      const expected = hot('-a-|', {
        a: PageActions.loadPageSuccess({ page: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
