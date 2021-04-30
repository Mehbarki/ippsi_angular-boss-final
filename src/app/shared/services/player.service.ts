import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/core/models/player';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(environment.apis.players.url);
  }

  getOne(idArme: number): Observable<Player> {
    return this.httpClient.get<Player>(environment.apis.players.url + '/' + idArme);
  }

  saveOne(arme: Player): Observable<Player> {
    return this.httpClient.post<Player>(environment.apis.players.url, arme);
  }
}