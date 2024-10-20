import { Component, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { CardComponent } from '../../shared/card/card.component';
import { SkeletonCardComponent } from '../../shared/skeleton-card/skeleton-card.component';
import { CategoryManagementService } from '../../../services/category-management.service';
import { Category } from '../../../interfaces/category';
import { ProductsManagementService } from '../../../services/products-management.service';
import { CommonModule, Location } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'nest-category',
  standalone: true,
  imports: [BreadcrumbModule, ButtonModule, SkeletonModule, CardComponent, SkeletonCardComponent, CommonModule, PaginatorModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
rows: any = 10
first: number = 1;
last: any;

imageurl ='images/product_img.jpg';
  categorymessage: any;
  categoryError!: boolean;


    onPageChange($event: PaginatorState) {
    }

  category!: any;

  categorydata! : Category| undefined;

  products:any[] =[]
  productserror!: boolean;
  errormessage: any;
  loading:boolean = true;


  constructor(private route:ActivatedRoute, private titleservice:Title, private categoryManagement: CategoryManagementService, private productsService:ProductsManagementService,
    private location:Location
  ){
    // this.location.onUrlChange = this.initpage()
  }

  ngOnInit(): void {
    this.initpage();
  }

  private initpage(){
    this.category = this.route.snapshot.paramMap.get('id');
    this.getCategoryData();
    console.log(this.category)
    // this.reload()
  }
  

  getCategoryData():void{
    this.categoryManagement.getcategorybyId(this.category).subscribe(
        (data) =>{
          this.categorydata =data.category;

          this.fetchproducts()
        },
        (error) =>{
        this.categoryError = true
        this.categorymessage = error.error.message || error.name
        console.error(error)
        }
      )

  }

  fetchproducts(){
    this.productsService.getProductsbyCategory(this.category).subscribe(
      (data:any)=>{
        this.products = data.products
        this.loading = false;
      },
      (error)=>{
        this.productserror= true,
        this.errormessage =error.message
        console.error(error.message)
      }
    )
  }

  

}
