import { Component } from '@angular/core';

import { DividerModule} from "primeng/divider"
import { ButtonModule} from "primeng/button";


@Component({
  selector: 'nest-admin-settings',
  standalone: true,
  imports: [DividerModule, ButtonModule],
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.scss'
})
export class AdminSettingsComponent {

}
