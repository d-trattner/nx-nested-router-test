import { createFeatureSelector } from '@ngrx/store';
import { PAGE_FEATURE_KEY, PageState } from './page.reducer';

// Lookup the 'Page' feature state managed by NgRx
export const selectPageState =
  createFeatureSelector<PageState>(PAGE_FEATURE_KEY);
