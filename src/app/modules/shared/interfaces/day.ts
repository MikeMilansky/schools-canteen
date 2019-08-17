import { IComplex } from './complex';

export interface IDay {
  id: number;
  complex: IComplex[];
  date: string;
}
