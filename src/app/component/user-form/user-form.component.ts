import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Role } from '../../model/role';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = UserFormComponent.initUser();
  editUser = false;
  role = {} as Role;
  adminChecked = false;
  pmChecked = false;
  userChecked = false;

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  private static initUser() {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      roles: []
    } as User;
  }

  ngOnInit() {
  }

  updateUser() {
    this.userService.putUser(this.user.id, this.user)
      .subscribe(
        response => {
          console.log(response);
          this.toastr.success('User updated success.');
        },
        error => {
          console.log('Error put: ' + error);
        }
      );
  }

  saveUser() {
    delete this.user.id;

    if (this.userChecked) {
      this.addRole('ROLE_USER');
    }

    if (this.pmChecked) {
      this.addRole('ROLE_PM');
    }

    if (this.adminChecked) {
      this.addRole('ROLE_ADMIN');
    }

    this.userService.postUser(this.user)
      .subscribe(
        () => {
          this.router.navigate(['/users']);
          this.toastr.success('User commited successfully.');
        },
        error => {
          console.log(JSON.stringify(error));
        }
      );
    this.user = UserFormComponent.initUser();
    this.userChecked = false;
    this.pmChecked = false;
    this.adminChecked = false;
  }

  private addRole(role: string) {
    this.role.name = role;
    this.user.roles.push(this.role);
    this.role = { } as Role;
  }
}
