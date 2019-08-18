import { Routes, RouterModule } from '@angular/router';
import { YourChildrenComponent } from './components/your-children/your-children.component';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';
import { AuthGuard } from '../shared/services/auth-guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: YourChildrenComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id/student-menu',
    component: StudentMenuComponent,
    canActivate: [AuthGuard],
  }
];

export const YourChildrenRoutingModule = RouterModule.forChild(routes);
