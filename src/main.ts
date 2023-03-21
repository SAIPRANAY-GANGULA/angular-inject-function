import { enableProdMode, importProvidersFrom, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { RouterModule } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

import { Routes } from '@angular/router';
import { LoginService } from './app/login.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/app.component').then((m) => m.AppComponent),
    // we need to create guards in separate files if logic is simple, just inject service to check
    canActivate: [() => inject(LoginService).isLoggedIn()],
  },
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch((err) => console.error(err));
