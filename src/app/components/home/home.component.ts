import { Component } from '@angular/core';
import { NavbarComponent } from '../landing/navbar/navbar.component';
import { CarouselComponent } from '../landing/carousel/carousel.component';
import { NewArrivalComponent } from '../landing/new-arrival/new-arrival.component';
import { RouterModule } from '@angular/router';
import { FooterComponent} from '../shared/footer/footer.component';
@Component({
  selector: 'nest-home',
  standalone: true,
  imports: [NavbarComponent, RouterModule, FooterComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
