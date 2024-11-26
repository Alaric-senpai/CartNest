import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'nest-profile',
  standalone: true,
  imports: [DividerModule, CommonModule, RouterModule, AvatarGroupModule, AvatarModule, ButtonModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  visible:boolean = true

  toggle(){
    this.visible = !this.visible
  }

  hide(){
    this.visible = true
  }

  menu = [
    // {
    //   label: 'Dashboard',
    //   route: 'dashboard',
    //   icon: 'pi pi-th-large'
    // },
    {
      label: 'Orders',
      route: 'orders',
      icon: 'pi pi-truck'
    },
    {
      label: 'Settings',
      route: 'settings',
      icon: 'pi pi-cog'
    }
  ]
}
