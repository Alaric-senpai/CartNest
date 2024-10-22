import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Brand } from '../interfaces/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http:HttpClient) { }

  private apiurl  = environment.apiurl + '/cartnest/brands'

  getAllBrands():Observable<any[]>{
    const url = `${this.apiurl}/list`
    return this.http.get<any[]>(url)
  }

  newBrand(brand:Brand):Observable<any>{
    const url = `${this.apiurl}/new`
    return this.http.post(url , brand)
  }


}
