import { Component, OnInit } from '@angular/core';
import { PartieService } from 'src/app/shared/services/partie.service';

@Component({
  selector: 'app-statistique-partie',
  templateUrl: './statistique-partie.component.html',
  styleUrls: ['./statistique-partie.component.css']
})
export class StatistiquePartieComponent implements OnInit {
  moyenneDuree: number = 0;
  moyenneNbTours: number = 0;

  constructor(private partieService: PartieService) { }

  ngOnInit(): void {
    const observable = this.partieService.getAll();
    observable.subscribe(parties => {
      parties.forEach(element => {
        this.moyenneDuree += element['duration'];
        this.moyenneNbTours += element['nbTurns'];
      });
      this.moyenneDuree = this.moyenneDuree / parties.length;
      this.moyenneNbTours = this.moyenneNbTours / parties.length;
    });
  }

}
