import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './modules/shared/services/auth-guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'joinflow',
    loadChildren: () => import('./modules/joinflow/join-flow.module').then(m => m.JoinFlowModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
