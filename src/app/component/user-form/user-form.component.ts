import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { Role } from '../../model/role';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = UserFormComponent.initUser();
  role = {} as Role;
  adminChecked = false;
  pmChecked = false;
  userChecked = true;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private tokenStorageService: TokenStorageService
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
    if (!this.tokenStorageService.getToken()) {
      this.router.navigate(['login']);
    }
  }

  private addRole(role: string) {
    this.role.name = role;
    this.user.roles.push(this.role);
    this.role = { } as Role;
  }

  onSubmit() {
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
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          this.user = UserFormComponent.initUser();
          this.userChecked = false;
          this.pmChecked = false;
          this.adminChecked = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error;
          this.isSignUpFailed = true;
        }
      );
  }
}
