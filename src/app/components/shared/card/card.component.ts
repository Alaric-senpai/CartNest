import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { CardModule} from 'primeng/card'
@Component({
  selector: 'nest-card',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, RouterLink, AnimateOnScrollModule, CardModule, ButtonModule,
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  heart= faHeart;
  cart = faCartPlus

  @Input({required: true}) name:any;
  @Input({required: true}) imageurl:any;
  @Input({required: true}) price:any;
  @Input({required: true}) productid:any;

}
