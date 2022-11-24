import { Injectable } from '@angular/core';
import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router, 
    UrlTree 
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor( 
   private auth: AuthService, 
   private router: Router 
) {}

 canActivate(
    next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean | UrlTree {

     if ( this.auth.isAuthenticated() ) {
       return true;
     }

     return this.router.parseUrl('');
 }
}
