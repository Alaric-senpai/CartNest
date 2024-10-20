import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode, { jwtDecode } from 'jwt-decode'
import jasmine from 'jasmine';
import { CreateUser } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { }

  private apiurl = environment.apiurl

  userlogin(email:any, password:any):Observable<any>{
    const url = `${this.apiurl}/cartnest/auth/login`;

    return this.http.post(url, {email, password})
    // .pipe(
    //   tap(response => this.setSession(response)),
    //   catchError(this.handleError)
    // )
  }

  userRegister(user:CreateUser):Observable<any>{
    const url  = `${this.apiurl}/cartnest/auth/register`
    return this.http.post(url, user)
  }

  getcurrentUser(){
    if(sessionStorage.getItem('token')){

      const token = sessionStorage.getItem('token')

      // return jwtDecode(token)
      // const decoded: string | any | null= jwtDecode(token) 

      // console.log(decoded)


    }
  }

  logout(){
    sessionStorage.clear();

    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate(['/home'], {
      relativeTo:this.route,
      queryParamsHandling: 'merge'
    })
  }

  token = sessionStorage.getItem('token')
  private setSession(authResult: any): void {
    console.log(authResult)
    sessionStorage.setItem('token', authResult.token);
    if(authResult.shoptoken){
      sessionStorage.setItem('shoptoken', authResult.shoptoken)
      // this.router.navigate(['/vendor'])

    }

  }

  private handleError(error: any) {
    console.log(error)
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}