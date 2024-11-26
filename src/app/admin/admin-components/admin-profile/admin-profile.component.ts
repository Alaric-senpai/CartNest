import { Component } from '@angular/core';
import {DividerModule} from "primeng/divider";
import { ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog"

@Component({
  selector: 'nest-admin-profile',
  standalone: true,
  imports:[ DividerModule, ButtonModule, DialogModule],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {

}
