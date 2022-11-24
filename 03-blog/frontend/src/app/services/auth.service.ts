import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post('/api/user/login', {
      username : user.getUserName(),
      password : user.getPassword()
    }); 
  }
 
  logout() {
    localStorage.removeItem('currentUser');
  }

  setCurrentUser(user: User) {
    const loggedInUser = {
      id: user.getId(),
      username: user.getUserName()
    };
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
  } 
 
  isAuthenticated() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
 
    if (currentUser) {
      return true;
    }
 
    return false;
  }
}
