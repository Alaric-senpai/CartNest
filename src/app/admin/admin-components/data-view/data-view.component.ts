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

  documentStyle = getComputedStyle(document.documentElement);
   textColor = this.documentStyle.getPropertyValue('--text-color');
   textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
   surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');

  admindata ={
    labels: ['Jan', 'feb', 'march', 'april', 'may', 'june', 'july'],
    datasets: [
      {
        label: 'Admin growth',
        data: [2, 23, 34, 65 ,78, 89, 65],
        fill: true,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'blue',
      }
    ]
  }
  vendordata ={
    labels: ['Jan', 'feb', 'march', 'april', 'may', 'june', 'july'],
    datasets: [
      {
        label: 'vendor growth',
        data: [2, 23, 34, 65 ,78, 89, 65],
        fill: true,
        tension: 0.5,
        borderColor: 'teal',
        backgroundColor: 'teal',
      }
    ]
  }
  options = {
    maintainAspectRatio: true,
      aspectRatio: 1,
      stacked: true,
      label: 'System data flow',
      plugins: {
          legend: {
              labels: {
                  color: 'teal'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: 'red'
              },
              grid: {
                  color: 'gray'
              }
          },
          y: {
              ticks: {
                  color: 'crimson'
              },
              grid: {
                  color: 'teal'
              }
          }
      }
  }
}
