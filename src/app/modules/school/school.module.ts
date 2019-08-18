import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school.routing';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { UploadMenuComponent } from './components/upload-menu/upload-menu.component';
import { CardComponent } from './components/card/card.component';
import { ClassCardComponent } from './components/class-card/class-card.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    SchoolComponent,
    MainMenuComponent,
    ClassesListComponent,
    UploadMenuComponent,
    CardComponent,
    ClassCardComponent,
    HeaderComponent
  ],
  imports: [
    SchoolRoutingModule,
    SharedModule,
    CommonModule,
  ]
})
export class SchoolModule { }
