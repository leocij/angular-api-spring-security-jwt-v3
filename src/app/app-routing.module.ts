import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './component/users/users.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskFormComponent } from './component/task-form/task-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: UserFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/add', component: TaskFormComponent },

  {
    path: 'signup',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
