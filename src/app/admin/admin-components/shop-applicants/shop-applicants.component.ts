import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ShopService } from '../../../services/shop.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'nest-shop-applicants',
  standalone: true,
  imports: [CardModule, ButtonModule, ToastModule, CommonModule, RouterModule],
  templateUrl: './shop-applicants.component.html',
  styleUrl: './shop-applicants.component.scss',
  providers: [MessageService]
})
export class ShopApplicantsComponent implements OnInit {
  shops: any = []
  loading: boolean = true;
  shoperror: boolean = false;
  errormessage: any;
  constructor(private shopsService:ShopService, private ms:MessageService) {
    
  }

  ngOnInit(): void {
    this.fetchshops()
  }
  fetchshops() {
    this.shopsService.unveriedshops().subscribe(
      (data: any) => {
        console.log(data)
        this.loading = false
        this.shops = data.shops
      },
      (error: any) => {
        console.error(error)
        this.loading = false
        this.shoperror = true
        this.errormessage = error.error.messsage || error.statusText || error.name
      }
    )
  }

  updateshop(status:any , vendor:Number){

    this.shopsService.updateStatus(status, vendor).subscribe(
      (data:any)=>{
        const message  = data.message

        this.ms.add({
          icon: 'pi pi-check',
          summary: 'Success',
          severity: 'success',
          detail: message,
          styleClass: 'p-2'
        })
        this.fetchshops()
      },
      (error:any)=>{
        const message = error.error.error || error.error.message || error.statusText || error.name || error.message

        this.ms.add(
          {
            icon: 'pi pi-times',
            severity: 'error',
            summary: 'Error detected',
            detail: message,
            styleClass: 'p-2',
            contentStyleClass: 'm-2'
          }
        )
      }
    )

  }
}
