import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsManagementService {

  constructor(private http:HttpClient) { }

  private apiurl = environment.apiurl + "/cartnest/products"


   getProductsbyBrand(brand_id:Number):Observable<any[]>{
    const url = `${this.apiurl}/brand?brand_id=${brand_id}`;
    return this.http.get<any[]>(url)
  }

   getProductsbyCategory(category_id:Number):Observable<any[]>{
    const url = `${this.apiurl}/category?category_id=${category_id}`;
    return this.http.get<any[]>(url)
  }

  getProductbyId(product_id:any):Observable<any[]>{
    const url = `${this.apiurl}/product?product_id=${product_id}`;
    return this.http.get<any[]>(url)
  }

   getProductsbyVendor(vendor_id:Number):Observable<any[]>{
    const url = `${this.apiurl}/vendor?vendor_id=${vendor_id}`;
    return this.http.get<any[]>(url)
  }

   getAllProducts():Observable<any[]>{
    const url = `${this.apiurl}/list`;
    return this.http.get<any[]>(url)
  }

  gettrendingProducts():Observable<any[]>{
    const url = `${this.apiurl}/trending`
    return this.http.get<any[]>(url)
  }
  // getproductByid$(product_id:Observable<any>){
  //   console.log(product_id.source._value)
  //   return of(this.getProductbyId(product_id))
  // }


  // getProductsbtCategory$(category_id:Observable<any>){
  //   return category_id.pipe(switchMap(id => of(this.getProductsbyCategory(id))))
  // }

}
