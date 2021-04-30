import { Component, OnInit } from '@angular/core';
import { Partie } from 'src/app/core/models/partie';
import { PartieService } from 'src/app/shared/services/partie.service';

@Component({
  selector: 'app-liste-des-parties',
  templateUrl: './liste-des-parties.component.html',
  styleUrls: ['./liste-des-parties.component.css']
})
export class ListeDesPartiesComponent implements OnInit {
  lesParties: Partie[] = [];

  constructor(private partieService: PartieService) { }

  ngOnInit(): void {
    const observable = this.partieService.getAll();
    observable.subscribe(parties => {
      this.lesParties = parties;
    });
  }

}
