import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../shared/services/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: HomeComponent,
    canActivate: [AuthGuard],
  }
];

export const MenuRoutingModle = RouterModule.forChild(routes);
