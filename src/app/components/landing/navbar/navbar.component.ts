import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService } from 'primeng/api';
import { CategoryManagementService } from '../../../services/category-management.service';
import { Category } from '../../../interfaces/category';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { SidebarModule } from 'primeng/sidebar';
import { ConstantsService } from '../../../services/constants/constants.service';
import { AuthService } from '../../../services/auth.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'nest-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, DropdownModule, InputGroupModule, InputTextModule, FormsModule, ButtonModule, MenuModule, DialogModule, AvatarGroupModule, AvatarModule, FloatLabelModule, PasswordModule, DividerModule, InputGroupAddonModule, SidebarModule, ReactiveFormsModule, ToastModule
    ],
  providers: [MessageService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  search = faSearch;
  user = faUser;
  cart = faCartShopping;
  heart = faHeart;
  isloggedin: boolean = false;
  visible!: boolean;
  sibarvisible:boolean = false;
  selected: Category | null = null;
  categoryMenuItems: MenuItem[]   = []; // Menu items for p-menu

  categories: MenuItem[] = [];
  loginform!: FormGroup;
  constructor(private categoryManagement: CategoryManagementService, private router: Router, private constants: ConstantsService,
    private fb:FormBuilder, private authService:AuthService, private ms:MessageService, private route:ActivatedRoute
  ) {
    this.visible = constants.loginvisible
    this.initloginform();
    this.checkifloggedin()

  }

  checkifloggedin(){
    const token = sessionStorage.getItem('token');

    if(token){
      this.isloggedin = true;
    }
  }

  dropdoenitems: MenuItem[] = [
    {
      label: 'My profile',
      routerLink: '/profile',
      icon: 'pi pi-user'
    },
    {

      label: 'Orders',
      icon: 'pi pi-truck',
      routerLink: '/profile/orders'
    },
    {
      label: 'logout',
      icon: 'pi pi-power-off',
      command: ()=>{
        // alert('i was clicked')
        this.logout();
      }
    }
  ]

  ngOnInit(): void {
    this.initCategories();
  }

  initloginform(){
    this.loginform = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    )
  }

  login(){
    // alert(this.loginform.value)
    const { email, password } = this.loginform.value

    this.authService.userlogin(email, password).subscribe(
      (data:any)=>{

        const usertoken = data.token

        const role = data.userrole
        sessionStorage.setItem('token', usertoken)
        sessionStorage.setItem('role', role)


        this.visible = false
        // const decoded = jwtDecode(usertoken, true)
        if(role == 'admin'){
          this.router.navigate(['/admin'])

        }else if(role == 'customer'){
          this.router.navigate(['/home'])
          this.checkifloggedin()


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
        const message = error.error.message || error.statusText
        this.ms.add({severity: 'error', summary: 'Error detected', detail:`${message}`, icon: 'pi pi-alert', life: 3000, styleClass: "p-3" })
      }
    )


  }

  logout(){

    this.authService.logout();
    this.ms.add({ severity:'info', summary: 'Success', detail: 'logout was successfull',icon: 'pi pi-check', life:3000, styleClass: 'p-2' })

  }
  initCategories(): void {

    this.categoryManagement.getallcategories().subscribe(
    (data:any) =>{
      this.categories = data.categories

    },
    (error) =>{
      this.ms.add({
        icon: 'pi pi-times',
        summary: 'Load error',
        detail: 'category load failed, reload page ',
        styleClass: 'p-2',
        contentStyleClass: 'p-2'
      })
    }
    )
  }




  showDialog(){
    this.visible = true;
  }

  showsidebar(){
    if(this.sibarvisible == true){
      this.sibarvisible = false
    }else{
      this.sibarvisible = true
    }
  }
}
