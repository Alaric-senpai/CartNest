import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';

@Component({
  selector: 'nest-register',
  standalone: true,
  imports: [StepperModule, ButtonModule, FormsModule, ReactiveFormsModule, CommonModule, InputGroupAddonModule, InputTextModule, InputGroupModule, PasswordModule,
    
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router){}

  created:boolean = false

  ngOnInit(): void {
    this.setup()
  }

  private setup(){
      const shop = sessionStorage.getItem('shopidentifier')
      if(shop){
        this.created = true
      } 

  }

  logout(){
            sessionStorage.clear();
            this.router.navigate(['/login'])
  }


}
