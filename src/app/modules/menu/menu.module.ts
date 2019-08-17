import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MenuRoutingModle } from './menu.routing';

const declarations = [
  HomeComponent,
];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations],
  imports: [
    CommonModule,
    MenuRoutingModle,
    SharedModule,
  ]
})
export class MenuModule { }
