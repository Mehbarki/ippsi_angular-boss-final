import { Component, OnInit } from '@angular/core';
import { Arme } from 'src/app/core/models/arme';
import { ArmeService } from 'src/app/shared/services/arme.service';

@Component({
  selector: 'app-liste-arme',
  templateUrl: './liste-arme.component.html',
  styleUrls: ['./liste-arme.component.css']
})
export class ListeArmeComponent implements OnInit {
  armes: Arme[];

  constructor(private _armeService: ArmeService) { }

  ngOnInit(): void {
    const uneObservable = this._armeService.getAll();
    uneObservable.subscribe(lesArmes => this.armes = lesArmes);
  }
}
