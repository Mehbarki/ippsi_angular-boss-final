import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './shared/components/menu-principal/menu-principal.component';
import { ChoixArmePrincipaleComponent } from './features/weapons/choix-arme-principale/choix-arme-principale.component';
import { PreparerPlayerComponent } from './features/players/preparer-player/preparer-player.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjouterArmeComponent } from './features/weapons/ajouter-arme/ajouter-arme.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './features/global/home/home.component';
import { ListArmesComponent } from './features/weapons/list-armes/list-armes.component';

import { NouvellePartieComponent } from './features/global/nouvelle-partie/nouvelle-partie.component';
import { EndGameComponent } from './features/partie/end-game/end-game.component';
import { NewGameComponent } from './features/partie/new-game/new-game.component';

import { ConnexionComponent } from './shared/components/connexion/connexion.component';
import { UserService } from './shared/services/user.service';
import { DeconnexionComponent } from './shared/components/deconnexion/deconnexion.component';
import { ListPlayerComponent } from './features/players/preparer-player/list-player/list-player.component';

import { StatistiquePartieComponent } from './features/global/statistique-partie/statistique-partie.component';
import { ListeDesPartiesComponent } from './features/global/liste-des-parties/liste-des-parties.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ChoixArmePrincipaleComponent,
    PreparerPlayerComponent,
    AjouterArmeComponent,
    PageNotFoundComponent,
    HomeComponent,
    ListArmesComponent,
    NouvellePartieComponent,
    EndGameComponent,
    NewGameComponent,
    ConnexionComponent,
    DeconnexionComponent,
    ListPlayerComponent,
    ListeDesPartiesComponent,
    StatistiquePartieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService], // pour les services sans injectable à root
  bootstrap: [AppComponent]
})
export class AppModule { }