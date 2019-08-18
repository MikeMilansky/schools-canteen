import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-childer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  public onChilderClick(): void {
    this.router.navigate(['./your-children']);
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
