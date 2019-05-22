import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  private roles: string[];
  private authority: string;

  constructor(
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit() {
    this.getToken();
  }

  getToken() {
    if (this.tokenStorageService.getToken()) {
      this.roles = this.tokenStorageService.getAuthorities();
      this.roles.every(
        role => {
          if (role === 'ROLE_ADMIN') {
            this.authority = 'admin';
            return false;
          } else if (role === 'ROLE_PM') {
            this.authority = 'pm';
            return false;
          } else {
            this.authority = 'user';
            return true;
          }
        }
      );
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
