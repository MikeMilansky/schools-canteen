import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { FeatureFlagService } from './services/feature-flag/feature-flag.service';
import { FeatureFlagGuard } from './services/feature-flag-guard/feature-flag.guard';
import { LinkService } from './services/link-service/link-service';
import { AuthService } from './services/auth-service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

const declarations = [
];

const providers = [
  AuthGuard,
  LinkService,
  FeatureFlagService,
  FeatureFlagGuard,
  AuthService,
];

const deps = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...declarations, HomeComponent],
  exports: [...declarations, ...deps],
  providers: [...providers],
  imports: [...deps]
})
export class SharedModule { }
