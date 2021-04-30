import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partie } from 'src/app/core/models/partie';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Partie[]> {
    return this.httpClient.get<Partie[]>(environment.apis.parties.url);
  }
}
