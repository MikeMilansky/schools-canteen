import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { getLink } from 'src/app/utils/get-link';
import { IDay } from '../../interfaces/day';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public get(): Observable<IDay[]> {
    return this.http.get<void>(getLink('api/v1/menu/getMenu'))
      .pipe(
        map((response: any) => {
          return [
            {
              id: 1,
              complex: [{
                id: 1,
                title: 'test',
                desc: 'test',
                price: 1000
              },
              {
                id: 2,
                title: 'test',
                desc: 'test',
                price: 1000
              }],
              date: '24',
            },
            {
              id: 2,
              complex: [{
                id: 1,
                title: 'test',
                desc: 'test',
                price: 1000
              },
              {
                id: 2,
                title: 'test',
                desc: 'test',
                price: 1000
              }],
              date: '24',
            },
            {
              id: 3,
              complex: [{
                id: 1,
                title: 'test',
                desc: 'test',
                price: 1000
              },
              {
                id: 2,
                title: 'test',
                desc: 'test',
                price: 1000
              }],
              date: '24',
            },
            {
              id: 4,
              complex: [{
                id: 1,
                title: 'test',
                desc: 'test',
                price: 1000
              },
              {
                id: 2,
                title: 'test',
                desc: 'test',
                price: 1000
              }],
              date: '24',
            },
            {
              id: 5,
              complex: [{
                id: 1,
                title: 'test',
                desc: 'test',
                price: 1000
              },
              {
                id: 2,
                title: 'test',
                desc: 'test',
                price: 1000
              }],
              date: '24',
            }
          ];
        })
      );
  }

  constructor(private http: HttpClient) { }
}
