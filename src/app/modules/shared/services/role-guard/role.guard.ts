import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { LinkService } from '../link-service/link-service';
import { StorageService } from '../storage-service/storage.service';
import { ILogin } from '../../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser: ILogin = StorageService.get<ILogin>('USER');
    if (currentUser && currentUser.Role === route.data.role) {
      return true;
    } else {
      this.router.navigateByUrl(LinkService.home());
      return false;
    }
  }

  constructor(private router: Router) {

  }
}
