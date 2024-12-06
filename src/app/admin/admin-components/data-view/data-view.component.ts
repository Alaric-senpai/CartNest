import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'nest-data-view',
  standalone: true,
  imports: [TabViewModule, ButtonModule,CommonModule, ChartModule],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss'
})
export class DataViewComponent {

  constructor(){
    
  }


}
