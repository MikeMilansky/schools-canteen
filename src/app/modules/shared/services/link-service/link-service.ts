import { JoinFlowLinks } from './links/join-flow';
import { Injectable } from '@angular/core';
import { SchoolLinks } from './links/school';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  public joinFlow: JoinFlowLinks;
  public school: SchoolLinks;

  constructor() {
    this.school = new SchoolLinks();
    this.joinFlow = new JoinFlowLinks();
  }
}
