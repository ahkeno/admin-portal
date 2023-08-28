import { Component } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  showRoleList: boolean = true;
  showCreateNew: boolean = false;

  createNewClick(){
    this.showRoleList = false;
    this.showCreateNew = true;
  }

}
