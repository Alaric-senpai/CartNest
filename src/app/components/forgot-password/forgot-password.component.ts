import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'nest-forgot-password',
  standalone: true,
  imports: [FormsModule, ButtonModule, CommonModule, InputOtpModule, PasswordModule,
    ToggleButtonModule, DividerModule, CheckboxModule, RouterModule,  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  otpvalid: boolean =true
  tokenprovided : boolean =true

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
  constructor(private locate:Location){
  }

  goBack(){
    this.locate.back()
  }


}



