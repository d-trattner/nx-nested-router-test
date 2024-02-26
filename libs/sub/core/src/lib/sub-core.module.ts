import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { subCoreRoutes } from './lib.routes';
import { SubCoreComponent } from './sub-core.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(subCoreRoutes)],
  declarations: [SubCoreComponent],
})
export class SubCoreModule {}
