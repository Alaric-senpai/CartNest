import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AuthService } from '../../../services/auth.service';
import { CreateUser } from '../../../interfaces/user';

@Component({
  selector: 'nest-signup',
  standalone: true,
  imports: [RouterModule, ButtonModule, DividerModule, InputTextModule,  InputGroupAddonModule, InputGroupModule, PasswordModule, ToggleButtonModule, FormsModule, ReactiveFormsModule],
  providers: [MessageService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  registerform!:FormGroup;
  role:any = "customer"
  label: any = "customer registration"
  labelinv:any = "Vendor registration"

  show:boolean = true;

  swithc() {
    if(this.role == "customer"){
      this.role = "vendor"
      this.label = "Vendor registration"
      this.labelinv = "Customer registration"
    }else{
      this.role = "customer"
      this.label = "customer registration"
      this.labelinv = "Vendor registration"
    }
  }


  constructor(private fb:FormBuilder, private Authservice:AuthService, private ms:MessageService, private router:Router){

  }
  ngOnInit(): void {
    this.initform()
  }
  initform() {
    this.registerform = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['',[Validators.required, Validators.email]],
        role:['', Validators.required],
        password:['', Validators.required],
        confpass: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required]
      }
    )
  }


  register(){
    const data = this.registerform.controls

    console.log(data)

    const email  = data['email'].value
    const role = data['role'].value
    const username = data['username'].value
    const pass = data['password'].value
    const confp = data['confpass'].value
    const firstname = data['firstname'].value
    const lastname = data['lastname'].value

    if(pass !== confp){
        this.ms.add({ severity: 'error', summary: 'Match error', detail: 'password not matching', icon: 'pi pi-check' , styleClass: 'p-2' })

    }else{
      const user:CreateUser = {
        username: username,
        email: email,
        role: role,
        password: pass,
        firstname: firstname,
        lastname: lastname
      }
  
      this.Authservice.userRegister(user).subscribe(
        (data)=>{
          const message = data.message
          this.ms.add({ severity: 'success', summary: 'Operation successfull', detail: message, icon: 'pi pi-check' , styleClass: 'p-2' })

          setTimeout(() => {
            this.reroute()
          }, 3000);

        },
        (error)=>{
          const message = error.error.message || error.message || error.name
          this.ms.add({ severity: 'error', summary: 'Error occured', detail: message, icon: 'pi pi-check' , styleClass: 'p-2' })
  
        }
      )

    }


  }
  reroute() {
    this.router.navigate(['/login'])
  }




}
