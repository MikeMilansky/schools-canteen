import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../interfaces/IStudent';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-your-children',
  templateUrl: './your-children.component.html',
  styleUrls: ['./your-children.component.scss']
})
export class YourChildrenComponent implements OnInit {

  public studentsArray: IStudent[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://schools-canteen-be.azurewebsites.net/api/v1/students/getAll')
    .subscribe((response: IStudent[])=>
      {
        this.studentsArray = response;
      }
    )

  }

}
