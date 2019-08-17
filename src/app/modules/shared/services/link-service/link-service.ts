import { JoinFlowLinks } from './links/join-flow';
import { Injectable } from '@angular/core';
import { SchoolFlowLinks } from './links/school-flow';
import { YourChildrenFlowLinks } from './links/your-children-flow';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  public joinFlow: JoinFlowLinks;
  public schoolFlow: SchoolFlowLinks;
  public yourChildrenFlow: YourChildrenFlowLinks;


  public static home(): string {
    return 'home';
  }

  constructor() {
    this.joinFlow = new JoinFlowLinks();
    this.schoolFlow = new SchoolFlowLinks();
    this.yourChildrenFlow = new YourChildrenFlowLinks();
  }
}
