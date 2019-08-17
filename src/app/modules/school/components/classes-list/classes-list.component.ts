import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from 'src/app/modules/shared/utils/base-component';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent extends BaseComponent implements OnInit {

  public classList: [] = [];
  constructor(
    private cdRef: ChangeDetectorRef,
  ) {
    super(cdRef);
  }

  ngOnInit() {
    this.initData();
  }

  public initData(): void {
    this.classList = [];
  }
}
