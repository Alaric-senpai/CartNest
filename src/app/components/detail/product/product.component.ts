import { Component, OnInit, signal } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { CardComponent } from '../../shared/card/card.component';
import { SkeletonCardComponent } from '../../shared/skeleton-card/skeleton-card.component';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsManagementService } from '../../../services/products-management.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { PaginatorModule } from 'primeng/paginator';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { CartsService } from '../../../services/carts.service';
import { cartItem } from '../../../interfaces/cart';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'nest-product',
  standalone: true,
  imports: [SkeletonModule, CardComponent, SkeletonCardComponent, ButtonModule, RatingModule, FormsModule,
    DividerModule, ToastModule, ImageModule, TagModule, CommonModule, PaginatorModule, DialogModule, SidebarModule
   ],
   providers: [MessageService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  productid: any;
  product: any ;
  productdata: any = []
  count = signal(1);
  rating: any = 4.5; 
  loading: boolean = true; 
  productbtndisabled = false;
  errormessage:any ;
  error!:boolean;
  carts:any = [];
  producterror: any;
  imageurl!:string;

  sidebravisible:boolean = false

  loggedin  = sessionStorage.getItem("token")

  constructor(private MessageService:MessageService, private route:ActivatedRoute, private productService:ProductsManagementService,
    private cartsService:CartsService, private router:Router){}
  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params:ParamMap)=>{
        this.productid = params.get('id');

        if(this.productid){
          this.getproductdata()
          this.showcarts()
        }
      }
    )

  }

  showcarts(){
    this.cartsService.getMycarts().subscribe(
      (data:any)=>{
        this.carts  = data.carts;
      },
      (error:any)=>{
        this.error = true
        this.errormessage = error.error.message || error.error.error || error.statusText || error.message
      }
    )
  }

  getproductdata(){
    this.productService.getProductbyId(this.productid).subscribe(
      (data:any)=>{
      this.loading = false
        this.product = data.product,
        this.productdata = data.data
        this.imageurl = this.product.main_image
      },
      (error:any) =>{
      this.loading = false;
        this.producterror = error.message
        console.error(error)
      }
    )
  }


  setimage(url:any){
    // alert(url)
    this.imageurl = url;
  }


    order(){
      
    }

  directBuy(){
    // place order syntax goes here 

    this.router.navigate(['/home/checkout', this.productid, 'single'])

  }

  addToCart( cart:Number){

    const vendorID =  this.product.vendorID;

    const data:cartItem =  {
      quantity:this.count(),
      product:this.productid,
      vendor: vendorID,
      cart: cart
    }


    // console.log(data)

    this.cartsService.addTocart(data).subscribe(
      (data:any)=>{
        const message = data.message
        this.sidebravisible = false;
        this.MessageService.add(
          {
            icon: 'pi pi-check',
            styleClass: 'p-2',
            summary: 'Process succesfull',
            detail: message,
            severity: 'success'
          }
        )

      },
      (error:any)=>{
        // console.error(error)
        const message = error.error.message || error.error.error || error.statusText || error.message
        this.MessageService.add(
          {
            icon: 'pi pi-times',
            styleClass: 'p-2',
            summary: 'Error detected',
            detail: message,
            severity: 'error'
          }
        )
      }
    )

  }
  increment(){
      return this.count.set(this.count() + 1)
    }
  decrement(){
      return this.count.set(this.count() - 1)
    }

  checkifdisabled(){
    if(this.count() < 1 ){
      return true;
    }else{
      return false;
    }
  }
}
