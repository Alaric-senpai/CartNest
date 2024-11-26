import { Component, OnInit } from '@angular/core';
import {DividerModule} from "primeng/divider";
import { ButtonModule } from 'primeng/button';
import {CommonModule} from "@angular/common";
import { OrderService } from '../../../services/order.service';
import { DialogModule } from 'primeng/dialog';
import { ProductsManagementService } from '../../../services/products-management.service';
import { CartsService } from '../../../services/carts.service';
import { CarouselModule } from 'primeng/carousel';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'nest-orders',
  standalone: true,
  imports: [DividerModule, ButtonModule, CommonModule, DialogModule, CarouselModule, ToastModule, RouterModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  providers:[MessageService]
})
export class OrdersComponent implements OnInit {
  sample = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  opendialog:boolean = false
  responsiveOptions: any[] | undefined;

  selectedOrder:any |null = null
  type:any

  cart:any;
  cartGoods:any [] = []
  cartid:any
  productid:any
  products: any[] = []
  product:any

  selectOrder(order:any){
    this.selectedOrder = order
    console.log(this.selectedOrder)
    this.opendialog = true
    this.setupPreview()

  }

  private setupPreview(){
    this.type = this.selectedOrder?.type

    if(this.type === "single"){
      this.productid = this.selectedOrder?.product_id
      this.getProduct()
    }else{
      this.cartid = this.selectedOrder?.cartid
      this.initCart();
    }

  }

  private getProduct(){
    this.productsService.getProductbyId(this.productid).subscribe(
      (data:any)=>{
        this.product = data.product
      },
      (error:any)=>{
        console.error(error)
      }
    )
  }

  private initCart(){
    this.getCartData()
    this.getAllProducts()
  }

  private getCartData(){
    this.cartsService.getcartgoods(this.cartid).subscribe(
      (data:any)=>{
        this.cart = data.products
        this.cartGoods = this.cart
      },
      (error:any)=>{
        console.error(error)
      }
    )
  }

  private getAllProducts(){
    this.productsService.getAllProducts().subscribe(
      (data:any)=>{
        this.products = data.products
      },
      (error:any)=>{
        console.error(error)
      }
    )
  }

  closedialog(){
    this.opendialog = false
    this.type =null
    this.selectedOrder= null
  }

  orders:any[] =[];
  completed: any[] = []
  pending: any[]= []
  cancelled: any[] = []
  constructor (
    private OrdersService:OrderService,
    private productsService:ProductsManagementService,
    private cartsService:CartsService,
    private router:Router,
    private ms:MessageService
  ) {

  }

  ngOnInit(): void {
    this.getOrders();
    this.intResponsive()
  }

  private intResponsive(){
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  cancelOrder(){

    this.OrdersService.cancelOrder(this.selectedOrder?.id).subscribe(
      (data:any)=>{
        this.opendialog = false
        this.getOrders()

        this.ms.add(
          {
            icon: 'pi pi-check',
            severity: 'success',
            summary: "process successfull",
            detail: data.message,
            styleClass: 'p-2 gap-2',
            contentStyleClass: 'gap-2'

          }
        )

      },
      (error:any)=>{
        this.opendialog = false
        this.getOrders()
        this.ms.add(
          {
            icon: 'pi pi-times',
            severity: 'error',
            summary: 'Error detected',
            styleClass: "p-2",
            detail: error.error.message || error.message  || error.statusText
          }
        )

      }
    )

  }

  completeOrder(){
    if(this.type === 'single'){
      //solve completeion for single cart product
      //
      this.router.navigate(['/home/checkout', this.product?.id, "single", this.selectedOrder?.id])

    }else if(this.type === 'cart'){

      //colve for car ttrouting

      this.router.navigate(['/home/checkout', this.cartid, "cart", this.selectedOrder?.id])

    }

  }


  getProductInfo(id:any){
    return this.products.find( product => product.id == id )
  }

  private getOrders(){
    this.OrdersService.myOrders().subscribe(
      (data:any)=>{
        this.orders = data.records
        this.filterRecords()
        // console.log(data)
      },
      (error:any)=>{
        console.error(error)
      }
    )
  }

  private filterRecords(){
    this.completed = this.orders.filter( (order)=> order.status === "completed" )
    this.cancelled = this.orders.filter( (order)=> order.status === "cancelled" )
    this.pending = this.orders.filter( (order)=> order.status === "draft" )


  }
}
