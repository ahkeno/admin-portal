import { Component,Output,ViewChild,EventEmitter } from '@angular/core';
import { RoleListHeader } from 'src/assets/customs/user';
import { RoleService } from 'src/app/share/services/role.service';
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent {
  displayedColumns = RoleListHeader;
  dataSource = this.service.mock_data; // TO DO: have to call with API load Group List
  constructor(public service: RoleService){

  }
  
}
