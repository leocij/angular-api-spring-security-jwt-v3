import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.apiUrl + '/user';
  private pmUrl = environment.apiUrl + '/pm';
  private adminUrl = environment.apiUrl + '/admin';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserBoard(): Observable<string> {
    return this.httpClient.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.httpClient.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.httpClient.get(this.adminUrl, { responseType: 'text' });
  }


}
