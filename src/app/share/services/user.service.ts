import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
    providedIn: 'root'
  })
export class UserService {
    users: User[] = [];
    mock_data: User[] = [
        { name: 'Smith', email: "Smith@test.com", role:'Editor', role_type: "editor"},
        { name: 'John', email: "John@test.com", role:'Editor', role_type: "editor"},
        { name: 'Adam', email: "Adam@test.com", role:'Editor', role_type: "editor"},
      ];
    addUser(user:any) {
      // TO DO: this payload should generate for API payload
      const item: User = {
        name: user.name,
        email: user.email,
        role:  user.role.name,
        role_type: user.role.role_type
      }
      this.mock_data.unshift(item);
        console.log("Add new user", this.users);
    }

 }