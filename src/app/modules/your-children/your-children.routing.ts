import { Routes, RouterModule } from '@angular/router';
import { YourChildrenComponent } from './components/your-children/your-children.component';

export const routes: Routes = [
  {
    path: '',
    component: YourChildrenComponent,
  }
];

export const YourChildrenRoutingModule = RouterModule.forChild(routes);
