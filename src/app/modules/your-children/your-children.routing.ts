import { Routes, RouterModule } from '@angular/router';
import { YourChildrenComponent } from './components/your-children/your-children.component';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: YourChildrenComponent,
  },
  {
    path: ':id/student-menu',
    component: StudentMenuComponent,
  }
];

export const YourChildrenRoutingModule = RouterModule.forChild(routes);
