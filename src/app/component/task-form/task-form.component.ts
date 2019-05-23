import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Task } from 'src/app/model/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private taskService: TaskService
  ) { }

  task = TaskFormComponent.initTask();
  isSubmitFailed = false;
  errorMessage = '';

  private static initTask() {
    return {
      task: '',
      user: ''
    } as Task;
  }

  ngOnInit() {
    if (!this.tokenStorageService.getToken()) {
      this.router.navigate(['login']);
    }
  }

  onSubmit() {
    delete this.task.id;

    this.task.user = this.tokenStorageService.getUsername();

    this.taskService.postTask(this.task).subscribe(
      () => {
        this.router.navigate(['tasks']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error;
        this.isSubmitFailed = true;
      }
    );
  }
}
