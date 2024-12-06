import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Shop } from '../interfaces/shop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

  private apiurl = environment.apiurl + '/cartnest/shops'
  private genUrl = environment.apiurl + '/cartnest/general';

  createshop(shop:Shop):Observable<any>{
    const url = `${this.apiurl}/new`
    return this.http.post(url, shop)
  }

  unveriedshops():Observable<any[]>{
    const url = `${this.apiurl}/unverified`
    return this.http.get<any[]>(url);

  }

  allshops():Observable<any>{
    const url = `${this.genUrl}/shops`
    return this.http.get<any>(url)

  }

  updateStatus(status:string, vendor:Number):Observable<any>{
    const url = `${this.apiurl}/update?status=${status}&vendor=${vendor}`
    return this.http.patch(url, { status, vendor })
  }
}
