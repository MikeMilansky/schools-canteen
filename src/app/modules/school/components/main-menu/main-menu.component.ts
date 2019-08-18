import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from 'src/app/modules/shared/services/menu/menu.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainMenuComponent implements OnInit {

  public menuList: [] = [];
  constructor(
    private toaster: ToastrService,
    private menuService: MenuService
  ) {
  }

  ngOnInit() {
    this.initData();
  }

  public initData(): void {
    this.menuService.get().subscribe((result: any) => {
      this.menuList = result;
    });
  }

  public updateMenu(): void {
    this.toaster.warning('К сожалению данная функция ещё не доступна');
  }
}
