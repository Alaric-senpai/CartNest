import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../services/auth.service';
import { ToastModule } from 'primeng/toast';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'nest-login',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, CommonModule, RouterModule, PasswordModule, CheckboxModule, ToastModule],
  providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup
  constructor(private ms:MessageService, private fb:FormBuilder, private authService:AuthService,
    private router:Router
  ){
    
  }
  ngOnInit(): void {
    this.intiform()
  }
  intiform() {
    this.loginform = this.fb.group(
      {
        email:['', [Validators.required, Validators.email]],
        password:['', Validators.required]
      }
    )
  }
  login(){
    // alert(this.loginform.value)
    const { email, password } = this.loginform.value

    this.authService.userlogin(email, password).subscribe(
      (data:any)=>{
        // console.log(data)

        const usertoken = data.token

        const role = data.userrole
        sessionStorage.setItem('token', usertoken)
        sessionStorage.setItem('role', role)


        // const decoded = jwtDecode(usertoken, true)
        if(role == 'admin'){
          this.router.navigate(['/admin'])

        }else if(role == 'customer'){
          this.router.navigate(['/home'])

        }else if( role == 'vendor' ){
              if(data.shoptoken){
                const shoptoken = data.shoptoken
                const status = data.shopstatus
                sessionStorage.setItem('shopidentifier', shoptoken)
                if(status == "pending"){
                  this.router.navigate(['/Shopregister'])
                }else{
                this.router.navigate(['/vendor'])
                  
                }
              }else{
                this.router.navigate(['/Shopregister'])

              }

        }

      },
      (error:any)=>{
        const message = error.error.message || error.name
        console.log(message)
        this.ms.add({severity: 'error', summary: 'Error detected', detail:`${message}`, icon: 'pi pi-alert', life: 3000, styleClass: "p-3" })
        console.log(error)
      }
    )


  }
}
