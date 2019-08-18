import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { UploadMenuComponent } from './components/upload-menu/upload-menu.component';
import { AuthGuard } from '../shared/services/auth-guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: SchoolComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        component: MainMenuComponent,
        path: 'home',
      },
      {
        component: ClassesListComponent,
        path: 'classes',
      },
      {
        component: UploadMenuComponent,
        path: 'upload-menu',
      }
    ]
  }
];

export const SchoolRoutingModule = RouterModule.forChild(routes);
