import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/shared/services/auth-guard/auth.guard';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { FeatureFlagGuard } from './modules/shared/services/feature-flag-guard/feature-flag.guard';
import { RoleGuard } from './modules/shared/services/role-guard/role.guard';
import { WorkflowTypes } from './modules/shared/enums/workflow-types';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'joinflow',
    loadChildren: () => import('./modules/joinflow/join-flow.module').then(m => m.JoinFlowModule)
  },
  {
    path: 'your-children',
    loadChildren: () => import('./modules/your-children/your-children.module').then(m => m.YourChildrenModule),
    canActivate: [RoleGuard],
    data: {role: WorkflowTypes.YOURCHILDREN},
  },
  {
    path: 'school',
    loadChildren: () => import('./modules/school/school.module').then(m => m.SchoolModule),
    canActivate: [RoleGuard],
    data: {role: WorkflowTypes.SCHOOL},
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
