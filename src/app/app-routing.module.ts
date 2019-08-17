import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/shared/services/auth-guard/auth.guard';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { FeatureFlagGuard } from './modules/shared/services/feature-flag-guard/feature-flag.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, FeatureFlagGuard]
  },
  {
    path: 'joinflow',
    loadChildren: () => import('./modules/joinflow/join-flow.module').then(m => m.JoinFlowModule)
  },
  {
    path: 'your-children',
    loadChildren: () => import('./modules/your-children/your-children.module').then(m => m.YourChildrenModule)
  },
  {
    path: 'school',
    loadChildren: () => import('./modules/school/school.module').then(m => m.SchoolModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
