import { Injectable } from '@angular/core';

export interface User{
  name: string;
  age: number;
  company: string;
  dateOfJoining: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public users: User[] = [];

  addUser(user: User){
    this.users.push(user);
  }

  getUsers(): User[]{
    return this.users;
  }

  getLatestUser(): User | null {
    return this.users.length > 0 ? this.users[this.users.length -1] : null;
  }

}
