import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     // let canLogin = this.loginService.isLoggedIn();
     //return canLogin
      let token = localStorage.getItem('auth')
      if(!token){
        return false
      }
    return true;
  }
  
}

/*
1 login component import LoginService
onSingIn(){
  ..
}
auth.guard()//revisa si tiene el token y regresa el boleano
//areglo canActivate de las routes
caActivate:[AUthGuard]
*/

