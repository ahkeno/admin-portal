import { Component,ViewChild, } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { GroupService } from 'src/app/share/services/group.service';
import { User } from 'src/app/share/models/user';
import { GroupListTableHeader } from 'src/assets/customs/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent {
  displayedColumns: string[] = GroupListTableHeader;
  dataSource = this.service.mock_data;
  users : any[];
 
  constructor(public service: GroupService){

  }
  ngOnInit() {
   
  }
  
}
