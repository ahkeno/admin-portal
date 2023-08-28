import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modeles/user';


@Injectable({
    providedIn: 'root'
  })
export class UserService {
    users: User[] = [];
    mock_data: User[] = [
        { name: 'Smith', email: "Smith@test.com", role:'editor'},
        { name: 'John', email: "John@test.com", role:'editor'},
        { name: 'Adam', email: "Adam@test.com", role:'editor'},
      ];
    addUser(user:any) {
      const item: User = {
        
        name: user.name,
        email: user.email,
        role: user.role
      }
      this.mock_data.unshift(item);
        console.log("Add new user", this.users);
    }

 }