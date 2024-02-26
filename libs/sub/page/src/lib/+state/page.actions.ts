import { createAction, props } from '@ngrx/store';

export const navigatePage = createAction('[Page] Navigate to page', props<{ route: string }>());
