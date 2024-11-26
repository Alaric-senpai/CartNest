import { Component, OnInit } from '@angular/core';
import { Checkout, OrderService } from '../../../services/order.service';
import { ProductsManagementService } from '../../../services/products-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartsService } from '../../../services/carts.service';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ScrollerModule } from 'primeng/scroller';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'nest-checkout',
  standalone: true,
  imports: [CommonModule, DividerModule, ScrollerModule, ButtonModule, ToastModule, CardModule ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  providers: [MessageService]
})
export class CheckoutComponent implements OnInit {

  isCart!:boolean;
  errorAvailable!:boolean
  cartid!:any;
  orderid:any
  cartGoods:any[] = []
  productid!:any;
  order:any
  paymentCode: string = '';
  selectedPaymentMethod: string = '';
  shipping:string = ''
  paymentComplete!:boolean
  shippingComplete!:boolean

  product:any ;
  products:any[] = []
  fetchError: any;
  productsErrorAvailable!:boolean;
  ProductsError:any

  constructor(private orderService:OrderService, private productsService:ProductsManagementService,
    private route:ActivatedRoute, private cartService:CartsService, private ms:MessageService, private router:Router
   ){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=>{
        const type = params.get("type")
        const id = params.get("id")
        this.orderid =params.get('orderid')
        this.productid= id
        this.getOrder()
        if(type === "single"){
          this.isCart = false
          this.getProduct()
        }else if(type === "cart"){
          this.cartid = id
          this.isCart = true
          this.getCart()
          this.getProducts()
        }
      }
    )
  }

  private getProduct(){
    this.productsService.getProductbyId(this.productid).subscribe(
      (data:any)=>{
        this.product = data.product 
      },
      (error:any)=>{
        this.errorAvailable = true
        this.fetchError = error
      }
    )
  }

  private getOrder(){
    this.orderService.orderDetails(this.orderid).subscribe(
      (data:any)=>{
        this.order = data.order

      }
    )
  }

  private getCart(){
    this.cartService.getcartgoods(this.cartid).subscribe(
      (data:any)=>{
        this.cartGoods = data.products
      },
      (error:any)=>{
        this.errorAvailable = true
        this.fetchError = error
      }
    )
  }

  private getProducts(){
    this.productsService.getAllProducts().subscribe(
      (data:any)=>{
        this.products = data.products
      },
      (error:any)=>{
        this.productsErrorAvailable =true
        this.ProductsError = error
      }
    )
  }

  getProductData(productid:any){
    return this.products.find( product => product.id === productid )
  }

  generatePaymentCode(length: number = 12): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let paymentCode = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      paymentCode += characters[randomIndex];
    }

    return paymentCode;
  }

  onPaymentMethodSelect(paymentMethod: string): void {
    this.selectedPaymentMethod = paymentMethod;
    this.paymentCode = this.generatePaymentCode();  // Generate new payment code
    this.ms.clear()
    this.ms.add(
      {
        icon: 'pi pi-pound',
        summary: `${paymentMethod} selected`,
        detail: 'A demo payment code was geneated. Procees to shipping',
        styleClass: 'p-2',
        severity: 'success'
      }
    )
    this.shippingComplete = true
  }
  onShippingMethodSelect(Method: string): void {
    this.shipping = Method;
    this.ms.clear()
    this.ms.add(
      {
        icon: 'pi pi-truck',
        summary: `${Method} selected`,
        detail: 'Shipping method selected. Procees to checkout',
        styleClass: 'p-2',
        severity: 'success'
      }
    )
    this.paymentComplete = true
  }

  processingDone():boolean{
    if(this.paymentComplete && this.shippingComplete){
      return true
    }else{
      return false
    }
  }

  checkout(){
    const order:Checkout = {
      orderid: this.orderid,
      payment_method: this.selectedPaymentMethod,
      code: this.paymentCode,
      amount: this.order.totalprice,
      shipping: this.shipping,
      type: this.isCart ? 'cart': 'single'
      
    }

    this.orderService.completeOrder(order).subscribe(

      (data:any)=>{
        this.ms.add(
        {
          icon: 'pi pi-check',
          severity: "success",
          summary: "Process complete",
          detail: data?.message,
          styleClass: "p-2"
        })

        setTimeout(()=>{
          this.router.navigate(['/profile/orders'])
        }, 3000)
      },
      (error:any)=>{
        this.ms.add(
        {
          icon: 'pi pi-times',
          severity: "error",
          summary: "error Detected",
          detail: error.error.message || error.message || error.statusText,
          styleClass: "p-2"
        })

      }
      )
  }

}
