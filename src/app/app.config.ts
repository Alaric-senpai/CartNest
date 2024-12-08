import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { InterceptorService } from './services/interceptor.service';

const firebaseConfig = {
  apiKey: "AIzaSyBJIcuBi78ZVTusZeZ-vq9k4yBiQBmcUbc",
  authDomain: "cartnest-5cd05.firebaseapp.com",
  projectId: "cartnest-5cd05",
  storageBucket: "cartnest-5cd05.firebasestorage.app",
  messagingSenderId: "310378281684",
  appId: "1:310378281684:web:59b21a3e996ef56bdb5941"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    
  ]
};
