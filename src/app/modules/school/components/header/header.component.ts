import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-school-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
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
}
