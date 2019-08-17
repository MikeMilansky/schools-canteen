import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourChildrenComponent } from './components/your-children/your-children.component';
import { YourChildrenRoutingModule } from './your-children.routing';



@NgModule({
  declarations: [YourChildrenComponent],
  imports: [
    YourChildrenRoutingModule,
    CommonModule
  ]
})
export class YourChildrenModule { }
