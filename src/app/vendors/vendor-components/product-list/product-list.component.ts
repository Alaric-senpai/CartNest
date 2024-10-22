import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { VendorProductManagementService } from '../../services/vendor-product-management.service';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { CategoryManagementService } from '../../../services/category-management.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'nest-product-list',
  standalone: true,
  imports: [TableModule, TagModule, ButtonModule, RouterModule, DataViewModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: any = []
  loadingproducts: boolean = true
  categories:any = []
  productserror!: boolean;
  errormessage: any;
  caterror!: boolean;

  constructor(private VendorProductsService:VendorProductManagementService, private categoryService:CategoryManagementService){}

  getSeveriry(){

  }

  getProductByid(id:Number){

    return this.categories.find((category: { id: Number; }) => id === category.id)
    
  }

  getSeverity:any;
  ngOnInit(): void {
    this.initProducts()
  }
  initProducts() {
    this.VendorProductsService.getMyProducts().subscribe(
      (data:any) =>{
        // console.log(data)
        this.loadingproducts = false
        this.products = data.products
        this.fetchcategories()
      },
      (error:any)=>{
        this.productserror = true
        this.loadingproducts = false
        this.errormessage = error.error.error || error.error.errormessage || error.statusText || error.name
        // console.log(error)

      }
    )
  }
  fetchcategories() {
    this.categoryService.getallcategories().subscribe(
      (data:any) => {
        this.categories = data.categories
      },
      (error) => {
        this.caterror = true
        console.log(error)
      }
    )
  }

}
