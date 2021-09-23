import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UserdataService } from '../user/userdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: UserdataService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean> {
      return this.authService.isLoggesIn.pipe(take(1), map((loginStatus : boolean) => 
      {
            const destination: string  = state.url;
            const productId = route.params.id; 

          console.log(loginStatus)
          // To check if user is not logged in
          if(!loginStatus) 
          {
              this.router.navigate(['/users/login']);
              return false;
          } else {
            return true;
          }

          // if the user is already logged in
          // switch(destination) 
          // {
          //     case '/products' :
          //     case '/products/' + productId :
          //     {
          //             if(localStorage.getItem("userRole") === "Customer" || localStorage.getItem("userRole") === "Admin" || localStorage.getItem("userRole") === "Moderator") 
          //             {
          //                 return true;
          //             }
          //     }

          //    case '/products/update' : 
          //     {
          //             if(localStorage.getItem("userRole") === "Customer" || localStorage.getItem("userRole") === "Moderator") 
          //             {
          //                 this.router.navigate(['/access-denied'])

          //                 return false;
          //              }

          //             if(localStorage.getItem("userRole") === "Admin") 
          //             {

          //                 return true;
          //             }

          //     }

          //    default:
          //         return false;
          // }         
      }));
    }
  }

