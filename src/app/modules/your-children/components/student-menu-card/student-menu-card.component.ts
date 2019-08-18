import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComplex } from 'src/app/modules/shared/interfaces/complex';

@Component({
  selector: 'app-student-menu-card',
  templateUrl: './student-menu-card.component.html',
  styleUrls: ['./student-menu-card.component.scss']
})
export class StudentMenuCardComponent implements OnInit {
  @Input() public items: IComplex[];
  @Input() public date: Date | string = 'Понедельник, 05.09.19';
  @Output() public changeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public onChange($event): void {
    this.changeEvent.emit($event);
  }
}
