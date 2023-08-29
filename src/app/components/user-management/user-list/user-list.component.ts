import { Component,ViewChild, } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { UserService } from 'src/app/share/services/user.service';
import { User } from 'src/app/share/models/user';
import { UserListTableHeader } from 'src/assets/customs/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  
})

export class UserListComponent {

  displayedColumns: string[] = UserListTableHeader;
  dataSource = this.service.mock_data;
  users : any[];
  @ViewChild(MatTable) table: MatTable<User>;
  constructor(public service: UserService){

  }
  ngOnInit() {
   
  }
}
