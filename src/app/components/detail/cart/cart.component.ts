import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { ConstantsService } from '../../../services/constants/constants.service';

@Component({
  selector: 'nest-cart',
  standalone: true,
  imports: [ButtonModule,ToastModule, ImageModule],
  providers: [MessageService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(private messageService: MessageService, private constant:ConstantsService) {}
   email = sessionStorage.getItem('email')
  showToast1() {
    this.messageService.add({severity: 'success', summary: 'favourite added', detail: 'product added to favourite list', icon: 'pi pi-check', life: 1000, styleClass: "p-3" });
}



showLifeLong() {
  this.messageService.add({ severity: 'error', summary: 'Life', detail: 'I show for 20000ms', life: 2000, icon: 'pi pi-trash', styleClass: "p-3" });
}


  checkout(){
    this.messageService.add({ severity: 'success', summary: 'checkout requested', detail: 'a checkout was requested', styleClass: 'p-3', icon: 'pi pi-bitcoin'})
  }

}
