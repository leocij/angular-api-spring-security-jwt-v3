import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private RESOURCE_USERS = `${ environment.apiUrl }/users`;

  getUsers() {
    return this.httpClient.get<User[]>(this.RESOURCE_USERS)
      .pipe();
  }

  postUser(user: User) {
    return this.httpClient.post(this.RESOURCE_USERS, user);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${ this.RESOURCE_USERS }/${ id }`);
  }
}
