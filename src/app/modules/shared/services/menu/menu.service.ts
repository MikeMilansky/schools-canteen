import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILoginForm } from '../../interfaces/login-form';
import { WorkflowTypes } from '../../enums/workflow-types';
import { ILogin } from '../../interfaces/login';
import { getLink } from 'src/app/utils/get-link';
import { appSettings } from 'src/app/app.settings';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public get(fromData?: ILoginForm): Observable<ILogin> {
    return this.http.get<any>(getLink('api/v1/menu/getMenu'))
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  constructor(private http: HttpClient) { }
}
