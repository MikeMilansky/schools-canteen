import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourChildrenComponent } from './components/your-children/your-children.component';
import { YourChildrenRoutingModule } from './your-children.routing';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';



@NgModule({
  declarations: [YourChildrenComponent, StudentMenuComponent],
  imports: [
    YourChildrenRoutingModule,
    CommonModule
  ]
})
export class YourChildrenModule { }
