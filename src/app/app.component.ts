import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from './modules/shared/services/auth-service/auth.service';
import { filter } from 'rxjs/operators';
import { ILogin } from './modules/shared/interfaces/login';
import { FeatureFlagService } from './modules/shared/services/feature-flag/feature-flag.service';
import { LinkService } from './modules/shared/services/link-service/link-service';
import { Router } from '@angular/router';
import { StorageService } from './modules/shared/services/storage-service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    this.initFeatureFlags();
  }

  private initFeatureFlags(): void {
    const user: ILogin = StorageService.get('USER');
    if (user) {
      this.router.navigateByUrl(LinkService.home());
    }
  }

  constructor(private authService: AuthService, private router: Router, private featureFlagService: FeatureFlagService) {}
}
