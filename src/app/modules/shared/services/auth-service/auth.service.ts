import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { appSettings } from 'src/app/app.settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private getLink(link: string): string {
    return `${appSettings.apiLink}/${link}`;
  }

  public login(): Observable<any> {
    return this.http.post<any>(this.getLink('test'), {});
  }

  constructor(private http: HttpClient) { }
}
