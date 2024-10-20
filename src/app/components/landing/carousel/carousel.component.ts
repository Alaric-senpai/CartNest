import { Component, OnInit } from '@angular/core';
import { NewArrivalComponent } from '../new-arrival/new-arrival.component';

@Component({
  selector: 'nest-carousel',
  standalone: true,
  imports: [NewArrivalComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

  

  ngOnInit(): void {


}

}
