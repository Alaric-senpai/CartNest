import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class VendorProductManagementService {

  constructor(private http:HttpClient) { }

  private apiUrl = environment.apiurl + "/cartnest/products"


  getMyProducts():Observable<any[]>{
    const url = `${this.apiUrl}/vendor`;
    return this.http.get<any[]>(url)
  }

  addProduct(product:Product):Observable<any>{
    const url = `${this.apiUrl}/add`

    return this.http.post(url, product)
  }



}
