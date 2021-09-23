import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app.config';
import {map, catchError} from  'rxjs/operators';
import { range,Observable, throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../_model/User';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient,public router: Router) {}

  private loggedIn = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  
  shwodata(){
    let arr = 'Log In To Your Account';
    return(arr);
  }

  private static handleError(error:HttpErrorResponse): any{
    if(error.error instanceof ErrorEvent){
      console.error('An error occurd:',error.error.message);
    } else{
      // console.error(
      //   `Backend returned code ${error.status}`,
      //   `Body was: ${error.error}`
      // );
    }
    return throwError(
      error
    )
  }

  private static log(message:string){
    console.log(message);
  }
  
  signupform(body: Object) {

      // return this.http.get(AppConfig.apiEndpoint + 'articles/comments/');

      // let token = this._token;
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      // console.log(AppConfig.apiEndpoint + 'authentication/login/');
      return this.http.post(AppConfig.apiEndpoint + 'users/signup/', body, { headers }).pipe(
          map((response: Response) => {
              return response;
          }),
          catchError(UserdataService.handleError)
          )


  }

  existUsername(body: Object) {

    // let token = this._token;
    const headers = new HttpHeaders().set("Content-Type", "application/json").set('Access-Control-Allow-Origin', '*');
    //  let headers = new HttpHeaders().set({ "Content-Type", "application/json", "Authorization", this.authkey}); 
    return this.http.post(AppConfig.apiEndpoint + 'users/username_validation/', body, { headers })
        .pipe(map((response: Response) => {
            return response;
        }),catchError(UserdataService.handleError));

  }
  

  loginform(body: Object) {
    // let token = this._token;
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    // console.log(AppConfig.apiEndpoint + 'authentication/login/');
    return this.http.post<User>(AppConfig.apiEndpoint + 'users/login/', body, { headers }).pipe(
        map((response) => {
          if(response && response.token){
            this.loginStatus.next(true);
            localStorage.setItem('loginStatus', '1');
            localStorage.setItem('authtoken', response.token);
            localStorage.setItem('user', JSON.stringify(response));
            this.loggedIn.next(response);
          }
          return response;
        }));
  }

  checkLoginStatus() : boolean 
  {
      var loginCookie = localStorage.getItem("loginStatus");

      if(loginCookie == "1") 
      {
          if(localStorage.getItem('authtoken') === null || localStorage.getItem('authtoken') === undefined) 
          {
            return false;
          } 

           // Get and Decode the Token
           const token = localStorage.getItem('authtoken');
           const decoded = (JSON.parse(atob(token.split('.')[1])));
          
           if(decoded.exp === undefined) 
           {
               return false;
           }

           // Get Current Date Time
           const date = new Date(0);

            // Convert EXp Time to UTC
           let tokenExpDate = date.setUTCSeconds(decoded.exp);

           // If Value of Token time greter than 

           if(tokenExpDate.valueOf() > new Date().valueOf()) 
           {
               return true;
           }

           console.log("NEW DATE " + new Date().valueOf());
           console.log("Token DATE " + tokenExpDate.valueOf());

           return false;
        
      }
      return false;
  }

  get isLoggesIn() 
    {
        return this.loginStatus.asObservable();
    }
     isLogg() 
    {
        return this.loginStatus.asObservable();
    }

  get loggedInUser():User 
  {
    return this.loggedIn.value;
  }

  logout() {
    this.loggedIn.next(null);
    this.loginStatus.next(false);
    localStorage.setItem('loginStatus', '0');
    localStorage.removeItem('user');
    localStorage.removeItem('authtoken');
    this.router.navigate(['/users/login']);
   }
  
}

