import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../models/group';


@Injectable({
    providedIn: 'root'
  })
export class GroupService {
    users: Group[] = [];
    mock_data: Group[] = [
        { id: '684E9QT',
         name: 'group1', 
         group_name_en: "group1 en", 
         group_name_mm:'group1 mm',
         phone: '131231',
        created_date: '12 Feb 2023 12:30 PM',
        status: 'active',
        num_restuarant: 23},
        {id: '68129QT',
         name: 'group2',
         group_name_en: "group2 en", 
         group_name_mm:'group2 mm',
         phone: '5756',
        created_date: '12 Feb 2023 12:30 PM',
        status: 'active',
        num_restuarant: 22},
      ];
    addUser(group:any) {
      const item: Group = {
         id: '684E9QT',// TO DO in payload for service dont need id
         name: group.name, 
         group_name_en: group.group_name_en, 
         group_name_mm:group.group_name_mm,
         phone: group.phone,
        created_date: '12 Feb 2023 12:30 PM', //TO DO : change to today date format
        status: group.status,
        num_restuarant: group.num_restuarant//TO DO : link with restuarant create undergroup
      }
      this.mock_data.unshift(item);
        console.log("Add new user", this.users);
    }

 }