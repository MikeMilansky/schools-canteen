export class SchoolLinks {
  // tslint:disable-next-line: no-inferrable-types
  private baseUrl: string = 'school';

  public home = () => `${this.baseUrl}/home`;
  public classes = () => `${this.baseUrl}/classes`;
}
