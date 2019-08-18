import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { IComplex } from 'src/app/modules/shared/interfaces/complex';
import { HttpClient } from '@angular/common/http';

export interface IClassRomm {
  name: string;
  items: IComplex[];
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
        items: [
          {
            id: 1,
            price: 2,
            title: 'Комплекс 1',
            desc: 'Вкусный завтрак'
          }
        ],
      },
      // {
      //   name: '1Б',
      //   items: [

      //   ],
      // }
    ];
  }
}
