import { Component, OnInit } from '@angular/core';
import { CaCardComponent } from '../../shared/ca-card/ca-card.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CategoryManagementService } from '../../../services/category-management.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nest-categories',
  standalone: true,
  imports: [CaCardComponent, SkeletonModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  categorieserror!: boolean;
  errormessage: any;
  constructor(private categoryService:CategoryManagementService){}

  imageurls = ['images/image01.png', 'images/image02.png', 'images/image03.png', 'images/image04.png', 'images/image05.png', 'images/image06.png', 'images/image07.png']
  categories: any = [];
  categoryloading: boolean = false;
  ngOnInit(): void {
    this.getcategories()
  }

  getcategories(){
    this.categoryService.getallcategories().subscribe(
      (data:any) =>{
        this.categories = data.categories
        console.log(this.categories)
      },
      (error:any) =>{
        this.categorieserror =true;
        this.errormessage = error.error.message || error.name
      }
    )
  }
}
