import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { FeatureFlagService } from './services/feature-flag/feature-flag.service';
import { FeatureFlagGuard } from './services/feature-flag-guard/feature-flag.guard';
import { LinkService } from './services/link-service/link-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ToDatePipe } from './pipes/to-date.pipe';

const declarations = [
  ToDatePipe,
  HomeComponent
];

const providers = [
  AuthGuard,
  LinkService,
  ToDatePipe,
  FeatureFlagService,
  FeatureFlagGuard,
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
