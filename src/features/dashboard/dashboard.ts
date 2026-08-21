import { Component, inject } from '@angular/core';
import { Authentication } from '../../services/authentication';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  service = inject(Authentication)

  router = inject(Router)

  username = localStorage.getItem('username');

  logOut() {
    this.service.clearToken();
    this.router.navigate(['/login'])
  }
}
