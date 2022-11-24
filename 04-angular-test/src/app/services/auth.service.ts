import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {}

  logout() {}

  isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      return true;
    }

    return false;
  }

}
