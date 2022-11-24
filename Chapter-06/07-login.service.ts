import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  login(user: User) {
    return this.http.post('/api/user/login', {
      username : user.getUserName(),
      password : user.getPassword()
    });
  }

  logout() {}
}
