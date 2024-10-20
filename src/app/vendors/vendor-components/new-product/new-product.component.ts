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
@Component({
  selector: 'nest-new-product',
  standalone: true,
  imports: [FileUploadModule, ButtonModule, CommonModule, BadgeModule,InputTextModule, SelectButtonModule,  InputGroupModule, InputGroupAddonModule ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {

  constructor(private categoryService:CategoryManagementService) {
    
  }

  ngOnInit(): void {
    this.fetchcategories();
  }

  previewimage: any;
  categories:any = []
  caterror!: boolean;

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

}
