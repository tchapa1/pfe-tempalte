import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthuserService } from "./authuser.service";



@Injectable()
export class AuthuserGuard implements CanActivate {
  constructor(private authuserService: AuthuserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authuserService.getIsAuth();
    if (!isAuth) {
      this.router.navigate(['/userlogin']);
    }
    return isAuth;
  }
}
