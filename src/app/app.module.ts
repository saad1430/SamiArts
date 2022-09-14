// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
// Moudule Imports
import { AppRoutingModule } from './app-routing.module';
// Components Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/error/not-found/not-found.component';
// Services Imports
import {GeneralService} from './Services/general.service';
import { ContactComponent } from './Components/contact/contact.component';
import { TwitchComponent } from './Components/twitch/twitch.component';
import { AnimatedWallpaperComponent } from './Components/animated-wallpaper/animated-wallpaper.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    TwitchComponent,
    AnimatedWallpaperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
