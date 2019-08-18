import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ILoginForm } from '../../interfaces/login-form';
import { WorkflowTypes } from '../../enums/workflow-types';
import { ILogin } from '../../interfaces/login';
import { getLink } from 'src/app/utils/get-link';
import { StorageService } from '../storage-service/storage.service';

const defaultLogin = {
  role: WorkflowTypes.YOURCHILDREN
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginData$: BehaviorSubject<ILogin>;

  public get loginData(): Observable<ILogin> {
    return this.loginData$;
  }

  public login(fromData: ILoginForm): Observable<ILogin> {
    return this.http.post<any>(getLink('api/v1/login'), fromData)
      .pipe(
        tap((response: ILogin) => {
          response.Role = WorkflowTypes.YOURCHILDREN;
          StorageService.set<ILogin>('USER', response);
          this.loginData$.next(response);
        })
      );
  }

  constructor(private http: HttpClient) {
    this.loginData$ = new BehaviorSubject(null);
   }
}
