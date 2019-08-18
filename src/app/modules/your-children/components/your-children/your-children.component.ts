import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IStudent } from '../../interfaces/IStudent';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/modules/shared/services/auth-service/auth.service';

@Component({
  selector: 'app-your-children',
  templateUrl: './your-children.component.html',
  styleUrls: ['./your-children.component.scss']
})
export class YourChildrenComponent implements OnInit {

  public studentsArray: IStudent[];

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.http.get('https://schools-canteen-be.azurewebsites.net/api/v1/students/getAll')
    .subscribe((response: IStudent[])=>
      {
        this.studentsArray = response;
      }
    );

  }

  public exit(): void {
    this.authService.logout();
  }

}
