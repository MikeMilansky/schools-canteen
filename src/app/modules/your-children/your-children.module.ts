import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourChildrenComponent } from './components/your-children/your-children.component';
import { YourChildrenRoutingModule } from './your-children.routing';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';
import { StudentMenuCardComponent } from './components/student-menu-card/student-menu-card.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [YourChildrenComponent, StudentMenuComponent, StudentMenuCardComponent, HeaderComponent],
  imports: [
    YourChildrenRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class YourChildrenModule { }
