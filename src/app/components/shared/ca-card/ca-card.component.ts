import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'nest-ca-card',
  standalone: true,
  imports: [CardModule, RippleModule, CommonModule, RouterModule, ButtonModule, AnimateOnScrollModule],
  templateUrl: './ca-card.component.html',
  styleUrl: './ca-card.component.scss'
})
export class CaCardComponent {
  @Input({ required: true} ) imageurl!:any;
  @Input( { required: true} ) catname!:any;
  @Input( {required: true} ) catid!:any;
}
