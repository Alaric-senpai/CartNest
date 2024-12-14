import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { TagModule } from 'primeng/tag';
import { KnobModule } from 'primeng/knob';
import { ChartModule } from 'primeng/chart';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { MeterGroupModule, MeterItem } from 'primeng/metergroup';
import { CommonModule } from '@angular/common';
import { SpeedDialModule } from 'primeng/speeddial';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../interfaces/category';
import { CategoryManagementService } from '../../services/category-management.service';
import { ToastModule } from 'primeng/toast';
import { Brand } from '../../interfaces/brand';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'nest-dashboard-vendor',
  standalone: true,
  imports: [MenuModule, DropdownModule, AvatarModule, AvatarGroupModule, CardModule, ButtonModule, ToastModule,
    TagModule, KnobModule, ChartModule, TooltipModule, ToolbarModule, DividerModule, MeterGroupModule,
    CommonModule, SpeedDialModule, DialogModule, SidebarModule, InputTextModule, FormsModule, ReactiveFormsModule 
  ],
  templateUrl: './dashboard-vendor.component.html',
  styleUrl: './dashboard-vendor.component.scss',
  providers: [MessageService]
})
export class DashboardVendorComponent {

  addcat: boolean = false;
  dialog: boolean = false;
  catform!: FormGroup;
  brandform!: FormGroup;
  brandsidebar: boolean = false;
  constructor(private router: Router, private fb: FormBuilder, private categoryservice: CategoryManagementService, private ms: MessageService,
    private brandsService:BrandsService
  ) {
    this.catform = this.fb.group(
      {
        name: ['', Validators.required],
        longname: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', Validators.required]
      }
    )

    this.brandform = this.fb.group(
      {
        name: ['', Validators.required]
      }
    )
  }
  showdialog() {
    this.dialog = true
  }
  showsidebar() {
    this.dialog = false
    this.addcat = true
  }

  showbrandsidebar() {
    this.dialog = false
    this.brandsidebar = true
  }

  menuvisible: boolean =true

  togglemenu(){
    if(this.menuvisible == true){
      this.menuvisible = false
    }else{
      this.menuvisible = true
    }
  }

  hidemenu(){
    if(this.menuvisible == true){
      this.menuvisible = false;

    }
  }

  menuitems:MenuItem[] = [
    {
      label: 'General',
      expanded: false,
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-home',
          routerLink: "dashboard",
          routerLinkActiveOptions: 'bg-blue-500 text-white'
        },
        {
          label: 'Bookmarks',
          icon: 'pi pi-bookmark',
          routerLink: 'bookmark',
          routerLinkActiveOptions: 'bg-blue-500 text-white'

        }
      ]
    },
    {
      label: 'Product Management',
      expanded: false,
      items: [
        {
          label: 'Product List',
          icon: 'pi pi-list',
          routerLink: 'list',
          routerLinkActiveOptions: 'bg-blue-500 text-white'

        },
        {
          label: 'New product',
          icon: 'pi pi-plus',
          routerLink: 'newProduct',
          routerLinkActiveOptions: 'bg-blue-500 text-white'

        },
        {
          label: 'product Analytics',
          icon: 'pi pi-cog',
          routerLink: 'productAnalytics',
          routerLinkActiveOptions: 'bg-blue-500 text-white'

        }

      ]
    },
    {
      label: 'Settings',
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-cog pi-spin',
          routerLink: 'settings',
          routerLinkActiveOptions: 'bg-blue-500 text-white'

        },
        {
          label: 'Analytics',
          icon: 'pi pi-chart-bar',
          routerLink: 'shopAnalytics',
          routerLinkActiveOptions: 'bg-blue-500 text-white'

        },
        {
          label: 'Profile',
          icon: PrimeIcons.USER,
          routerLink: 'profile',
          routerLinkActiveOptions: 'bg-blue-500 text-white'
        }
      ]
    },
    {
      label: 'Others',
      items: [
        {
          label: 'Messages',
          icon: 'pi pi-comment',
          routerLink: 'messages',
          routerLinkActiveOptions: 'bg-blue-500 text-white'

        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: ()=>{
            sessionStorage.clear();
            this.router.navigate(['/login'])
          }
        }
      ]
    }
  ]

  meterdata:MeterItem[] = [
    {
      label: 'Products',
      value: 300,
      icon: 'pi pi-box',
      color: 'crimson'
    },
    {
      label: 'Orders',
      value: 200,
      icon: 'pi pi-cart-plus',
      color: 'blue'
    }
  ]

  speddialmenu:MenuItem[] = [
    {
      icon: 'pi pi-plus',
      label: 'Add product',
      command: ()=>{
        this.router.navigate(['newProduct'])
      }
    }
  ]

  addcategory() {
    const data: Category = this.catform.value

    this.categoryservice.newcategory(data).subscribe(
      (data: any) => {
        this.addcat = false
        const message = data.message
        this.ms.add({
          severity: 'success',
          summary: 'Sucessfull operation',
          detail: message,
          styleClass: 'p-2',
          icon: 'pi pi-check'
        })
      },
      (error: any) => {
        console.error(error)
        this.addcat = false
        const message = error.error.message || error.name || error.message
        this.ms.add({
          severity: 'error',
          summary: 'Error occoured',
          detail: message,
          styleClass: 'p-2',
          icon: 'pi pi-check'
        })
      }
    )
    
  }
  addBrand() {
    const data: Brand = this.brandform.value

    this.brandsService.newBrand(data).subscribe(
      (data: any) => {
        this.brandsidebar = false
        const message = data.message
        this.ms.add({
          severity: 'success',
          summary: 'Sucessfull operation',
          detail: message,
          styleClass: 'p-2',
          icon: 'pi pi-check'
        })
      },
      (error: any) => {
        console.error(error)
        this.addcat = false
        const message = error.error.message || error.name || error.message
        this.ms.add({
          severity: 'error',
          summary: 'Error occoured',
          detail: message,
          styleClass: 'p-2',
          icon: 'pi pi-check'
        })
      }
    )
    
  }


}
