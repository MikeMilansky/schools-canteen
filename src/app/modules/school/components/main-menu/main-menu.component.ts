import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuService } from 'src/app/modules/shared/services/menu/menu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public menuList: [] = [];
  constructor(
    private cdRef: ChangeDetectorRef,
    private menuService: MenuService,
  ) {
  }

  ngOnInit() {
    this.initData();
  }

  public initData(): void {
    // this.subscriptions.add([

    // ]);
    this.menuService.get().subscribe((result: any) => {
      this.menuList = result;
    });
  }
}
