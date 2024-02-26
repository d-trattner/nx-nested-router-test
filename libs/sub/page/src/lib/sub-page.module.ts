import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubPageComponent } from './sub-page.component';
import { SubPage2Component } from './sub-page2.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPage from './+state/page.reducer';
import { PageEffects } from './+state/page.effects';
import { PageFacade } from './+state/page.facade';

@NgModule({
  // imports: [CommonModule, RouterModule.forChild(subPageRoutes)],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPage.PAGE_FEATURE_KEY, fromPage.pageReducer),
    EffectsModule.forFeature([PageEffects]),
  ],
  declarations: [SubPageComponent, SubPage2Component],
  providers: [PageFacade],
})
export class SubPageModule {}
