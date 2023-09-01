import { Component, Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/share/services/user.service';
import { FormBuilder } from '@angular/forms';
import { Router} from "@angular/router";
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { RoleService } from 'src/app/share/services/role.service';
import { ToastService } from 'src/app/share/services/toast.service';


@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent {
  @Output() onBack = new EventEmitter<string>();
  userPofileForm : FormGroup;
  
  
  get email() { return this.userPofileForm.get('email'); }
  get name () {return this.userPofileForm.get('name');}
  get password () {return this.userPofileForm.get('password');}
  get get () {return this.userPofileForm.get('role');}

  constructor(
    private service: UserService,
    private roleService: RoleService,
    private toastService: ToastService,
    private router: Router
  ){}
  roles = this.roleService.mock_data; // TO DO: have to call with API load Role List
  ngOnInit() {
    this.userPofileForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl("",  [
            Validators.required,
            Validators.email
        ],
        
    ),
      password: new FormControl(''),
      role: new FormControl('')
    });
  }


  addNewUser(form: FormGroup) {
    this.service.addUser(form.value);
    // TO DO: show notification for successful add form
    this.toastService.add({
      type: 'success',
      title: 'User added',
      message: '',
    });
    this.router.navigate(['/user/list']);
  }
  onClickBackUser(){
    this.onBack.emit();
  }

}
