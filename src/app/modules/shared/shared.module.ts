import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { FeatureFlagService } from './services/feature-flag/feature-flag.service';
import { FeatureFlagGuard } from './services/feature-flag-guard/feature-flag.guard';
import { LinkService } from './services/link-service/link-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ToDatePipe } from './pipes/to-date.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoleGuard } from './services/role-guard/role.guard';

const declarations = [
  ToDatePipe,
  HomeComponent,
  NotFoundComponent,
];

const providers = [
  AuthGuard,
  LinkService,
  ToDatePipe,
  RoleGuard,
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
