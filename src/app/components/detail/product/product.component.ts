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
import { ActivatedRoute } from '@angular/router';
import { ProductsManagementService } from '../../../services/products-management.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'nest-product',
  standalone: true,
  imports: [SkeletonModule, CardComponent, SkeletonCardComponent, ButtonModule, RatingModule, FormsModule,
    DividerModule, ToastModule, ImageModule, TagModule, CommonModule, PaginatorModule
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
  producterror: any;
  imageurl!:string;
  constructor(private toast:MessageService, private route:ActivatedRoute, private productService:ProductsManagementService){}
  ngOnInit(): void {

    const prodid$ = this.route.params.pipe(
      map(params => params['id'])
    )

    this.productid = this.route.snapshot.paramMap.get('id');

    this.getproductdata()
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

  order(arg0: string) {
    this.toast.add({summary: 'Order placed', severity: 'info', detail: `order for ${this.count()} goods placed`, icon: 'pi pi-check-circle' , styleClass: 'p-3 gap-2'});
    }
  addtocart(arg0: any,arg1: any) {
    this.toast.add({summary: 'Added to cart', severity: 'success', detail: ` ${this.count()} goods added to cart`, icon: 'pi pi-cart-plus', styleClass: 'p-3' });

    // alert ( this.count() +' goods added to cart')
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
