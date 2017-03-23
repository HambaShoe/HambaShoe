import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header.component';
import { NavComponent } from '../app/components/nav.component';
import { HomeComponent } from '../app/components/home.component';


@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])],
  declarations: [AppComponent, HeaderComponent, NavComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
