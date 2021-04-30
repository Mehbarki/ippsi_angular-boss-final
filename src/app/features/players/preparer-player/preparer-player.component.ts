import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/core/models/player';

@Component({
  selector: 'app-preparer-player',
  templateUrl: './preparer-player.component.html',
  styleUrls: ['./preparer-player.component.css']
})
export class PreparerPlayerComponent implements OnInit {
  monPlayer: Player = new Player();
  @Output() generationPlayer: EventEmitter<Player> = new EventEmitter<Player>(false);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickButton() {
    // const player = new Player();
    // player.prenom = 'Aque johny';

    this.generationPlayer.emit(this.monPlayer);
    this.monPlayer = new Player();

    this.router.navigate(['list-players']);
  }
}
