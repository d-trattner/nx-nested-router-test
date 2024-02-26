import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'test-sub-core',
  templateUrl: './sub-core.component.html',
  styleUrl: './sub-core.component.scss',
})
export class SubCoreComponent {

  private router = inject(Router);

  loadSubPage(route: string) {
    this.router.navigate([route]);
  }
}
