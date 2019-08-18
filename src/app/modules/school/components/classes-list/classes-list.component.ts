import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { IComplex } from 'src/app/modules/shared/interfaces/complex';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

export interface IClassRomm {
  name: string;
  date: moment.Moment;
  total: number;
  items: IComplexCount[];
}

export interface IComplexCount {
  id: number;
  name: string;
  count: number;
}

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss'],
})
export class ClassesListComponent implements OnInit {

  public classList: IClassRomm[] = [];

  constructor(
    private http: HttpClient,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.initData();
  }

  public onPrint(): void {
    window.print();
  }

  public initData(): void {
    this.classList = [
      {
        name: '1A',
        date: moment(),
        total: 20,
        items: [
          {
            id: 1,
            name: 'Комлекс 1',
            count: 5,
          },
          {
            id: 1,
            name: 'Комлекс 1',
            count: 15,
          }
        ],
      },
      {
        name: '1A',
        date: moment(),
        total: 20,
        items: [
          {
            id: 1,
            name: 'Комлекс 1',
            count: 5,
          },
          {
            id: 1,
            name: 'Комлекс 1',
            count: 15,
          }
        ],
      },
      {
        name: '2Б',
        date: moment(),
        total: 20,
        items: [
          {
            id: 1,
            name: 'Комлекс 1',
            count: 5,
          },
          {
            id: 1,
            name: 'Комлекс 1',
            count: 15,
          }
        ],
      },
    ];
  }
}
