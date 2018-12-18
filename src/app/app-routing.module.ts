import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattleComponent } from './battle/battle.component';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'battle', component: BattleComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'team', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
