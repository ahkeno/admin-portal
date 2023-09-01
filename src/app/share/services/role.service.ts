import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role';


@Injectable({
    providedIn: 'root'
  })
export class RoleService {
    roles: Role[] = [];
    mock_data: Role[] = [
        { id: 1,name: 'Super Admin', role_type: "super_admin", status: 'active'},
        { id: 2,name: 'Admin', role_type: "admin",status: 'active'},
        { id: 3,name: 'Editor', role_type: "editor",status: 'active'},
      ];
    addRole(data_role:any) {
      const item: Role = {
        id: 1,
        name: data_role.name,
        status: data_role.status,
        role_type: data_role.role_type,
      }
      this.mock_data.unshift(item);
    }

 }