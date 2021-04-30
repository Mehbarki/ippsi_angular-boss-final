import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/core/models/player';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {
  players: Player[] = [];  

  constructor(private playerService: PlayerService ) { }

  ngOnInit(): void {
    const observable = this.playerService.getAll();
    observable.subscribe(players => {
      this.players = players;
    });
  }

}
