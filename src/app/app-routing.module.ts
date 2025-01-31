import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./features/global/home/home.component";

import { NouvellePartieComponent } from "./features/global/nouvelle-partie/nouvelle-partie.component";
import { EndGameComponent } from "./features/partie/end-game/end-game.component";
import { NewGameComponent } from "./features/partie/new-game/new-game.component";
import { ListPlayerComponent } from "./features/players/preparer-player/list-player/list-player.component";

import { PreparerPlayerComponent } from "./features/players/preparer-player/preparer-player.component";

import { AjouterArmeComponent } from "./features/weapons/ajouter-arme/ajouter-arme.component";
import { ListArmesComponent } from "./features/weapons/list-armes/list-armes.component";
import { ConnexionComponent } from "./shared/components/connexion/connexion.component";
import { DeconnexionComponent } from "./shared/components/deconnexion/deconnexion.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

import { StatistiquePartieComponent } from "./features/global/statistique-partie/statistique-partie.component";
import { ListeDesPartiesComponent } from "./features/global/liste-des-parties/liste-des-parties.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'liste-partie',
    component: ListeDesPartiesComponent
  },
  {
    path: 'nouvelle-arme',
    component: AjouterArmeComponent
  },
  {
    path: 'les-armes',
    component: ListArmesComponent
  },
  {
    path: 'nouvelle-partie',
    component: NouvellePartieComponent
  },
  { path: 'deconnexion', component: DeconnexionComponent},
  {
    path: 'new_game',
    component: NewGameComponent
  },
  {
    path: 'end_game',
    component: EndGameComponent
  },
  { path: 'player', component: PreparerPlayerComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'list-players', component: ListPlayerComponent},
  {
    path: 'statistiques',
    component: StatistiquePartieComponent
  },    
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }