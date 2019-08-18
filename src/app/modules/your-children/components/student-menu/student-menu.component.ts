import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from 'src/app/modules/shared/services/menu/menu.service';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentMenuComponent implements OnInit {
  public days: any[] = [];
  public total: string = '7.86';

  public menuList: [] = [];
  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.initData();
  }

  public initData(): void {
    this.menuService.get().subscribe((result: any) => {
      this.menuList = result;
    });
  }

  public onChangeValue($event): void {

  }
}
