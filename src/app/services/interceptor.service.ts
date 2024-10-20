import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token')

    const shoptoken = sessionStorage.getItem('shopidentifier');

    if(token){
      let clonedrequest;
      if(shoptoken){
         clonedrequest = req.clone(
          {
            setHeaders: {
              Authorization: `Bearer ${token}`,
              shoptoken: `Bearer ${shoptoken}`
            }
          }
        );
      }else{
         clonedrequest = req.clone(
          {
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          }
        );
      }

      return next.handle(clonedrequest)
    }

    return next.handle(req)
  }
}
