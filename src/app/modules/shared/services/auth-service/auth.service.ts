import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { appSettings } from 'src/app/app.settings';
import { ILoginForm } from '../../interfaces/login-form';
import { WorkflowTypes } from '../../enums/workflow-types';
import { ILogin } from '../../interfaces/login';

const defaultLogin = {
  role: WorkflowTypes.PARENT
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginData$: BehaviorSubject<ILogin> = new BehaviorSubject(null);
  public get loginData(): Observable<ILogin> {
    return this.loginData$;
  }

  private getLink(link: string): string {
    return `${appSettings.apiLink}/${link}`;
  }

  public login(fromData: ILoginForm): Observable<ILogin> {
    return this.http.post<any>(this.getLink('api/v1/login'), fromData)
      .pipe(
        map((response: ILogin) => {
          this.loginData$.next(response);
          return response;
        })
      );
  }

  constructor(private http: HttpClient) { }
}
