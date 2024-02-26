import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as PageActions from './page.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class PageEffects {
  private actions$ = inject(Actions);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  navigatePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PageActions.navigatePage),
      tap(({ route }) => {
        console.log(this.router.url);
        console.log(this.activatedRoute);
        this.router.navigate([route], { relativeTo: this.activatedRoute });
      }
    )
  ));
}
