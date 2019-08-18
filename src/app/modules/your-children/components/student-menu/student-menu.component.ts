import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentMenuComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://schools-canteen-be.azurewebsites.net/api/v1/menu/getMenu')
    .subscribe((response: any)=>
      {
        console.log(response)
      }
    )
  }

}
