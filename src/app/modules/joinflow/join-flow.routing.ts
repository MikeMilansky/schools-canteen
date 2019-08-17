import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
];

export const JoinFlowRoutingModule = RouterModule.forChild(routes);
