import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { appSettings } from 'src/app/app.settings';
import { ILoginForm } from '../../interfaces/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private getLink(link: string): string {
    return `${appSettings.apiLink}/${link}`;
  }

  public login(fromData: ILoginForm): Observable<any> {
   // return this.http.post<any>(this.getLink('test'), {});
   return of('test');
  }

  constructor(private http: HttpClient) { }
}
