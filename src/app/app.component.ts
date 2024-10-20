import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SpeedDialModule } from 'primeng/speeddial';
import { ThemingService } from './services/theming.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, SpeedDialModule, MenuModule, ButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CartNest';

  private config = inject(PrimeNGConfig)

  constructor(private themeservice:ThemingService){}

  selectedTheme:string = localStorage.getItem('cartnest-theme') || "lara-light-teal";

  ngOnInit(): void {
    this.themeservice.setTheme(this.selectedTheme);
}

  items: MenuItem[] = [
    {
      icon: 'pi pi-palette',
      label: 'bootstrap4-light-blue',
      command: ()=>{
        this.switchTheme('bootstrap4-light-blue')
      }
    },
    {
      icon: 'pi pi-palette',
      label: 'bootstrap4-dark-blue',
      command: ()=>{
        this.switchTheme('bootstrap4-dark-blue')
      }
    },
    {
      icon: 'pi pi-palette',
      label: 'aura-dark-green',
      command: ()=>{
        this.switchTheme('aura-dark-green')
      }
    },
    {
      icon: 'pi pi-palette',
      label: 'lara-dark-blue',
      command: ()=>{
        this.switchTheme('lara-dark-blue')
      }
    },
    {
      icon: 'pi pi-palette',
      label: 'lara-dark-green',
      command: ()=>{
        this.switchTheme('lara-dark-green')
      }
    },
    {
      icon: 'pi pi-palette',
      label: 'lara-dark-teal',
      command: ()=>{
        this.switchTheme('lara-dark-teal')
      }
    },
    {
      icon: 'pi pi-palette',
      label: 'lara-light-blue',
      command: ()=>{
        this.switchTheme('lara-light-blue')
      }
    },
    {
      icon: 'pi pi-palette',
      label: 'lara-light-green',
      command: ()=>{
        this.switchTheme('lara-light-green')
      }
    },
    {
      icon: 'pi pi-palette',
      label: 'lara-light-teal',
      command: ()=>{
        this.switchTheme('lara-light-teal')
      }
    }
  ]

  switchTheme(theme:any){
    this.selectedTheme = theme;
    this.themeservice.setTheme(theme);
    localStorage.setItem('cartnest-theme', theme)
  }

}
