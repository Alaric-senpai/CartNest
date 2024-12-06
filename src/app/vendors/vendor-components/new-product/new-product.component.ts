import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { CategoryManagementService } from '../../../services/category-management.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandsService } from '../../../services/brands.service';
import { Product } from '../../../interfaces/product';
import { ProductsManagementService } from '../../../services/products-management.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment'
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'nest-new-product',
  standalone: true,
  imports: [FileUploadModule, ButtonModule, CommonModule, BadgeModule, InputTextModule, SelectButtonModule, InputGroupModule, InputGroupAddonModule,
    ReactiveFormsModule, FormsModule, ToastModule, EditorModule
  ],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers:[MessageService]
})
export class NewProductComponent implements OnInit {
  productform!: FormGroup;
  brandserror!: boolean;
  previewimage: any;
  brands: any = [];
  categories: any = [];
  caterror!: boolean;

  public apikey = environment.tinymce
  public init = environment.initmce

  constructor(
    private categoryService: CategoryManagementService, 
    private fb: FormBuilder,
    private brandsService: BrandsService,
    private ProductsService:ProductsManagementService,
    private MessageService:MessageService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.initform();
    this.fetchcategories();
    this.fetchbrands();

    this.productform.get('main_image')?.valueChanges.subscribe(value => {
      this.previewimage = value;
    })
  }

  initform() {
    this.productform = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      description: ['', Validators.required],
      instock: ['', Validators.required],
      tags: this.fb.array([]),
      other_images: this.fb.array([]),
      main_image: ['', Validators.required]
    });
  }

  get tags() {
    return this.productform.get('tags') as FormArray;
  }

  get images() {
    return this.productform.get('other_images') as FormArray;
  }

  addTag() {
    this.tags.push(this.fb.control('', Validators.required));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  addImage() {
    this.images.push(this.fb.control('', Validators.required));
  }

  removeImage(index: number) {
    this.images.removeAt(index);
  }

  setpreview() {
  }

  fetchcategories() {
    this.categoryService.getallcategories().subscribe(
      (data: any) => {
        this.categories = data.categories;
      },
      (error) => {
        this.caterror = true;
        console.log(error);
      }
    );
  }

  fetchbrands() {
    this.brandsService.getAllBrands().subscribe(
      (data: any) => {
        this.brands = data.brands;
      },
      (error: any) => {
        this.brandserror = true;
        console.log(error);
      }
    );
  }

  onSubmit() {
    if (this.productform.valid) {
      const product:Product  = this.productform.value
      console.log(product)
      this.ProductsService.addProduct(product).subscribe(
        (data:any)=>{
          const message = data.message
          this.MessageService.add(
            {
              icon: 'pi pi-check',
              severity: "success",
              summary: 'Operation successfull',
              detail: message,
              styleClass: 'p-2'
            }
          )
          this.productform.reset()
          setTimeout(() => {
            this.reroute()
          }, 2000);
        },
        (error:any)=>{
          const message = error.error.error || error.error.message || error.statusText || error.name || error.message
          this.MessageService.add(
            {
              icon: 'pi pi-check',
              severity: "success",
              summary: 'Operation successfull',
              detail: message,
              styleClass: 'p-2'
            }
          )
        }
      )

    }else{
this.MessageService.add(
            {
              icon: 'pi pi-times',
              severity: "error",
              summary: 'Form error',
              detail: "Form is not valid",
              styleClass: 'p-2'
            }
          )
    }
  }
  reroute() {
    this.router.navigate(['/vendor/list'])
  }
}
