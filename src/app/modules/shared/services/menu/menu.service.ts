import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { getLink } from 'src/app/utils/get-link';
import { IDay } from '../../interfaces/day';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public get(): Observable<IDay[]> {
    return this.http.get<IDay[]>(getLink('api/v1/menu/getMenu'))
      .pipe(map((response: IDay[]) => {
        return response.map((item: IDay) => {
          item.date = moment(item.date);
          return item;
        });
      }));
  }

  constructor(private http: HttpClient) { }
}
