import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule} from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { TableBody, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'nest-vendor-dash',
  standalone: true,
  imports: [CardModule, ChartModule, DividerModule, AvatarModule, ButtonModule, TableModule, TagModule,
    InputGroupModule, InputTextModule, RouterModule
  ],
  templateUrl: './vendor-dash.component.html',
  styleUrl: './vendor-dash.component.scss'
})
export class VendorDashComponent implements OnInit {
  data: any;
  options: any;
  products = [
    {
      code: 1,
      name: 'Some shoe',
      category: 'Footwear',
      quantity: 400,
      status: 'In stock',
      severity: 'primary'
    },
    {
      code: 2,
      name: 'Some shoe',
      category: 'Footwear',
      quantity: 400,
      status: 'In stock',
      severity: 'primary'
    },
    {
      code: 3,
      name: 'Some shoe',
      category: 'Footwear',
      quantity: 400,
      status: 'In stock',
      severity: 'primary'
    },
    {
      code: 4,
      name: 'Some shoe',
      category: 'Footwear',
      quantity: 400,
      status: 'out of stock',
      severity: 'danger'
    },
    {
      code: 5,
      name: 'Some shoe',
      category: 'Footwear',
      quantity: 400,
      status: 'In stock',
      severity: 'info'
    },
    {
      code: 6,
      name: 'Some shoe',
      category: 'Footwear',
      quantity: 40,
      status: 'In stock',
      severity: 'primary'
    }
  ]
  ngOnInit(): void {
    this.initchart();
  }

  initchart(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Orders Growth',
          data: [0, 23, 34, 65 ,78, 89, 65],
          fill: false,
          tension: 0.5,
          borderColor: '#e0aaff',
          backgroundColor: '#300240',
        },
        {
          label: 'Members growth',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: true,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: 'teal'
      },
      {
          label: 'Customer growth',
          data: [0, 51, 62, 33, 21, 6, 45],
          fill: true,
          borderColor: 'orange',
          tension: 0.4,
          backgroundColor: '#e0aaff'
      }
      ]
    }

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      stacked: true,
      label: 'Shop dat flow',
      plugins: {
          legend: {
              labels: {
                  color: '#7238c9'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#0b7ef3'
              },
              grid: {
                  color: '#fec5e6'
              }
          },
          y: {
              ticks: {
                  color: '#820263'
              },
              grid: {
                  color: '#7b2cbf'
              }
          }
      }
  };

      
  }

}
