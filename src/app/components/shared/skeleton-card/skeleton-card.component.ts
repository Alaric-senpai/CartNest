import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'nest-skeleton-card',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './skeleton-card.component.html',
  styleUrl: './skeleton-card.component.scss'
})
export class SkeletonCardComponent {

}
