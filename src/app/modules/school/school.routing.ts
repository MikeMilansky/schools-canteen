import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { UploadMenuComponent } from './components/upload-menu/upload-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: SchoolComponent,
    children: [
      {
        redirectTo:'home',
        path: '',
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
