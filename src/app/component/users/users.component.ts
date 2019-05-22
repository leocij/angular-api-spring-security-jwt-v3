import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: Observable<User[]>;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.getUsers();
    } else {
      this.router.navigate(['login']);
    }
  }

  private getUsers() {
    this.users = this.userService.getUsers();
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id)
      .subscribe(
        () => this.getUsers(),
        error1 => console.log(error1)
      );
  }
}
