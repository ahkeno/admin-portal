import { Component,ViewChild,Output, EventEmitter } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import { UserService } from 'src/app/share/services/user.service';
import { User } from 'src/app/share/modeles/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  
})

export class UserListComponent {
  displayedColumns: string[] = [ 'name', 'email', 'role'];
  dataSource = this.service.mock_data;
  users : any[];
  @ViewChild(MatTable) table: MatTable<User>;
  @Output() onCreate = new EventEmitter<string>();
  constructor(public service: UserService){

  }
  ngOnInit() {
   
  }
 
  addNewUser() {
    // Create New User
    this.onCreate.emit();
  }


}
