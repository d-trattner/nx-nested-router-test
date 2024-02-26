import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageFacade } from '@test/sub-page';

@Component({
  selector: 'test-sub-core',
  templateUrl: './sub-core.component.html',
  styleUrl: './sub-core.component.scss',
})
export class SubCoreComponent {

  private pageFacade = inject(PageFacade);

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  loadSubPage(route: string) {
    this.pageFacade.navigatePage(route);
    // console.log(this.router.url);
    // console.log(this.activatedRoute);
    // this.router.navigate([route], { relativeTo: this.activatedRoute });
  }
}
