import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { Shop } from '../../interfaces/shop';
import { ShopService } from '../../services/shop.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'nest-register',
  standalone: true,
  imports: [StepperModule, ButtonModule, FormsModule, ReactiveFormsModule, CommonModule, InputGroupAddonModule, InputTextModule, InputGroupModule, PasswordModule,
  FormsModule, ReactiveFormsModule, ToastModule    
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup

  constructor(private router:Router, private fb:FormBuilder, private shopservice:ShopService,
    private ms:MessageService
  ){}

  created:boolean = false

  ngOnInit(): void {
    this.setup()
    this.setupform()
  }
  setupform() {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        location: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        hours: ['', Validators.required],
        type: ['', Validators.required],
        description: ['', Validators.required],
        regno: ['', Validators.required],
        years: ['', Validators.required]
      }
    )
  }

  private setup(){
      const shop = sessionStorage.getItem('shopidentifier')
      if(shop){
        this.created = true
      }else{
        this.created = false
      } 

  }

  logout(){
        sessionStorage.clear();
        this.router.navigate(['/login'])
  }

  registerShop(){
    const shopData:Shop = this.registerForm.value
    this.shopservice.createshop(shopData).subscribe(
      (data: any)=>{
        const shoptoken = data.shoptoken
        sessionStorage.setItem('shopidentifier', shoptoken)
        const message = data.message
        this.ms.add(
          {
            severity: 'success',
            icon: 'pi pi-check',
            summary: 'Operation successfull',
            detail: message,
            styleClass: 'p-2',
            life: 3000
          }
        )
        this.created = true
        this.setup()


      },
      (error:any)=>{
        console.error(error)
        const message = error.error.message || error.error.error || error.message || error.error || error.name
        this.ms.add(
          {
            severity: 'error',
            icon: 'pi pi-times',
            summary: 'Operation failed',
            detail: message,
            styleClass: 'p-2',
            life: 3000
          }
        )
      }
    )
  }


}
