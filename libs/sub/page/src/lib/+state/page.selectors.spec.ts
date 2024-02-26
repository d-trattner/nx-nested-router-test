import { PageEntity } from './page.models';
import {
  pageAdapter,
  PagePartialState,
  initialPageState,
} from './page.reducer';
import * as PageSelectors from './page.selectors';

describe('Page Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPageId = (it: PageEntity) => it.id;
  const createPageEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as PageEntity);

  let state: PagePartialState;

  beforeEach(() => {
    state = {
      page: pageAdapter.setAll(
        [
          createPageEntity('PRODUCT-AAA'),
          createPageEntity('PRODUCT-BBB'),
          createPageEntity('PRODUCT-CCC'),
        ],
        {
          ...initialPageState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Page Selectors', () => {
    it('selectAllPage() should return the list of Page', () => {
      const results = PageSelectors.selectAllPage(state);
      const selId = getPageId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = PageSelectors.selectEntity(state) as PageEntity;
      const selId = getPageId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectPageLoaded() should return the current "loaded" status', () => {
      const result = PageSelectors.selectPageLoaded(state);

      expect(result).toBe(true);
    });

    it('selectPageError() should return the current "error" state', () => {
      const result = PageSelectors.selectPageError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
