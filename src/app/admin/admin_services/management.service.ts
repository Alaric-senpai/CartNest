import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http:HttpClient) { }

  protected apiurl = environment.apiurl + '/cartnest/general'

  getAllusers():Observable<any[]>{
    const url = `${this.apiurl}/users`
    return this.http.get<any[]>(url)
  } 

  getAdminUsers():Observable<any[]>{
    const url = `${this.apiurl}/admins`
    return this.http.get<any[]>(url)
  }

  getVendorUsers():Observable<any[]>{
    const url = `${this.apiurl}/vendors`
    return this.http.get<any[]>(url)
  }

  getCustomerUsers():Observable<any[]>{
    const url = `${this.apiurl}/customers`
    return this.http.get<any[]>(url)
  }

  getAllShops():Observable<any[]>{
    const url = `${this.apiurl}/shops`
    return this.http.get<any[]>(url)

  }
}
