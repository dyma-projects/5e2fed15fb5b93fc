import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() { }

  public addUser(user:string): void {
    if (user != null) {
      const currentUsers = [... this.users.value, user];
      this.users.next(currentUsers);
    }
  }
}
