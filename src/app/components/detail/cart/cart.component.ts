import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { ConstantsService } from '../../../services/constants/constants.service';
import { CartsService } from '../../../services/carts.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsManagementService } from '../../../services/products-management.service';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { cartorder, OrderService } from '../../../services/order.service';
@Component({
  selector: 'nest-cart',
  standalone: true,
  imports: [ButtonModule, ToastModule, ImageModule, CommonModule, ConfirmPopupModule, RouterModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  errorAvailable!: boolean;
  goodserror: any;
  cartid: any;
  cart:any;
  cartGoods: any = [];
  loading: boolean = true;
  products: any = [];
  editable!:boolean
  totalcost: number = 0; // Use a number type for precise calculations

  constructor(
    private ms: MessageService,
    private cs:ConfirmationService,
    private constant: ConstantsService,
    private cartService: CartsService,
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsManagementService,
    private orderService:OrderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.cartid = params.get('id');
      if (this.cartid) {
        this.fetchGoods();
        this.fetchCartProducts()
        this.getCart()
      }
    });
  }


  private getCart(){
    this.cartService.getCartData(this.cartid).subscribe(
      (data:any)=>{
        this.cart = data.cart
        if(this.cart.is_editable === 0){
          this.editable =false
        }else{
          this.editable = true
        }
      },
      (error:any)=>{
        console.error(error)
      }
    )
  }

  private fetchCartProducts() {
    this.cartService.getcartgoods(this.cartid).subscribe(
      (data: any) => {
        this.cartGoods = data.products;
        this.calculateTotalPrice(); // Recalculate after fetching cart goods
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.errorAvailable = true;
        this.goodserror =
          error.error.error ||
          error.error.message ||
          error.statusText ||
          error.name ||
          error.message;
      }
    );
  }

  private fetchGoods() {
    this.productsService.getAllProducts().subscribe(
      (data: any) => {
        this.products = data.products;
        this.calculateTotalPrice(); // Recalculate after fetching products
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  private calculateTotalPrice(): void {
    this.totalcost = this.cartGoods.reduce((sum: number, cartItem: any) => {
      const product = this.products.find((p: any) => p.id === cartItem.product_id);
      const productPrice = parseFloat(product?.price) || 0; // Parse price to ensure it's a number
      const itemTotal = productPrice * (cartItem?.quantity || 1);
      return sum + itemTotal;
    }, 0);
    this.totalcost = parseFloat(this.totalcost.toFixed(2)); // Ensure consistent decimal formatting
  }

  getProductData(productId: string) {
    const product = this.products.find((prod: any) => prod.id === productId);
    return product || { name: '', price: 0.0, main_image: '' };
  }

  checkout() {

    this.placeOrder()

  }


  addItem(productId:any, quantity:any){
    this.cartService.cartGoodCount(this.cartid, quantity + 1, productId).subscribe(
      (data)=>{
        this.fetchCartProducts()

        this.ms.add({severity: 'success', summary: 'Successfull process', detail: data.message, icon: 'pi pi-check', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })
      },
      (error)=>{
        this.ms.add({severity: 'error', summary: 'Successfull process', detail: error.message || error, icon: 'pi pi-check', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })

      }
      )
  }

    subItem(productId:any, quantity:any){
    this.cartService.cartGoodCount(this.cartid, quantity - 1, productId).subscribe(
      (data)=>{
        this.fetchCartProducts()
        this.ms.add({severity: 'success', summary: 'Successfull process', detail: data.message, icon: 'pi pi-check', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })
      },
      (error)=>{
        this.ms.add({severity: 'error', summary: 'Successfull process', detail: error.message || error, icon: 'pi pi-check', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })

      }
      )

  }

  removeFromcart(event:Event, product:number){
    this.cs.confirm(
      {
        target: event.target as EventTarget,
        message: 'Are you sure you want to remove from cart',
        icon: 'pi pi-exclamation-triangle',
        // acceptIcon: 'pi pi-check mr-1',
        // rejectIcon: 'pi pi-times mr-1',
        acceptLabel: 'Confirm',
        rejectLabel: 'Cancel',
        rejectButtonStyleClass: 'p-button-outlined p-button-sm p-2 m-1',
        acceptButtonStyleClass: 'p-button-sm p-2 m-1',
        accept: ()=>{
          // this.remove();
          this.cartService.removeFromcart(this.cartid, product).subscribe(
            (data)=>{
              this.ms.add({severity: 'success', summary: 'Successfull process', detail: data.message, icon: 'pi pi-check', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })
            },
            (error)=>{
              this.ms.add({severity: 'error', summary: 'Successfull process', detail: error.message || error, icon: 'pi pi-check', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })
            }
          )
          this.fetchCartProducts()
        },
        reject: ()=>{
          this.ms.add(
            {
              severity: 'warn',
              summary: 'Operation cancelled',
              detail:'You have decided to keep the product',
              styleClass: 'p-2',
              icon: 'pi pi-check',
              life: 3000
            }
          )
        }
      }
    )
  }


  private placeOrder(){
    const order:cartorder = {
      cart:this.cartid,
      price: this.totalcost
    }

    this.orderService.placeCartOrder(order).subscribe(
      (data:any)=>{
        const orderid =data.orderid
        this.router.navigate(['home/checkout', this.cartid, 'cart', orderid]);

      },
      (error:any)=>{
        let err =error
        this.ms.add(
          {
            icon: 'pi pi-times',
            summary: "checkout Error",
            severity: 'error',
            detail: err.error.message|| err.message || error.message || error.statusText,
            styleClass: 'p-2',
            contentStyleClass: 'gap-2'
          }
        )
      }
    )
  }

}

