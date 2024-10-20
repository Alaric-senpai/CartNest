import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'nest-lost',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './lost.component.html',
  styleUrl: './lost.component.scss'
})
export class LostComponent {

  constructor(private location:Location) {
    
  }

  goback(){
    this.location.back()
  }
}
