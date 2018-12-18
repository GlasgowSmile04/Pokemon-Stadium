import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { TeamComponent } from './team/team.component';
import { BattleComponent } from './battle/battle.component';
import { NgxPopper } from 'angular-popper';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PokedexComponent,
    TeamComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
