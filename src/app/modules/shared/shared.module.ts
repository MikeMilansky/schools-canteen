import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { FeatureFlagService } from './services/feature-flag/feature-flag.service';
import { LinkService } from './services/link-service/link-service';
import { AuthService } from './services/auth-service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const declarations = [
];

const providers = [
  AuthGuard,
  LinkService,
  FeatureFlagService,
  AuthService,
];

const deps = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations, ...deps],
  providers: [...providers],
  imports: [...deps]
})
export class SharedModule { }
