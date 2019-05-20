import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    return this.httpClient.get<User[]>(`${ environment.apiUrl }/users`)
      .pipe(
        tap(console.log)
      );
  }

  putUser(id: string, user: User) {
    return this.httpClient.put(`${ environment.apiUrl }/users/${ id }`, user);
  }

  postUser(user: User) {
    return this.httpClient.post(`${ environment.apiUrl }/users`, user);
  }
}
