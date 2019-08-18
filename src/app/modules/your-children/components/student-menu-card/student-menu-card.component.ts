import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { IComplex } from 'src/app/modules/shared/interfaces/complex';
import { IDay } from 'src/app/modules/shared/interfaces/day';


@Component({
  selector: 'app-student-menu-card',
  templateUrl: './student-menu-card.component.html',
  styleUrls: ['./student-menu-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StudentMenuCardComponent implements OnInit {
  @Input() public menu: IDay;
  @Output() public changeEvent: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  public ngOnInit(): void {
  }

  public onChange($event): void {
    this.changeEvent.emit($event);
  }
}
