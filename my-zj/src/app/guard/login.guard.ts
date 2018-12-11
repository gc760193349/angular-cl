import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {CanDeactivate} from "@angular/router";

export class LoginGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // @ts-ignore
    console.log(localStorage.getItem('test'));
    let loggedIned :boolean = localStorage.getItem('test') == null;
    if(!loggedIned){
      console.log(1);
      return true;
    }
    else{
      console.log(2);
      return false;
    }
  }
}
export class CheckGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loggIn :boolean = localStorage.getItem('test') == null;
    // @ts-ignore
    if(!loggIn){
      return true;
    }
    else {
      return true;
    }
  }
}

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
