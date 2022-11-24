import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public auth: AuthService ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}