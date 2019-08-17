import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { JoinFlowRoutingModule } from './join-flow.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    JoinFlowRoutingModule,
    SharedModule,
    CommonModule,
  ],
})
export class JoinFlowModule { }
