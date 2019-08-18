import { IComplex } from './complex';
import * as moment from 'moment';

export interface IDay {
  id: number;
  complex: IComplex[];
  date: moment.Moment;
}
