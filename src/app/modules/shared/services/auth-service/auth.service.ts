import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { appSettings } from 'src/app/app.settings';
import { ILoginForm } from '../../interfaces/login-form';
import { WorkflowTypes } from '../../enums/workflow-types';

const defaultLogin = {
  role: WorkflowTypes.PARENT
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private getLink(link: string): string {
    return `${appSettings.apiLink}/${link}`;
  }

  public login(fromData: ILoginForm): Observable<any> {
   // return this.http.post<any>(this.getLink('test'), {});
   return of({})
      .pipe(
        map(() => {
            return defaultLogin;
        }),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          return of(defaultLogin);
        })
      );
  }

  constructor(private http: HttpClient) { }
}
