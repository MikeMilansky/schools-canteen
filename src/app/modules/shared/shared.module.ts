import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { FeatureFlagService } from './services/feature-flag.service';
import { LinkService } from './services/link-service/link-service';

const declarations = [

];

const providers = [
  AuthGuard,
  LinkService,
  FeatureFlagService,
];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations],
  providers: [...providers],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
