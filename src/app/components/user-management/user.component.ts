import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  showCreateNewUser: boolean = false;
  showUserList : boolean = true;
  breadcrumbsList: any = [
    {
    "name": "User",
    "link": ""
    }
]

  createNewUserClick(){
    this.showCreateNewUser = true;
    this.showUserList = false;
  }
  newUserBackClick(){
    this.showCreateNewUser = false;
    this.showUserList = true;
  }
  

}
