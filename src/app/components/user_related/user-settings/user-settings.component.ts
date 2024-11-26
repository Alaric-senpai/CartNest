import { Component } from '@angular/core';
import {DividerModule} from "primeng/divider";
import { ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog"
@Component({
  selector: 'nest-user-settings',
  standalone: true,
  imports: [DividerModule, ButtonModule, DialogModule],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent {

}
