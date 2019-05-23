import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTasks() {
    return this.httpClient.get<Task[]>(`${ environment.apiUrl }/tasks`);
  }

  deleteTask(id: string) {
    return this.httpClient.delete(`${ environment.apiUrl }/tasks/${ id }`);
  }

  postTask(task: Task) {
    return this.httpClient.post(`${ environment.apiUrl }/tasks`, task);
  }
}
