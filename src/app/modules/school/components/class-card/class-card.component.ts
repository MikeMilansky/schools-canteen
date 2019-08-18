import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IComplex } from 'src/app/modules/shared/interfaces/complex';
import { IClassRomm } from '../classes-list/classes-list.component';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss'],
})
export class ClassCardComponent implements OnInit {

  @Input() public item: IClassRomm;

  constructor() { }

  ngOnInit() {
  }

  private initData(): void {

  }
}
