import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { CardModule} from 'primeng/card'
import { SidebarModule } from 'primeng/sidebar';
import { CartsService } from '../../../services/carts.service';
import { cartItem } from '../../../interfaces/cart';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'nest-card',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, RouterLink, AnimateOnScrollModule, CardModule, ButtonModule,
    NgOptimizedImage, SidebarModule, ToastModule, DynamicDialogModule, CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  providers: [MessageService, DialogModule]
})
export class CardComponent implements OnInit {

  ngOnInit(): void {
    this.showcarts()
  }

  // ref dynamicRef 

  @Input({required: true}) name:any;
  @Input({required: true}) imageurl:any;
  @Input({required: true}) price:any;
  @Input({required: true}) productid:any;
  @Input({required: true}) vendor:any;

  sidebravisible:boolean = false

  loggedin  = sessionStorage.getItem("token")

  carts:any = [];
  error!: boolean;
  errormessage: any;

  constructor(private cartsService:CartsService, private ms:MessageService){}

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



  

  addToCart(product:Number, cart:Number, Quantity:Number){

    const vendorID =  this.vendor;

    const data:cartItem =  {
      quantity:Quantity,
      product:product,
      vendor: vendorID,
      cart: cart
    }
    
    console.log(data)

    this.cartsService.addTocart(data).subscribe(
      (data:any)=>{
        const message = data.message
        this.sidebravisible = false;
        this.ms.add(
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
        console.error(error)
        const message = error.error.message || error.error.error || error.statusText || error.message
        this.ms.add(
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

}
