import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from 'src/app/modules/shared/services/menu/menu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainMenuComponent implements OnInit {

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
}
