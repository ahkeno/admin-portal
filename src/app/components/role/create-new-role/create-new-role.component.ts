import { Component } from '@angular/core';

@Component({
  selector: 'app-create-new-role',
  templateUrl: './create-new-role.component.html',
  styleUrls: ['./create-new-role.component.scss']
})
export class CreateNewRoleComponent {
  buttonNewState: boolean = true;
  rolename: string = "";

  roleNameAdd(name: any){
    // button disable/ enable by input event
    if (name.target.value !== ''){
      this.buttonNewState = false;
    } else{
      this.buttonNewState = true;
    }
  }
  
}
