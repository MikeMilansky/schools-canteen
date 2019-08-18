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
        return [
          {
            id: 1,
            complex: [{
              id: 1,
              title: 'Комплекс №1 (каша, булка, компот)',
              desc: 'Великолепный комплекс для начала дня. 300кКал, Белки: 0.5, Жиры: 20, Углеводы: 50',
              price: 1.59
            },
            {
              id: 2,
              title: 'Комплекс №2 (сосика, коржик, чай)',
              desc: 'Сбалансированный школьный завтрак. 250кКал, Белки: 10, Жиры: 20, Углеводы: 30',
              price: 2.59
            }],
            date: moment(),
          },
          {
            id: 1,
            complex: [{
              id: 1,
              title: 'Комплекс №1 (каша, булка, компот)',
              desc: 'Великолепный комплекс для начала дня. 300кКал, Белки: 0.5, Жиры: 20, Углеводы: 50',
              price: 1.59
            },
            {
              id: 2,
              title: 'Комплекс №2 (сосика, коржик, чай)',
              desc: 'Сбалансированный школьный завтрак. 250кКал, Белки: 10, Жиры: 20, Углеводы: 30',
              price: 2.59
            }],
            date: moment(),
          },
          {
            id: 1,
            complex: [{
              id: 1,
              title: 'Комплекс №1 (каша, булка, компот)',
              desc: 'Великолепный комплекс для начала дня. 300кКал, Белки: 0.5, Жиры: 20, Углеводы: 50',
              price: 1.59
            },
            {
              id: 2,
              title: 'Комплекс №2 (сосика, коржик, чай)',
              desc: 'Сбалансированный школьный завтрак. 250кКал, Белки: 10, Жиры: 20, Углеводы: 30',
              price: 2.59
            }],
            date: moment(),
          },
          {
            id: 1,
            complex: [{
              id: 1,
              title: 'Комплекс №1 (каша, булка, компот)',
              desc: 'Великолепный комплекс для начала дня. 300кКал, Белки: 0.5, Жиры: 20, Углеводы: 50',
              price: 1.59
            },
            {
              id: 2,
              title: 'Комплекс №2 (сосика, коржик, чай)',
              desc: 'Сбалансированный школьный завтрак. 250кКал, Белки: 10, Жиры: 20, Углеводы: 30',
              price: 2.59
            }],
            date: moment(),
          },
          {
            id: 1,
            complex: [{
              id: 1,
              title: 'Комплекс №1 (каша, булка, компот)',
              desc: 'Великолепный комплекс для начала дня. 300кКал, Белки: 0.5, Жиры: 20, Углеводы: 50',
              price: 1.59
            },
            {
              id: 2,
              title: 'Комплекс №2 (сосика, коржик, чай)',
              desc: 'Сбалансированный школьный завтрак. 250кКал, Белки: 10, Жиры: 20, Углеводы: 30',
              price: 2.59
            }],
            date: moment(),
          },
        ];
        // return response.map((item: IDay) => {
        //   item.date = moment(item.date);
        //   return item;
        // });
      }));
  }

  constructor(private http: HttpClient) { }
}
