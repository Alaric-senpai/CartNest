import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SkeletonCardComponent } from '../../shared/skeleton-card/skeleton-card.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ProductsManagementService } from '../../../services/products-management.service';

@Component({
  selector: 'nest-new-arrival',
  standalone: true,
  imports: [CardComponent, CommonModule , RouterModule, ButtonModule, SkeletonCardComponent, AnimateOnScrollModule, CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './new-arrival.component.html',
  styleUrl: './new-arrival.component.scss'
})
export class NewArrivalComponent implements OnInit{
  products:any = []
  produtserror!: boolean;
  errormessage: any;
  loading!: boolean;
  constructor(private productsService:ProductsManagementService){}

  ngOnInit(): void {
    this.fetchproducts()
    this.loading = true;
  }
  fetchproducts() {
    this.productsService.gettrendingProducts().subscribe(
      (data:any)=>{
        this.loading = false
        this.products = data.products
        this.products = this.products.slice(0, 20)
        // console.log(data)
      },
      (error:any) =>{
        this.produtserror = true;
        this.errormessage = error.error.message || error.name
        
      }
    )
  }

  
}
