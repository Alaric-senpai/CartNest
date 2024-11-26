import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { Cart } from '../../../interfaces/cart';
import { ToastModule } from 'primeng/toast';
import { CartsService } from '../../../services/carts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nest-carts',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterModule, DialogModule, ReactiveFormsModule, ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit {
  cartform!:FormGroup;
  carts:any = []
  constructor(private ms:MessageService, private fb:FormBuilder, private cartssertice:CartsService){}

  ngOnInit(): void {
    this.initform()
    this.getcarts()
  }
  initform() {
    this.cartform = this.fb.group(
      {
        name: ['', Validators.required],
        imageurl: ['', Validators.required]
      }
    )
  }

  getcarts(){
    this.carts = this.cartssertice.getMycarts().subscribe(
      (data:any)=>{
        this.carts = data.carts
      },
      (error)=>{
        console.error(error)
      }
      )
  }
  addCart(){
    const cartdata:Cart = this.cartform.value
    // console.log(cartdata)
    this.cartssertice.newCart(cartdata).subscribe(
      (data:any)=>{
        this.showdialog = false
        this.ms.add({severity: 'success', summary: 'Successfull process', detail: data.message, icon: 'pi pi-check', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })
        this.getcarts()
      },
      (error:any)=>{
        // console.log(error)
        this.showdialog = false
        const message = error.error.message || error.name
        this.ms.add({severity: 'error', summary: 'error detected', detail: message, icon: 'pi pi-x', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })

      }
    )
  }

  DeleteCart(cartid:any){
    // console.log(cartdata)

    // if()

    this.cartssertice.deletecart(cartid).subscribe(
      (data:any)=>{
        // console.log(data)
        this.ms.add({severity: 'success', summary: 'Successfull process', detail: data.message, icon: 'pi pi-check', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })
        this.getcarts()
      },
      (error:any)=>{
        // console.log(error)
        const message = error.error.error || error.error.message || error.name
        this.ms.add({severity: 'error', summary: 'error detected', detail: message, icon: 'pi pi-x', life:2000, styleClass: 'p-2', contentStyleClass: 'm-1' })

      }
    )
  }

  date() {
    const today = new Date()
    
    return today.getFullYear()
  }
  showdialog: boolean = false
  toggleDialog() {
      this.showdialog = true
  }

}
