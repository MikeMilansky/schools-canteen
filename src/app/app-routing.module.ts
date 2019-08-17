import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/shared/services/auth-guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu',
    canActivate: [AuthGuard]
  },
  {
    path: 'joinflow',
    loadChildren: () => import('./modules/joinflow/join-flow.module').then(m => m.JoinFlowModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
