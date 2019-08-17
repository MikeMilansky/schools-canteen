import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage-service/storage.service';
import { WorkflowTypes } from '../../enums/workflow-types';
import { ILogin } from '../../interfaces/login';
import { Router } from '@angular/router';
import { LinkService } from '../../services/link-service/link-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private linkService: LinkService) { }

  public ngOnInit(): void {
    const role: WorkflowTypes = StorageService.get<ILogin>('USER').Role;

    switch (role) {
      case WorkflowTypes.YOURCHILDREN:
        this.router.navigateByUrl(this.linkService.yourChildrenFlow.home());
        break;
      case WorkflowTypes.SCHOOL:
            this.router.navigateByUrl(this.linkService.schoolFlow.home());
            break;
      default:
        console.error('Incorrect role or path');
        break;
    }
  }

}
