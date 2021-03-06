import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth-service/auth.service';

@Component({
  selector: 'app-school-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private aoutService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public onClassRoomClick(): void {
    this.router.navigate(['./school/classes']);
  }

  public onMenuClick(): void {
    this.router.navigate(['./school/home']);
  }

  public onLogout(): void {
    this.aoutService.logout();
  }
}
