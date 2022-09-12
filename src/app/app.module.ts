// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Moudule Imports
import { AppRoutingModule } from './app-routing.module';
// Components Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SteamComponent } from './Components/steam/steam.component';
import { NotFoundComponent } from './Components/error/not-found/not-found.component';
// Services Imports
import {GeneralService} from './Services/general.service';
import { ContactComponent } from './Components/contact/contact.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SteamComponent,
    NotFoundComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
