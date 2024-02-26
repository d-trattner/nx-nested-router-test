import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { subPageRoutes } from './lib.routes';
import { SubPageComponent } from './sub-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(subPageRoutes)],
  declarations: [SubPageComponent],
})
export class SubPageModule {}
