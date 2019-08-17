import { Injectable,  } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FeatureFlagService } from '../feature-flag/feature-flag.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagGuard implements CanActivate {

  public canActivate(): Observable<boolean> {
    return this.featureFlagService.isInit$
      .pipe(filter((flag: boolean) => !!flag));
  }

  constructor(private featureFlagService: FeatureFlagService) {
  }
}
