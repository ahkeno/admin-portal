import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  showCreateNewUser: boolean = false;
  showUserList : boolean = true;

  createNewUserClick(){
    this.showCreateNewUser = !this.showCreateNewUser;
    this.showUserList = !this.showUserList;
  }

}
