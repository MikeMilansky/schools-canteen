import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILoginForm } from '../../interfaces/login-form';
import { WorkflowTypes } from '../../enums/workflow-types';
import { ILogin } from '../../interfaces/login';
import { getLink } from 'src/app/utils/get-link';
import { appSettings } from 'src/app/app.settings';

const defaultLogin = {
  role: appSettings.workflowType
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginData$: BehaviorSubject<ILogin> = new BehaviorSubject(null);
  public get loginData(): Observable<ILogin> {
    return this.loginData$;
  }

  public login(fromData: ILoginForm): Observable<ILogin> {
    return this.http.post<any>(getLink('api/v1/login'), fromData)
      .pipe(
        map((response: ILogin) => {
          this.loginData$.next(response);
          return response;
        })
      );
  }

  constructor(private http: HttpClient) { }
}
