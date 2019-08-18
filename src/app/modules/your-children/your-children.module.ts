import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourChildrenComponent } from './components/your-children/your-children.component';
import { YourChildrenRoutingModule } from './your-children.routing';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';
import { StudentMenuCardComponent } from './components/student-menu-card/student-menu-card.component';



@NgModule({
  declarations: [YourChildrenComponent, StudentMenuComponent, StudentMenuCardComponent],
  imports: [
    YourChildrenRoutingModule,
    CommonModule
  ]
})
export class YourChildrenModule { }
