import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.apis.users.url);
  }

  getOne(idUser: number): Observable<User> {
    return this.httpClient.get<User>(environment.apis.users.url + '/' + idUser);
  }

  saveOne(user: User): Observable<User> {
    return this.httpClient.post<User>(environment.apis.users.url, user);
  }

  authenticateAPI(username: string, password: string): Observable<User> {
    return this.httpClient.post<User>(environment.apis.authentication.url, {username: username, password: password});
  }

}
