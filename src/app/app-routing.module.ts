import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AnimatedWallpaperComponent } from './Components/animated-wallpaper/animated-wallpaper.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/error/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { TwitchComponent } from './Components/twitch/twitch.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'twitch',component:TwitchComponent},
  {path:'wallpaper',component:AnimatedWallpaperComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
