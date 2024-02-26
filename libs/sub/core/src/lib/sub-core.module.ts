import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { subCoreRoutes } from './lib.routes';
import { SubCoreComponent } from './sub-core.component';

import { SubPageModule } from '@test/sub-page';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(subCoreRoutes), SubPageModule],
  declarations: [SubCoreComponent],
})
export class SubCoreModule {}
