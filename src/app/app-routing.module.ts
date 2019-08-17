import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/shared/services/auth-guard/auth.guard';
import { HomeComponent } from './modules/shared/components/home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    //canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'joinflow',
    loadChildren: () => import('./modules/joinflow/join-flow.module').then(m => m.JoinFlowModule)
  },
  {
    path: 'your-children',
    loadChildren: () => import('./modules/your-children/your-children.module').then(m => m.YourChildrenModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
