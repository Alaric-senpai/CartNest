import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { ConstantsService } from '../../../services/constants/constants.service';
import { CartsService } from '../../../services/carts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsManagementService } from '../../../services/products-management.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nest-cart',
  standalone: true,
  imports: [ButtonModule,ToastModule, ImageModule, CommonModule],
  providers: [MessageService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  errorAvailable!: boolean;
  goodserror: any;
  constructor(private messageService: MessageService, private constant: ConstantsService, private cartService: CartsService, 
    private router: Router,
    private route: ActivatedRoute,
    private productsService:ProductsManagementService
  ) {}

  cartid: any;
  cartGoods: any = [];
  products: any = []
  totalcost: any = 0

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: any) => {
        this.cartid = params.get('id');
        if (this.cartid) {
          this.fetchCartProducts();
        }
      }
    )
  }

  private fetchCartProducts() {
    this.cartService.getcartgoods(this.cartid).subscribe(
      (data: any) => {
        this.cartGoods = data.products
      },
      (error) => {
        this.errorAvailable = true
        this.goodserror = error.error.error || error.error.message || error.statusText || error.name || error.message
      }
    )
  }

  private fetchGoods() {
    this.productsService.getAllProducts().subscribe(
      (data:any) => {
        this.products = data.products
      },
      (error: any) => {
        console.error(error)
      }
    )
  }

  productData(productid: any) {
    return this.products.find(
      (product: { id: Number }) => productid === product.id
    )
  }


  addSum(price:any) {
    this.totalcost += price
  }

  deductsum(price: any) {
    this.totalcost -= price
  }

  checkout() {
    this.router.navigate(['/checkout', this.cartid])
  }

  addProduct() {
    
  }

  deductProduct() {
    
  }

  deleteproduct() {
    
  }

}
