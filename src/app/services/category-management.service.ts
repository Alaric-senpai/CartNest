import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {

  constructor(private http:HttpClient) { }

   apiurl = environment.apiurl + '/cartnest/categories'

   categories:Category[] = [];


   getallcategories(): Observable<any[]>{
    const listurl  = this.apiurl+'/all'
    return this.http.get<any[]>(listurl)
   }
   
   getcategorybyId(id:any):Observable<any>{
    const categoryurl =this.apiurl + `/category?category_id=${id}`;
    return this.http.get<any>(categoryurl)
   }

   newcategory(category:Category):Observable<any>{
    const url = `${this.apiurl}/new`
    return this.http.post(url, category)
   }

   deletecategory(id:any):Observable<any>{
    const url = `${this.apiurl}/delete?category_id=${id}`
    return this.http.delete(url)
   }
  
  // addcategory(category: Category) {
  //   const url = `${this.apiurl}/`
  // }
   



}
