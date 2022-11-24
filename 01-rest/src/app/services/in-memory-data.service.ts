import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, first_name: 'Eve', last_name: 'Holt', avatar: 'assets/img/user.jpg' },
      { id: 12, first_name: 'Charles', last_name: 'Morris', avatar: 'assets/img/user.jpg' },
      { id: 13, first_name: 'Tracy', last_name: 'Ramos', avatar: 'assets/img/user.jpg' },
      { id: 14, first_name: 'Eve', last_name: 'Holt', avatar: 'assets/img/user.jpg' },
      { id: 15, first_name: 'Charles', last_name: 'Morris', avatar: 'assets/img/user.jpg' },
      { id: 16, first_name: 'Tracy', last_name: 'Ramos', avatar: 'assets/img/user.jpg' },
      { id: 17, first_name: 'Eve', last_name: 'Holt', avatar: 'assets/img/user.jpg' },
      { id: 18, first_name: 'Charles', last_name: 'Morris', avatar: 'assets/img/user.jpg' },
      { id: 19, first_name: 'Tracy', last_name: 'Ramos', avatar: 'assets/img/user.jpg' },
      { id: 20, first_name: 'Eve', last_name: 'Holt', avatar: 'assets/img/user.jpg' }
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
