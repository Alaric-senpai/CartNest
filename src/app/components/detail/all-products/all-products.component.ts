import { Component, OnInit } from '@angular/core';
import { ProductsManagementService } from '../../../services/products-management.service';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { CardComponent } from '../../shared/card/card.component';
import { SkeletonCardComponent } from '../../shared/skeleton-card/skeleton-card.component';

@Component({
  selector: 'nest-all-products',
  standalone: true,
  imports: [BreadcrumbModule, ButtonModule, SkeletonModule, CardComponent, SkeletonCardComponent, CommonModule, PaginatorModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {

  rows: number = 40; // Number of items per page
  first: number = 0; // Starting item index for current page
  totalRecords: number = 0; // Total number of products
  products: any[] = [];
  paginatedProducts: any[] = []; // Products to display on the current page
  loading:boolean = true
  error!:boolean
  errormsg:any
  constructor(
    private productsService:ProductsManagementService
  ){}

  ngOnInit(): void {
    this.getAllProducts()
  }

  private getAllProducts(){
    this.productsService.getAllProducts().subscribe(
      (data:any)=>{
        this.products = data.products
        this.loading = false 
        this.totalRecords = this.products.length;
        this.paginateProducts()
      },
      (error:any)=>{
        this.error = true 
        this.errormsg = error.error.message || error.name || error.statusText
      }
    )
  }
  private paginateProducts(){
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedProducts = this.products.slice(start, end);
  }
  onPageChange(event: PaginatorState): void {
    this.first = event.first ?? 0; // First record on the current page
    this.rows = event.rows ?? 20;  // Rows per page
    this.paginateProducts();       // Update the paginated products
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }
}
