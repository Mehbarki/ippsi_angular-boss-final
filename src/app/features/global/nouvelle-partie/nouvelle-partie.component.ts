import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Partie } from 'src/app/core/models/partie';
import { Player } from 'src/app/core/models/player';

@Component({
  selector: 'app-nouvelle-partie',
  templateUrl: './nouvelle-partie.component.html',
  styleUrls: ['./nouvelle-partie.component.css']
})
export class NouvellePartieComponent implements OnInit {
  partie: Partie = new Partie();
  player: Player = new Player();
  gagnant: string;
  acceptedGagnantValue: string[] = [
    'jedi',
    'droide'
  ];
  aGagner: boolean;
  aJouer: boolean;
  texteBouton: string = 'Lancer la partie';
  afficherImageJedi = false;
  afficherImageDroide = false;

  constructor() { 
    this.player.credit = 100;
  }

  ngOnInit(): void {
  }

  choisirGagnant() {
    let test = Math.floor(Math.random() * 2) + 1;
    this.gagnant = (test == 1) ? 'jedi' : 'droide';
    this.afficherImageJedi = false;
    this.afficherImageDroide = false;
    if(this.gagnant == 'jedi') {
      this.afficherImageJedi = true;
    } else {
      this.afficherImageDroide = true;
    }
  }

  onSubmit(f: NgForm) {
    if(!this.acceptedGagnantValue.includes(f.value.gagnant)){
      alert('Veuillez saisir jedi ou droide pour le gagnant');
      return false;
    }
    if(f.valid) {
      this.choisirGagnant();
      if(this.gagnant == f.value.gagnant) {
        this.player.credit += 15;
        this.aGagner = true;
      } else {
        this.player.credit -= f.value.mise;
        this.aGagner = false;
      }
      this.aJouer = true;
      this.texteBouton = "Continuer";
    } else {
      alert('Veuillez saisir le gagnant et la mise');
    }
  }
}
