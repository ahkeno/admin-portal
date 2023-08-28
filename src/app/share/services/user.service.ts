import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
    providedIn: 'root'
  })
export class UserService {
    users: User[] = [];

    addUser(user:any) {
        this.users.push(user);
        console.log("Add new user", this.users);
    }

    getUser(){
        return this.users;
    }
 }