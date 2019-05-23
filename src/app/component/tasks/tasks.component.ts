import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../service/task.service';
import { Task } from 'src/app/model/task';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Observable<Task[]>;

  constructor(
    private taskService: TaskService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.getTasks();
    } else {
      this.router.navigate(['login']);
    }
  }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(
      () => this.getTasks(),
      error => console.log(error)
    );
  }
}
