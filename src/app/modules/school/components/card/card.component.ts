import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IDay } from 'src/app/modules/shared/interfaces/day';

@Component({
  selector: 'app-school-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public menu: IDay;

  constructor() { }

  public ngOnInit(): void {
  }

}
