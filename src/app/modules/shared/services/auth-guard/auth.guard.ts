import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { LinkService } from '../link-service/link-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.router.navigateByUrl(this.linkService.joinFlow.login());
    return false;
  }

  constructor(private linkService: LinkService, private router: Router) {

  }
}
