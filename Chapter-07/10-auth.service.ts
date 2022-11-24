import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  login(user: User) {
    return this.http.post('/api/user/login', {
      username : user.getUserName(),
      password : user.getPassword()
    });
  }

  setCurrentUser(user: User) {
    localStorage.setItem('currentUser', user.getUserName());
  }

  isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
