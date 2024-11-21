import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'nest-forgot-password',
  standalone: true,
  imports: [FormsModule, ButtonModule, CommonModule, InputOtpModule, PasswordModule, ToggleButtonModule, DividerModule, CheckboxModule, RouterModule, ReactiveFormsModule , ToastModule, InputTextModule ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  providers: [MessageService]
})
export class ForgotPasswordComponent {

  emailForm!:FormGroup;
  tokenform!:FormGroup;
  passwordform!:FormGroup

  email:any;

  otpvalid: boolean =false
  tokenprovided : boolean =false

  password!:any;
  confpass!:any;
  otp!:any;
  showpass:boolean = false
  showpasss(){
    if(this.showpass == false){

      this.showpass = true
    }else{
      this.showpass = false
    }
  }
  constructor(private locate:Location, private fb:FormBuilder, 
     private ms:MessageService ,private authService:AuthService, private router:Router){
    this.emailForm = fb.group(
      {
        email: ['', [Validators.required, Validators.email]]
      }
    )
    this.tokenform = fb.group(
      {
        token: ['', Validators.required]
      }
    )
    this.passwordform = fb.group(
      {
        password: ['', Validators.required],
        confpass: ['', Validators.required]
      }
    )
  }

  goBack(){
    this.locate.back()
  }

  sendCode(){
    const {email} = this.emailForm.value

    this.authService.sendResetToken(email).subscribe(
      (data:any)=>{
        this.email = email
        this.success(data.message)
        this.tokenprovided = true
      },
      (error:any)=>{
        let err = error.statusText || error.message || error.error || error.name 
        this.error(err)
      }
    )

  }
  ConfirmToken(){
    const {token} = this.tokenform.value
    this.authService.confirmToken(this.email, token).subscribe(
      (data:any)=>{
        this.success(data.message)
        this.otpvalid = true;
      },
      (error:any)=>{
        let err = error.message || error.statusText || error.error || error.name 
        this.error(err)
      }
    )

  }
  newpassword(){
    const {password, confpass} = this.passwordform.value

    if(password !== confpass){
      this.error("passwords not matching");
      return
    }

    this.authService.resetPassword(this.email, password).subscribe(
      (data:any)=>{
        this.success(data.message)

        setTimeout(()=>{
          this.router.navigate(['/login']);
        }, 3000)

      },
      (error:any)=>{
        let err = error.message || error.statusText || error.error || error.name 
        this.error(err)
      }
    )

  }

  success(message:string){
    this.ms.add(
      {
        severity: 'success',
        styleClass: 'p-2',
        icon: 'pi pi-check',
        detail: message,
        summary: 'Process successfull',
        life: 2500
      }
    )
  }

  error(message:string){
      this.ms.add(
        {
          severity: 'error',
          summary: 'Error detected',
          detail: message,
          icon: ' pi pi-times',
          styleClass: 'p-2',
          life: 2500
        }
      )
  }


}



