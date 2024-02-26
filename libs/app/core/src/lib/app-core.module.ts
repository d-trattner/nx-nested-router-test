import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appCoreRoutes } from './lib.routes';
import { AppCoreComponent } from './app-core.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appCoreRoutes)],
  declarations: [AppCoreComponent],
})
export class AppCoreModule {}
