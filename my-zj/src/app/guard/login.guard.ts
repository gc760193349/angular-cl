import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CanDeactivate } from "@angular/router";

export class LoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (state.url === '/personalInfo') {
      // 想要登录
      if (localStorage.getItem('test')) {
        return false;
      } else {
        return true;
      }
    } else if (state.url === '/personalInfoShow' || state.url === '/personalInfoAlter') {
      // 已经登录
      if (localStorage.getItem('test')) {
        return true;
      } else {
        console.log('未填写信息');
        return false;
      }
    }
    return true;
  }
}

export class CheckGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loggIn: boolean = localStorage.getItem('test') == null;
    // @ts-ignore
    if (!loggIn) {
      return true;
    } else {
      return true;
    }
  }
}

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
