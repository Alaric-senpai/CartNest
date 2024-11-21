import { Component, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  rows: number = 20; // Number of items per page
  first: number = 0; // Starting item index for current page
  totalRecords: number = 0; // Total number of products

  imageurl = 'images/product_img.jpg';
  categorymessage: any;
  categoryError!: boolean;

  category!: any;
  categorydata!: Category | undefined;
  products: any[] = [];
  paginatedProducts: any[] = []; // Products to display on the current page
  productserror!: boolean;
  errormessage: any;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private titleservice: Title, 
    private categoryManagement: CategoryManagementService, 
    private productsService: ProductsManagementService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('id'); // Get category ID from the route
      if (this.category) {
        this.initpage(); // Reload data when the category changes
      }
    });
  }

  private initpage(): void {
    this.getCategoryData();
    // console.log('Current Category ID:', this.category);
  }

  getCategoryData(): void {
    this.categoryManagement.getcategorybyId(this.category).subscribe(
      (data) => {
        this.categorydata = data.category;
        this.fetchProducts();
      },
      (error) => {
        this.categoryError = true;
        this.categorymessage = error.error.message || error.name;
        console.error(error);
      }
    );
  }

  fetchProducts(): void {
    this.productsService.getProductsbyCategory(this.category).subscribe(
      (data: any) => {
        this.products = data.products;
        this.totalRecords = this.products.length;
        this.loading = false;
        this.paginateProducts();
      },
      (error) => {
        this.productserror = true;
        this.errormessage = error.message;
        console.error(error.message);
      }
    );
  }

  // Paginate the products
  paginateProducts(): void {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedProducts = this.products.slice(start, end);
  }

  // Handle page changes
  onPageChange(event: PaginatorState): void {
    this.first = event.first ?? 0; // First record on the current page
    this.rows = event.rows ?? 20;  // Rows per page
    this.paginateProducts();       // Update the paginated products
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }
}
