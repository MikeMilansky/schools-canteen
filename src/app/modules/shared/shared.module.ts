import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { FeatureFlagService } from './services/feature-flag/feature-flag.service';
import { LinkService } from './services/link-service/link-service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

const declarations = [
];

const providers = [
  AuthGuard,
  LinkService,
  FeatureFlagService,
];

const deps = [
  AngularMaterialModule,
  CommonModule,
]

@NgModule({
  declarations: [...declarations],
  exports: [...declarations, ...deps],
  providers: [...providers],
  imports: [...deps]
})
export class SharedModule { }
