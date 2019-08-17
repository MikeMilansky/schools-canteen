import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../interfaces/IStudent';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-your-children',
  templateUrl: './your-children.component.html',
  styleUrls: ['./your-children.component.scss']
})
export class YourChildrenComponent implements OnInit {

  public mockArray: IStudent[] = [
    {
      id: 1,
      name: "Ivan",
      surname: "number",
      moneyBalance: 100,
      class: "number",
      school: "number"
    },
    {
      id: 2,
      name: "Andrey",
      surname: "number",
      moneyBalance: 100,
      class: "number",
      school: "number"
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://schools-canteen-be.azurewebsites.net/api/v1/students/getAll')
    .subscribe((response)=>console.log(response))

  }

}
