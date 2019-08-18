import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IComplex } from 'src/app/modules/shared/interfaces/complex';

export interface IComplexSchool extends IComplex {
  total: number;
}

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss'],
})
export class ClassCardComponent implements OnInit {

  @Input() public item: IComplexSchool;

  constructor() { }

  ngOnInit() {
  }

  private initData(): void {

  }
}
