import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./features/global/home/home.component";
import { NouvellePartieComponent } from "./features/global/nouvelle-partie/nouvelle-partie.component";
import { EndGameComponent } from "./features/partie/end-game/end-game.component";
import { NewGameComponent } from "./features/partie/new-game/new-game.component";
import { AjouterArmeComponent } from "./features/weapons/ajouter-arme/ajouter-arme.component";
import { ListArmesComponent } from "./features/weapons/list-armes/list-armes.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  {
    path: 'new_game',
    component: NewGameComponent
  },
  {
    path: 'end_game',
    component: EndGameComponent
  },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
