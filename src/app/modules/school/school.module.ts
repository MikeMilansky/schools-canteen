import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school.routing';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { UploadMenuComponent } from './components/upload-menu/upload-menu.component';

@NgModule({
  declarations: [
    SchoolComponent, MainMenuComponent, ClassesListComponent, UploadMenuComponent
  ],
  imports: [
    SchoolRoutingModule,
    CommonModule,
  ]
})
export class SchoolModule { }
