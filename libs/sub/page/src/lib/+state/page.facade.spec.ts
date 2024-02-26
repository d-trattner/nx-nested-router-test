import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as PageActions from './page.actions';
import { PageEffects } from './page.effects';
import { PageFacade } from './page.facade';
import { PageEntity } from './page.models';
import {
  PAGE_FEATURE_KEY,
  PageState,
  initialPageState,
  pageReducer,
} from './page.reducer';
import * as PageSelectors from './page.selectors';

interface TestSchema {
  page: PageState;
}

describe('PageFacade', () => {
  let facade: PageFacade;
  let store: Store<TestSchema>;
  const createPageEntity = (id: string, name = ''): PageEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PAGE_FEATURE_KEY, pageReducer),
          EffectsModule.forFeature([PageEffects]),
        ],
        providers: [PageFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(PageFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allPage$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allPage$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadPageSuccess` to manually update list
     */
    it('allPage$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allPage$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        PageActions.loadPageSuccess({
          page: [createPageEntity('AAA'), createPageEntity('BBB')],
        })
      );

      list = await readFirst(facade.allPage$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
