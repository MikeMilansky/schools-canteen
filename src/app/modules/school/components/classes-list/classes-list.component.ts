import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {

  public classList: [] = [];
  constructor() { }

  ngOnInit() {
    this.initData();

  }

  public initData(): void {
    this.classList = [];
  }
}
