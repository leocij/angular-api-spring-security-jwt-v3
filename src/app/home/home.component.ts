import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.info = {
        token: this.tokenStorageService.getToken(),
        username: this.tokenStorageService.getUsername(),
        authorities: this.tokenStorageService.getAuthorities()
      };
    } else {
      this.router.navigate(['login']);
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
