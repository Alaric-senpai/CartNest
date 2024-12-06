import { Component, Pipe } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'nest-admin-home',
  standalone: true,
  imports: [MenuModule, RouterModule, ButtonModule, DividerModule, AvatarGroupModule, AvatarModule, ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {

  constructor(private router:Router){}

  menuvisible:boolean = true;

  togglemenu(){
    // console.log(this.menuvisible)
    if(this.menuvisible == true){
      this.menuvisible = false
    }else{
      this.menuvisible =true
    }
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['/login'])

  }

  menuitems:MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: 'dashboard'
    },
    {
      label: 'Data view',
      icon:'pi pi-chart-bar',
      routerLink: 'dataview'
    },
    {
      label: 'Vendors',
      icon: 'pi pi-users',
      routerLink: 'vendors',
    },
    {
      label: 'System settings',
      icon: 'pi pi-cog',
      routerLink: 'settings'
    },
    {
      label: 'Customer support',
      icon: 'pi pi-headphones',
      routerLink: 'support'
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      routerLink: 'profile'
    }
  ]

}
