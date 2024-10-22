import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FileSelectEvent, FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { CategoryManagementService } from '../../../services/category-management.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandsService } from '../../../services/brands.service';

@Component({
  selector: 'nest-new-product',
  standalone: true,
  imports: [FileUploadModule, ButtonModule, CommonModule, BadgeModule,InputTextModule, SelectButtonModule,  InputGroupModule, InputGroupAddonModule ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {
  productform!:FormGroup;
  brandserror!: boolean;
  constructor(private categoryService:CategoryManagementService, private fb:FormBuilder,
    private brandsService:BrandsService
  ) {
    
  }

  ngOnInit(): void {
    this.initform()
    this.fetchcategories();
    this.fetchbrands();
  }

  previewimage: any;
  brands:any = []
  categories:any = []
  caterror!: boolean;

  initform(){
    this.productform = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      instock: ['', Validators.required],
      price: ['', Validators.required],
      brand: ['', Validators.required],
      main_image: ['', Validators.required],
      other_images: this.fb.group(
        {
          link: ['', Validators.required]
        }
      ),
      tags: this.fb.group(
        {
          tag_name: ['', Validators.required]
        }
      )


    })

  }

  setpreview(){
    this.previewimage = 
    document.getElementById('image')?.textContent

    alert(this.previewimage)
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

  fetchbrands(){
    this.brandsService.getAllBrands().subscribe(
      (data: any) => {
        this.brands = data.brands 
      },
      (error: any) => {
        this.brandserror = true
        console.log(error)
      }
    )
  }
}
