export class JoinFlowLinks {
  // tslint:disable-next-line: no-inferrable-types
  private baseUrl: string = 'joinflow';

  public login = () => `${this.baseUrl}/login`;
}
