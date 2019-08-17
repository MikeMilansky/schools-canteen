import { JoinFlowLinks } from './links/join-flow';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  public joinFlow: JoinFlowLinks;

  constructor() {
    this.joinFlow = new JoinFlowLinks();
  }
}
