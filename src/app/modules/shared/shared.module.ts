import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const declarations = [

];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
