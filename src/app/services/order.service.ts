import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Cart, cartItem } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiurl = environment.apiurl + "/cartnest/orders/"

  constructor(private http:HttpClient){}

  placeSingleOrder(order:singleOrder):Observable<any>{
    const url = `${this.apiurl}new/single`
    return this.http.post(url, order)
    // route :: new/single
  }

  placeCartOrder(order:cartorder):Observable<any>{
    //route:: new/cart
    const url =`${this.apiurl}new/cart`
    return this.http.post(url, order)

  }

  cancelOrder(orderid:any):Observable<any>{
    const url = `${this.apiurl}cancel?order=${orderid}`
    return this.http.get<any>(url, orderid)
    // route :: cancel
  }

  myOrders():Observable<any[]>{
    const url = `${this.apiurl}user/all`
    return this.http.get<any[]>(url)
    // route |:: user/all
  }

  completeOrder(order:Checkout):Observable<any>{
    const url = `${this.apiurl}order/complete`

    return this.http.post(url, order)

    // route order/complete
  }

  setShipping(){

  }

  orderDetails(orderid:any):Observable<any>{
    const url =`${this.apiurl}order/data?order=${orderid}`
    return this.http.get<any>(url)
  }

}

export interface singleOrder{
  product:Number;
  vendor:Number;
  quantity:number;
  price:any;
}

export interface cartorder{
  cart:Number;
  price:any;
}

export interface Checkout{
  orderid:Number;
  payment_method:string;
  code:string;
  amount:any;
  shipping:string;
  type:string;
}
