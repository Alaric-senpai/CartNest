import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cart, cartItem } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  constructor(private http:HttpClient) { }

  private apiurl = environment.apiurl

  getMycarts():Observable<any[]>{
    const url = `${this.apiurl}/cartnest/carts/mycarts`
    return this.http.get<any[]>(url)
  }

  getcartgoods(cartid:any):Observable<any[]>{
    const url = `${this.apiurl}/cartnest/carts/cartGoods?cart_id=${cartid}`
    return this.http.get<any[]>(url)
  }


  deletecart(cartid:any):Observable<any[]>{
    const url = `${this.apiurl}/cartnest/carts/delete?cart_id=${cartid}`
    // return this.http.get<any[]>(url)
    return this.http.delete<any[]>(url)
  }

  newCart(data:Cart):Observable<any>{
    const url = `${this.apiurl}/cartnest/carts/new`
    return this.http.post(url,  {data})
  }

  addTocart(item:cartItem):Observable<any>{
    const url = `${this.apiurl}/cartnest/carts/addProduct`

    return this.http.post(url, item)
  }

  cartGoodCount(cartid:Number, quantity:number , productid:Number):Observable<any>{
    const url = `${this.apiurl}/cartnest/carts/product/edit`
    return this.http.post(url, { cart:cartid, product:productid ,quantity:quantity})
  }


  removeFromcart(cart:Number, product:number):Observable<any>{
    const url =`${this.apiurl}/cartnest/carts/product/remove?cart=${cart}&product=${product}`

    return this.http.delete<any>(url)
  }
}
