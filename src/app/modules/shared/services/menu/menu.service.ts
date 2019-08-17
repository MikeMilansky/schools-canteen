import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { appSettings } from 'src/app/app.settings';
import { ILoginForm } from '../../interfaces/login-form';

const defaultLogin = {
  role: appSettings.workflowType
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private getLink(link: string): string {
    return `${appSettings.apiLink}/${link}`;
  }

  public get(): Observable<any> {
   // return this.http.post<any>(this.getLink('test'), {});
   return of({})
      .pipe(
        map(() => {
            return of({});
        }),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          return of({});
        })
      );
  }

  constructor(private http: HttpClient) { }
}
